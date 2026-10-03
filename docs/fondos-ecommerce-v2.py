# -*- coding: utf-8 -*-
"""Fondos de la landing de ecommerce v2.

Hoja buena: `src/assets/boceto/ecommerce-v2/fondos-v2.png` (1024x1536), la que
paso Anais el 2026-09-30 en segunda vuelta y es la que le gusta. Sustituye a
`fondos.png`, que se queda de historico.

Trae CUATRO escenas, no nueve. Las costuras se detectaron midiendo el salto de
color entre filas consecutivas: caen en y = 390, 800 y 1219.

    1 ·    0-389   escritorio de noche, monitores y ciudad     (oscura)
    2 ·  391-799   loft al atardecer, zapatilla y portatil      (clara)
    3 ·  800-1218  oficina de dia, portatil, movil y zapatilla  (clara)
    4 · 1219-1536  escritorio al anochecer, portatil y ciudad   (oscura)

Como son cuatro para once secciones, a cada seccion se le recorta SU banda
dentro de la escena que le toca, al alto exacto que pide su aspect-ratio. Asi
ninguna repite encuadre y `cover` no tiene que inventarse nada.

Ademas se genera un recorte VERTICAL por seccion (`*-movil.webp`). Sin el, en
el movil la foto panoramica se amplia tanto que solo se ve un parche liso: a
390 px de ancho de una foto 3:1 se ve el 18 %. Es el fallo 10 de CLAUDE.md.
"""
from PIL import Image

HOJA = Image.open('src/assets/boceto/ecommerce-v2/fondos-v2.png').convert('RGB')
OUT = 'src/assets/'

# (archivo, y0, alto, ancho de salida, calidad, centro en x para el movil)
SECCIONES = [
    ('ecom-hero.webp',        34, 322, 1400, 60, 0.52),  # 1 · monitores y ciudad
    ('ecom-postventa.webp', 1219, 224, 1400, 58, 0.34),  # 4 · portatil al anochecer
    ('ecom-dato.webp',       208, 182, 1400, 58, 0.72),  # 1 · la mesa y la zapatilla
    ('ecom-seda.webp',       600, 150, 1300, 62, 0.34),  # 2 · zapatilla sobre marmol
    ('ecom-demo.webp',       800, 419, 1400, 60, 0.62),  # 3 · oficina de dia
    ('ecom-piezas.webp',    1000, 134, 1300, 62, 0.60),  # 3 · portatil y movil
    ('ecom-tecno.webp',      640, 124, 1300, 62, 0.55),  # 2 · el portatil del loft
    ('ecom-equipo.webp',     850, 172, 1300, 62, 0.28),  # 3 · sofa y persianas
    ('ecom-limites.webp',    430, 152, 1300, 62, 0.70),  # 2 · ventanal al atardecer
    ('ecom-cierre.webp',    1400,  88, 1400, 58, 0.50),  # 4 · la mesa al anochecer
    ('ecom-pie.webp',       1462,  74, 1400, 58, 0.50),  # 4 · la mesa, abajo
]

# El movil pide un recorte casi cuadrado: una ventana de 400 px de ancho sobre
# la escena entera, no la banda apaisada de la seccion.
ESCENAS = [(0, 390), (391, 799), (800, 1218), (1219, 1536)]

def escena_de(y0):
    for a, b in ESCENAS:
        if a <= y0 < b:
            return a, b
    return ESCENAS[-1]

for nombre, y0, alto, ancho, cal, cx in SECCIONES:
    HOJA.crop((0, y0, 1024, y0 + alto)).resize(
        (ancho, round(ancho * alto / 1024)), Image.LANCZOS
    ).save(OUT + nombre, 'WEBP', quality=cal, method=6)
    kb = len(open(OUT + nombre, 'rb').read()) / 1024

    ea, eb = escena_de(y0)
    vw = 400
    vx = min(max(int(cx * 1024) - vw // 2, 0), 1024 - vw)
    ventana = HOJA.crop((vx, ea, vx + vw, eb))
    mov = nombre.replace('.webp', '-movil.webp')
    ventana.resize((760, round(760 * ventana.height / ventana.width)), Image.LANCZOS) \
           .save(OUT + mov, 'WEBP', quality=cal, method=6)
    kbm = len(open(OUT + mov, 'rb').read()) / 1024
    print('%-24s %sx%-5s %5.1f KB   movil %5.1f KB' %
          (nombre, ancho, round(ancho * alto / 1024), kb, kbm))


# ESCRITORIO, SEGUNDA MAQUETA (2026-10-03)
# La pagina dejo de ser "folleto": las secciones ya no tienen la proporcion de
# su tira del boceto (1024/134, 1024/88...) sino alto real, unos 2,3:1 a 1440.
# Con las bandas de arriba, `cover` las ampliaba de 3 a 6 veces. Ahora cada
# seccion toma una VENTANA de la escena entera, con la proporcion de su hueco.
# Las que comparten escena llevan ventanas distintas, para no repetir encuadre.
# (archivo, escena, ancho de ventana, centro x, ancla vertical 0 arriba / 1 abajo)
ESCRITORIO = [
    ('ecom-hero.webp',      0, 1024, 0.50, 0.5),
    ('ecom-postventa.webp', 3,  730, 0.34, 0.5),
    ('ecom-dato.webp',      0,  880, 0.72, 1.0),
    ('ecom-seda.webp',      1,  880, 0.34, 1.0),
    ('ecom-demo.webp',      2, 1024, 0.50, 0.5),
    ('ecom-piezas.webp',    2,  820, 0.66, 1.0),
    ('ecom-tecno.webp',     1,  820, 0.60, 1.0),
    ('ecom-limites.webp',   1,  820, 0.62, 0.0),
    ('ecom-equipo.webp',    2,  820, 0.28, 0.0),
    ('ecom-cierre.webp',    3, 1024, 0.50, 0.5),
]
if __name__ == '__main__':
    for nombre, e, vw, cx, ancla in ESCRITORIO:
        ea, eb = ESCENAS[e]
        vh = min(eb - ea, round(vw / 2.3))
        vx = min(max(int(cx * 1024) - vw // 2, 0), 1024 - vw)
        vy = ea + round((eb - ea - vh) * ancla)
        sal = 1600
        HOJA.crop((vx, vy, vx + vw, vy + vh)).resize((sal, round(sal * vh / vw)), Image.LANCZOS) \
            .save(OUT + nombre, 'WEBP', quality=56, method=6)
        print('%-24s %sx%-4s %5.1f KB  (escritorio, ventana %sx%s)' %
              (nombre, sal, round(sal * vh / vw), len(open(OUT + nombre, 'rb').read()) / 1024, vw, vh))


def pieza(nombre, caja, sal, calidad=78):
    """Piezas pequenas que la hoja de fondos no trae y se recortan de la
    referencia: van a la resolucion de la captura y son provisionales."""
    REF = Image.open('src/assets/boceto/ecommerce-v2/referencia.jpg').convert('RGB')
    REF.crop(caja).resize(sal, Image.LANCZOS).save(OUT + nombre, 'WEBP', quality=calidad, method=6)
    print('%-24s %5.1f KB (recortada de la referencia)' % (nombre, len(open(OUT + nombre, 'rb').read()) / 1024))


pieza('ecom-prod.webp',    (96, 1000, 176, 1056), (320, 224), 80)
pieza('ecom-cliente.webp', (716, 216, 744, 244), (112, 112), 82)
pieza('ecom-chatbot.webp', (503, 521, 533, 551), (120, 120), 82)
