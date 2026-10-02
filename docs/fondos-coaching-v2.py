# -*- coding: utf-8 -*-
"""
Fondos de la landing de coaching v2 (2026-10-02).

De donde salen
--------------
Anais paso dos imagenes del mismo tamano (779x2019):

    src/assets/boceto/coaching-v2/referencia.png   la pagina entera pintada
    src/assets/boceto/coaching-v2/fondos.png       la hoja de fondos

Ojo: las dos miden lo mismo pero NO estan alineadas seccion a seccion. La
hoja de fondos son once escenas sueltas apiladas, cada una con su alto, y
las secciones del boceto caen en otras alturas. Las costuras se detectaron
midiendo el salto de brillo medio entre filas consecutivas (una linea
blanca de 1-2 px separa cada escena):

    178 · 371 · 550 · 706 · 858 · 1088 · 1259 · 1401 · 1546 · 1757

La de 1259 no la pilla el umbral de 18 que vale para las demas, porque
separa dos escenas claras; se vio bajando el umbral en esa franja.

Ademas llegaron dos imagenes mas, ya a 1993x789:

    cta-aspiracional.png   terraza al atardecer sobre la ciudad
    sistema-referencia.png la seccion 6 pintada CON el diagrama encima

La segunda no sirve de fondo (lleva el diagrama y un panel con cifras
inventadas quemados en la foto): se queda de referencia para colocar las
piezas del diagrama, que se reconstruye en HTML.

Resolucion, que es el limite de esta landing
--------------------------------------------
Las bandas miden 779 px de ancho y en la web se ven a 1440 y mas, asi que
se amplian entre 2 y 2,5 veces. Se les da un desenfoque leve en CSS para
que se lean como profundidad de campo y no como pixelado (misma receta que
en dental v2). Si Anais pasa la hoja a mas resolucion, se vuelve a correr
este script y no hay que tocar el HTML.

El movil
--------
Fallo 10 de CLAUDE.md: una foto de 779x150 puesta con `cover` en un hueco
alto y estrecho se amplia tanto que solo se ve un parche de color. Cada
seccion lleva su recorte vertical `*-movil.webp`, que es una ventana
estrecha de la misma escena, no la banda apaisada.
"""

from PIL import Image, ImageFilter
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
BOCETO = RAIZ / 'src' / 'assets' / 'boceto' / 'coaching-v2'
SALIDA = RAIZ / 'src' / 'assets'

# (nombre, y0, y1, x del centro del recorte movil en tanto por uno)
BANDAS = [
    ('coach-hero',      0,  177, 0.62),   # escritorio de noche, portatil y ciudad
    ('coach-cae',     180,  370, 0.30),   # coach agobiada de noche ante el portatil
    ('coach-interes', 374,  549, 0.72),   # coach grabando, tranquilo
    ('coach-funciona',552,  705, 0.50),   # escritorio de dia, plantas y mar
    ('coach-demo',    708,  857, 0.55),   # escritorio de noche con velas
    ('coach-sistema', 861, 1087, 0.50),   # red azul abstracta (fondo del diagrama)
    ('coach-limite', 1090, 1258, 0.45),   # mesa de marmol clara con luz de manana
    ('coach-proceso',1261, 1400, 0.50),   # oficina luminosa con plantas
    ('coach-equipo', 1403, 1545, 0.50),   # despacho claro, madera y plantas
    ('coach-cierre', 1548, 1756, 0.55),   # atardecer sobre la ciudad (version hoja)
    ('coach-pie',    1760, 2019, 0.50),   # terraza de noche con la ciudad al fondo
]

ANCHO_ESC = 1600   # ancho de salida en escritorio
ANCHO_MOV = 520    # ancho de salida en movil
ALTO_MOV = 1100    # alto de salida en movil (ventana alta y estrecha)


def guarda(im, destino, calidad=72):
    im.save(destino, 'WEBP', quality=calidad, method=6)
    print('%-34s %4dx%-4d %5.1f KB' % (
        destino.name, im.width, im.height, destino.stat().st_size / 1024))


def escritorio(hoja, nombre, y0, y1):
    banda = hoja.crop((0, y0, hoja.width, y1))
    f = ANCHO_ESC / banda.width
    banda = banda.resize((ANCHO_ESC, int(banda.height * f)), Image.LANCZOS)
    # El reescalado grande deja bordes duros; un desenfoque minimo los funde
    # sin que se note como filtro.
    banda = banda.filter(ImageFilter.GaussianBlur(0.6))
    guarda(banda, SALIDA / (nombre + '.webp'))


def movil(hoja, nombre, y0, y1, centro):
    """Ventana vertical: se coge una columna estrecha de la escena y se
    estira al alto que pide una seccion de movil, en vez de dejar que
    `cover` amplie la panoramica entera."""
    banda = hoja.crop((0, y0, hoja.width, y1))
    # ancho de la ventana = el que da la proporcion 520x1100 sobre el alto
    # real de la banda; si no cabe, se coge toda la banda.
    ancho = min(banda.width, max(60, int(banda.height * ANCHO_MOV / ALTO_MOV)))
    x0 = int(centro * banda.width - ancho / 2)
    x0 = max(0, min(banda.width - ancho, x0))
    v = banda.crop((x0, 0, x0 + ancho, banda.height))
    v = v.resize((ANCHO_MOV, ALTO_MOV), Image.LANCZOS)
    v = v.filter(ImageFilter.GaussianBlur(0.8))
    guarda(v, SALIDA / (nombre + '-movil.webp'))


def main():
    hoja = Image.open(BOCETO / 'fondos.png').convert('RGB')
    for nombre, y0, y1, centro in BANDAS:
        escritorio(hoja, nombre, y0, y1)
        movil(hoja, nombre, y0, y1, centro)

    # El cierre tiene foto propia a 1993x789, que es 2,5 veces la banda de
    # la hoja. Se usa esa y la banda 10 se queda de reserva.
    cta = Image.open(BOCETO / 'cta-aspiracional.png').convert('RGB')
    guarda(cta.resize((ANCHO_ESC, int(cta.height * ANCHO_ESC / cta.width)),
                      Image.LANCZOS), SALIDA / 'coach-cierre.webp')
    # Movil del cierre: la mitad derecha, que es donde esta el sol.
    a = int(cta.height * ANCHO_MOV / ALTO_MOV)
    x0 = int(cta.width * 0.72 - a / 2)
    guarda(cta.crop((x0, 0, x0 + a, cta.height)).resize((ANCHO_MOV, ALTO_MOV), Image.LANCZOS),
           SALIDA / 'coach-cierre-movil.webp')


if __name__ == '__main__':
    main()
