# Fondos que faltan para la landing de coaching

Escrito el 2026-10-04 después de tres intentos de borrar el texto pintado de
una escena generada. **No se vuelve a intentar**: se piden las escenas sin
texto y listas para cortar.

## Por qué

| Lo que llegó | Resolución | Para qué sirve |
|---|---|---|
| `fondos.png`, la hoja | **779 × 2019** → bandas de 779 × ~180 | 6 secciones oscuras. **Es el problema** |
| `claras.png` | 1994 × 789 → tiras de 1994 × 251 | 2 secciones claras |
| `cta-aspiracional.png` | 1993 × 789 | el hero |
| `proceso-referencia.png` | 2086 × 754 | «cómo trabajamos», **con el texto pintado encima** |

La hoja mide **779 px de ancho**. En una sección de 1920 × 700 hay que
ampliarla 2,5 veces de ancho y casi 4 de alto. No hay detalle que recuperar:
ningún filtro lo arregla.

Las dos escenas que sí llegaron grandes se ven bien, y eso confirma que el
problema es el origen y no la maqueta.

## Lo que hay que pedir

**Una imagen por sección**, cada una a su medida. El ancho siempre 2400; el
alto es el que pide la proporción real de esa sección medida a 1920 px de
ventana. Si viene más alta no pasa nada: `cover` recorta por el centro. Si
viene más baja, se amplía y se vuelve a ver blanda.

| # | Sección | Pedir | Escena |
|---|---|---|---|
| 01 | Hero | 2400 × 1170 | *ya está*: terraza al atardecer sobre la ciudad |
| 02 | Dónde se cae | **2400 × 900** | coach agobiada de noche ante el portátil. Ella a la **derecha**, el tercio izquierdo en penumbra |
| 03 | El mismo interés | **2400 × 650** | coach grabando contenido, tranquilo. Él a la **derecha** |
| 04 | Así funciona | **2400 × 845** | escritorio luminoso de día con vistas al mar. Claro |
| 05 | Demo | **2400 × 625** | escritorio de noche con portátil y velas |
| 06 | Sistema | **2400 × 580** | red azul abstracta, nodos y líneas. Oscura |
| 08 | Cómo trabajamos | **2400 × 710** | la terraza de mármol con portátil y café, **sin el texto** |
| 07 | El límite | **2400 × 735** | terraza clara con sofá y piscina sobre el mar |
| 09 | Equipo y garantía | **2400 × 625** | terraza al atardecer, mesa puesta. Clara y cálida |
| 11 | Cierre | **2400 × 455** | atardecer sobre la ciudad desde la terraza |
| 12 | Pie | **2400 × 320** | terraza de noche con las luces de la ciudad |

Los recortes verticales del móvil (`*-movil.webp`) **no hay que pedirlos**:
salen de la misma imagen con `docs/fondos-coaching-v2.py`.

## El prompt

Uno por escena, cambiando la descripción y el tamaño:

```
Genera la fotografía sola, SIN texto, SIN números, sin interfaces, sin
tarjetas, sin logotipos y sin marcas de agua. Solo la fotografía.

[descripción de la escena]

Formato horizontal, 2400 × [alto] píxeles exactos.
El tercio izquierdo tiene que quedar en penumbra y sin detalle, porque
encima va un titular.
```

Lo de la penumbra a la izquierda solo aplica a las secciones oscuras (02,
03, 05, 06, 11). En las claras (04, 07, 08, 09) basta con que esa zona sea
cielo o pared lisa, sin nada que compita con el texto.

## Al recibirlas

1. Dejarlas en `src/assets/boceto/coaching-v2/` con el nombre de la sección.
2. Añadir la entrada a `docs/fondos-coaching-v2.py` y correrlo.
3. No hay que tocar una línea de HTML: los nombres de archivo no cambian.
