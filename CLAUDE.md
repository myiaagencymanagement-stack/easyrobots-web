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
- Autenticación de git: el Windows Credential Manager ya la tiene guardada. No
  hace falta ningún token. **Nunca meter un token dentro de la URL de `git pull`
  o `git push`**: queda escrito en `.git/logs/HEAD`. Ya pasó una vez.

## Páginas

- `src/easyrobots-clinicas-premium-v6.html` — **la buena, la que se trabaja hoy**.
  Landing de clínicas, un solo archivo con su CSS y su JS dentro.
- `src/index.html` — la web vieja (1,1 MB). `v4`, `estilo-a/b/c`, `hybrid`,
  `preview-estilos*`, `*-prueba` son propuestas visuales ya descartadas o
  superadas; no tocar salvo que se pidan expresamente.
- `src/guias/` — lead magnets. `src/lanzamientos/` — landings de coaching y
  ecommerce.

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
- **`assets/social-preview.jpg` no existe** y el `og:image` apunta ahí, así que
  el enlace sale sin imagen al compartirlo por WhatsApp o Instagram.

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
| Equipo, Guillermo | `assets/guille.webp` | Puesta. 4:3.4. El cuadro va con fondo `#0B0B0D` porque la foto es un recorte sobre negro |
| Equipo, Anaís | — | **Vacío a propósito.** Falta una foto real suya |

Descartada una captura de Pilar trabajando en directo en TVE: resolución
demasiado baja para ponerla al lado de las otras dos.

### Ojo con los retratos de IA

`assets/anais.webp`, `anais.png` y `nosotros.png` son **retratos generados con
IA**: representan a los dos hermanos, pero las caras no son las suyas. No
ponerlos en el bloque de Equipo ni en ningún sitio donde se etiqueten con nombre
y cargo. Decisión de Anaís el 2026-09-24: antes un hueco vacío que una cara
inventada al lado de la foto real de Guillermo. En cuanto alguien les ve en
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
- "El montaje sí se cobra, porque es trabajo hecho a medida. Preferimos decirlo
  claro ahora que prometerte una devolución total que no pensamos cumplir."

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

- Foto real de Anaís para el hueco de Equipo (4:3.4, mismo tratamiento que la de
  Guillermo).
- Crear el alias `info@` en el panel de ImprovMX y el "Enviar como" en Gmail.

Míos, cuando lo pida:

- Reescribir `privacy.html` entera y crear el Impressum con la dirección de
  Hamburgo.
- `assets/social-preview.jpg` (1200×630).
- Enganchar el calendario de GHL (`api.leadconnectorhq.com/widget/booking/
  XMQy1fOiMEz88wzKLVPe`) a los botones de reservar.
- Píxel de Meta y comprobar con una reserva de prueba que el evento
  `cita_agendada` llega a GA4.
- Sustituir los retratos de IA que sigan vivos en `index.html` y en las landings
  de `lanzamientos/`.
- Montar la **home de nivel 1** (agencia de IA) con el recorrido de arriba. La
  v6 **no** se usa como plantilla: es una landing de nicho.
- Mover la v6 a `/estetica` (o `/microblading`) y quitarle el `noindex` cuando
  esté lista.
- Ir creando las verticales de dental y las que vengan, con el mismo sistema
  visual.
