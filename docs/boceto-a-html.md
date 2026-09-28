# De un boceto de IA a HTML real

Método sacado de convertir la landing de inmobiliarias, entre el 26 y el 28 de
septiembre de 2026. Se escribe porque costó tres intentos fallidos llegar a él y
no tiene sentido volver a pagarlos.

---

## Lo primero, y lo que más tiempo ahorra

**Los bocetos que llegan no son diseños: son imágenes generadas.** No hay archivo
de Figma ni HTML detrás. ChatGPT no puede "darte el código" porque nunca lo tuvo:
pintó un cuadro de una web.

Cómo se reconoce en diez segundos — se amplía el texto pequeño y aparecen
erratas que ningún diseñador comete:

> `Píso` con tilde · `120 ro²` en vez de 120 m² · `Jueees` · `Visita propueste` ·
> el reloj del móvil marcando 10:41 mientras los mensajes son de las 12:41

**Consecuencias, y hay que decirlas antes de empezar:**

1. **Idéntico es imposible**, porque para ser idéntico habría que copiar las
   erratas y el texto borroso.
2. **Nítido tampoco se consigue reexportando.** Una imagen de 866 px no se puede
   ampliar: no hay detalle que recuperar.
3. **Lo alcanzable es indistinguible mirándolo, y además bien escrito.** Las
   diferencias que quedan son justo las que se querían corregir.

Decirlo al principio evita la espiral de "pero ChatGPT tampoco lo clava, y Figma
tampoco". No lo clava nadie. Hay que reconstruirlo.

---

## El método: medir, no mirar

Lo que falla cuando se le pide a otra herramienta es que **mira** la imagen. El
trabajo bueno es **medirla**.

### 1 · Sacar los colores del píxel

```python
from PIL import Image
from collections import Counter
im = Image.open('boceto.png').convert('RGB')

def dominante(caja, filtro=None):
    px = list(im.crop(caja).getdata())
    c = Counter(p for p in px if (filtro is None or filtro(p)))
    return '#%02X%02X%02X' % c.most_common(1)[0][0]

azul = lambda p: p[2] > 120 and p[2] - p[0] > 50
print(dominante((184, 481, 517, 553), azul))   # el relleno del boton
```

Muestrear **zonas sólidas grandes** (el relleno de un botón, el fondo de una
tarjeta), nunca cerca de un borde: el suavizado devuelve tonos intermedios que
no existen en el diseño.

### 2 · Medir la geometría en píxeles

Detectar los bordes por bandas de brillo. Para texto claro sobre fondo oscuro:

```python
def columnas(img, y0, y1, umbral=110, hueco=9):
    """Grupos de columnas con contenido dentro de una banda horizontal."""
    im = img.convert('L').crop((0, y0, img.width, y1))
    out, ini, ult = [], None, None
    for x in range(im.width):
        v = max(im.getpixel((x, y)) for y in range(im.height)) > umbral
        if v:
            if ini is None: ini = x
            ult = x
        elif ini is not None and x - ult > hueco:
            out.append((ini, ult)); ini = None
    if ini is not None: out.append((ini, ult))
    return out
```

La misma función girada da las filas. Con eso salen los enlaces del menú, las
líneas del titular, los botones y los bloques de cada columna.

Para las tarjetas sobre una fotografía, filtrar por **oscuro y poco saturado**:

```python
oscuro = lambda p: max(p) < 78 and abs(p[0]-p[2]) < 22 and abs(p[0]-p[1]) < 22
```

Y todo se convierte a **porcentaje del ancho del boceto**, que es lo que
sobrevive al cambio de tamaño.

### 3 · La unidad que conserva las medidas

El truco que hace que todo cuadre. Se define una unidad que vale **un píxel del
boceto**, con *container queries*:

```css
.escena {
  container-type: inline-size;
  --u: 0.11547cqw;        /* 100/866: el boceto medía 866 px de ancho */
}
.titular { font-size: calc(33*var(--u)); line-height: calc(36*var(--u)); }
```

Así en el código quedan escritos **los 33 px que se midieron**, no un `2.1rem`
que nadie sabe de dónde salió. Escala solo y, si mañana hay que mover algo 4 px,
se mueven 4 px.

### 4 · Separar fotografía de interfaz

La fotografía es legítimamente una imagen y se reutiliza. **Lo que se
reconstruye es la capa de encima.**

Pero **el fondo no se puede extraer del boceto**: el texto y los componentes
están encima y no queda zona limpia. Se probó a desenfocarlo y seguían leyéndose
las formas. Hay que pedir la fotografía aparte, con este prompt:

```
Genera la fotografía sola, SIN texto, sin interfaces, sin móviles, sin tarjetas
y sin personas. Solo la fotografía.

[descripción de la escena]

El tercio izquierdo tiene que quedar en penumbra y sin detalle, porque encima
va un titular.

Formato horizontal, lo más ancho que puedas. Sin marca de agua.
```

Las **piezas pequeñas** (una miniatura, un retrato dentro de una tarjeta) sí se
recortan del propio boceto como provisionales. Recortando **por encima de
cualquier sello o insignia**, que se vuelve a dibujar en CSS: si viene quemado en
la imagen y encima se pinta otro, sale duplicado.

### 5 · Comparar superponiendo, no de memoria

Una página con las dos capas y un deslizador que recorta la de arriba, más un
modo de fundido al 50 %: lo que está movido sale doble. Se acabó el "¿se parece?".

Vive en `src/prueba-hero-comparar.html` y sirve de plantilla para cualquier otra
sección.

---

## Las trampas en las que ya se cayó

**El hero escalaba con la ventana y el resto de la página no.** El hero usaba
`cqw` sobre el ancho del navegador y las secciones un contenedor centrado. En una
pantalla de 1900 px el hero se volvía enorme, había que deslizar para verlo
entero y su texto empezaba a 109 px mientras el de la sección siguiente empezaba
a 367. Se arregla metiendo el hero en una escena que mida **lo mismo que el
resto**: mismo `max-width` y el mismo margen lateral en porcentaje, que se elige
para que coincida con el del boceto (51 de 866 = 5,89 %).

**Las tarjetas sin altura se comen a la de abajo.** Al ponerles solo `top`, el
texto las estiraba. Hay que darles también la **altura medida** y dimensionar el
texto para que quepa dentro.

**La proporción del móvil mal medida lo saca de la pantalla.** Se puso a 169/420
cuando lo medido era 169/376 y el teléfono quedaba cortado por abajo. Medir la
**pantalla blanca**, no el cuerpo con el marco.

**El texto que se parte delata la reconstrucción.** Antes de dar una sección por
buena, echar la cuenta: ancho de la columna, menos relleno, menos icono y hueco,
contra la longitud de la frase más larga. Si no entra, se estrecha la columna de
texto del titular, no la foto.

**Las medidas en `--u` no valen en el móvil.** A 400 px de ancho dan tamaños
impredecibles. Por debajo del corte, todo en `rem`.

**Recortar la foto de fondo mal encuadrada.** Si la foto es más ancha que el
hueco, `cover` recorta por los lados. Hay que elegir el `background-position` a
mano sabiendo qué se pierde: en el hero, el encuadre tiene que conservar la zona
oscura donde se apoya el titular.

---

## Lo que no se reproduce aunque venga en el boceto

Los generadores de imágenes meten cosas que chocan con las reglas de honestidad
de `../CLAUDE.md`. Se quitan y se avisa:

- **Testimonios inventados.** El boceto traía *"Desde que lo usamos no se nos
  escapan las primeras llamadas" — Inmobiliaria en Madrid*. Ese cliente no
  existe.
- **Caras generadas con IA etiquetadas con nombre y cargo.** El boceto ponía dos
  retratos inventados bajo "Guillermo · Co-fundador" y "Anaís · Co-fundadora".
  Va la foto real de Guillermo y el hueco de Anaís sigue vacío.
- **Teléfonos con pinta de reales.** Se enmascara el último grupo:
  `+34 612 345 6XX`.
- **Las erratas de la generación**, que son fallos del generador y no
  decisiones: `Jueees`, `Visita propueste`, `Píso`, `120 ro²`, `herramiente`.

Lo que **sí** puede ir, desde el 2026-09-27: la voz y hablar de precio y
disponibilidad de un inmueble. Ver `capacidades-reales.md`.

---

## Antes de dar una sección por terminada

```bash
python -c "import html.parser; html.parser.HTMLParser().feed(open('src/x.html',encoding='utf-8').read())"
node --check <(extraer el <script> a un .js)
```

Y comprobar que **no se ha tocado nada más**: que siguen ahí los `id` de las
otras secciones, que los enlaces internos no apuntan a ningún sitio inexistente
y que los botones del calendario siguen contados.
