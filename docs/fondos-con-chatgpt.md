# Fondos de landing con ChatGPT

Método usado el 2026-10-07 para rehacer todos los fondos de `/estetica/`.
Sustituye al de recortar el boceto y borrarle el texto (que dejaba manchas y
estaba prohibido desde inmobiliarias). **Leer antes de hacer los fondos de
cualquier otra landing.**

## 1. El método, en orden

1. **Se decide la idea de cada sección, una a una, con Anaís.** Nada de
   prompts "a boleo". Para cada sección se le dan 3-4 ideas en una pregunta,
   cada una con lo que cuenta y su pega, y una marcada como recomendada.
2. **No todas las secciones llevan foto.** Foto solo donde se cuenta una
   historia (hero, problema, reactivación, cambio, cierre). Las secciones que
   son herramienta o explicación (cómo funciona, calculadora, control) van
   **lisas** con un brillo dorado suave. Fotos en todas = ninguna destaca.
3. **El caso real nunca lleva foto generada detrás.** Mezcla lo inventado con
   lo verdadero. Liso, y que manden sus fotos reales.
4. Antes de escribir el prompt se mira **cómo es el hueco**: proporción, dónde
   va el texto, qué tapa el velo. Eso decide la composición del prompt.
5. Se escribe el prompt de **escritorio** y el de **móvil** (vertical, 2:3).
6. Anaís los pide **en la misma conversación de ChatGPT y de uno en uno**. Si
   se pegan varios juntos, ChatGPT hace solo el último.
7. Se montan, se comprueba con **una** captura por bloque (escritorio y móvil
   a 390 px en `<iframe>`) y se sube.

## 2. Reglas fijas de todos los prompts

- **Sin caras visibles.** De espaldas, de perfil desenfocado, o solo manos.
  Evita el aspecto de IA y que alguien confunda a la persona con una clienta
  real. Las escenas sin personas (objetos, espacios vacíos) funcionan mejor
  que la misma mujer posando tres veces, que delata banco de imágenes.
- **Sin texto, letras, logos ni marcas de agua.** Las pantallas de móvil
  "solo con luz", sin interfaz. El texto que haga falta se pone en HTML
  encima (notificaciones, viñetas), así se puede cambiar.
- **Nunca se limpia una imagen generada.** Si sale con letras, se pide otra.
- Paleta: cálida, acento dorado **#E4BA6C**, negros profundos. Prohibido:
  neón, morado, rosa, rojo, "plastic AI look".
- **Coherencia de escena:** la misma clínica en todas (mármol negro, latón,
  flores blancas, estanterías iluminadas). La historia va de **noche y caos**
  (hero, fugas) a **día y orden** (sección del cambio, despacho) y cierra al
  **atardecer** (CTA).

### Plantilla

```
Photorealistic photograph, horizontal 3:2 format (1536x1024), same premium
aesthetic clinic and same warm cinematic style as the previous images.
Scene: <qué pasa, en una o dos frases>.
Composition, very important: <dónde va el sujeto en % del ancho/alto, qué
zona queda oscura/vacía para el texto, qué franja se va a recortar>.
Lighting: <noche cálida / día suave / atardecer>, one soft golden accent
(#E4BA6C), deep shadows.
Style: high-end editorial/interior photography, shallow depth of field,
slight film grain.
<La pantalla del móvil, si sale:> The phone screen shows only soft light,
NO readable text, NO interface.
Strictly NO visible face, NO text, NO letters, NO logos, NO watermarks,
NO neon, NO purple, NO pink, NO red, NO plastic AI look.
```

Versión móvil: `Same scene ... but in VERTICAL 2:3 format (1024x1536)` +
composición vertical con alturas en %.

## 3. Medidas: qué pedir según el hueco

ChatGPT saca como mucho **1536×1024 (3:2)**, **1024×1536 (2:3)** o
**1024×1024**. Todo lo demás se recorta, así que el prompt dice qué franja
puede perderse.

| Hueco | Qué pedir | Composición en el prompt |
|---|---|---|
| Hero escritorio (texto a la izquierda) | 3:2 | Izquierda 45 % casi negra y vacía; todo a la derecha |
| Hero móvil | 2:3 | Escena entera en el **40 % de arriba**, el elemento clave (el móvil) **al 30 % del alto**; del 40 % abajo, negro |
| Tarjeta apaisada (~2,3:1) | 3:2 | Lo importante en la franja central; "top 20 % y bottom 30 % se recortan"; abajo funde a negro (lleva título encima) |
| Sección apaisada (~2,7:1) con texto izq. y chat der. | 3:2 | Sujeto entre el 45 y el 70 % del ancho; izquierda 40 % oscura; top y bottom 25 % recortables |
| Fondo desenfocado detrás de contenido | 3:2 | "Even, gentle composition, no strong focal points, no dark corners" |
| Dos secciones seguidas con un fondo común | **1:1** | Igual que el desenfocado; la mitad izquierda más clara |
| CTA (~3:1, solo se ve el último cuarto) | 3:2 | Sujeto en el **30 % derecho**; 70 % izquierdo oscuro |
| CTA móvil (foto arriba, texto debajo) | 2:3 | Da igual dónde: se recorta la parte con el sujeto |

## 4. Cómo se monta

Conversión (Pillow, WebP): `quality=68-72, method=6`. Escritorio a su tamaño
o algo menos; las que van desenfocadas a 1100-1150 px de ancho; las móviles
a 600-800 px. Pesos conseguidos: 23-46 KB.

Originales PNG en `src/assets/boceto/<nicho>-v3/`, con nombre de lo que son.

**Siempre `?v=N` en la URL** de una foto que sustituye a otra con el mismo
nombre: si no, el navegador sigue enseñando la vieja aunque el dominio ya
tenga la nueva.

Patrones de CSS que funcionaron:

- **`cover`** para las normales, con `background-position` medido para que
  no se corte el elemento clave (hero: `78% 78%`, el móvil de la foto está
  abajo).
- **Móvil del hero: `background-size: 100% auto` anclado arriba**, no
  `cover`. Con `cover` el elemento clave cae a media pantalla, debajo del
  texto. La foto acaba en negro y empalma con el fondo del hero.
- **CTA escritorio: `background-size: auto 100%` anclada a la derecha.** La
  foto ocupa solo la derecha y el resto es fondo oscuro; el velo tiene que
  seguir oscuro (.92) hasta pasado el borde izquierdo de la foto, o se ve el
  corte.
- **CTA móvil como el hero de coaching:** `.foto` con `bottom:auto;
  height:380px`, velo transparente arriba que llega a opaco a los 380 px, y
  `padding-top: 330px` en la caja.
- **Fondo común a dos secciones:** se envuelven en `<div class="dupla">`, la
  foto va en `.dupla::before` con `filter: blur(5px)`, las secciones pasan a
  `background: transparent` con **el mismo velo** (si no, se ve la costura)
  y una línea crema de separación en `.s09::before`.
- **Fondos lisos:** `.foto {display:none}` y en `.velo` un
  `radial-gradient` dorado al 9-20 % en una esquina. Se conserva si la
  sección era clara u oscura, para no repintar textos.
- Los ajustes de móvil van **al final del CSS**, para ganar a los velos de
  las media queries anteriores.

## 5. Texto encima de las fotos

- **Notificación de WhatsApp en HTML** sobre la foto del hero (`.h-noti`).
  Flota al lado del móvil de la foto, no dentro de su pantalla: el móvil está
  inclinado y la foto se recoloca con cada ancho, así que "dentro" se rompe.
- En móvil la notificación va **pequeña y a la izquierda, arriba**, encima del
  móvil de la foto. Grande o a la derecha tapaba la foto.
- **Viñetas animadas:** `[data-vi]` en el bloque y `.vi` + `style="--d:.7s"`
  en cada viñeta. Aparecen al entrar en pantalla y se reinician al salir, para
  que vuelvan a salir. Sin JS o con movimiento reducido se ven quietas.

## 6. Fallos de este día

- **Una imagen pegada en un mensaje que ya tiene otra a veces no llega como
  archivo.** Si no aparece en la carpeta de imágenes de la sesión, se pide
  que la pegue sola.
- **Ocultar algo con `max-height: 740px` en móvil lo oculta en casi todos los
  Android**: descontando las barras del navegador se quedan en ~700. Si hay
  que ocultar por alto, poner 640.
- **No quitar botones ni contenido en móvil sin preguntar**, aunque sea para
  hacer sitio. Se quitó el segundo "Reservar llamada" del hero y hubo que
  devolverlo.
- Al pasar una sección de oscura a clara (`caja oscura` → `caja clara`),
  revisar los textos que van sobre bandas oscuras dentro (los nombres del
  equipo se quedaron negros sobre negro).

## 7. Los prompts que funcionaron (estética)

Escena base: cabina/recepción de clínica estética premium, mármol negro,
latón, flores blancas.

| Sección | Idea | Archivo |
|---|---|---|
| Hero | Profesional trabajando de espaldas bajo la lupa; el móvil encendido en la mesa auxiliar, enfocado | `hero-cabina.png`, `hero-cabina-movil-2.png` |
| Fuga 1 · Mensajes sin responder | Móvil encendido en el mostrador, de noche, a la derecha | `fuga1-mensajes.png` |
| Fuga 2 · Llamadas que se pierden | Recepción vacía, silla apartada, móvil y agenda | `fuga2-recepcion.png` |
| Fuga 3 · Seguimiento que se enfría | Carpeta de presupuesto cerrada, café, móvil boca abajo | `fuga3-seguimiento.png` |
| 03 · Recupera clientas | Clienta en casa, de espaldas, leyendo el móvil con un café | `reactiva.png`, `reactiva-movil.png` |
| 04 · De caótica a organizada | La misma recepción de día, luminosa y en orden (desenfocada) | `caos-dia.png`, `caos-dia-movil.png` |
| 08 + 09 · Piezas y Potenciar | Despacho de la dueña de día (1:1, desenfocado) | `despacho.png`, `despacho-movil.png` |
| 12 · CTA | La dueña de espaldas con un café mirando el atardecer | `cta.png`, `cta-movil.png` |

El texto completo de cada prompt está en la conversación del 2026-10-07; la
plantilla de arriba reproduce la estructura. Lo que más resultado dio:
**decir la composición en porcentajes** y **qué franja se va a recortar**.
