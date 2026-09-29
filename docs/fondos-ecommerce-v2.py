# -*- coding: utf-8 -*-
"""Fondos DEFINITIVOS de la landing de ecommerce v2.

Salen de la hoja de fondos que paso Anais el 2026-09-30:
`src/assets/boceto/ecommerce-v2/fondos.png` (1024x1536), la misma composicion
de la referencia pero SIN texto ni interfaces. Es lo que permite usar la
fotografia de verdad en vez de reconstruirla espejando columnas.

Las nueve franjas se detectaron midiendo el salto de color entre filas
consecutivas; las costuras caen en y = 209, 385, 563, 718, 905, 1055, 1204
y 1359. No se recortan a ojo.

Cada franja se sirve al ancho que pide su seccion y se convierte a WebP
buscando el peso minimo que aguanta el velo encima.
"""
from PIL import Image

HOJA = Image.open('src/assets/boceto/ecommerce-v2/fondos.png').convert('RGB')
OUT = 'src/assets/'

# (archivo, y0, y1, ancho de salida, calidad)
FRANJAS = [
    ('ecom-hero.webp',        0,  208, 1600, 72),  # tienda de noche, portatil y zapatilla
    ('ecom-postventa.webp', 209,  384, 1600, 70),  # estanterias con cajas
    ('ecom-dato.webp',      385,  562, 1600, 70),  # pantallas y paneles
    ('ecom-seda.webp',      563,  717, 1500, 74),  # onda blanca con zapatilla
    ('ecom-demo.webp',      718,  904, 1600, 74),  # suelo blanco, carrito y portatil
    ('ecom-piezas.webp',    905, 1054, 1400, 74),  # abstracto blanco con tarjetas
    ('ecom-tecno.webp',    1055, 1203, 1400, 74),  # ondas blancas y paneles
    ('ecom-equipo.webp',   1204, 1358, 1400, 74),  # estudio blanco con columnas
    ('ecom-cierre.webp',   1359, 1536, 1600, 72),  # mesa oscura con portatil
]

for nombre, y0, y1, ancho, cal in FRANJAS:
    tira = HOJA.crop((0, y0, 1024, y1))
    alto = round(ancho * tira.height / tira.width)
    tira.resize((ancho, alto), Image.LANCZOS).save(OUT + nombre, 'WEBP', quality=cal, method=6)
    kb = len(open(OUT + nombre, 'rb').read()) / 1024
    print('%-24s %sx%s  %.1f KB  (boceto y%s-%s)' % (nombre, ancho, alto, kb, y0, y1))

# El pie comparte la franja de cierre, recortada por abajo.
tira = HOJA.crop((0, 1430, 1024, 1536))
tira.resize((1400, round(1400 * tira.height / tira.width)), Image.LANCZOS).save(
    OUT + 'ecom-pie.webp', 'WEBP', quality=70, method=6)
print('%-24s %.1f KB' % ('ecom-pie.webp', len(open(OUT + 'ecom-pie.webp', 'rb').read()) / 1024))


def pieza(nombre, caja, sal, calidad=78):
    """Piezas pequenas que NO estan en la hoja de fondos y se recortan de la
    referencia: van al tamano de la captura y son provisionales."""
    REF = Image.open('src/assets/boceto/ecommerce-v2/referencia.jpg').convert('RGB')
    REF.crop(caja).resize(sal, Image.LANCZOS).save(OUT + nombre, 'WEBP', quality=calidad, method=6)
    print('%-24s %.1f KB (recortada de la referencia)' % (nombre, len(open(OUT + nombre, 'rb').read()) / 1024))


pieza('ecom-prod.webp',    (96, 1000, 176, 1056), (320, 224), 80)
pieza('ecom-cliente.webp', (716, 216, 744, 244), (112, 112), 82)
pieza('ecom-chatbot.webp', (503, 521, 533, 551), (120, 120), 82)
