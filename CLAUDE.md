# EasyRobots Web

Web de la agencia: **easyrobots-ai.cloud**. Repo `myiaagencymanagement-stack/easyrobots-web`; todo lo de `src/` se
publica al empujar a `main`. Reorganizado el 2026-11-24: este archivo guarda solo lo vigente.

- **Antes de escribir copy o diseñar una página:** `docs/marca.md` (qué es EasyRobots, público, lenguaje visual,
  arquitectura de la web, caso real de Pilar, garantía, cómo se escriben los copys) y `docs/capacidades-reales.md`.
- **Lo que se hizo en cada landing** (medidas, pasadas, bocetos, decisiones de septiembre a noviembre):
  `docs/historial.md`. Se consulta cuando se vuelve a tocar esa página, no antes.
- **Negocio** (precios, productos, medición, clientes): `~/.claude/negocio/MAPA.md`. Si cambia un precio en la web,
  cambiarlo también en el mapa, en el catálogo (`EasyRobots Crm\legal\catalogo-servicios-tarifas_vN`) y en el prompt
  del asistente de dudas (ver abajo).
- Copy: se propone en el chat y se aplica solo cuando Anaís lo aprueba. Diseño y maquetación, directamente.

## Páginas vivas (2026-11-24)

| URL | Qué es |
|---|---|
| `/` | Home de agencia (nivel 1) |
| `/clinicas/` | Página única de clínicas. `/clinicas/whatsapp/`, `/clinicas/llamadas/`, `/estetica/`, `/agente-de-voz/` y `/dental/` redirigen aquí (con UTM) |
| `/inmobiliarias/`, `/concesionarios/`, `/ecommerce/`, `/coaching/` | Landings de nicho, indexables, con precios (gama AURA desde el 08/11) |
| `/aura-business/`, `/aura-setter/` | Producto, `noindex`. Sin detallar funciones del CRM (se explican en llamada) |
| `/black-friday/` | Catálogo de Black Friday, hasta el 01/12 |
| `/reactivador-flash/`, `/agente-10-preguntas/`, `/agente-secretaria/` | Ofertas de pago con su `/gracias/`, `noindex`. Los botones `data-pago` llevan a Stripe. `/agente-primera-linea/` y `/presupuestos-y-papeles/` son nombres viejos que redirigen |
| `/condiciones-productos/` | Condiciones v2 de todo el catálogo |
| `/privacy.html`, `/impressum.html` | Legal (hechos; la dirección de Hamburgo va solo ahí, nunca en pies ni JSON-LD) |
| `/guias/` | Lead magnets, indexables desde el 14/10. Formato de guía (plantilla `guia-whatsapp-business.html`), no de landing |
| `/blog/` | Ver `docs/blog.md`. Artículos con `noindex` hasta que Anaís los aprueba |
| `funnel-*.html` | Seis funnels VSL publicados con `noindex`; ningún botón de la web lleva a ellos |
| `borradores/`, `BORRADORES ANTIGUOS SIN PRECIOS/` | En la raíz del repo, fuera de `src/`: se guardan en GitHub pero no se publican |

Las páginas dentro de carpeta usan **rutas absolutas** (`/assets/…`). Una página nueva, igual desde el principio.

## Medición y calendario

Todo en `src/js/consent.js`, cargado en el `<head>` de las páginas vivas. Banner propio: sin «Aceptar» no se carga ni
GA ni el píxel. El calendario es **Cal.com** (`cal.com/ai-business-tmzcjy/30min`) dentro de un modal que se monta al
abrirlo (`window.erCalendario(slot)`); cualquier botón con `data-cal` (o `data-reserva`) lo abre. No activar la app
de Meta Pixel de Cal.com. Eventos, IDs y API de conversiones: `~/.claude/negocio/medicion-y-anuncios.md`.

## Cuadre de márgenes y titulares (regla desde el 2026-11-11)

- Ningún apartado arranca en otro margen que el resto: los bloques comunes (calculadora `.ic-calc`, «Un sistema
  conectado» `.pzs`, precios `.pc`) usan el contenedor de la página (1440 px + `--er-lado`, en el
  `<style id="er-cuadre">` de cada nicho), nunca uno propio. Solo escritorio (desde 1081 px).
- Titulares de sección en escritorio: **47 px** en todas (46 en coaching), también a 1920.
- Se mide con un script (posición del primer texto y del h2 de cada sección a 1440 y 1920), no a ojo.
- Al final de cada página viva hay un bloque «Tamaños unificados» para el móvil (h1 ~38, h2 27, texto ≥ 13-14).

## Fotos

Fotos reales del equipo (`assets/anais.webp`, `assets/guille.webp`) y del caso (`assets/pilar.webp`,
`assets/cejas.webp`). **Nunca retratos generados con IA etiquetados con nombre y cargo** (respaldados en
`borradores/retratos-ia/`). Instagram no se puede leer desde aquí: las fotos las pasa Anaís.

## Cómo se publica

- Todo lo que hay en `src/` se copia a la raíz de nginx (`Dockerfile`).
- Dominio: **easyrobots-ai.cloud** (también `www.`). Una página en `src/x.html`
  queda en `https://easyrobots-ai.cloud/x.html`.
- No hay `.github/workflows`, pero **el despliegue es automático**: al empujar a
  `main`, en pocos minutos el dominio ya sirve los archivos nuevos. Comprobado el
  2026-09-24 con `curl -o /dev/null -w "%{http_code} %{size_download}"` sobre las
  imágenes recién subidas: mismo tamaño en bytes que los locales.
- Se commitea y se empuja directo a `main`, sin ramas ni PRs.
- **Consecuencia importante:** no hay red de seguridad. Cada push sale publicado.
  Todo lo que sea una prueba va con `<meta name="robots" content="noindex,
  nofollow">` para que no compita en Google con la web real.
- **El despliegue puede saltarse un push** si llegan varios en el mismo minuto
  (pasó el 2026-10-03 con tres sesiones empujando a la vez: el dominio se quedó
  20 minutos en el commit anterior). Después de empujar, comprobar con `curl`
  que la página trae algo nuevo, y si no llega en 5-10 minutos, relanzar con
  `git commit --allow-empty` y otro push.
- **Avisar a Google tras cambios importantes de SEO** (pagina o articulo nuevo,
  titulo, descripcion, URL, cintillo con palabras clave). Lo hace Claude, no
  Anais (decision del 2026-10-15): poner la fecha del dia en el `<lastmod>` de
  esa URL en `sitemap.xml`, empujar y reenviar el sitemap por la API de Search
  Console con la cuenta de servicio
  (`claude@graphite-record-480113-t1.iam.gserviceaccount.com`, clave en
  `~/.claude/credenciales/ga-service-account.json`, scope
  `https://www.googleapis.com/auth/webmasters`, propiedad `sc-domain:easyrobots-ai.cloud`,
  permiso Completo desde el 2026-10-15). Script:
  `python ~/.claude/.agents/skills/ga4-analytics/scripts/sc.py sitemap | busquedas | paginas`.
  "Solicitar indexacion" a mano NO existe en la API: si corre prisa, se le
  pasa a Anais la URL exacta. Cambios pequenos (colores, fotos) no necesitan nada.
- Autenticación de git: el Windows Credential Manager ya la tiene guardada. No
  hace falta ningún token. **Nunca meter un token dentro de la URL de `git pull`
  o `git push`**: queda escrito en `.git/logs/HEAD`. Ya pasó una vez.

## Convenciones que ya sigue el código

- Todo en español: copy, comentarios y mensajes de commit.
- Los comentarios del HTML no explican qué hace el código, explican **por qué se
  decidió así** (ejemplo: por qué el tercer KPI del caso ya no es "conversión
  15,1 %"). Al cambiar algo con criterio detrás, dejar el motivo escrito igual.
- Mensajes de commit sin tildes ni eñes, en minúscula y con prefijo `v6:` cuando
  tocan la landing premium.
- Tipografía Plus Jakarta Sans servida desde `src/assets/fonts/`, no desde Google
  Fonts.
- **Titulares en Fraunces en todas las páginas vivas** (decisión de Anaís,
  2026-10-07, elegida entre cuatro opciones en
  `borradores/prueba-tipografias.html`). h1 y h2 a peso 500, h3 a 560, la
  parte destacada (`<em>`) en cursiva. Va en un `<style>` al final del
  `<head>` de cada página con `!important`. Archivos
  `assets/fonts/fraunces-latin-wght-{normal,italic}.woff2`. Sustituye a la
  SF/Geist de los titulares de coaching y a la Source Serif de estética. El
  texto corrido no cambia. **Una página nueva lleva ese mismo bloque.**

### Antes de cada push, validar

Siempre, sin excepción. Los tres fallos más caros de esta web se habrían pillado
así:

```bash
python -c "import html.parser; html.parser.HTMLParser().feed(open('src/x.html',encoding='utf-8').read())"
node --check <(extraer el <script> a un .js)   # node sí está instalado
curl -s -o /dev/null -w "%{http_code} %{size_download}\n" https://easyrobots-ai.cloud/x.html
```

### Imágenes

Regla de la casa: **WebP, recortada al ratio que ya pide el hueco, y lo más
ligera posible**. Referencia de lo que hay: 7–25 KB por foto. Receta usada:

```python
from PIL import Image
Image.open(origen).convert('RGB').crop(caja).resize(destino, Image.LANCZOS) \
     .save('assets/x.webp', 'WEBP', quality=72, method=6)
```

Los `<img>` llevan `loading="lazy"` y `decoding="async"`.

## Reglas de honestidad (las más importantes del proyecto)

La web de una agencia con un cliente no puede sonar como la de una consolidada.
Estas reglas vienen de errores reales que tenía `index.html` y no se negocian:

- **Cero testimonios inventados.** La home vieja tenía tres (Valeria Costa, María
  Sánchez, Elena Gómez) con insignia de Google Reviews y hasta las iniciales del
  avatar mal puestas. Es práctica comercial desleal en la UE y en Alemania se
  persigue. No reutilizarlos nunca.
- **Cero métricas falsas en vivo.** La v4 tenía un panel "Sistema en directo ·
  Automatizaciones hoy: 24". Ese 24 no salía de ningún sitio y no se movía al
  recargar.
- **Cero caras generadas con IA** etiquetadas con nombre y cargo (ver más abajo).
- **Toda cifra calculada dice que es un cálculo** y enseña la cuenta.
- **El ejemplo nunca puede ir mejor que lo demostrable.** Si el escenario
  ilustrativo convierte al 33 % y el caso real al 15 %, el caso real parece un
  fracaso y le metes a la clínica una expectativa que no vas a cumplir.

## Cómo trabajar aquí sin quemar la sesión (2026-10-05)

Escrito después de una sesión en la que se gastó muchísimo en cosas que no se
habían pedido. Anaís: *"tienes que empezar siempre a evaluar antes de hacer
algo cuál es la manera más rápida, si merece la pena gastar tokens, si te
puedo facilitar yo cosas"*. Esto manda sobre cualquier impulso de revisar.

**Lo que más gasta, por orden real medido en esa sesión:**

1. **Mirar capturas de pantalla.** Cada captura cuesta como varias páginas de
   texto. Se hicieron unas treinta y la mitad eran "a ver cómo ha quedado".
2. **Intentar borrar el texto de una imagen generada.** Cuatro intentos con
   máscaras, interpolaciones y detección del horizonte, cada uno con su
   captura. Y la regla de no hacerlo ya estaba escrita en
   `docs/boceto-a-html.md` desde inmobiliarias.
3. **Medir lo que Anaís ya había dado medido** en la ficha técnica.
4. **Hacer de más**: se pidió "incrústalo sin velo" y además se metieron
   paneles, se ajustaron grises y cintillos.
5. **Esperar al despliegue** con `curl` en bucle.

**Reglas:**

- **Antes de tocar nada, una línea**: qué se va a hacer y qué hace falta de
  ella. Si lo puede dar ella (una imagen, una medida, un copy), se pide; no
  se deduce con scripts.
- **Nunca limpiar texto de una imagen generada.** Se pide limpia. Si llega
  con texto, se dice y se espera; cero intentos de inpainting.
- **Una captura por bloque de cambios, no una por paso.** Y recortada a la
  zona que se está mirando, no la página entera.
- **Si hay medidas dadas, no se mide.** Medir es para cuando no hay nada.
- **Se hace exactamente lo pedido.** Si se ve un problema (texto que deja de
  leerse, una sección que se rompe), se dice en una frase y se espera
  respuesta. No se arregla por iniciativa propia dentro del mismo encargo.
- **No se espera al despliegue.** Se empuja, se avisa y se sigue.
- Revisar a fondo (tres anchos, desbordes, solapes) es para **auditorías**,
  cuando ella lo pide, no para cada cambio.

## Fallos ya cometidos en este proyecto (no repetirlos)

1. **JavaScript huérfano tumba toda la página.** Al borrar la sección "Así
   trabaja EasyRobots" quedó el código que la buscaba; al no encontrarla, el
   navegador paraba de ejecutar **todo lo que venía después**. Síntoma: la
   calculadora no respondía y los contadores se quedaban en cero. Al quitar una
   sección, quitar también su JS, o envolverlo en `if (!el) return;`.
2. **Rejillas escritas en `style="display:grid..."` dentro del HTML no se pueden
   arreglar con media queries.** Era la causa de que la calculadora se saliera de
   la pantalla en el móvil. Todo lo que tenga que cambiar por tamaño, en clases.
3. **Elementos en posición absoluta no ocupan sitio.** La tarjeta Humano se
   pintaba encima del círculo porque para el navegador el recuadro estaba vacío.
   Se arregla reservando el hueco con `padding-top` y fijando el centro en
   píxeles, no al 50 %.
4. **Safari recuerda el scroll** y devolvía siempre al caso real. Resuelto con
   `history.scrollRestoration = 'manual'` y salto al principio si la URL no lleva
   ancla.
5. **Guardar una página desde el navegador le inyecta un script de Kaspersky**
   (`gc.kis.v2.scr.kaspersky-labs.com`), con un identificador de la máquina
   dentro. Pasó con la v4. Revisar siempre los `<script src>` de un archivo que
   venga de "Guardar como".
6. **Un archivo HTML suelto enviado por WhatsApp se ve roto**, porque viaja sin
   `assets/` ni el CSS. Para enseñar algo en el móvil, o se sube al dominio o se
   hace autocontenido.
7. **Chrome headless en Windows no baja de 489 px de ancho de ventana.** Pedir
   `--window-size=430` da una imagen de 430 px pero la página se maqueta a 489
   y la captura sale recortada por la derecha: parece un desbordamiento que no
   existe. Para ver el móvil de verdad hay que meter la página en un `<iframe>`
   de 390 px dentro de una página de prueba y capturar esa. Para comprobar si
   hay desbordamiento real, un script que compare `scrollWidth` con
   `clientWidth` y liste los elementos cuyo `right` se pasa.
8. **Validar solo a 1.440 px no basta.** Dos fallos que vio Anaís salían a
   1.920 y no a 1.440: el velo del pie dejaba la lámpara de la foto justo
   detrás del texto pequeño, y las tarjetas del hero se montaban 4 px porque el
   `min-height` del boceto se queda corto para el texto real. **Comprobar
   siempre 1.440, 1.920 y móvil.**
9. **Medir también la posición de las cajas, no solo los colores.** Preguntas
   como "¿por qué ocupa tanto?" o "¿esto está pegado?" se contestan en un minuto
   con un `<iframe>` y un script que imprima el `getBoundingClientRect()` de
   cada bloque. Así salió que debajo del reproductor de la demo había 281 px
   muertos, y que dos tarjetas se solapaban 4 px. A ojo no se ve.
10. **Una foto panorámica no vale de fondo en el móvil.** Las fotos son casi
    3:1 y en el móvil las secciones son altas y estrechas: con `cover` la
    imagen se amplía tantísimo que solo se ve un parche liso. Medido a 390 px,
    de la foto de "Piezas" se veía el **18 % del ancho** y de la del cierre el
    **13 %**, que caía justo en el cielo naranja. En el móvil no se veía la
    escena, se veía una mancha de color. Solución: un recorte vertical de cada
    foto (`*-movil.webp`) servido por media query a partir de 900 px.
11. **Cuidado al reutilizar iconos que ya estaban en la página.** En la
    reconstrucción de inmobiliarias se dieron por buenos los iconos viejos en
    vez de medirlos contra la referencia, y quedó un icono de teléfono bajo un
    título de WhatsApp. Los iconos son parte del diseño: se comparan uno a uno
    como cualquier otra medida.

## Herramientas disponibles en este equipo

- **Python 3.11 con Pillow** para todo lo de imágenes. **No hay** ImageMagick ni
  `cwebp`; no perder tiempo buscándolos.
- **Node** instalado, solo para `node --check`.
- **ffmpeg** instalado (vídeo).
- **No hay OCR** ni forma de leer texto dentro de una imagen.
- Las capturas de móvil de Anaís son de 945×2048. Cuando la conversación
  acumula muchas imágenes, el límite baja a 2.000 px por lado y dejan de poder
  abrirse: hay que pedirle que **recorte** la captura o que pegue el texto.

## Asistente de dudas en todas las paginas (2026-11-13)

Icono flotante abajo a la derecha, (13/11, Anais: solo en 11 paginas: home, los 5 nichos, AURA Business y Setter y los 3 productos de
entrada; NO en guias, blog ni condiciones). Es `src/js/dudas.js`, cargado con `<script src="/js/dudas.js" defer>`
antes de `</body>`. Pagina nueva = anadir esa linea.

- **Que es:** un chat que contesta SOLO dudas sobre lo que hay en la web (que incluye cada producto, precios,
  plazos, garantias, como se contrata). Lo decidio Anais el 13/11: nada de como esta hecho el sistema por
  dentro, ni herramientas, ni proveedores; para lo que no sabe, manda a la auditoria gratuita o a
  info@easyrobots-ai.cloud. No pide datos, no agenda, no cobra.
- **Como funciona:** mismo camino que los chats de las landings (`chat-demo.js`): webhook
  `easyrobots-web` del AGENTE MULTICANAL, cuenta `easyrobots`, personalidad `dudas`. El agente vive en el
  CRM (SQL 295 del proyecto EasyRobots Crm; su prompt en `EasyRobots Crm/tools/prompt_dudas_web_v1.txt`): sin
  acciones, sin acceso a documentos internos, solo sabe lo que dice su prompt (la informacion publica de la web).
  **Si cambia un precio, un bono o una condicion en la web, hay que cambiarlo tambien en ese prompt**
  (se vuelve a aplicar con `tools/gen295.js` + run.js, o editando el agente en el CRM).
- La web le dice al agente en que pagina esta la persona (prefijo oculto en el primer mensaje de cada pagina).
- Sin cookies: sesion e hilo en sessionStorage. Tope: 20 mensajes por sesion y 400 letras; la base ademas
  limita por visitante y por hora. En la cabecera dice que es una IA y enlaza a /privacy.html.
- Las marcas `[[botones: a | b]]` del agente se pintan como botones de respuesta rapida.
- Pendiente al publicar: probarlo en una pagina real (que conteste, que no cuente nada de dentro, que el
  icono no tape nada en el movil).

## Documentos del proyecto

- `docs/marca.md` — la marca y cómo se escribe (antes estaba en este archivo).
- `docs/historial.md` — el diario de cada landing (antes estaba en este archivo).
- `docs/blog.md` — el blog: archivos, reglas, flujo de n8n y temas.

- `docs/nichos-dolores.md` — dolores, piezas y planteamiento de cada landing de
  nicho (inmobiliarias, concesionarios, coaches e infoproductores, ecommerce,
  dental), y cómo se sostiene la prueba mientras solo haya un caso de éxito.

- `docs/copys/` — el copy aprobado de cada landing de nicho, separado del HTML.
  Cuando se maqueta una página, el texto sale de ahí.
- `docs/capacidades-reales.md` — qué puede hacer el sistema hoy, por nicho. Se
  lee ANTES de escribir copy.

- `docs/fondos-con-chatgpt.md` — cómo se hacen los fondos con ChatGPT: se
  decide la idea de cada sección con Anaís, qué medidas pedir según el hueco,
  la plantilla de prompt, cómo se monta en CSS y los prompts que funcionaron
  en estética. **Se lee antes de hacer los fondos de otra landing.**

- `docs/boceto-a-html.md` — cómo se convierte un boceto de IA en HTML real:
  por qué no existe código detrás, cómo se mide en vez de mirarlo a ojo, y las
  trampas en las que ya se cayó. **Se lee antes de reconstruir una sección.**

