"""Recortes de la home de agencia (prueba-index-v2.html) · 2026-10-02.

NO HAY HOJA DE FONDOS. Anais paso solo el boceto pintado, en nueve tiras
(assets/boceto/index-v2/). Todas las fotos de esta pagina salen de ahi y
son PROVISIONALES: cuando llegue la hoja de fondos se rehace este script y
la pagina no se toca, porque los nombres de archivo se mantienen.

Donde el boceto trae texto o tarjetas pintados encima de la foto (hero,
sectores, equipo, cierre), se borran con inpainting de OpenCV. Debajo de
cada mancha borrada va luego la tarjeta HTML, asi que no se ve; pero si
alguna vez se mueve una tarjeta, aparece la mancha. Es la razon de pedir
los fondos limpios.

Medidas, en pixeles de cada tira:
  02 construimos (1536)  fotos x 42-398 / 407-764 / 773-1135 / 1144-1495
                         filas y 191-417 / 592-814
  03 sectores (1942)     tarjetas x 66-666 / 677-1264 / 1276-1877
                         filas y 222-485 / 495-758
  04 como (1774)         fotos x 48-600 / 620-1156 / 1176-1728, y 292-611
  05 integraciones       foto grande y 0-505 desde x 745; fichas y 515-689
                         x 43-243 / 254-456 / 467-669 / 679-881 / 892-1093 /
                           1104-1306 / 1316-1518 / 1529-1730

Uso:  python docs/fondos-index-v2.py   (desde la raiz del repo)
"""
import cv2
import numpy as np
from PIL import Image

B = 'src/assets/boceto/index-v2/'
A = 'src/assets/'


def carga(nombre):
    return np.asarray(Image.open(B + nombre).convert('RGB'))


def guarda(arr, nombre, q=74, ancho=None):
    im = Image.fromarray(arr)
    if ancho and im.width != ancho:
        im = im.resize((ancho, round(im.height * ancho / im.width)), Image.LANCZOS)
    im.save(A + nombre, 'WEBP', quality=q, method=6)


def mascara_rect(shape, rects, crece=6):
    m = np.zeros(shape[:2], np.uint8)
    for x0, y0, x1, y1 in rects:
        m[max(0, y0 - crece):y1 + crece, max(0, x0 - crece):x1 + crece] = 255
    return m


def mascara_texto(arr, zona, oscuro=True, umbral=38, crece=4):
    """Pixeles de texto dentro de una zona: los que se separan del fondo
    suavizado. oscuro=True busca texto oscuro sobre claro, y al reves."""
    x0, y0, x1, y1 = zona
    gris = cv2.cvtColor(arr, cv2.COLOR_RGB2GRAY).astype(int)
    fondo = cv2.medianBlur(gris.astype(np.uint8), 31).astype(int)
    d = (fondo - gris) if oscuro else (gris - fondo)
    m = np.zeros(gris.shape, np.uint8)
    sub = (d[y0:y1, x0:x1] > umbral).astype(np.uint8) * 255
    m[y0:y1, x0:x1] = sub
    return cv2.dilate(m, np.ones((crece * 2 + 1, crece * 2 + 1), np.uint8))


def borra(arr, mascara, radio=9, desenfoque=16):
    """Inpainting y, encima, un desenfoque fundido solo sobre lo borrado: el
    inpainting a secas deja rayas diagonales en las zonas grandes, y
    desenfocadas se leen como profundidad de campo."""
    r = cv2.inpaint(arr, mascara, radio, cv2.INPAINT_TELEA)
    if not desenfoque:
        return r
    suave = cv2.GaussianBlur(r, (0, 0), desenfoque)
    a = cv2.GaussianBlur(mascara.astype(np.float32) / 255, (0, 0), desenfoque * .8)[..., None]
    a = np.clip(a * 1.6, 0, 1)
    return (r * (1 - a) + suave * a).astype(np.uint8)


def emborrona(arr, rect, sigma=4):
    """Cifras inventadas en pantallas de la foto: reglas de honestidad de
    CLAUDE.md (cero metricas falsas). Se dejan sin leer."""
    x0, y0, x1, y1 = rect
    arr = arr.copy()
    arr[y0:y1, x0:x1] = cv2.GaussianBlur(arr[y0:y1, x0:x1], (0, 0), sigma)
    return arr


# ---------------- 01 · HERO ----------------
# Segunda version (2026-10-04). La primera borraba con inpainting y
# desenfoque, y dejaba manchas grises donde iban las tarjetas del boceto.
# Mientras las tarjetas HTML estaban encima no se veian; al bajarlas para
# despejar la cara del chico quedaron a la vista y Anais vio el hero "muy
# borroso". Ahora:
#  - la zona del pilar se rellena columna a columna (pixel de arriba a pixel
#    de abajo): el pilar sigue siendo una linea vertical limpia;
#  - el resto con un relleno suave que parte de los cuatro bordes del hueco
#    (ecuacion de Laplace, por piramide), fundido en el borde y con grano.
#    En la bruma y el fondo desenfocado se lee como profundidad de campo,
#    no como mancha ni como recuadro.
def rellena_vertical(arr, rect):
    x0, y0, x1, y1 = rect
    arr = arr.astype(np.float32)
    arriba = arr[y0 - 1, x0:x1]
    abajo = arr[y1, x0:x1]
    t = np.linspace(0, 1, y1 - y0, dtype=np.float32)[:, None, None]
    arr[y0:y1, x0:x1] = arriba[None] * (1 - t) + abajo[None] * t
    return arr


def rellena_suave(arr, mascara):
    """Relleno armonico: dentro de la mascara, cada pixel es la media de sus
    vecinos; se resuelve de grueso a fino para que converja rapido."""
    img = arr.astype(np.float32)
    m = mascara > 0
    niveles = []
    a, mm = img, m
    while min(a.shape[:2]) > 40:
        niveles.append((a, mm))
        a = cv2.resize(a, (a.shape[1] // 2, a.shape[0] // 2), interpolation=cv2.INTER_AREA)
        mm = cv2.resize(mm.astype(np.uint8), (mm.shape[1] // 2, mm.shape[0] // 2), interpolation=cv2.INTER_NEAREST) > 0
    sol = None
    for a, mm in reversed(niveles):
        a = a.copy()
        if sol is not None:
            sube = cv2.resize(sol, (a.shape[1], a.shape[0]), interpolation=cv2.INTER_LINEAR)
            a[mm] = sube[mm]
        for _ in range(120):
            media = cv2.blur(a, (3, 3))
            a[mm] = media[mm]
        sol = a
    return sol


def funde(base, relleno, mascara, borde=14, grano=1.4, semilla=7):
    a = cv2.GaussianBlur((mascara > 0).astype(np.float32), (0, 0), borde)[..., None]
    a = np.clip(a * 1.25, 0, 1) * ((mascara > 0)[..., None] * .0 + 1)
    rng = np.random.default_rng(semilla)
    r = relleno + rng.normal(0, grano, relleno.shape) * (mascara > 0)[..., None]
    out = base.astype(np.float32) * (1 - a) + r * a
    return np.clip(out, 0, 255).astype(np.uint8)


h = carga('01-hero.webp')
# Rellenos verticales: detras de las viñetas habia lineas verticales reales
# (el pilar de la ventana a la izquierda; el edificio, el marco y la planta a
# la derecha). Un poco de suavizado horizontal quita las rayas de cortina.
for r in [(828, 168, 1144, 372),         # "Nuevo cliente" y "Cita confirmada"
          (1442, 270, 1748, 454)]:       # "Lead cualificado" y "Proceso automatizado"
    hv = rellena_vertical(h, r)
    hv = cv2.blur(hv, (7, 1))
    h = funde(h, hv, mascara_rect(h.shape, [r], crece=0), borde=4)
m = mascara_rect(h.shape, [
    (95, 12, 1090, 72),       # logotipo y menu
    (1458, 10, 1688, 72),     # boton de la barra
    (95, 168, 792, 614),      # titular, entradilla y botones: bruma
], crece=4)
h = funde(h, rellena_suave(h, m), m, borde=10)
guarda(h, 'home-hero.webp', q=80)
# movil: ventana vertical sobre el hombre y la mesa
guarda(h[:, 1000:1460], 'home-hero-movil.webp', q=72)

# ---------------- 02 · LO QUE CONSTRUIMOS ----------------
c = carga('02-construimos.webp')
c = emborrona(c, (840, 628, 1105, 712), 3.5)   # "Nuevos leads 1.248 +12 %"
cols = [(42, 398), (407, 764), (773, 1135), (1144, 1495)]
filas = [(191, 417), (592, 814)]
n = 1
for y0, y1 in filas:
    for x0, x1 in cols:
        # 4 px hacia dentro: las esquinas redondeadas traen fondo crema
        guarda(c[y0 + 4:y1, x0 + 4:x1 - 4], 'home-c%d.webp' % n, q=76)
        n += 1

# ---------------- 03 · SECTORES ----------------
s = carga('03-sectores.webp')
cols = [(66, 666), (677, 1264), (1276, 1877)]
filas = [(222, 485), (495, 758)]
nombres = ['inmobiliarias', 'esteticas', 'dental', 'concesionarios', 'ecommerce', 'coaching']
n = 0
for y0, y1 in filas:
    for x0, x1 in cols:
        t = s[y0 + 4:y1 - 4, x0 + 4:x1 - 4].copy()
        # titulo, descripcion y circulo con flecha, todos en blanco abajo
        mm = mascara_texto(t, (20, 135, t.shape[1] - 20, t.shape[0] - 10), oscuro=False, umbral=45, crece=5)
        mm |= mascara_rect(t.shape, [(t.shape[1] - 98, 175, t.shape[1] - 28, 245)], crece=4)
        t = borra(t, mm, 11, 8)
        guarda(t, 'home-s-%s.webp' % nombres[n], q=74)
        n += 1

# ---------------- 04 · COMO TRABAJAMOS ----------------
w = carga('04-como.webp')
# los dos circulos con flecha y su linea montan sobre el borde de las fotos
mm = mascara_rect(w.shape, [(580, 462, 692, 526), (1135, 462, 1245, 526)], crece=3)
w = borra(w, mm, 7, 6)
w = emborrona(w, (1338, 393, 1616, 460), 3.5)   # "+248 / 89 / 12" con porcentajes
for i, (x0, x1) in enumerate([(48, 600), (620, 1156), (1176, 1728)], 1):
    guarda(w[296:609, x0 + 4:x1 - 4], 'home-como%d.webp' % i, q=74)

# ---------------- 05 · INTEGRACIONES ----------------
g = carga('05-integraciones.webp')
guarda(g[0:505, 745:1774], 'home-integ.webp', q=72)
guarda(g[0:505, 1000:1600], 'home-integ-movil.webp', q=72)
cols = [(43, 243), (254, 456), (467, 669), (679, 881), (892, 1093), (1104, 1306), (1316, 1518), (1529, 1730)]
for i, (x0, x1) in enumerate(cols, 1):
    guarda(g[519:689, x0 + 4:x1 - 4], 'home-i%d.webp' % i, q=76)

# ---------------- 07-09 · EQUIPO ----------------
e = carga('07-equipo.webp')
m = mascara_rect(e.shape, [
    (552, 95, 848, 495),      # retrato 1
    (862, 95, 1156, 495),     # retrato 2
    (1170, 72, 1714, 506),    # panel de garantia
    (85, 88, 500, 440),       # titular y texto
], crece=8)
e = borra(e, m, 15, 26)
guarda(e, 'home-equipo.webp', q=70)
guarda(e[:, 0:540], 'home-equipo-movil.webp', q=70)

# ---------------- 10 · CIERRE ----------------
# Segunda version (2026-10-03). La primera borraba con rectangulos el panel
# entero y el bloque de texto, y se llevaba las ventanas con la ciudad y la
# copa de la planta: la seccion salia como una mancha y no se parecia al
# boceto. Ahora se borran SOLO los pixeles de letra e icono; el cristal oscuro
# del panel se queda en la foto y el panel HTML va encima, en su sitio exacto.
k = carga('10-cta.webp')
m = mascara_rect(k.shape, [(44, 125, 177, 160)], crece=3)          # boton blanco
m |= mascara_texto(k, (40, 18, 470, 115), oscuro=False, umbral=34, crece=2)   # cintillo, titular, texto
m |= mascara_texto(k, (186, 126, 330, 158), oscuro=False, umbral=34, crece=2) # "15 minutos"
m |= mascara_texto(k, (528, 56, 724, 156), oscuro=False, umbral=30, crece=2)  # filas del panel
k = borra(k, m, 5, 2)
guarda(k, 'home-cierre.webp', q=72, ancho=1522)
guarda(k[:, 180:480], 'home-cierre-movil.webp', q=72, ancho=600)

print('ok')
