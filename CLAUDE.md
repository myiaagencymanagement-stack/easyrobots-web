# EasyRobots Web

Web de EasyRobots (sistemas de IA para clínicas estéticas). Repo:
`myiaagencymanagement-stack/easyrobots-web`, rama única `main`.

## Qué es EasyRobots (y qué no)

EasyRobots **no vende "un chatbot de IA"**. Vende esto:

> Diseñamos, construimos y mantenemos un sistema conectado para la clínica, que
> automatiza procesos y conversaciones usando las herramientas que ya utiliza.

El sistema puede tocar: WhatsApp y conversaciones, gestión de citas, agenda,
confirmaciones, recordatorios, seguimiento y postoperatorio, reseñas y
reputación, reactivación de clientas dormidas, e integraciones con el software
de la clínica. **Siempre con intervención humana cuando hace falta.**

Resumido en la web: *"Piezas, no un paquete cerrado"* y *"EasyRobots se integra
con las herramientas que ya usas en tu clínica para crear un sistema conectado y
que trabaja por ti"*.

### Qué se vende de verdad (y por qué la IA sí se nombra)

**Se vende el resultado, no la tecnología.** El titular habla de lo que la
clínica gana: menos trabajo manual, menos oportunidades perdidas, mejor
seguimiento, más control, un sistema conectado, automatización donde tiene
sentido e intervención humana cuando hace falta.

Pero **la palabra IA no se esconde**, y esto es un matiz importante:

- En la **home corporativa** se dice clarísimo que EasyRobots es una agencia de
  IA. Hace falta para la marca, para el SEO y para que un visitante entienda en
  dos segundos a qué te dedicas. Ahí sí se nombran **agentes de IA, chatbots,
  automatización e integraciones**.
- En las **landings de nicho** la IA es el mecanismo y pasa a segundo plano: el
  titular habla del problema de esa clínica.

Lo que se evita en los dos casos es el **titular genérico** tipo *"Agencia de
inteligencia artificial especializada en automatización para empresas"*. Eso no
dice nada y podría firmarlo cualquiera.

### La diferencia frente a "una empresa que instala un chatbot"

- **No:** te ponemos un chatbot.
- **Sí:** analizamos cómo trabaja tu clínica y construimos las piezas que
  realmente necesita.

De ahí salen dos frases que se conservan en cualquier página futura: *"Antes de
montar nada, estudiamos tu clínica"* y *"Ninguna clínica funciona igual que
otra, así que ningún sistema sale igual que otro"*.

## Público objetivo

Propietarias y responsables de clínicas pequeñas y medianas de estética,
medicina estética, microblading y micropigmentación. Más adelante, dental y
nichos parecidos. **Gente no técnica.**

No quieren entender APIs, webhooks, n8n, agentes ni LLMs. Quieren saber: qué
problema se resuelve, qué trabajo deja de hacer su equipo, qué oportunidades
deja de perder, cómo afecta a sus citas, cómo se integra con lo que ya usa,
quién controla el sistema, qué pasa si algo falla, cuánto cuesta y qué ocurre
después de contratarlo.

Comunicación: **clara, directa, humana, premium y concreta**. Nunca escrita para
programadores.

## El problema que comunicamos

No es "no tienes IA". Es:

> La clínica ya recibe oportunidades, pero pierde parte de ellas por el camino.

WhatsApps sin responder a tiempo, consultas que quedan sin contestar, gente que
pregunta y no reserva, citas sin confirmar, cancelaciones de última hora,
seguimientos que nadie hace, antiguas clientas que desaparecen y dinero dormido
en la base de clientes.

**WhatsApp es la puerta de entrada al problema, no todo el producto.** El hero
dice *"Cada WhatsApp sin responder es una cita perdida"*, pero el posicionamiento
va más allá.

## Dudas que la web tiene que resolver

Todas las páginas deben dejar respondidas estas ocho:

¿Qué pasa con mis datos? · ¿Voy a perder el control? · ¿Es simplemente un
chatbot? · ¿Quién mantiene esto? · ¿Qué ocurre cuando la IA no sabe qué
responder? · ¿Se adapta a mi clínica? · ¿Tengo que cambiar todas mis
herramientas? · ¿Qué pasa si no funciona?

Por eso existen las secciones de humano, transparencia, sistema conectado,
personalización, garantía y proceso. No son relleno.

## Estructura narrativa de la v6

Es la base conceptual de la marca, no solo el orden de una página:

Hero (el problema) → Problema (comparan clínicas, la velocidad decide) → Sistema
(no es un paquete cerrado) → Reactivación (dinero en la base que ya tienes) →
Caso real (prueba) → Calculadora (lo que cuesta no atender) → Control y
transparencia (objeciones de datos) → Equipo / humano (no somos una centralita)
→ Garantía (14 días) → CTA (reservar llamada).

El hero además **demuestra visualmente** el sistema con la conversación, la
agenda y el seguimiento. EasyRobots enseña el producto, no habla de él.

## Lenguaje visual

**Premium dark technology, no cyberpunk AI.** Elegante, oscuro, tecnológico,
minimalista, sobrio, moderno y muy limpio.

Paleta: negro y azul marino muy oscuro, blancos, grises suaves, y **azul
eléctrico controlado como acento**. El azul es acento, no inunda la página.

**Nada de morado, rosa, rojo, naranja ni neones excesivos.** El verde, solo donde
hay WhatsApp de verdad: ya hubo que corregir una versión en la que todo acabó
pareciendo WhatsApp.

Sí: fondos oscuros, tarjetas apenas más claras que el fondo, bordes muy sutiles,
esquinas redondeadas, sombras discretas, brillos azules muy controlados,
tipografía grande y limpia, mucho espacio negativo, líneas finas, diagramas
minimalistas, iconos sencillos y números grandes cuando hay datos.

No: tarjetas gigantes, dashboards genéricos, exceso de cristal esmerilado,
degradados enormes, ilustraciones 3D de robots, estética "generada con IA" y
demasiados efectos.

### Dos piezas que son identidad de marca

- **El diagrama del sistema** (núcleo + piezas conectadas + humano). No se
  sustituye por un dashboard SaaS genérico. Debe leerse como *sistema conectado*,
  nunca como *lista de funcionalidades*.
- **El caso real** debe sentirse como *case study premium*, no como panel de
  analítica. Los números 53, 8 y 2.000 € son protagonistas, pero integrados en la
  composición, no en tres cajones enormes.

## Arquitectura de la web: tres niveles

Decisión de arquitectura tomada el 2026-09-24. **La v6 NO es la plantilla de la
home.** EasyRobots se estructura como **marca horizontal de IA + páginas
verticales muy especializadas**:

| Nivel | URL | Qué es |
|---|---|---|
| **1 · Home** | `/` | EasyRobots como **agencia de IA**. Amplia. IA, agentes, chatbots, automatización, sistemas y sectores |
| **2 · Nicho** | `/estetica`, `/dental`, `/microblading` | Solución específica. Es lo que hoy es la v6 |
| **3 · Funnel VSL** | — | Conversión pura. Vídeo protagonista |

Las tres **parecen de la misma familia** (mismo color, tipografía, botones,
tarjetas, bordes, espaciado, fondos, estilo de números y diagramas) pero **cada
una tiene arquitectura propia**. No queremos cuatro páginas idénticas.

### SEO: cada nivel con su intención, sin canibalizarse

- **Home:** agencia de inteligencia artificial, agencia IA, automatización con
  IA, agentes de IA, chatbots con IA, automatización de procesos, sistemas de IA
  para empresas.
- **Verticales:** IA para clínicas estéticas, automatización para clínicas
  estéticas, chatbot para clínicas, IA para dentistas, automatización para
  clínicas dentales.

**La home no debe pelear por "automatización para clínicas de estética".** Si lo
hace, compite contra sus propias páginas verticales y se estorban entre ellas.

### Las tres capas del producto

Sirven para ordenar cualquier página:

1. **IA conversacional** — lo que el cliente ve.
2. **Automatización** — lo que ocurre detrás.
3. **Sistema** — cómo se conecta todo.

Es mejor posicionamiento de agencia que intentar vender solo "chatbots".

### Recorrido previsto de la home (nivel 1)

```
HERO
  IA que trabaja dentro de tu negocio.
  Diseñamos agentes de IA, chatbots y automatizaciones conectadas a las
  herramientas que ya utilizas.
  CTA: Ver cómo funciona · CTA 2: Hablar con EasyRobots
      ↓
  "No necesitas otra herramienta. Necesitas que las que ya tienes
   trabajen juntas."
      ↓
QUÉ CONSTRUIMOS
  Agentes de IA · Chatbots · Automatización · Integraciones · Sistemas a medida
      ↓
CÓMO TRABAJAMOS
  Analizamos → Diseñamos → Construimos → Mantenemos
      ↓
UN SISTEMA, NO UN CHATBOT
  El diagrama del núcleo, en versión general (no solo clínicas)
      ↓
SOLUCIONES POR SECTOR
  Estética · Dental · Microblading · …   ("Ver solución para X →")
      ↓
CASOS / RESULTADOS
  Pocos y concretos
      ↓
POR QUÉ EASYROBOTS
  Personalización · Control · Humano · Transparencia
      ↓
CTA
  Cuéntanos qué quieres automatizar.
```

Textos de apoyo ya aprobados para esa home:

> **IA para conversaciones que no pueden esperar.** Chatbots y agentes de IA que
> responden a tus clientes, resuelven dudas, califican consultas y pueden llevar
> una conversación hasta la reserva.

> **Automatizaciones que trabajan detrás.** Conectamos WhatsApp, agenda, CRM,
> formularios y otras herramientas para que las tareas repetitivas ocurran
> automáticamente.

> **Sistemas diseñados para tu negocio.** No instalamos un paquete cerrado.
> Diseñamos las piezas que realmente necesita tu empresa.

### Funnel VSL (nivel 3)

Mismo sistema visual, arquitectura más orientada a conversión. El vídeo es el
protagonista. Objetivo: que el visitante vea el VSL y pida una auditoría de su
clínica.

Orden: Hero + VSL → Problema → Oportunidad → Sistema → Prueba → Transparencia →
Proceso → CTA (analizar la clínica).

**Regla:** tiene que parecer *otra página de EasyRobots*, no *una landing
genérica de VSL*. Solo cambian la arquitectura, la cantidad de contenido, la
prioridad del vídeo, el orden de los argumentos y la intensidad del CTA.

### Landings por nicho (nivel 2)

Todas comparten el **mismo sistema de diseño**. Cambian copy, casos, imágenes,
ejemplos, problemas, servicios, objeciones y CTA. **No se crea una identidad
nueva por nicho.**

### Antes de empezar una página nueva

Identificar cuál de los cuatro tipos es: home de agencia, landing principal de
nicho, landing VSL o página de lead magnet / auditoría. Cada una tiene
arquitectura distinta, pero todas pertenecen al mismo sistema visual.

### Decisión de fondo, para revisar cada cierto tiempo

Qué quiere ser EasyRobots dentro de dos o tres años. Si es **agencia de IA
horizontal que usa verticales para vender**, la home va amplia (que es lo
asumido hoy). Si acaba siendo una **empresa especializada solo en clínicas**, la
home tendría que estrecharse mucho. Toda la arquitectura de arriba parte de la
primera opción.

## Regla para futuras decisiones## Regla para futuras decisiones

Antes de proponer un diseño, un copy o una estructura, la pregunta es:

> ¿Esto hace que EasyRobots parezca una empresa especializada y premium que
> construye sistemas para clínicas?

Si la respuesta es no, no entra. Y sobre todo: **no convertir EasyRobots en una
startup genérica de IA.**

**La v6 es la fuente de verdad visual.** Las páginas nuevas son una evolución del
sistema, no una reinvención. No inventar una identidad visual nueva sin que
Guillermo o Anaís lo pidan. Si una propuesta puede alejarse del lenguaje visual
de la v6, **decirlo antes de implementarla**. Prioridad: coherencia de marca,
claridad comercial, credibilidad y conversión, por encima de efectos visuales
llamativos.

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
- Autenticación de git: el Windows Credential Manager ya la tiene guardada. No
  hace falta ningún token. **Nunca meter un token dentro de la URL de `git pull`
  o `git push`**: queda escrito en `.git/logs/HEAD`. Ya pasó una vez.

## Páginas y URLs (reorganizado el 2026-10-02)

Hasta esta fecha convivían la página buena de cada nicho y tres o cuatro
versiones anteriores suyas, todas en la raíz y todas con nombre `prueba-*`.
Ahora **cada nicho tiene una sola página viva, en su propia carpeta**, y todo lo
demás está en `src/borradores/` con el sufijo `-version-antigua`.

| URL | Archivo | Qué es |
|---|---|---|
| `/` | `src/index.html` | Home de agencia (nivel 1). Era `prueba-index-v2.html` |
| `/estetica/` | `src/estetica/index.html` | Era `prueba-clinicas-premium-v2.html` |
| `/dental/` | `src/dental/index.html` | Era `prueba-dental-v2.html` |
| `/inmobiliarias/` | `src/inmobiliarias/index.html` | Era `prueba-inmobiliarias-v3.html` |
| `/concesionarios/` | `src/concesionarios/index.html` | Era `prueba-concesionarios-v2.html` |
| `/ecommerce/` | `src/ecommerce/index.html` | Era `prueba-ecommerce-v2.html` |
| `/coaching/` | `src/coaching/index.html` | Era `prueba-coaching-v2.html`. Publicada e indexable el 2026-10-02 |

**Por qué carpetas y no `estetica.html`:** nginx sirve `carpeta/index.html` con
solo pedir `/carpeta/`, sin tocar ninguna configuración. La URL queda corta, sin
`.html`, y se puede poner en un anuncio o decir por teléfono. El precio es que
**las rutas internas pasan a absolutas** (`/assets/…`, no `assets/…`): una
página dentro de una carpeta ya no tiene el `assets/` al lado. Si se crea una
página nueva en carpeta, escribir las rutas con barra inicial desde el principio.

Lo que sigue en la raíz y se queda ahí:

- `funnel-*.html` — los seis funnels VSL. **Publicados y con `noindex`**, que es
  lo correcto: van con tráfico de pago y así no compiten en Google contra la
  landing del mismo nicho.
- `privacy.html`, `gracias.html` (ahora `noindex`), `recurso.html`, `robots.txt`,
  `sitemap.xml`.
- `src/guias/` — lead magnets. Las guías entregadas pasan a `noindex`: si Google
  las indexa, se descargan sin dejar el email y el funnel deja de captar. El
  índice `guias/index.html` sí se deja indexable.
- `src/lanzamientos/` — landings de coaching y ecommerce.

### Los borradores

`src/borradores/` guarda **todas** las versiones anteriores, ninguna se borró.
Todas llevan `noindex` y la carpeta está en `Disallow` del `robots.txt`, para que
no compitan contra la página buena de su nicho. Sus rutas también se pasaron a
absolutas, así que siguen abriéndose con sus imágenes y sus tipografías.

## Landing de coaching v2 (2026-10-02)

Reconstruccion contra su boceto, en `src/assets/boceto/coaching-v2/` (referencia,
hoja de fondos, la tira de secciones claras, la CTA aspiracional y la referencia
del diagrama). Los recortes salen de `docs/fondos-coaching-v2.py`.

Lo que conviene saber al tocarla:

- **La pagina casi no tiene JavaScript propio.** Es todo CSS; los unicos
  scripts son el del calendario y el de la barra comun (ver "La barra de
  navegacion"). Si algo deja de moverse, no busques un observer: no lo hay.
- El bloque de equipo va con **retratos redondos** (`.cara .foto-r`,
  `aspect-ratio:1`, `border-radius:50%`) y `object-position: center 22%`. Usa los
  mismos `guille.webp` y `anais.webp` que el resto; no hace falta recorte aparte.
- Los seis CTA son `<a href="#hablemos">` con `data-cal`. Sin JavaScript siguen
  llevando a la seccion de contacto.
- Ojo al validarla con capturas: con `decoding="async"`, el **ultimo** retrato
  sale en blanco en Chrome headless aunque en el navegador cargue bien. Ya paso
  en dental con `loading="lazy"`. No es un fallo de la pagina.

## Los CTA van todos al calendario (2026-10-02)

Decision de Anais: **ningun boton de la web lleva al funnel**, porque los videos
de los VSL todavia no estan grabados. Todos abren el calendario de GHL:

    https://api.leadconnectorhq.com/widget/booking/XMQy1fOiMEz88wzKLVPe?nicho=<nicho>

Los funnels **siguen publicados** y accesibles por su URL; lo que se corto es el
camino desde la web hacia ellos. Cuando esten los videos, se decide si vuelven.

Como esta montado, que conviene no cambiarlo sin motivo:

- El patron es el que ya tenian inmobiliarias y coaching: un **modal** con un
  `<iframe>` que **se monta al abrir, no en la carga de la pagina**. Asi la web
  no hace ninguna llamada a GHL hasta que alguien pulsa, que es lo que permite
  seguir sin banner de cookies.
- El gancho es el atributo `data-cal` (en inmobiliarias, `data-reserva`). Para
  añadir un CTA nuevo basta con ponerle el atributo.
- Los botones **siguen siendo `<button>` y los enlaces siguen siendo `<a>`**. No
  se convirtieron unos en otros: estas paginas estan medidas al pixel contra su
  boceto y cambiar la etiqueta cambia los valores por defecto del navegador. Los
  `<a>` conservan su `href="#hablemos"` y el JS hace `preventDefault()`, asi que
  sin JavaScript el boton sigue llevando a la seccion de contacto.
- El `?nicho=` identifica de que landing viene la reserva.

Pendiente: el calendario sigue sin probarse de punta a punta con una reserva real
que confirme que el evento llega a GHL.

## La barra de navegacion (2026-10-04)

Peticion de Anais. **La marca, en las siete paginas, es solo la palabra
EASYROBOTS** espaciada (Plus Jakarta Sans 500, 19 px, `letter-spacing: .32em`),
sin icono de robot ni cuadro de color: la que ya tenia `/estetica/`. Blanca
sobre los heroes oscuros y negra (#111) en la home, que es clara.

Las **cinco landings de nicho** (dental, inmobiliarias, concesionarios,
ecommerce, coaching) comparten la misma barra, con clases `bn-` y el mismo
bloque de CSS y JS pegado en cada una:

- Arriba del todo, transparente sobre la foto, con **el nicho** (subrayado en
  azul, lleva a la primera seccion) · **Ver demostracion** (`#demo`) ·
  **Quienes somos** (`#equipo`) y el boton **Reservar una llamada**.
- Al bajar 40 px se queda **fija y oscura con solo la marca y el boton**. Lo
  hace un script de cinco lineas que pone la clase `bn-baja`.
- Por debajo de 1000 px de ancho ya solo van marca y boton.
- En dental y coaching la barra antigua ocupaba sitio en el hero; la nueva es
  fija, asi que lleva un `.bn-hueco` detras para que el hero no suba.
- La barra antigua de cada pagina (`.h-nav`) se quito del HTML; su CSS se
  quedo y no afecta a nada.

Estetica y la home conservan su propio menu; solo cambio la marca.

Ojo al validarlo con capturas: en Chrome sin cabeza **las transiciones se
quedan congeladas en el tiempo 0**, asi que al deslizar los enlaces salen
visibles aunque en el navegador se oculten. Comprobado con `getAnimations()`.

## Fotos de equipo reales (2026-10-02)

Anais paso **las dos fotos, de la misma sesion** (misma pared azul, misma planta,
mismo panel de listones), asi que el bloque de equipo deja de tener un hueco:

| Archivo | Quien | Origen |
|---|---|---|
| `assets/guille.webp` | Guillermo | 900x765, recorte 4:3,4 de la foto nueva |
| `assets/anais.webp` | Anais | 900x765, mismo recorte |
| `assets/conce-guillermo.webp` / `conce-anais.webp` | los dos | 552x426, para el hueco apaisado de concesionarios |

Estan puestas en las siete paginas vivas y tambien en las dos landings de
`lanzamientos/`, que apuntaban a un `anais.png` **que ni existia ni era ella**.

Dos cosas que no cambian:

- **Los retratos de IA siguen prohibidos.** Los antiguos (`nosotros.png`,
  `nosotros.webp` y el `anais.webp` viejo) estan respaldados en
  `src/borradores/retratos-ia/`. No volver a ponerlos con nombre y cargo.
- Se subieron a 900 px de ancho porque los huecos de equipo son **verticales**
  (288x392, 4:4,8) y con los 560 px de antes la foto se ampliaba y se veia blanda.

## SEO: lo que se dejo montado (2026-10-02)

- **Una sola URL por nicho**, en carpeta, sin `.html` (ver "Paginas y URLs").
- Las **siete** paginas buenas pasan a `index, follow, max-image-preview:large`.
  Coaching entro la ultima, el mismo dia, cuando se termino su v2.
- Cada pagina lleva `title` propio con la palabra clave de su nivel,
  `description` de 130-150 caracteres, `canonical` absoluto, Open Graph,
  Twitter Card y **JSON-LD**: `Organization` + `WebSite` en la home, y
  `Service` + `BreadcrumbList` en cada nicho.
- **`og:image` ya existe.** Antes apuntaba a un `assets/social-preview.jpg` que
  nunca se creo, asi que el enlace salia sin imagen al compartirlo. Ahora hay un
  `assets/og-<nicho>.jpg` de 1200x630 recortado del propio hero de cada pagina.
- `sitemap.xml` nuevo, con las siete paginas, `/guias/` y `privacy.html`. **Fuera
  del sitemap**: borradores, funnels, guias entregadas y las paginas de gracias.
- `robots.txt` con `Disallow: /borradores/` y la linea `Sitemap:`.
- Se respeta la regla de no canibalizar: la home titula por *agencia de IA* y
  cada vertical por *IA para \<sector\>*. La home no pelea por ninguna de las dos.
- Un solo `<h1>` por pagina, comprobado.

Lo que **no** se ha tocado y sigue pendiente de verdad: `privacy.html` carga
Google Analytics sin consentimiento y dice cosas que no son ciertas, y no hay
Impressum. Eso es lo unico realmente expuesto de la web.

## Convenciones que ya sigue el código

- Todo en español: copy, comentarios y mensajes de commit.
- Los comentarios del HTML no explican qué hace el código, explican **por qué se
  decidió así** (ejemplo: por qué el tercer KPI del caso ya no es "conversión
  15,1 %"). Al cambiar algo con criterio detrás, dejar el motivo escrito igual.
- Mensajes de commit sin tildes ni eñes, en minúscula y con prefijo `v6:` cuando
  tocan la landing premium.
- Tipografía Plus Jakarta Sans servida desde `src/assets/fonts/`, no desde Google
  Fonts.

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

## El caso real de Pilar Márquez

Único caso publicable. **Permiso concedido** por la clienta (confirmado por Anaís
el 2026-09-23). Instagram: `microblading_hairstroke_madrid`.

Lo que pasó, y hay que contarlo entero porque lo que más vende no son los 8:

- Pilar **no tenía base de datos de clientas**. La construimos nosotros
  recuperando de su calendario cada cita pasada, con su técnica y su fecha. De
  ahí salieron 53 clientas dormidas. *Ese* es el trabajo que se vende, no el
  envío de mensajes.
- 53 contactadas → **8 volvieron a reservar** → **2.000 €** (8 retoques × 250 €,
  precio del retoque anual en esa clínica). Sin gastar un euro en publicidad.
- **Las otras 45 no dijeron que no**: todavía no les tocaba el retoque, y así lo
  contestaron. Siguen en el sistema para cuando les toque.
- **Ninguna se molestó ni se dio de baja.** Varias contestaron dando las gracias.
  Eso mata la objeción número uno de cualquier clínica: "voy a dar la brasa a mis
  clientas". Va contado **como experiencia de Pilar, en pasado y con su nombre**,
  no como argumento genérico: ahí está el valor.

**El tercer KPI ya no es "conversión 15,1 %"** a propósito. Llamar conversión a
eso convertía a 45 clientas en fracasos cuando no lo eran, y además obligaba a
competir contra el escenario ilustrativo de más arriba. Ahora es el dinero
recuperado, con la multiplicación escrita al lado.

Técnicas: **microblading y hairstroke**, y debajo "técnicas de micropigmentación".

### El mensaje de seguimiento

Es el texto real que manda su sistema, con nombre de paciente cambiado. Va con
formato de **plantilla de WhatsApp Business** (título en negrita, cuerpo, pie con
el remitente, doble check azul) porque una dueña de clínica reconoce ese formato
y entiende sola que es un envío automático con plantillas aprobadas.

> **Seguimiento de tu tratamiento**
> Hola, Marta.
> Ha pasado ya un tiempo desde que realizamos tu tratamiento de cejas y quería
> recordarte que ya estaríamos entrando en el momento ideal para valorar tu
> retoque anual.
> Si quieres, puedes enviarme una foto actual de tus cejas y te digo cómo las veo
> y si considero que ya es buen momento para realizarlo.
> — Pilar Márquez · Microblading

**La clave está en que no pide cita, pide una foto.** A un mensaje que pide cita
se le dice que no; a uno que ofrece mirarte las cejas y decirte si ya toca, se le
dan las gracias. Por eso ninguna se molestó. Encaja con el chip del diagrama
"Seguimiento / Foto y valoración", que lleva icono de cámara.

**Nunca publicar la captura original** del mensaje: lleva nombre, teléfono y cara
de una paciente asociados a un tratamiento estético, o sea dato de salud del
artículo 9 del RGPD.

### El escenario de reactivación

Va **antes** del caso real: primero te reconoces, luego te lo demuestro. Cifras
**160 / 50 / 10** (en ficha / llevan meses sin reservar / vuelven a reservar), un
20 %, etiquetado como ejemplo. Se quitó la columna "15 reciben el mensaje" porque
el sistema escribe a **todas**, y eso precisamente es lo que se vende: a mano
escribes a 15 porque te cansas.

## Garantía (las dos cosas son ciertas y no se pisan)

- **14 días** para ver el sistema funcionando. Si no funciona como se dijo o no
  encaja, se devuelve el dinero. **Cubre el montaje.**
- **El primer mes de mantenimiento no se cobra.** Cubre la cuota, mientras se
  termina de afinar.

Antes parecían contradictorias porque no se decía qué cubría cada una.

**Las dos aplican a todos los nichos**, no solo a clínicas: confirmado por Anaís
el 2026-09-26. Se puede escribir en cualquier landing sin condicionarlo.


## Landing de inmobiliarias: donde se quedo (2026-09-28)

Se esta reconstruyendo el boceto aprobado como web real. **La pagina viva del
trabajo es `src/inmobiliarias/index.html`.**

| Archivo | Que es |
|---|---|
| `prueba-inmobiliarias.html` | La version anterior, en HTML propio. **No tocar**, se deja de referencia |
| `prueba-inmobiliarias-v1.html` | Primer hero sobre foto. Superada |
| `prueba-inmobiliarias-v2.html` | Los nueve PNG del boceto con capa funcional encima. Superada, pero sirve para ver el boceto tal cual |
| **`prueba-inmobiliarias-v3.html`** | **La buena.** Todo HTML, sin imagenes de texto |
| `prueba-hero-comparar.html` | Deslizador que superpone boceto y reconstruccion. Se usa para validar cada seccion |

Cada iteracion sale con su sufijo y **no se reescribe la anterior**.

### Cual es la pagina buena de cada nicho

Ojo, que hay dos juegos de landings y es facil trabajar sobre la equivocada:

**Desde el 2026-10-02 esto ya no es un problema**: hay una sola página viva por
nicho, en su carpeta, y todo lo anterior esta en `src/borradores/`. La tabla de
equivalencias esta en "Paginas y URLs". Lo que sigue abajo describe como se
construyo cada una y se conserva por las medidas y las decisiones.

Las `prueba-*` del 2026-09-26 son las reescrituras con el copy aprobado tras
rellenar `docs/capacidades-reales.md`. Las de nombre limpio son de antes y
varias se apoyan en la voz, que estaba aparcada. En concesionarios se nota a la
primera: la vieja abre con *"Cada llamada que no se coge es una revision o un
coche"* (tesis de centralita, aparcada) y la buena con *"Vender es la mitad del
negocio. La otra vuelve al taller"* (los dos relojes, que es el eje aprobado).

### Estado por seccion de la v3

Hero, "El momento", "Como funciona", "Demostracion", "El sistema" y "Lo mejor
de cada uno" estan reconstruidos contra la referencia nueva, medidos pixel a
pixel. **Quedan la CTA y el pie.**

La 06 "Lo mejor de cada uno" adopta la forma de las demas: texto a la izquierda
y los dos cuadros a su derecha, no el titular arriba a lo ancho. Medido:
texto 290 u, cuadro 257 u, hueco 10 u, el segundo 240 u; icono del titulo 24 u,
texto a 48 u del borde, filas a 14,3 u. Fondo de seccion #F5F9FC y cuadro
#ECF4FC. El copy de las dos listas es el aprobado, que tiene seis lineas por
cuadro en vez de las cinco del boceto.

El bloque de garantia cambia de titular por peticion de Anais: pasa de "Hay
personas detras" a **"No somos una centralita. / Somos las personas que
disenan, construyen y mantienen tu sistema."**

La foto de fondo de "El sistema" ya es la buena: Anais la paso entera
(2043x770) y esta en `assets/escena-inmobiliaria.webp`, sin recortar, solo
convertida a WebP (114 KB, calidad 68). El velo se ajusto **midiendo**: se
comparan franjas sin texto de arriba y de abajo de la seccion contra las
mismas franjas de la referencia, hasta que el brillo medio coincide. Ojo, la
izquierda de la foto es oscura de por si; el velo tiene que frenar la derecha
(lampara y sofa), no la izquierda.

En "Como funciona" la referencia manda una disposicion distinta: el texto a la
izquierda y las cuatro tarjetas **a su derecha en la misma fila**, no debajo.
Medido sobre una referencia de 1024 px cuyo contenedor son 814 px: texto 302 u,
tarjetas de 110 u con 24 u de hueco, 114 u de alto, icono de 32 u en cuadrado
relleno (azul #0075FE, verde #06CC65) y no en caja hueca, relleno de tarjeta en
degradado de #1A202A a #0B121D. El copy es el aprobado, que es mas largo que el
del boceto, asi que las tarjetas salen unos 60 u mas altas. Dos cosas medidas
que **no** se aplicaron: el fondo de la referencia es #030910 y no el token
--oscuro (#0A1220), y su cintillo es cian (#00A8F5) y no --azul-claro; las
dos son globales y tocarlas afectaba a otras secciones.

La 04 "Demostracion" **pasa de oscura a clara** (#F5F9FC, muestreado): en la
referencia esa seccion va sobre fondo claro y el reproductor es una tarjeta
oscura dentro. Medidas del mismo contenedor de 814 u: texto 295, reproductor
204x120, panel 291, hueco 12. El detalle del reproductor se midio sobre el
recorte de 926 px (factor 0,6846): circulo de 27 u, onda de 145 u centrada a
68 u, pista de 109 u a 101 u. **Las 43 alturas de la onda estan leidas barra a
barra de la referencia**, no inventadas; por eso hay silencios en medio y no
parece de dibujo animado, que era la queja. El panel pasa a tabla clara
(#EEF6FE, linea #E1EBF6, check verde #12B85A, etiqueta #5C6980, valor #2E323C).
La conversacion **no esta en la referencia**: se monta debajo, a todo lo ancho
del contenedor, con el mismo lenguaje del panel, y se alargo de 3 a 7 lineas
hasta cerrar la visita. Las tres primeras son las aprobadas, sin tocar.
La juntura con "El sistema" ya no se ve: esa seccion pasa a oscura.

La 05 "El sistema" **pasa de clara a oscura**. La foto del hero se usa de
relleno provisional al 16 % con el velo muy cerrado, porque **no es la foto de
la referencia**: alli el diagrama se apoya en negro (#030A13) y la foto solo se
intuye por el borde derecho, y es un salon oscuro, no la terraza del hero.
Esta pedida a Anais; se cambia sustituyendo el archivo. Cambia el diagrama entero: ya no son seis fichas en
dos columnas con un cuadro en medio, sino un nucleo con cables tipo circuito
hacia seis piezas, y **la lista de lo que se conecta se va a la derecha**, que
es donde la pone la referencia. El copy no se toca: el titular y la entradilla
son los aprobados y los seis nombres de las fichas pasan tal cual a la lista.

Medidas: texto 290 u, diagrama 240x205 u, lista a partir de 647 u; pieza 40 u,
nucleo 58 u, check 11 u con 24,7 u de paso. Colores del pixel: fondo #030A13,
pieza #131823, nucleo #0272FB, cable de #0260AC a #03B4FF.

Tres decisiones que conviene no reabrir:

- **Las piezas NO van en circulo.** Se probo con un circulo de 100 u cada 60
  grados, aplicando la leccion del diagrama de clinicas, y Anais lo rechazo:
  "no esta igual". La silueta de la referencia es ancha y baja (2,4:1) y las
  posiciones no son regulares. Medidas sobre el recorte de 482 px, donde la
  tarjeta mide 63 px (factor 0,635 hacia el contenedor de 814 u), desde el
  centro del nucleo: arriba (+-83,8 / -26,0), en medio (+-111,8 / +22,9),
  abajo (+-61,9 / +43,2). Caja de 264 x 110 u. La diferencia con clinicas es
  que alli el circulo era la idea; aqui la referencia manda.
- **El nucleo lleva un robot**, no una estrella de cuatro puntas. Era lo que
  mas cantaba en la primera version.
- **El logotipo de HubSpot si va**, en tarjeta naranja #FB5328, que es la unica
  de color solido del diagrama. La regla que lo prohibia queda derogada el
  2026-09-28 en `capacidades-reales.md`. El logotipo esta redibujado en SVG.
- **Cuidado con los nombres de clase cortos.** Las piezas se llamaron `.m1` a
  `.m6` y `.m2` ya existia: es la clase de la seccion "El momento", que pinta
  `background:#FEFEFD`. La pieza de WhatsApp salia en blanco y el CSS de la
  pieza parecia correcto. Ahora van con prefijo `pz`.

Efecto colateral necesario: `#equipo` tenia `padding-top:0` porque venia pegada
a otra seccion clara. Con la 05 en oscuro se le devuelve su padding.

### Reglas de esta reconstruccion

- El contenedor son **1440 px** con margen lateral del **5,89 %**. El hero usa
  la misma escena, asi que su titular y el de las secciones empiezan en el mismo
  pixel. Comprobado a 1440, 1100 y 900. No subir de 1440: a 1600 el hero pasa de
  820 px de alto y obliga a deslizar para verlo entero.
- Dentro del hero, `--u` vale un pixel del boceto. Las medidas van escritas tal
  cual se midieron.
- Paleta muestreada del pixel: azul `#007FFE`, verde `#18CF75`, tarjetas del
  hero `#262324`, claro `#FCFBF9`, oscuro `#0A1220`. En "El momento": tarjeta
  Hoy `#EFF0F3`, tarjeta EasyRobots `#F2F8FE` sobre borde `#DDEBFB`.
- **El metodo entero esta en `docs/boceto-a-html.md`. Leerlo antes de tocar una
  seccion nueva.**

### Imagenes de esta landing

| Archivo | Que es | Estado |
|---|---|---|
| `hero-inmobiliarias.webp` | Fondo del hero, 1800x678 | Definitiva. Encuadrada al 55 % para conservar la pared oscura del titular |
| `momento-comprador.webp` | Comprador al telefono, 2:3 | **Provisional**, recortada del boceto |
| `momento-piso.webp` | Salon de la visita | **Provisional** |
| `hero-wa-piso.webp` | Miniatura, 56:76 | **Provisional** |
| `hero-visitante.webp` | Retrato, cuadrado | **Provisional** |
| `hero-comercial.webp` | Retrato, cuadrado | **Provisional** |

Las provisionales vienen a la resolucion de la captura. Se cambian sustituyendo
el archivo, sin tocar codigo.

### Pendiente

- Pasar las secciones 03 a 09 por la referencia nueva.
- El audio de la demo: dejar el archivo en `assets/` y escribir su ruta en
  `AUDIO_DEMO`, dentro del script de la pagina.
- Decidir si la v3 sustituye a `prueba-inmobiliarias.html` y si se le quita el
  `noindex`.

## Landing de concesionarios v2 (2026-09-29)

Reconstruccion completa contra un boceto nuevo, con el metodo de
`docs/boceto-a-html.md`. **La pagina viva es `src/concesionarios/index.html`.**
`prueba-concesionarios.html` se queda de referencia del copy y no se toca.

### Lo que llego y donde esta

Anais paso **dos imagenes de 845x1862**: la referencia con todo pintado y la
**hoja de fondos**, la misma composicion sin texto ni interfaces. Las dos estan
en `src/assets/boceto/concesionarios-v2/` (`referencia.png` y `fondos.png`).

Pedir la hoja de fondos **desde el principio** es lo que mas tiempo ahorro. Las
fotos de la web salen de ahi recortadas por tiras; solo tres piezas se recortan
de la propia referencia porque en la hoja de fondos no existen: la foto de la
tarjeta Ventas, los dos retratos y los seis avatares.

Ojo con dos tiras de la hoja de fondos: la de "No son dos herramientas" y la de
"Lo que hace" **traen los iconos y los cuadros ya pintados**. Si se usan enteras
salen iconos fantasma detras. Se recorta solo su parte izquierda.

### El contenedor, que es la decision de fondo

El boceto **no tiene un margen lateral coherente**: el texto empieza en 36, 46,
47, 52, 54, 55, 56 o 61 u segun la seccion, y el borde derecho cae entre 790 y
823. Son 845 px generados, no una rejilla.

Se unifica en **55 u a cada lado** (6,51 %), que es el margen del hero y el de la
barra de navegacion. Donde el boceto usaba mas ancho, las piezas van escaladas y
el factor queda escrito en el comentario de esa seccion:

| Seccion | Factor | Por que |
|---|---|---|
| 03 tarjeta "Clientes en tu base" | 0,9457 | iba de 355 a 815 u |
| 07 los dos cuadros | 0,948 | iban de 313 a 816 u |
| 08 panel de garantia | 0,945 | iba de 52 a 830 u |

### Medidas que conviene no volver a sacar

- Alturas de seccion, en u: hero 368 · 02 202 · 03 202 · 04 216 · 05 136 ·
  06 203 · 07 138 · 08 126 · 09 143 · 10 127.
- **En el hero, las dos lineas azules del titular son un 13 % mas grandes que
  las blancas**: 35,2 u contra 31,2. Se ve al medir el ancho (218 contra 257 para
  lineas de longitud parecida) y es lo que mas cantaba cuando estaban iguales.
- El boton azul del hero **sobresale 4 u a la izquierda** del texto: es
  alineacion optica del borde redondeado, no un descuadre. Va con
  `margin-left: -4u` en `.h-btns`.
- Paleta muestreada del pixel: azul boton `#0070FE`, azul del titular `#008CFF`,
  **cintillos en cian `#00C8FF`** (no azul), verde del icono `#00975E`, fondo
  oscuro `#000C15`, fondo claro `#F1F7FD`, panel claro `#E7F3FD`.
- Las **44 alturas de la onda** del reproductor estan leidas barra a barra de la
  referencia, columna a columna. No se inventan.

### Tres cosas que costaron una vuelta

1. **Las capas de foto y velo viven dentro de `.escena`, que esta limitada a
   1440 px.** Por encima de ese ancho quedaban franjas negras a los lados. Se
   arregla con `left:50%; width:100vw; transform:translateX(-50%)`, pero hay que
   escribirlo con **mas especificidad que `.hero .foto`** (ahi va el
   `body .escena > .foto`), porque si no gana el `inset:0` de la seccion y la
   foto se desplaza media pantalla.
2. **En movil los bloques dejan de estar en `position:absolute`** y, al quedar
   estaticos, se pintan **por debajo** de `.foto` y `.velo`, que si estan
   posicionadas: la seccion sale en negro con el texto invisible. Se les devuelve
   la pila con `.escena > *:not(.foto):not(.velo):not(.velo2){position:relative;
   z-index:4}` **y hay que anular `left/top/right/bottom`**, o el `left:55u` de
   cada bloque se convierte en un desplazamiento y todo desborda por la derecha.
3. **Al ocultar los `<br>` en movil las palabras se pegan** ("no.Sin",
   "quedisenan"). Los saltos del boceto estan calculados para 845 px y en movil
   estorban, asi que se ocultan; pero hay que dejar **un espacio antes de cada
   `<br>`** en el HTML, que en escritorio se colapsa al final de linea y en movil
   hace de separador.

### Compacidad en movil

Peticion de Anais: **una seccion y algo de la siguiente por pantalla**, estilo
Apple. En una pantalla de 844 px eso son unos 620-720 px por seccion. Se midio
poniendo un `::before` rosa de 3 px en cada seccion, capturando dentro de un
`<iframe>` de 390 px y leyendo las posiciones de las marcas.

De 7.000 px se bajo a **5.360**: hero 713 · 02 692 · 03 613 · 04 541 · 05 441 ·
06 621 · 07 592 · 08 524 · 09 296 · pie 330.

Ademas, y siguiendo el fallo 10 de la lista de abajo, hay **recortes verticales**
de las fotos panoramicas para el movil: `conce-hero-movil`, `conce-momentos-movil`,
`conce-sabado-movil` y `conce-hablemos-movil`.

### Segunda maqueta (2026-10-03): fuera el "modo folleto"

Anais: concesionarios y ecommerce estaban "en modo folleto". Era la maqueta con
`--u` del boceto: cada seccion tenia la proporcion fija de su tira y a 1440
salian secciones de 200-450 px con letra de 13-15 px. **Las dos se rehicieron
como rejilla normal con los tamanos de `/estetica/`** (H1 40-56, H2 32-46 en
las de dos columnas, texto 16-18,5, secciones de 560-760 de alto, hero al 86 %,
`zoom: .9` desde 1081 px, barra fija) y **el movil con las medidas de
inmobiliarias** (h2 1,6 rem y 1,45-1,9 bajo 620 px, texto .93 / .88 rem, 30 px
de relleno bajo 620). Mismo copy, piezas, colores y fotos. Las medidas en `u`
de esta seccion ya no se usan; se conservan como referencia del boceto.

Cosas que se decidieron al rehacerla: los `<br>` de los titulares se ocultan y
reparte `text-wrap: balance` (en columna partian mal); las fichas de "Piezas"
de ecommerce pasan a rejilla 3x3, como el diagrama de estetica; y en ecommerce
`.rd-ambar` de limites lleva prefijo `.lm-ficha` porque pisaba el icono de la
segunda tarjeta de la demo.

Fondos de ecommerce: las bandas apaisadas se ampliaban de 3 a 6 veces con las
secciones nuevas. `docs/fondos-ecommerce-v2.py` saca ahora para escritorio una
**ventana 2,3:1 de la escena entera** (tabla `ESCRITORIO`); los `*-movil.webp`
no cambian. Las fotos de concesionarios aguantan y no se tocaron.

### Pendiente en esta landing

- El audio de la demo: no hay archivo. El boton y el reproductor son de momento
  maqueta.
- **El icono de LinkedIn del pie viene en el boceto, pero EasyRobots no tiene
  LinkedIn** y el enlace no lleva a ningun sitio. Se ha dejado tal cual sale en
  el boceto por peticion expresa de Anais; decidir si se quita o se crea el perfil.
- Los botones no estan enganchados al calendario de GHL.
- Decidir si sustituye a `prueba-concesionarios.html` y si se le quita el
  `noindex`.

## Landing de ecommerce v2 (2026-09-29)

Reconstruccion completa contra un boceto nuevo, con el metodo de
`docs/boceto-a-html.md`. **La pagina viva es `src/ecommerce/index.html`.**
`prueba-ecommerce.html` se queda de referencia del copy y no se toca.

### Lo que llego y donde esta

Anais paso **dos imagenes**, las dos en `src/assets/boceto/ecommerce-v2/`:

- `referencia.jpg` (1024x1536): la pagina entera pintada.
- `limites.png` (420x55): **solo la seccion de limites**, que no venia en la
  grande y que ella pidio colocar **justo encima del bloque de garantia**.

**NO llego la hoja de fondos** (la composicion sin texto ni interfaces), que es
lo que mas tiempo ahorra segun se aprendio en concesionarios. Ver "Pendiente".

### El contenedor, que aqui salio gratis

A diferencia de concesionarios, este boceto **si tiene un margen coherente**:
los titulares de las diez secciones arrancan todos en **x136** de 1024 u
(13,28 %). No hubo que unificar nada. La unica excepcion es la 05, que es un
panel que sangra (x68, ancho 938) y mete su texto en x98.

`--u` vale un pixel del boceto: `0.0976563cqw` (100/1024).

### Medidas que conviene no volver a sacar

- Alturas del boceto, en u: hero 288 · 02 198 · 03 146 · 04 123 · 05 371 ·
  06 110 · 07 91 · 09 97 · 10 68 · pie 44.
- **Varias secciones hubo que agrandarlas**, porque el copy aprobado es mas
  largo que el pintado y el texto se partia (fallo tipico del metodo). Lo que
  quedo: 03 160 · 05 416 · 07 100 · 08 limites 150 · 09 106 · pie 74. Las
  demas se quedan en la medida del boceto.
- Los cinco circulos de la 04 estan medidos uno a uno: x142 / 287 / 446 /
  608 / 767, de 20 u. **No son equidistantes**; no "arreglarlos".
- Las nueve fichas de "Piezas" **no estan en rejilla**: el boceto las pone
  sueltas y la primera fila va corrida a la derecha. Cada una lleva su x y su
  ancho medidos, en las clases `.pz1` a `.pz9`.
- Los seis visados de esa seccion van en x741, con paso 14,2 u.
- Paleta muestreada del pixel: azul boton `#0064FF`, azul del titular
  `#1E70FF`, cintillo `#3B82F6` (azul, **no cian** como en concesionarios),
  verde `#16C873`, fondo oscuro `#020A14`, fondo claro `#F5F8FD`.

### Lo del boceto que NO se reprodujo, y por que

Son erratas de la generacion, no decisiones de diseno:

- La CTA final del boceto dice *"Vemos que pasa hoy con las llamadas que no
  podeis coger"*. Eso es copy de **concesionarios** colado en la generacion:
  una tienda online no tiene centralita. Va el titular aprobado en
  `docs/copys/ecommerce.md`: *"Vemos que parte de vuestra bandeja puede
  contestarse sola."*
- La seccion 07 repetia el cuerpo de "Piezas" palabra por palabra. Se
  reescribio: *"Lo repetitivo se resuelve solo y a una hora a la que no hay
  nadie. Lo que necesita criterio sigue siendo vuestro."*
- Erratas sueltas: `consultoria` sin tilde, `Tu equipo se centra an`,
  `ⒸUNA DEMOSTRACION REAL` con un glifo delante, `BIG COMMERCE` a medio pintar.

Dos cosas del boceto que **si** se respetan aunque parezcan un fallo:

1. **La tercera tarjeta de la demo va levantada y sin rotulo.** Las dos
   primeras llevan "Antes de comprar" y "Despues de comprar"; la tercera no
   lleva ninguno y arranca mas arriba. Se deja asi: hace de tarjeta en primer
   plano y la composicion funciona.
2. **El margen derecho no es simetrico.** El texto entra en 136 y las tarjetas
   llegan hasta 902-990 segun la seccion. Es lo que manda la referencia.

### Los fondos

Llegaron en **dos vueltas el mismo dia**. La buena es la segunda:
`src/assets/boceto/ecommerce-v2/fondos-v2.png` (1024x1536). La primera,
`fondos.png`, se queda de historico: era abstracta y a Anais no le convencio.

La v2 trae **cuatro escenas**, no nueve. Costuras detectadas midiendo el salto
de color entre filas: y = 390, 800 y 1219.

    1 ·    0-389   escritorio de noche, monitores y ciudad     (oscura)
    2 ·  391-799   loft al atardecer, zapatilla y portatil      (clara)
    3 ·  800-1218  oficina de dia, portatil, movil y zapatilla  (clara)
    4 · 1219-1536  escritorio al anochecer, portatil y ciudad   (oscura)

Como son cuatro escenas para once secciones, `docs/fondos-ecommerce-v2.py`
recorta a cada seccion **su propia banda** dentro de la escena que le toca, al
alto exacto que pide su `aspect-ratio`. Asi ninguna repite encuadre y `cover`
no tiene que inventarse nada. El archivo lleva la tabla completa.

**Al entrar estas fotos hubo que SUBIR los velos de las secciones claras**, no
bajarlos: son escenas de oficina, mucho mas movidas que las abstractas de la
primera hoja, y el texto gris sobre foto dejaba de leerse. Quedan en .90 / .76
/ .88. Los paneles blancos tambien suben (`.tc-box` a .84, `.dm-panel` a .62,
la barra de la 04 a .97).

### El movil, que es donde estaba el problema de verdad

Anais: *"los fondos tambien, que se vean, porque es que no se ven nunca"*. Dos
causas, y hay que atacar las dos:

1. **Los velos del escritorio son gradientes HORIZONTALES**, pensados para
   apagar la izquierda y dejar la foto a la derecha. En 390 px ese mismo
   gradiente cubre la seccion entera y el fondo queda liso. En movil pasan a un
   velo **vertical** y mas abierto.
2. **Una panoramica con `cover` en un hueco alto y estrecho** se amplia tanto
   que solo se ve un parche de color (fallo 10 de la lista de abajo). Cada
   seccion tiene ahora su **recorte vertical** `*-movil.webp`: una ventana de
   400 px de ancho sobre la escena entera, no la banda apaisada.

**El hero entra en una pantalla.** `min-height: 100svh` (svh, no vh: en iOS
descuenta la barra del navegador) y el contenido apretado para caber **sin
quitar nada**, porque la regla de Anais es que en el movil se vea lo mismo que
en el escritorio. Por debajo de 700 px de alto se suelta el `min-height`, que
apretarlo mas lo volveria ilegible.

Ojo al comprobarlo: **`100svh` dentro de un `<iframe>` vale el alto del iframe**,
asi que la captura de pagina completa sale con el hero de 7.000 px y parece que
todo lo demas ha desaparecido. Para la captura larga se saca una copia con ese
valor fijado a 812 px.

Otro fallo que salio aqui: **los cinco pasos de la 04 eran hermanos de la barra
blanca, no hijos**. En escritorio daba igual (van en absoluto), pero en movil la
barra se quedaba vacia y los pasos se pintaban fuera, sueltos sobre la foto.
Ahora viven dentro y sus x se miden desde la barra (134), no desde la seccion.

### Segunda pasada de Anais (2026-09-30)

Lo que pidio y como quedo:

- **Las tres tarjetas de la demo, cuadradas y a la misma altura.** Antes la
  tercera iba levantada y sin rotulo (asi salia en el boceto, y se habia dejado
  a proposito). Ahora las tres miden 197x300 u, arrancan en y142 y estan en
  x136 / 345 / 554. La tercera lleva rotulo propio: **"Despues de entregar ·
  Cambios y devoluciones"**, con estrella ambar `#F2B441`.
- **La seccion de la demo arrancaba mas a la izquierda que las demas.** Era
  cierto: su texto estaba en x98 y su panel en x68, porque asi lo pintaba el
  boceto. Se alinea con el resto en **x136** y el panel pasa a x116 (20 u de
  margen por dentro, simetrico con el borde derecho en 1010).
- **Cintillo en todas las secciones, no solo en la demo.** Los de la 02 a la 05
  son los antetitulos aprobados en `docs/copys/ecommerce.md` (Despues de
  cobrar · La diferencia · Asi funciona · Una demostracion real). Los de la 06,
  07, 09 y 10 no existian y se escribieron siguiendo el mismo tono:
  Integraciones · Tu equipo · Quienes somos · Hablemos.
- **Mas aire en general.** Casi todas las secciones crecen: hero 288 → 322,
  02 198 → 224, 03 146 → 182, 04 123 → 150, 05 371 → 462, 06 110 → 134,
  07 91 → 124, 08 limites → 172, 09 97 → 152, 10 68 → 88. Y suben los cuerpos
  de texto que en la primera pasada se habian encogido para que cupieran.
- **El panel "Lo que queda registrado" partia los valores en dos lineas.** Se
  ensancha a 222 u, la columna de etiqueta baja de 66 a 56 y las dos columnas
  van con `white-space: nowrap`. Ahora cada fila es una linea.
- **La primera fila de la bandeja estaba pegada a las pestanas.** Se le mete
  `margin-bottom` a las pestanas y las filas suben de 22,5 a 24 u.
- **Las tarjetas del hero estaban pegadas al borde de abajo.** Se encogen entre
  un 5 y un 8 % y el hero crece, asi que la de "Cliente 23:40" respira.

**Desde el 2026-10-03 esta landing ya no usa `--u`**: se rehizo como rejilla
con los tamanos de estetica y el movil de inmobiliarias. Ver "Segunda maqueta"
en la seccion de concesionarios, que explica las dos.

### Lo siguiente en esta landing

- **Anais va a pasar codigo para que cada una de las tres tarjetas de la demo
  sea conversable.** Las tres son ya identicas en estructura (`.dm-card` con
  `.dm-rot`, `.dm-cab`, `.dm-chat` y `.dm-pie`), asi que el gancho se pone una
  vez y sirve para las tres. Los campos `.dm-pie .campo` son de momento un
  `<span>` de maqueta: pasan a `<input>` cuando llegue el codigo.
- La foto real de Anais para el hueco de Equipo.
- Los botones no estan enganchados al calendario de GHL.
- Decidir si sustituye a `prueba-ecommerce.html` y si se le quita el `noindex`.

## Landing dental v2 (2026-10-02)

Reconstruccion contra un boceto nuevo, con el metodo de `docs/boceto-a-html.md`.
**La pagina viva es `src/prueba-dental-v2.html` (hoy `src/dental/index.html`).** `prueba-dental.html` se queda
de referencia y no se toca.

### Lo que llego

- `src/assets/boceto/dental-v2/referencia.webp` (872x1803) y `fondos.webp`
  (872x1802, la hoja de fondos). Los recortes salen de `docs/fondos-dental-v2.py`.
- Una **ficha tecnica** de ChatGPT con copy y medidas aproximadas. **El copy de
  la ficha manda** sobre `docs/copys/dental.md` (es posterior); donde la ficha
  no dice nada (el chat, las fichas de "Por que pasa") va dental.md. **Las
  medidas de la ficha no se siguieron**: piden una pagina de 7.000-7.800 px a
  1440 y el boceto da unos 3.100. Manda el boceto, como en las demas.

### Decisiones que conviene no reabrir

- **No se maqueta con `--u` del boceto.** La primera version (todo en
  unidades del boceto, cada seccion con la proporcion de su tira) salio
  "aplastada, parece un boceto": el boceto es muy apaisado y a 1440 las
  secciones median 200-480 px. Ahora es rejilla normal con tipografia de la
  ficha (H1 70, H2 48, texto 18,5 a 1440).
- **Regla de alto de Anais, aplicable a todas las landings:** el hero ocupa la
  pantalla entera al entrar (`100svh`), ni mas ni menos; las demas, unos dos
  tercios de pantalla (`min-height: clamp(540px, 66vh, 720px)`), para que se
  vea una y media por pantalla. A 1440x900: hero 900, secciones ~594, la 04
  (tres columnas con el movil) 802. Total ~6.700 px.
- Para comprobarlo hay que capturar **pantalla a pantalla** en `<iframe>` de
  1440x900, no la pagina entera con una ventana alta: `vh` vale el alto de la
  ventana. Y fijar `scroll-behavior: auto` antes de `scrollTo`, o la pagina
  (que lleva desplazamiento suave) no llega a moverse.
- **La tableta y el movil son HTML entero**, no la interfaz encima de la foto.
  Por eso sus fotos se recortan sin el dispositivo pintado (`dent-presu` y
  `dent-demo` son la parte izquierda de su tira).
- La tira de "Piezas" de la hoja **trae el diagrama pintado**: no se usa. Va la
  de "Como funciona" en espejo.
- Las fotos se amplian de 2 a 4 veces: llevan `blur(1.6px)` para que se lean
  como profundidad de campo. El hero va ampliado x2 con Lanczos y enfoque.
- **Segunda pasada de Anais (2026-10-03)**: escritorio al 90 % con `body {
  zoom: .9 }` desde 1081 px, como las demas; el hero y las secciones dividen
  sus `vh` entre .9 para seguir siendo pantalla entera y una y media por
  pantalla. Y el diagrama de piezas **rehecho** porque "no lo conseguiste
  hacer bien": la primera medicion estaba desplazada. Ahora caja de 380x140
  con origen en (350,1080) del boceto, las seis piezas de 30 de alto en sus
  posiciones medidas sobre el boceto ampliado x4, nucleo de 69x54 **sin icono**,
  cables con brillo que salen de los lados del nucleo y halo azul detras.
  "Seguimiento de presupuestos" lleva el icono de WhatsApp como en el boceto.
  El resto de la pagina le gusta como esta.
- **Tercera pasada (2026-10-04)**: en escritorio solo hero, demo, garantia y
  CTA estaban bien; las demas "muy grandes, con mucho margen". **Deroga en
  parte la regla de los dos tercios**: 02, 03, 05, 06, 07 y 08 van sin alto
  minimo y con 60-88 px de relleno (miden lo que pide su contenido); el hero
  sigue a pantalla entera. Las fichas de "Por que pasa" copian las del movil
  (icono a la izquierda, sin hueco) porque las de escritorio tenian 270 px con
  mucho vacio. En movil: cintillo de la demo "Una demostracion real", "Y por
  fin sabes" pasa a panel blanco propio a todo lo ancho (la seccion media
  1.900 px), todo mas compacto (relleno 44 px, h2 29 px), la garantia algo
  menos, las claras seguidas alternan tono con una linea fina entre ellas y
  la CTA abre el velo para que se vea la foto. Movil de 9.575 a 8.500 px;
  escritorio de 6.580 a 5.120 px.
- **Cuarta pasada (2026-10-04, solo movil)**: el diagrama de piezas deja la
  rejilla de dos en dos y pasa a ser **como el de escritorio** (nucleo en el
  centro, cables con brillo), en una caja vertical de 350x330 con unidad `--m`
  y su propio SVG `.z-cables-m` con filtro `#brillo-m` (el del escritorio va
  oculto y algunos navegadores no aplican un filtro de un SVG oculto). La 03 y
  la garantia "alejadas" con `zoom: .9` en su `.caja`. Control, "lo que hace"
  y "como funciona" mas compactos. **El movil de la demo no se recorta** (vuelve
  a 560 px: el de 440 "no era"); se compacta el texto, los botones y el panel
  de motivos. La 02 arranca con una linea y un tono azulado para que no parezca
  la continuacion del hero. Movil 8.170 px.
- **Quinta pasada (2026-10-04, escritorio)**: **"Como funciona" va antes de
  la demo** (se movio el HTML; las clases `.s04`/`.s05` no cambian, asi que
  `.s05` es ahora la seccion que va primero). Velos abiertos de la demo en
  adelante ("muy opacos"); como funciona en tono azulado y la demo en neutro
  calido, con linea fina entre secciones, para que no parezcan la misma.
- **Sexta pasada (2026-10-04)**: textos grises de las secciones claras
  oscurecidos (`--gris` #333A46, cintillo #59616D): con las fotos mas abiertas
  "no se leian". Escritorio: todas mas bajas (relleno 46-68 px, garantia sin
  alto minimo), piezas y control aun menos opacas, y la demo pasa a **movil a
  la izquierda, texto en medio y "Y por fin sabes" a la derecha**. Movil: la
  02 en azul marino mas claro con filo azul arriba (seguia pareciendo el
  hero), "lo que hace" con `zoom: .86`, control `.94` y garantia `.86`.
  Escritorio ~4.700 px, movil ~7.870.
- **Septima pasada (2026-10-04, escritorio)**: el hero deja de ser la
  pantalla entera y pasa al **86 %, como concesionarios**, para que asome la
  02; titular 42-60 px. "Piezas" con velo azulado abierto y foto saturada
  (`saturate(1.3)`), porque junto a la demo parecian la misma seccion. **La
  regla del hero a pantalla completa queda sustituida por esta en escritorio**;
  en movil sigue siendo una pantalla.
- **Octava pasada (2026-10-04)**: **el hero ya tiene foto propia**, la que
  paso Anais (dentista con paciente y tres fichas pintadas a la derecha),
  original en `assets/boceto/dental-v2/hero-anais.webp`; `dent-hero.webp` es
  ella entera, sin desenfoque, y `dent-hero-movil.webp` un recorte vertical
  desde x560 **sin las fichas** (cortadas detras del titular ensuciaban).
  Textos de demo, control, "Y por fin sabes" y cintillos casi negros
  (#1E2430) con algo mas de velo detras: sobre fondo claro no se leian. El
  titular de "Lo que hace" pierde su sangria y arranca donde los demas.

### Lo del boceto que NO se reprodujo

- "Ya lo estan usando clinicas dentales de toda Espana" con tres caras: no hay
  ningun cliente dental. Prueba social inventada. Va "15 minutos · Sin
  compromiso".
- Los dos retratos del equipo (IA). Va Guillermo y el hueco de Anais.
- "Ver una conversacion real": el chat es un ejemplo. Pasa a "Ver la
  conversacion entera" y recorre el chat hasta el aviso al equipo.
- El enlace "Preguntas" del menu: no hay seccion de preguntas. Pasa a "Garantia".
- El chat con los colores al reves (la clinica en blanco): se ve desde el
  WhatsApp de la clinica, asi que lo que manda EasyRobots va en verde.
- Erratas: el quinto paso numerado "3", el icono de WhatsApp en "Seguimiento
  de presupuestos", "parte ele servicio".
- Los porcentajes de "Motivos de no cierre" y la lista de la tableta van
  marcados **Ejemplo**: no salen de ninguna clinica. Pacientes con iniciales,
  sin caras.

### Pendiente en esta landing

- ~~La foto del hero no trae al doctor del boceto.~~ **Resuelto el
  2026-10-04** con la foto que paso Anais (ver octava pasada).
- **Las fotos son de 872 px de ancho** y con secciones de alto real se amplian
  de 2 a 4 veces: se ven blandas, sobre todo el hero a pantalla completa.
  Pedir la hoja de fondos a mas resolucion (o cada escena suelta, al menos
  2400 px de ancho).
- El bloque de datos dice "Trabajamos con los mas altos estandares" y
  "cumplimos con la normativa vigente", que es copy de la ficha pero choca con
  la regla de no responder con adjetivos (nombrar art. 9 RGPD, contrato de
  encargado, servidores en la UE). Decidir con Anais.
- Botones sin enganchar al calendario de GHL. Decidir si sustituye a
  `prueba-dental.html` y si se le quita el `noindex`.

## Home de agencia v2 (2026-10-02)

**La pagina viva es `src/index.html`.** Es la home de nivel 1
(agencia de IA horizontal). `index.html`, `home.html` y `prueba-home.html` no
se tocan.

- Boceto en `src/assets/boceto/index-v2/`, nueve tiras numeradas en el orden
  de la pagina: 01 hero · 02 lo que construimos · 03 sectores · 04 como
  trabajamos · 05 integraciones · 06 caso real · 07 equipo+garantia+datos ·
  10 cierre · 11 pie. El original esta en Descargas, carpeta "FONDOS WEB
  PRINCIPAL" (pese al nombre, es el boceto con texto).
- **No llego ni hoja de fondos ni ficha tecnica.** Todas las fotos `home-*`
  son recortes provisionales del boceto, con el texto y las tarjetas pintadas
  borrados por inpainting (`docs/fondos-index-v2.py`). Debajo de cada tarjeta
  del hero hay una mancha desenfocada: si se mueven las tarjetas, aparece.
- **Es clara (crema #F9F6F3), no oscura como la v6**: lo manda el boceto. Los
  iconos violeta del hero pasan a azul (morado fuera de paleta).
- Quitado del boceto: las cifras de dos pantallas (+248 / 89 / 12 y "1.248
  leads +12 %", emborronadas en la foto), los retratos IA del equipo (va
  Guillermo y el hueco de Anais), "Site-Bots" (pasa a "chat web"), los tres
  enlaces legales del pie (uno solo a `privacy.html`) y el "cumplimos con el
  RGPD" con adjetivos (se nombra contrato de encargado y servidores en la UE).
- Las tarjetas de sectores llevan a la pagina buena de cada nicho; clinicas va
  a `easyrobots-clinicas-premium.html`.
- **Segunda pasada de Anais (2026-10-03)**: escritorio al 90 % con `body {
  zoom: .9 }` desde 1081 px, como estetica e inmobiliarias. El hero ya no es la
  pantalla entera sino el 86 % ("mucho espacio que no sugiere nada"), con la
  foto subida al 30 % para recortar mesa y no al hombre. Caso real y
  equipo/garantia copian las medidas compactas de `/estetica/` (sin alto
  minimo, la cita de Pilar dentro de la columna derecha, filas de garantia de
  44 px). El resto de secciones le gusta como esta: no tocarlas sin que lo
  pida. El movil no se toco en esta pasada (12.084 px, largo).
- **Tercera pasada (2026-10-03)**: la CTA "no estaba nada igual" al boceto.
  Ahora es la tira tal cual: escena con proporcion 761:209 y todo en
  unidades del boceto (`--u` = 1 px de 761). La foto ya no borra el panel
  entero, solo letras e iconos: el cristal del panel viene en la foto (borde
  x524-733, y44-162) y el `.k-lista` HTML va encima casi transparente. Si se
  mueve el panel, se descuadra. En tableta y movil pasa a apilada. El pie
  copia el de estetica: columnas Soluciones / Empresa / Legal (aviso legal,
  privacidad y cookies, los tres a `privacy.html`) / Siguenos y la linea con
  razon social, titular y direccion de Hamburgo.
- **Cuarta pasada (2026-10-04)**: barra fija al deslizar en escritorio y
  movil (fondo crema translucido); los avisos del hero bajan a 47 % / 58 %
  porque tapaban la cara; el boton principal del hero pasa a "Ver soluciones
  para mi sector" y lleva a `#sectores`. El movil copia las medidas de
  inmobiliarias y se compacta: sectores de dos en dos y solo con el nombre,
  "como trabajamos" con la foto a la izquierda de cada paso, integraciones y
  caso real mas cortos. Movil de 12.300 a 8.500 px.
- **Quinta pasada (2026-10-04)**: el hero y la garantia se veian "muy
  borrosos". En el hero eran las manchas del inpainting donde iban las
  tarjetas del boceto, que quedaron a la vista al bajar las viñetas: ahora
  esos huecos se rellenan columna a columna (pilar y edificios siguen
  nitidos) y la bruma de la izquierda con un relleno suave. **No volver a
  usar inpainting con desenfoque en huecos grandes.** La garantia pasa a
  `escena-inmobiliaria.webp` (foto real nitida) hasta que lleguen los fondos
  de la home. Movil: el titular arranca bajo la barra y la foto va en un
  bloque debajo con las viñetas encima; "lo que construimos" e integraciones
  en carrusel horizontal; "como trabajamos" cabe en una pantalla; caso y
  garantia con las medidas exactas del movil de estetica; en sectores la
  flecha sube a la esquina. Movil de 8.500 a 6.400 px.
- **Sexta pasada (2026-10-04), deshace parte de la quinta** porque no le
  gusto a Anais: la garantia va **sin foto** (fondo liso marron oscuro; "si
  no tiene arreglo la pones sin fondo"), el salon de inmobiliarias fuera; en
  movil el hero vuelve a llevar la foto **de fondo**, no en bloque (bajada a
  330 px para que el texto arranque bajo la barra); "lo que construimos" e
  integraciones vuelven a la rejilla de dos, **nada de carruseles**; y las
  flechas de sectores van **abajo a la derecha junto al titulo**, nunca en la
  esquina de arriba. Lo demas de la quinta se queda.

## Landing de clinicas premium v2 (2026-10-02)

Reconstruccion contra un boceto nuevo. **La pagina viva es
`src/estetica/index.html`**, con `noindex`. La v6
(`easyrobots-clinicas-premium.html`) no se toca.

- Boceto en seis tiras en `src/assets/boceto/clinicas-v2/` (13 secciones).
  **No llego hoja de fondos ni ficha tecnica**: Anais decidio arrancar sin
  ellas. Los fondos salen del propio boceto con el texto y las tarjetas
  **borrados con inpaint de OpenCV** (`docs/fondos-clinicas-v2.py`; hace falta
  `pip install opencv-python-headless`). Donde habia una tarjeta grande queda
  una mancha suave que tapa la tarjeta de verdad. Cuando llegue la hoja, se
  sustituyen los `cl-*.webp` sin tocar el HTML.
- **El copy es el de las imagenes del boceto** (peticion de Anais). Solo se
  cambio lo que chocaba con las reglas: cuerpo ilegible de "Recupera
  clientas" (va el de la v6), retratos de IA (va Guillermo y el hueco),
  letrero falso de Pilar (van sus fotos reales), LinkedIn y "Trabaja con
  EasyRobots" del pie, erratas ("Tene presupuesto", "Abril 2024").
- **La calculadora del boceto volvia a tener la cuenta mal**: 100 x 40 % x
  250 = 10.000 EUR supone que reservan todas las que no reciben respuesta. Se
  anade la barra "% que acabaria reservando" y el resultado anual.
- El boceto **cambia el acento azul por dorado** (#E4BA6C) y **titula en
  serif**: Source Serif 4, servida desde `assets/fonts/`. Es decision del
  boceto. Las secciones 11 y 12 del boceto venian en sans; se unifican en serif.
- **Segunda pasada de Anais (2026-10-03)**: escritorio al 90 % con `body {
  zoom: .9 }` desde 1081 px, como inmobiliarias (el hero divide su 100svh entre
  .9 para seguir llenando la pantalla); en "De caotica a organizada" la imagen
  va encima y las dos tarjetas debajo, y el fondo ya no lleva los dispositivos
  duplicados; el diagrama de piezas pasa a rejilla de tres columnas con letra
  de 17 / 14,5 px; equipo y garantia mas compactos; y el movil copia las
  medidas de inmobiliarias (h2 1,6 rem, texto .93 rem, 38 px de relleno, barra
  fija). El movil baja de 13.055 a 9.884 px.
- Pendiente de decidir: el bloque "Tus datos estan protegidos" es copy del
  boceto y responde con adjetivos, contra la regla de nombrar art. 9 RGPD,
  encargado del tratamiento y servidores en la UE.

## Landing de coaching v2 (2026-10-02)

Reconstruccion contra un boceto nuevo. **La pagina viva es
`src/prueba-coaching-v2.html`**, con `noindex`. `prueba-coaching.html` y
`coaching.html` no se tocan.

### Lo que llego

En `src/assets/boceto/coaching-v2/`:

| Archivo | Que es |
|---|---|
| `referencia.png` | 779x2019, la pagina entera pintada |
| `fondos.png` | 779x2019, la hoja de fondos |
| `cta-aspiracional.png` | 1993x789, la terraza al atardecer del cierre |
| `sistema-referencia.png` | 1993x789, la seccion 6 pintada CON el diagrama |
| `claras.png` | 1994x789, tres terrazas luminosas. **Sin usar**, de reserva |

Mas una **ficha tecnica** con copy, paleta y escala tipografica.

**Ojo: referencia y fondos miden lo mismo pero NO estan alineadas seccion a
seccion.** La hoja son once escenas sueltas apiladas, cada una con su alto.
Las costuras (lineas blancas de 1-2 px) salen midiendo el salto de brillo
medio entre filas: 178 · 371 · 550 · 706 · 858 · 1088 · 1259 · 1401 · 1546 ·
1757. La de 1259 no la pilla el umbral que vale para las demas porque separa
dos escenas claras. Todo el recorte esta en `docs/fondos-coaching-v2.py`.

`sistema-referencia.png` **no sirve de fondo**: lleva el diagrama y un panel
de cifras quemados en la foto. Se usa solo para medir donde va cada pieza.

### Decisiones

- **Alto**: la regla de Anais que ya se aplico en dental v2. Hero `100svh`,
  las demas `clamp(540px, 66vh, 720px)`. Nada de maquetar con `--u` del
  boceto: eso fue lo que salio "aplastado" en la primera dental.
- **El recorrido emocional del boceto manda el orden de las fotos**: oscuro
  en el dolor (hero, donde se cae, el mismo interes), claro en la
  transicion (asi funciona), oscuro tecnologico (demo y sistema), claro en
  la confianza (el limite, como trabajamos, equipo y garantia) y
  aspiracional en el cierre.
- **Las secciones 9 y 10 van juntas en una franja**, quienes somos a la
  izquierda y la garantia a la derecha, que es como lo pinta el boceto.
  La ficha las separa; mando el boceto por peticion de Anais.
- **El portatil del hero y el de la demo son HTML entero**, no una interfaz
  encima de la foto. En movil el del hero se oculta: no cabe sin comerse el
  titular.
- **El diagrama de la 06 es el protagonista** y por eso no hay seccion
  aparte de "piezas". Las posiciones salen de medir `sistema-referencia.png`
  y viven en una caja de 790x370 con su unidad `--d`. En movil pasa a lista,
  con el nucleo arriba: en una columna de 390 px no se lee.

### Lo del boceto que NO se reprodujo

- **El portatil con el panel de resumen de la seccion 6**: traia 124
  conversaciones, 48 citas, 32 clientes nuevos y +27 % de conversion. Son
  cifras inventadas, lo mismo que tumbo el "Automatizaciones hoy: 24" de la
  v4.
- **Los dos retratos del equipo**, que son caras generadas con IA. Va la
  foto real de Guillermo y el hueco de Anais.
- **"Resultados" en el menu**: no hay seccion de resultados ni ningun coach
  como cliente. Pasa a "Demo".
- **Privacidad / Cookies / Aviso legal** en el pie, tres enlaces al mismo
  sitio: va solo `privacy.html`, que ya recoge dentro los otros dos.
- Erratas de la generacion: "Reservar llmnada", "Co-fundadadara",
  "Recordatorios y noti-shows", "Puedes usar todo el sistema entran un
  miezas que necesites".

### Pendiente en esta landing

- **No hay video de demostracion**: el boton "Ver una demostracion real"
  lleva de momento a la llamada. Cuando exista, se cambia el `href`.
- Las bandas de la hoja miden 779 px de ancho y aqui se amplian 2x: se ven
  blandas. Si Anais pasa la hoja a mas resolucion, se vuelve a correr
  `docs/fondos-coaching-v2.py` y no hay que tocar el HTML.
- Decidir donde entran las tres terrazas de `claras.png`, que llegaron a
  2,5 veces la resolucion de la hoja y no se han usado.
- La foto real de Anais para el hueco de Equipo.
- Botones sin enganchar al calendario de GHL. Decidir si sustituye a
  `prueba-coaching.html` y si se le quita el `noindex`.
- La garantia dice "seguimos trabajando contigo sin coste adicional hasta
  conseguirlo", que es copy de la ficha y es un compromiso abierto en el
  tiempo. Conviene mirarlo antes de quitar el `noindex`.

### Coaching v3 (2026-10-07)

Seis secciones rehechas contra referencias nuevas de Anais
(`src/assets/boceto/coaching-v3/`, `ref-*.png` y sus fondos limpios
`fondo-*.png`): donde se cae (junta las antiguas 02 y 03), demo (junta
"Pruebalo tu" y la demo: **el chat del portatil es el chat real**), sistema,
como trabajamos, el limite y quienes somos + garantia. Clases nuevas con
prefijo propio (`d3`, `m3`, `x3`, `p3s`, `l3`, `e3`); el CSS viejo se quedo.

- **Letra: Inter en el texto y Plus Jakarta en los titulares, solo en
  coaching** ("la letra de Apple"; SF Pro no se puede servir en web). Esta en
  `assets/fonts/inter-*.woff2`. Si gusta, se decide si pasa a las demas.
- Las cifras del panel del sistema (124 / 48 / 32 / 27 %) se quedan por
  decision de Anais, con la nota "Panel de ejemplo".
- La garantia lleva el copy comun, no el de la referencia ("seguimos
  trabajando hasta conseguirlo", "sin preguntas").
- Fotos del equipo en rectangulo, ya no en circulo.
- Falta guardar en `coaching-v3/` el fondo vertical de "donde se cae" que
  paso Anais para movil; de momento va un recorte del horizontal.

## La calculadora

Fórmula, visible en la propia página:

```
consultas/semana × 4,33 × % sin respuesta × tasa de conversión × ticket medio
```

Cuatro barras deslizantes (no casillas: con casillas no parece que se pueda
tocar) y **resultado mensual y anual**. Lo anual importa: 1.299 €/mes se tolera,
15.588 €/año no, y una clínica decide inversiones por año.

**El diseño de referencia venía con la cuenta mal**: con sus propios datos (40
consultas, 25 %, 120 €, 25 %) el resultado son 1.299 €, no los 3.767 € que
mostraba. Casi el triple. Si una clínica lo comprueba, se cae todo lo demás.

## El diagrama "Piezas, no un paquete cerrado"

Lo generó ChatGPT sobre su propia captura y se encajó con prefijo `ers-system-`.
Después se rehízo la geometría:

- **Círculo real**: los 7 chips a **190 px** del centro, medidos en píxeles. En
  porcentajes salía una elipse, porque el recuadro es más ancho que alto.
- 8 posiciones cada 45°; la de la derecha se deja libre para el cable que sale
  hacia **Humano**, rematado en flecha.
- Los cables van en un SVG cuadrado de 420×420 centrado, para que los ángulos no
  se deformen con el ancho.
- **Nada de puntos verdes sobre los cables**: se probaron y no hay forma de
  alinearlos; los chips se los comían.
- La sección va a **1.240 px** como el resto de la web. Con los 1.540 originales,
  el hueco hasta Humano pasaba de 204 px en un monitor grande.

### En el móvil

- El círculo **se mantiene**, a 116 px de radio y con los chips en **7 posiciones
  cada 51,4°** (no 45°: con cajas cada 45° las diagonales se tocaban).
- Los chips **dejan de ser cajas**: icono arriba, nombre debajo, sin recuadro.
  Ocupan la mitad y se leen mejor. Sin subtítulo.
- **Humano va debajo**, centrado y con ancho contenido (no a todo lo ancho, que
  descuadraba al ser el único recuadro), con una flecha que baja del círculo.
- Barra de arriba **fija**, y **no hay barra inferior**: se probó y Anaís la
  descartó.

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

## Estado legal y de privacidad

Hecho:

- **Tipografías servidas desde el propio dominio** (`src/assets/fonts/`, 10
  archivos woff2, pesos 400–800, subconjuntos latin y latin-ext). Cargarlas desde
  Google enviaba la IP de cada visitante a sus servidores sin permiso, y en
  Alemania hay sentencias por eso. La v6 **no hace ninguna llamada a Google**.
- **La v6 no tiene rastreo**: cero scripts externos, cero iframes, sin GA, sin
  píxel, sin cookies ni `localStorage`. Hoy no necesita banner. Cuando se añadan
  GA y el píxel, el banner ya está escrito en `src/js/consent.js`, con todo
  denegado por defecto (Consent Mode v2).
- **`robots.txt`** creado en `src/`. El que servía el dominio era una copia del
  de la web de Pilar y apuntaba a `pilarmarquez.com/sitemap.xml`.

Sin hacer, y es lo único realmente expuesto:

- **`privacy.html` carga Google Analytics nada más entrar**, sin banner y sin
  consentimiento, y dice que GA4 es anónimo y que la base legal es el interés
  legítimo. Las dos cosas son falsas. Además le falta quién es el responsable con
  dirección, los destinatarios (GHL, Retell, Google, Vimeo), las transferencias a
  EE. UU. y el derecho a reclamar ante la autoridad de control.
- **No hay Impressum** (§5 DDG). Negocio registrado en Hamburgo: es de lo que más
  se denuncia en Alemania.
- ~~**`assets/social-preview.jpg` no existe**~~ **Resuelto el 2026-10-02**: cada
  página tiene su `assets/og-<nicho>.jpg` de 1200×630 recortado de su hero.

## Datos de la empresa

- Razón social: **EasyRobots AH-NICE** · Ana Isabel González Hoog
- Dirección: **Tonndorfer Hauptstraße 61, Hamburgo (Alemania)**
- Email: **info@easyrobots-ai.cloud** (DNS listo en Hostinger, MX de ImprovMX,
  SPF y DMARC puestos; **falta crear el alias en el panel de ImprovMX**)
- Instagram: `instagram.com/easyrobots.ai`
- Facebook: `facebook.com/people/EasyRobotsAI/61587151053673/`
- LinkedIn: **no hay**. No poner el icono: un enlace que no lleva a ningún sitio
  resta más que su ausencia.
- Legal en el pie: solo `privacy.html`, que ya recoge dentro el aviso legal y las
  cookies.

## Estado de las fotos (2026-09-24)

| Hueco | Archivo | Estado |
|---|---|---|
| Caso Pilar, retrato | `assets/pilar.webp` | Puesta. Su foto de perfil de IG, recortada 3:2; se lee el sello PhiBrows, que suma credibilidad |
| Caso Pilar, trabajo | `assets/cejas.webp` | Puesta. Cejas de una clienta, recortada quitando la barra del perfil de Instagram |
| Equipo, Guillermo | `assets/guille.webp` | **Sustituida el 2026-10-02** por la foto nueva de la sesión de estudio, a 900×765 |
| Equipo, Anaís | `assets/anais.webp` | **Puesta el 2026-10-02.** Misma sesión que la de Guillermo. El hueco ya no existe en ninguna página |

Descartada una captura de Pilar trabajando en directo en TVE: resolución
demasiado baja para ponerla al lado de las otras dos.

### Ojo con los retratos de IA

`assets/anais.webp`, `anais.png` y `nosotros.png` son **retratos generados con
IA**: representan a los dos hermanos, pero las caras no son las suyas. No
ponerlos en el bloque de Equipo ni en ningún sitio donde se etiqueten con nombre
y cargo. Decisión de Anaís el 2026-09-24: antes un hueco vacío que una cara
inventada al lado de la foto real de Guillermo. **Desde el 2026-10-02 el hueco
está cubierto con su foto real**, así que estos archivos ya no hacen falta para
nada; están respaldados en `src/borradores/retratos-ia/`. En cuanto alguien les ve en
Instagram o en la llamada, no cuadra, y ahí se va la credibilidad del equipo,
que es medio argumento de venta.

**Instagram no se puede leer desde aquí**: el perfil devuelve el muro de inicio
de sesión y las direcciones de las imágenes caducan. Las fotos las pasa Anaís.

## Herramientas disponibles en este equipo

- **Python 3.11 con Pillow** para todo lo de imágenes. **No hay** ImageMagick ni
  `cwebp`; no perder tiempo buscándolos.
- **Node** instalado, solo para `node --check`.
- **ffmpeg** instalado (vídeo).
- **No hay OCR** ni forma de leer texto dentro de una imagen.
- Las capturas de móvil de Anaís son de 945×2048. Cuando la conversación
  acumula muchas imágenes, el límite baja a 2.000 px por lado y dejan de poder
  abrirse: hay que pedirle que **recorte** la captura o que pegue el texto.

## Cómo se escriben los copys

El tono no es una preferencia estética: es lo que hace creíble a una agencia con
un cliente. Reglas sacadas de reescribir la home vieja entera.

### Tono

- Se habla **de tú a la dueña de la clínica**, español de España, frases cortas
  y párrafos de dos o tres líneas.
- **Cero jerga de agencia.** Fuera "ecosistema", "sinergia", "solución 360",
  "negocios high ticket", "trayectoria de éxito comprobada", "nuestro enfoque es
  irrefutable", "la precisión de una multinacional". Todo eso estaba en la home
  vieja y lo único que comunicaba era que detrás no había nada.
- **Cero superlativos sin prueba.** Si no se puede demostrar, no se escribe.
- Se nombra la IA, pero **traducida**: "el sistema responde", "escribe a cada
  clienta en su fecha". Nunca "potenciado por inteligencia artificial".

### Vocabulario del sector, siempre concreto

Retoque, cabina, recepción, postoperatorio, ficha de la paciente, microblading,
hairstroke, ácido hialurónico. **Nunca "tus servicios" ni "tus clientes"**: son
pacientes o clientas, y los tratamientos tienen nombre. Una dueña de clínica
distingue en dos segundos a quien conoce su día a día de quien le ha cambiado el
sector en una plantilla.

### Estructura de cada bloque

Escena concreta → consecuencia económica → mecanismo → prueba. Ejemplo del
bloque de fugas:

> **WhatsApps sin responder.** La consulta entra a las diez de la noche o en fin
> de semana, cuando nadie está en recepción. La paciente no espera: pregunta en
> tres clínicas y reserva en la que contesta primero.
> → *No la pierdes por precio. La pierdes por orden de llegada.*

La consecuencia va **en una caja aparte**, en una frase. Es lo que se recuerda.

### Titulares

Una sola idea y, si se puede, un contraste que corrija una creencia:

- "Cada WhatsApp sin responder es una cita perdida."
- "Piezas, no un paquete cerrado."
- "Somos dos hermanos, no una centralita."
- "53 clientas contactadas. 8 volvieron. Ninguna se molestó."

El contraste hace el trabajo: la primera mitad es lo que ella ya piensa, la
segunda le da la vuelta.

### Decir que no vende más que prometer

Frases que se quedan porque generan confianza, no a pesar de restar:

- "Si tu clínica no encaja, te lo decimos en la llamada."
- "Traer más mensajes a una clínica que no contesta a tiempo es tirar el dinero,
  y preferimos decírtelo antes de cobrarlo."
- "Si tu tráfico va de Instagram directo al WhatsApp, esto no te hace falta."
- ~~"El montaje sí se cobra, porque es trabajo hecho a medida. Preferimos decirlo
  claro ahora que prometerte una devolución total que no pensamos cumplir."~~
  **Derogado el 2026-09-29 por Anaís.** Ya no se avisa de que el montaje no se
  devuelve: la garantía dice **"Si no hace lo que hemos definido o no encaja, lo
  paramos y te devolvemos el dinero."**, sin distinguir montaje de mantenimiento.
  Se le planteó expresamente que así redactado se entiende devolución total,
  montaje incluido, y lo confirmó. Va en
  `src/inmobiliarias/index.html`, bloque de garantía.

  **Consecuencia, y conviene tenerla presente:** es la única promesa de la web
  que compromete dinero. Si algún día se decide que el montaje no entra, hay que
  cambiar esa frase antes de que la landing salga de `noindex`, no después.
  Ninguna otra página tiene hoy una promesa de devolución (comprobado: lo que
  sale en las de ecommerce son devoluciones de producto del cliente final).

### Pero nunca empezar por la rebaja

El texto de "Piezas" decía antes: *"Casi ninguna clínica las necesita todas. La
mayoría empieza por responder y reservar…"*. Arrancaba diciendo lo que **no**
vas a necesitar, y eso resta antes de sumar. Quedó así:

> **Antes de montar nada, estudiamos tu clínica.** Miramos cómo trabajáis hoy y
> por dónde se os está escapando el trabajo, y construimos a medida solo las
> piezas que de verdad necesitáis. Ninguna clínica funciona igual que otra, así
> que ningún sistema sale igual que otro.

Dice lo mismo —que no se compra un paquete cerrado— pero vendiendo el
diagnóstico en vez de avisando de un recorte.

### El precio

No se esconde ni se pone. "Un pago por el montaje y una cuota mensual. El rango
se te dice en la primera llamada, con tus números delante, no después de tres
reuniones." El enlace "Precios" del menú lleva a la **calculadora**, porque el
ticket medio lo pone ella: así la página habla de su dinero, no del nuestro.

### Los datos de pacientes

No se responde con adjetivos. "Encriptada" y "estrictos protocolos" no valen: se
nombra el **artículo 9 del RGPD**, el **contrato de encargado del tratamiento**,
los **servidores en la UE** y que ella sigue siendo la responsable. Es lo que
tranquiliza a una clínica de verdad.

### Cifras

Siempre con la cuenta al lado: "2.000 € · 8 retoques × 250 €". Un número redondo
sin explicar levanta sospecha; con la multiplicación delante, levanta confianza.

### Erratas ya corregidas

"sólamente" (va sin tilde) en la home vieja. Repasar tildes antes de publicar.

## Pendientes

Suyos:

- Crear el alias `info@` en el panel de ImprovMX y el "Enviar como" en Gmail.

Míos, cuando lo pida:

- Reescribir `privacy.html` entera y crear el Impressum con la dirección de
  Hamburgo.
- ~~Enganchar el calendario de GHL a los botones de reservar.~~ **Hecho el
  2026-10-02 en las siete páginas** (ver "Los CTA van todos al calendario").
  Falta probarlo con una reserva real.
- Píxel de Meta y comprobar con una reserva de prueba que el evento
  `cita_agendada` llega a GA4.
- ~~Sustituir los retratos de IA de las landings de `lanzamientos/`.~~ **Hecho el
  2026-10-02**: apuntaban a un `anais.png` que no existía y ahora usan la foto real.
- ~~Montar la **home de nivel 1**.~~ **Hecha y publicada en `/` el 2026-10-02.**
- ~~Mover la v6 a `/estetica` y quitarle el `noindex`.~~ **Hecho el 2026-10-02**,
  aunque en `/estetica/` vive la v2 del boceto nuevo, no la v6.
- Ir creando las verticales de dental y las que vengan, con el mismo sistema
  visual.
- Probar el calendario de GHL con una reserva real desde cada landing y
  comprobar que el `?nicho=` llega.

## Documentos del proyecto

- `docs/nichos-dolores.md` — dolores, piezas y planteamiento de cada landing de
  nicho (inmobiliarias, concesionarios, coaches e infoproductores, ecommerce,
  dental), y cómo se sostiene la prueba mientras solo haya un caso de éxito.

- `docs/copys/` — el copy aprobado de cada landing de nicho, separado del HTML.
  Cuando se maqueta una página, el texto sale de ahí.
- `docs/capacidades-reales.md` — qué puede hacer el sistema hoy, por nicho. Se
  lee ANTES de escribir copy.

- `docs/boceto-a-html.md` — cómo se convierte un boceto de IA en HTML real:
  por qué no existe código detrás, cómo se mide en vez de mirarlo a ojo, y las
  trampas en las que ya se cayó. **Se lee antes de reconstruir una sección.**
