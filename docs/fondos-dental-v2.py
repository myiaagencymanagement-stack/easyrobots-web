"""Recorta los fondos de la landing dental v2 desde la hoja de fondos.

Hoja: src/assets/boceto/dental-v2/fondos.webp (872x1802), la misma
composicion que la referencia pero sin texto ni interfaces.

Costuras detectadas midiendo el salto de color entre filas:
    0-252 hero · 254-420 presupuestos (tableta) · 421-578 mostrador
    579-874 seguimiento (movil) · 875-1066 como funciona
    1066-1240 piezas (TRAE EL DIAGRAMA PINTADO) · 1241-1389 hace / no hace
    1391-1508 control · 1508-1624 equipo · 1625-1802 cierre

La tira de "Piezas" no se usa: trae los nodos y los cables ya pintados y
saldrian iconos fantasma detras del diagrama de verdad. En su lugar va la
foto de "Como funciona" en espejo, que es la misma clinica de dia y no se
lee como repetida.

Los recortes `-movil` son ventanas verticales sobre cada tira (fallo 10 de
CLAUDE.md): una panoramica con `cover` en un hueco alto y estrecho se
amplia tanto que solo queda un parche de color.

Uso: python docs/fondos-dental-v2.py   (desde la raiz del repo)
"""
from PIL import Image, ImageOps

HOJA = 'src/assets/boceto/dental-v2/fondos.webp'
OUT = 'src/assets/'

# nombre: (y0, y1, x central del recorte movil, espejo)
TIRAS = {
    'dent-hero':     (0,    252, 610, False),
    'dent-presu':    (254,  420, 330, False),
    'dent-mostrador':(421,  578, 410, False),
    'dent-demo':     (579,  874, 190, False),
    'dent-flujo':    (875, 1066, 520, False),
    'dent-piezas':   (875, 1066, 420, True),
    'dent-hace':     (1241, 1389, 130, False),
    'dent-control':  (1391, 1508, 790, False),
    'dent-equipo':   (1508, 1624, 780, False),
    'dent-cierre':   (1625, 1802, 430, False),
}

hoja = Image.open(HOJA).convert('RGB')
for nombre, (y0, y1, xm, espejo) in TIRAS.items():
    tira = hoja.crop((0, y0, hoja.width, y1))
    if espejo:
        tira = ImageOps.mirror(tira)
    tira.save(OUT + nombre + '.webp', 'WEBP', quality=74, method=6)

    # ventana vertical 3:4 sobre la tira, ampliada a 420 px de ancho
    alto = tira.height
    ancho = int(alto * 0.75)
    x0 = max(0, min(tira.width - ancho, xm - ancho // 2))
    mov = tira.crop((x0, 0, x0 + ancho, alto))
    mov = mov.resize((420, int(420 * alto / ancho)), Image.LANCZOS)
    mov.save(OUT + nombre + '-movil.webp', 'WEBP', quality=66, method=6)
    print(nombre, tira.size, 'movil', mov.size)
