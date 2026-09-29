# -*- coding: utf-8 -*-
"""Fondos PROVISIONALES de la landing de ecommerce (v2).

El boceto no permite sacar la fotografia limpia: encima van el texto y las
interfaces. Se reconstruyen espejando las columnas donde SOLO hay fotografia,
estirandolas antes para que el patron no se repita mas de tres veces, y
desenfocando lo justo. Se sustituyen en cuanto llegue la hoja de fondos.
"""
from PIL import Image, ImageFilter
REF = Image.open('src/assets/boceto/ecommerce-v2/referencia.jpg').convert('RGB')
OUT = 'src/assets/'

def espejo(tira, ancho):
    w = tira.width
    lienzo = Image.new('RGB', (ancho, tira.height)); x, flip = 0, False
    while x < ancho:
        lienzo.paste(tira.transpose(Image.FLIP_LEFT_RIGHT) if flip else tira, (x, 0))
        x += w; flip = not flip
    return lienzo

def fondo(nombre, caja, sal, estira=None, desenf=3, calidad=70):
    src = REF.crop(caja)
    if estira:
        src = src.resize((estira, src.height), Image.LANCZOS)
        src = espejo(src, max(1024, estira*3))
    base = src.resize(sal, Image.LANCZOS)
    if desenf: base = base.filter(ImageFilter.GaussianBlur(desenf))
    base.save(OUT + nombre, 'WEBP', quality=calidad, method=6)
    print(nombre, base.size, round(len(open(OUT+nombre,'rb').read())/1024, 1), 'KB')

# --- oscuros: almacen de estanterias ---
fondo('ecom-hero.webp',      (908,   4, 1024,  286), (1600, 450), 380, 4, 68)
fondo('ecom-postventa.webp', (905, 292, 1024,  484), (1600, 300), 420, 4, 66)
fondo('ecom-dato.webp',      (918, 489, 1024,  629), (1600, 228), 460, 4, 66)
fondo('ecom-cierre.webp',    (660,1426, 1024, 1489), (1600, 105), None, 2, 70)
fondo('ecom-pie.webp',       (  0,1496, 1024, 1534), (1400,  52), None, 2, 66)
# --- claro: seda azul, de la franja lisa de las secciones 06-08 ---
fondo('ecom-seda.webp',      (  0,1140,   64, 1410), (1200, 460), 400, 5, 70)

def pieza(nombre, caja, sal, calidad=76):
    REF.crop(caja).resize(sal, Image.LANCZOS).save(OUT+nombre, 'WEBP', quality=calidad, method=6)
    print(nombre, sal, round(len(open(OUT+nombre,'rb').read())/1024,1), 'KB')

pieza('ecom-zapatilla.webp', (906, 636, 1024, 756), (354, 360))   # zapatilla blanca de la 04
pieza('ecom-planta.webp',    (  0, 762,  116, 1010), (232, 496))  # planta y zapatilla de la 05

# --- piezas pequenas, provisionales, recortadas del propio boceto ---
pieza('ecom-planta.webp', (0, 762, 100, 1010), (200, 496))
pieza('ecom-prod.webp',   (96, 1000, 176, 1056), (320, 224), 80)   # zapatilla negra del producto
pieza('ecom-cliente.webp',(716,  216, 744,  244), (112, 112), 82)  # avatar del cliente en el hero
pieza('ecom-chatbot.webp',(503,  521, 533,  551), (120, 120), 82)  # avatar del chatbot cualquiera
