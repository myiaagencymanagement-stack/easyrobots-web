"""Recorta y limpia los fondos de la landing de clinicas v2.

Boceto: src/assets/boceto/clinicas-v2/ (seis tiras, 13 secciones).

NO HAY HOJA DE FONDOS. Anais paso solo el boceto pintado y se decidio
arrancar sin ella (2026-10-02). Por eso aqui no se recorta: se BORRA lo
pintado encima de cada foto y despues se recorta. Dos tipos de borrado:

- `texto`: zonas con letras sueltas sobre foto. Se detectan los pixeles que
  se separan de su entorno (contraste local) y se rellenan con inpaint de
  OpenCV a resolucion completa. Sobre fondo oscuro queda casi limpio.
- `bloque`: tarjetas, paneles, botones, burbujas. Se borra el rectangulo
  entero. Un inpaint de un hueco grande deja estelas, asi que se hace a 1/4
  de resolucion y se sube: queda una mancha suave. Es aceptable porque
  encima va la tarjeta de verdad, mas o menos en el mismo sitio.

LO BUENO ES PEDIR LA HOJA DE FONDOS: en cuanto llegue, este script se
sustituye por un recorte limpio (ver docs/fondos-dental-v2.py) y la pagina no
cambia, porque los nombres de archivo son los mismos.

Los recortes `-movil` son ventanas verticales 3:4 sobre cada tira (fallo 10 de
CLAUDE.md).

Requiere opencv-python-headless (pip install opencv-python-headless).
Uso: python docs/fondos-clinicas-v2.py   (desde la raiz del repo)
"""
import cv2
import numpy as np
from PIL import Image, ImageFilter

B = 'src/assets/boceto/clinicas-v2/'
OUT = 'src/assets/'
T1 = B + '01-hero-problema-reactivacion.webp'
T2 = B + '02-caos-funciona-calculadora.webp'
T3 = B + '03-caso-real.webp'
T4 = B + '04-piezas-equipo-limites.webp'
T5 = B + '05-garantia-cta.webp'


def cargar(ruta):
    return cv2.cvtColor(np.asarray(Image.open(ruta).convert('RGB')), cv2.COLOR_RGB2BGR)


def borrar_texto(img, cajas):
    gris = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY).astype(np.int16)
    fondo = cv2.medianBlur(cv2.cvtColor(img, cv2.COLOR_BGR2GRAY), 21).astype(np.int16)
    dif = np.abs(gris - fondo) > 16
    m = np.zeros(gris.shape, np.uint8)
    for x0, y0, x1, y1 in cajas:
        m[y0:y1, x0:x1] = dif[y0:y1, x0:x1] * 255
    m = cv2.dilate(m, np.ones((5, 5), np.uint8), iterations=2)
    return cv2.inpaint(img, m, 6, cv2.INPAINT_TELEA)


def borrar_bloques(img, cajas):
    if not cajas:
        return img
    h, w = img.shape[:2]
    m = np.zeros((h, w), np.uint8)
    for x0, y0, x1, y1 in cajas:
        m[max(0, y0 - 12):y1 + 12, max(0, x0 - 12):x1 + 12] = 255
    f = 4
    peq = cv2.resize(img, (w // f, h // f), interpolation=cv2.INTER_AREA)
    mp = cv2.resize(m, (w // f, h // f), interpolation=cv2.INTER_NEAREST)
    mp = cv2.dilate(mp, np.ones((3, 3), np.uint8))
    rell = cv2.inpaint(peq, mp, 9, cv2.INPAINT_NS)
    rell = cv2.GaussianBlur(rell, (0, 0), 3)
    rell = cv2.resize(rell, (w, h), interpolation=cv2.INTER_CUBIC)
    alfa = cv2.GaussianBlur(m, (0, 0), 9).astype(np.float32)[..., None] / 255
    return (img * (1 - alfa) + rell * alfa).astype(np.uint8)


def guardar(img, nombre, xm=None, ampliar=1, calidad=72, movil=True):
    im = Image.fromarray(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
    if movil:
        alto = im.height
        ancho = min(im.width, int(alto * 0.75))
        x = max(0, min(im.width - ancho, (xm or im.width // 2) - ancho // 2))
        mv = im.crop((x, 0, x + ancho, alto))
        mv = mv.resize((480, int(480 * alto / ancho)), Image.LANCZOS)
        mv.save(OUT + nombre + '-movil.webp', 'WEBP', quality=66, method=6)
    if ampliar > 1:
        im = im.resize((im.width * ampliar, im.height * ampliar), Image.LANCZOS)
        im = im.filter(ImageFilter.UnsharpMask(radius=2, percent=50, threshold=2))
    im.save(OUT + nombre + '.webp', 'WEBP', quality=calidad, method=6)
    print(nombre, im.size)


def seccion(tira, caja, texto=(), bloques=()):
    """Recorta la tira a `caja` y borra. Las coordenadas de texto y bloques
    van en pixeles de la TIRA, tal cual se midieron en el boceto."""
    x0, y0, x1, y1 = caja
    img = cargar(tira)[y0:y1, x0:x1].copy()
    mover = lambda c: (c[0] - x0, c[1] - y0, c[2] - x0, c[3] - y0)
    img = borrar_bloques(img, [mover(c) for c in bloques])
    img = borrar_texto(img, [mover(c) for c in texto])
    return img


# 01 HERO. El letrero "Clinica Avanzada" de la pared se queda: es decorado.
hero = seccion(T1, (0, 57, 1478, 438),
               texto=[(180, 70, 705, 335), (180, 388, 705, 432)],
               bloques=[(185, 340, 447, 386), (452, 340, 660, 386)])
guardar(hero, 'cl-hero', xm=1000, ampliar=2, calidad=74)

# 02 LAS TRES TARJETAS. Solo la parte de foto; burbujas e iconos van en HTML.
for n, caja, bl in [
    (1, (78, 582, 508, 742), [(140, 592, 305, 712), (88, 680, 152, 742)]),
    (2, (535, 582, 944, 742), [(543, 680, 607, 742)]),
    (3, (970, 582, 1401, 742), [(978, 680, 1042, 742)]),
]:
    guardar(seccion(T1, caja, bloques=bl), 'cl-fuga%d' % n, movil=False, ampliar=2, calidad=70)

# 03 RECUPERA CLIENTAS
reac = seccion(T1, (0, 840, 1478, 1064),
               texto=[(78, 846, 530, 1004)],
               bloques=[(82, 1010, 322, 1058), (920, 848, 1278, 975), (1012, 980, 1344, 1056)])
guardar(reac, 'cl-reactiva', xm=700, ampliar=2, calidad=70)

# 04 DE CAOTICA A ORGANIZADA. Fondo sin tarjetas y, aparte, los dispositivos.
caos = seccion(T2, (0, 0, 1536, 364),
               texto=[(80, 55, 570, 142)],
               bloques=[(55, 40, 418, 337), (1182, 132, 1498, 337), (1036, 55, 1198, 112)])
disp = Image.fromarray(cv2.cvtColor(caos[95:345, 418:1182], cv2.COLOR_BGR2RGB))
# El fondo va SIN los dispositivos: la imagen de arriba ya los ensena y,
# desenfocados detras, salian duplicados (2026-10-03).
guardar(borrar_bloques(caos, [(418, 95, 1182, 345)]), 'cl-caos', xm=780)
disp = disp.resize((disp.width * 2, disp.height * 2), Image.LANCZOS) \
           .filter(ImageFilter.UnsharpMask(radius=2, percent=50, threshold=2))
disp.save(OUT + 'cl-dispositivos.webp', 'WEBP', quality=74, method=6)
print('cl-dispositivos', disp.size)

# 05 ASI FUNCIONA. Las tarjetas ocupan casi todo: el fondo es la mancha clara.
func = seccion(T2, (0, 366, 1536, 745),
               texto=[(500, 380, 1040, 445)],
               bloques=[(45, 455, 1500, 742)])
guardar(func, 'cl-funciona', xm=760)
paso1 = Image.open(T2).convert('RGB').crop((60, 470, 350, 612))
paso1 = paso1.resize((paso1.width * 2, paso1.height * 2), Image.LANCZOS)
paso1.save(OUT + 'cl-paso1.webp', 'WEBP', quality=72, method=6)

# 06 CALCULADORA
calc = seccion(T2, (0, 748, 1536, 1024),
               texto=[(85, 768, 485, 1012)],
               bloques=[(612, 770, 1040, 980), (1086, 765, 1450, 982)])
guardar(calc, 'cl-calc', xm=300)

# 07 CASO REAL. Fondo oscuro: el borrado casi no se nota.
caso = seccion(T3, (0, 0, 1774, 887),
               texto=[(95, 58, 752, 300), (95, 605, 425, 722), (1412, 52, 1700, 98)],
               bloques=[(96, 326, 750, 596), (792, 110, 1708, 462), (772, 478, 1708, 682), (470, 698, 1708, 822)])
guardar(caso, 'cl-caso', xm=1600, calidad=68)

# 08 PIEZAS. El portatil se queda; el diagrama va en HTML.
piezas = seccion(T4, (0, 0, 1536, 424),
                 texto=[(130, 78, 592, 232)],
                 bloques=[(133, 250, 394, 296), (700, 95, 1372, 338)])
guardar(piezas, 'cl-piezas', xm=560)

# 09 POTENCIAR A TU EQUIPO
equipo = seccion(T4, (0, 426, 1536, 744),
                 texto=[(130, 488, 618, 688)],
                 bloques=[(800, 484, 1104, 677), (1118, 484, 1432, 677)])
guardar(equipo, 'cl-potencia', xm=700)

# 10 LIMITES CLAROS
lim = seccion(T4, (0, 746, 1536, 1024),
              texto=[(130, 783, 628, 962)],
              bloques=[(970, 784, 1432, 990)])
guardar(lim, 'cl-limites', xm=700)

# 11 EQUIPO Y GARANTIA. Los dos retratos del boceto son caras de IA: fuera.
gar = seccion(T5, (0, 0, 1774, 523),
              texto=[(85, 88, 502, 438)],
              bloques=[(552, 96, 1155, 493), (1172, 74, 1712, 505)])
guardar(gar, 'cl-garantia', xm=880)

# 12 CTA. El portatil de la derecha esta limpio.
cta = seccion(T5, (0, 525, 1774, 767),
              texto=[(85, 553, 545, 742)],
              bloques=[(600, 605, 1218, 724)])
guardar(cta, 'cl-cta', xm=1480)
