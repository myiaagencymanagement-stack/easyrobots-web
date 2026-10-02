"""Recorta los fondos de la landing dental v2 desde la hoja de fondos.

Hoja: src/assets/boceto/dental-v2/fondos.webp (872x1802), la misma
composicion que la referencia pero sin texto ni interfaces.

Costuras detectadas midiendo el salto de color entre filas:
    0-252 hero · 254-420 presupuestos (tableta) · 421-578 mostrador
    579-874 seguimiento (movil) · 875-1066 como funciona
    1066-1240 piezas (TRAE EL DIAGRAMA PINTADO) · 1241-1389 hace / no hace
    1391-1508 control · 1508-1624 equipo · 1625-1802 cierre

Segunda version (2026-10-02, peticion de Anais: secciones con alto de web
real, el hero a pantalla completa):

- La tableta de "Presupuestos" y el movil de "El seguimiento" pasan a ser
  HTML de verdad, asi que esas dos fotos se recortan SIN el dispositivo
  pintado (solo la parte izquierda de la tira). Si no, saldria un segundo
  dispositivo fantasma detras.
- La tira de "Piezas" no se usa: trae los nodos y los cables ya pintados.
  En su lugar va la foto de "Como funciona" en espejo.
- El hero va a pantalla completa y la tira mide 872x252: se amplia x2 con
  Lanczos y un enfoque suave. No inventa detalle, pero se ve mejor que el
  reescalado del navegador. LO BUENO ES PEDIR LA FOTO A MAS RESOLUCION.

Los recortes `-movil` son ventanas verticales sobre cada tira (fallo 10 de
CLAUDE.md): una panoramica con `cover` en un hueco alto y estrecho se
amplia tanto que solo queda un parche de color.

Uso: python docs/fondos-dental-v2.py   (desde la raiz del repo)
"""
from PIL import Image, ImageOps, ImageFilter

HOJA = 'src/assets/boceto/dental-v2/fondos.webp'
OUT = 'src/assets/'

# nombre: (y0, y1, x0, x1, x central del recorte movil, espejo, ampliar)
TIRAS = {
    'dent-hero':      (0,    252, 0,   872, 610, False, 2),
    'dent-presu':     (254,  420, 0,   440, 330, False, 1),
    'dent-mostrador': (421,  578, 0,   872, 410, False, 1),
    'dent-demo':      (579,  874, 0,   372, 190, False, 1),
    'dent-flujo':     (875, 1066, 0,   872, 520, False, 1),
    'dent-piezas':    (875, 1066, 0,   872, 420, True,  1),
    'dent-hace':      (1241, 1389, 0,  872, 130, False, 1),
    'dent-control':   (1391, 1508, 0,  872, 790, False, 1),
    'dent-equipo':    (1508, 1624, 0,  872, 780, False, 1),
    'dent-cierre':    (1625, 1802, 0,  872, 430, False, 1),
}

hoja = Image.open(HOJA).convert('RGB')
for nombre, (y0, y1, x0, x1, xm, espejo, amp) in TIRAS.items():
    tira = hoja.crop((x0, y0, x1, y1))
    if espejo:
        tira = ImageOps.mirror(tira)
    alto = tira.height

    # ventana vertical 3:4, ampliada a 420 px de ancho (antes de ampliar la tira)
    ancho = int(alto * 0.75)
    mx = max(0, min(tira.width - ancho, xm - x0 - ancho // 2))
    mov = tira.crop((mx, 0, mx + ancho, alto))
    mov = mov.resize((420, int(420 * alto / ancho)), Image.LANCZOS)
    mov.save(OUT + nombre + '-movil.webp', 'WEBP', quality=66, method=6)

    if amp > 1:
        tira = tira.resize((tira.width * amp, tira.height * amp), Image.LANCZOS)
        tira = tira.filter(ImageFilter.UnsharpMask(radius=2, percent=60, threshold=2))
    tira.save(OUT + nombre + '.webp', 'WEBP', quality=74, method=6)
    print(nombre, tira.size, 'movil', mov.size)
