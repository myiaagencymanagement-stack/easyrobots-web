# Historial de la web

> Diario de cada landing y decisiones fechadas, sacado del CLAUDE.md del proyecto el 2026-11-24 sin cambiar el
> texto. Es histórico: lo vigente está en CLAUDE.md, `docs/marca.md` y `~/.claude/negocio/`. Algunas cosas ya no
> valen (el calendario de GHL lo sustituyó Cal.com el 09/10; los pendientes de legal ya están hechos).

## Páginas y URLs (reorganizado el 2026-10-02)

Hasta esta fecha convivían la página buena de cada nicho y tres o cuatro
versiones anteriores suyas, todas en la raíz y todas con nombre `prueba-*`.
Ahora **cada nicho tiene una sola página viva, en su propia carpeta**, y todo lo
demás está en `borradores/` con el sufijo `-version-antigua`.

| URL | Archivo | Qué es |
|---|---|---|
| `/` | `src/index.html` | Home de agencia (nivel 1). Era `prueba-index-v2.html` |
| `/clinicas/whatsapp/` | `src/clinicas/whatsapp/index.html` | Estetica. Era `/estetica/` hasta el 2026-10-14 (ahora redirige, con UTM) |
| `/clinicas/llamadas/` | `src/clinicas/llamadas/index.html` | Agente de voz para todas las clinicas. Era `/agente-de-voz/` hasta el 2026-10-14 (ahora redirige) |
| `/clinicas/` | `src/clinicas/index.html` | Puerta de clinicas: WhatsApp → estetica, telefono → agente de voz. `noindex` |
| `/dental/` | `src/dental/index.html` | **Solo redirige** a `/agente-de-voz/` desde el 2026-10-07 |
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
- `src/guias/` — lead magnets. **Indexables desde el 2026-10-14** (Anais: pesa
  mas el SEO que el email). Cada guia lleva canonical y description, y estan en
  el sitemap. Antes iban con `noindex` para que no se leyeran sin dejar el email.
  **Descargas en las guias (2026-10-20):** el enlace llega por DM de Instagram y
  su navegador interno no descarga nada. Toda guia con archivos lleva: enlace
  normal al archivo real (nunca Blob, falla en el Safari del iPhone), nota de
  donde queda en iPhone (Archivos > Descargas), alternativa de copiar el texto,
  y el aviso `#iab` que solo sale en Instagram/Facebook (en Android abre Chrome
  con `intent://`). Hoy: `guia-3-skills-negocio.html` y la del agente de WhatsApp.
- `src/lanzamientos/` — landings de coaching y ecommerce.

### Los borradores

**Desde el 2026-10-21 viven en `borradores/` (raiz del repo), fuera de `src/`:** se guardan en
GitHub pero ya no se publican (el Dockerfile solo copia `src/`). Antes se podian abrir desde
internet, incluidos los retratos IA retirados.

`borradores/` guarda **todas** las versiones anteriores, ninguna se borró.
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

## Medicion y calendario: Cal.com, pixel de Meta y GA4 (2026-10-09)

**Todo vive en `src/js/consent.js`**, cargado en el `<head>` de las paginas
vivas, `clinicas`, `privacy` y `gracias`. Sustituye a lo que se cuenta en la
seccion siguiente sobre GHL: **el calendario ya es Cal.com**
(`cal.com/ai-business-tmzcjy/30min`), montado con su `embed.js` oficial dentro
del mismo modal, al abrirlo (`window.erCalendario(slot)`).

- Banner propio inyectado por el script. Sin "Aceptar" no se carga GA ni el
  pixel (`1511070997454573`). El `<noscript>` del pixel no se pone: dispara sin
  consentimiento. **No activar la app de Meta Pixel de Cal.com** (cuenta doble y
  se salta el banner).
- Eventos GA4 / Meta: `ver_landing`/ViewContent, `abrir_calendario`/Contact
  (clic en `[data-cal]` o `[data-reserva]`), `probar_demo`/ProbarDemo (lo
  avisa `chat-demo.js` con `er:demo-usada`) y `cita_agendada`/Schedule (aviso
  `bookingSuccessfulV2` de Cal.com, con el `uid` de la reserva como event_id).
  Todos con `nicho`, que sale de la carpeta de la URL.
- A la reserva viajan `metadata[nicho]`, las UTM y, solo con consentimiento,
  `metadata[consent|fbp|fbc|url]`. n8n los lee del webhook de Cal.com para la
  API de Conversiones y **no envia nada si no hay `consent`**.
- GA4: propiedad `528295108` ("EasyRobots Web"). `cita_agendada` es evento
  clave; dimensiones `nicho`, `origen`, `sitio`; retencion 14 meses. Acceso por
  la cuenta de servicio `claude@graphite-record-480113-t1`, clave en
  `~/.claude/credenciales/ga-service-account.json` (fuera del repo).
- Meta Ads: MCP oficial `meta-ads` (`mcp.facebook.com/ads`). Solo lectura salvo
  que se pida.

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
  `borradores/retratos-ia/`. No volver a ponerlos con nombre y cargo.
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
nicho, en su carpeta, y todo lo anterior esta en `borradores/`. La tabla de
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

## Agente de voz para clinicas (2026-10-07)

Peticion de Anais: la landing dental pasa a ser **para todas las clinicas y
centrada en el agente de voz**. Vive en `/agente-de-voz/`; `/dental/` y
`dental.html` redirigen alli (meta refresh a 0 + canonical: nginx no tiene
config propia, no hay 301). La dental v2 entera esta en
`borradores/dental-v2-version-antigua.html`. En la home, **el agente de voz
NO va en "Sectores"** (alli todo son sectores; Anais: "una es clinicas
esteticas y otra agente de voz, eso no puede ser"): se enlaza desde la tarjeta
"Agentes de voz y telefonia inteligente" de "Soluciones". El sexto hueco de
sectores, que era dental, es "¿No ves el tuyo?" y abre el calendario.
- **Dos paginas de clinicas, una puerta** (decision de Anais, 2026-10-07): en
  la home, la tarjeta de sectores es **"Clinicas"** y lleva a `/clinicas/`,
  una pagina corta (`noindex`, fuera del sitemap) donde se elige por como
  contactan los pacientes: **"Me escriben por WhatsApp"** → `/estetica/`
  (estetica, medicina estetica, microblading) o **"Me llaman por telefono"**
  → `/agente-de-voz/` (dental, fisioterapia, salud).

- Copy en `docs/copys/clinicas-voz.md`. Eje: *"Cada llamada sin coger es una
  cita perdida."* Solo llamadas **entrantes**, sin transferencia en caliente
  (avisa al equipo) y sin numero de telefono publicado: capacidades-reales.
- Fondos con ChatGPT (`assets/boceto/clinicas-voz/`, `voz-*.webp`): hero,
  problema, como funciona y CTA. El resto, liso con brillo azul.
  **Falta la foto apaisada de la CTA**: va la vertical anclada a la derecha y
  el boton baja debajo del texto.
- La demo es el bloque de concesionarios (`pb-`), con "a una paciente" y sin
  "es una grabacion, pero real" (la grabacion no existe y la pagina esta
  indexada). El boton de escuchar no suena todavia.
- El chat usa `data-personalidad="dental"` hasta que exista una personalidad
  `clinica` general en el agente de n8n (webhook `easyrobots-web`).
- Mismo esqueleto y CSS que la dental; los cambios van en el bloque "AGENTE DE
  VOZ" al final del primer `<style>`.

## Landing dental v2 (2026-10-02)

**Archivada el 2026-10-07** en `borradores/` (ver "Agente de voz para clinicas").


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

- **v3 publicada (2026-10-07): la home pasa a OSCURA** (paleta v6: #0A0F18,
  tarjetas #121A27, acento azul). En crema y marron "parecia de clinicas".
  Desde el caso de Pilar (caso real y equipo/garantia) sigue en claro, con
  los tokens originales devueltos solo en `.s06, section.eq`. El hero ya no
  lleva foto de persona: escritorio de noche (`home3-hero*.webp`) y un chat
  con **pestañas por sector que se escribe solo** (`#hx`, conversaciones
  marcadas "Ejemplo"). CTA con la misma escena (`home3-cta*.webp`). Fotos
  nuevas: `home3-c7.webp` (captacion, sin cifras) y `home3-s-clinicas.webp`
  (cabina de estetica). Originales en `assets/boceto/home-v3/`. La version
  clara esta en `borradores/home-v2-version-antigua.html`.
  Falta: las otras siete fotos de soluciones y cinco de sectores siguen
  siendo recortes pequeños del boceto (blandas en pantallas buenas).

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

- **Letra: todo en Inter, titulares incluidos (650, tracking apretado), solo en
  coaching** ("la letra de Apple"; SF Pro no se puede servir en web; con Plus Jakarta en los titulares Anais no lo veia). Esta en
  SF Pro del sistema en iPhone/Mac y Geist (`assets/fonts/geist-*.woff2`) en Windows/Android; titulares en blanco + gris Apple, sin azul y escala Apple: titulares 50-72 px en 600, texto 17-21 px. Si gusta, se decide si pasa a las demas.
- Las cifras del panel del sistema (124 / 48 / 32 / 27 %) se quedan por
  decision de Anais, con la nota "Panel de ejemplo".
- La garantia lleva el copy comun, no el de la referencia ("seguimos
  trabajando hasta conseguirlo", "sin preguntas").
- Fotos del equipo en rectangulo, ya no en circulo.
- Falta guardar en `coaching-v3/` el fondo vertical de "donde se cae" que
  paso Anais para movil; de momento va un recorte del horizontal.

## Estetica: fondos nuevos (2026-10-07)

El metodo completo, con medidas y prompts, esta en `docs/fondos-con-chatgpt.md`.

Anais no queria los fondos del boceto (recortes con el texto borrado). Se
decidieron **uno a uno** y se generaron con ChatGPT; los originales estan en
`src/assets/boceto/clinicas-v3/`. Regla de todos los prompts: **sin caras
visibles** (de espaldas o desenfocadas), sin texto, pantallas de movil solo
con luz, paleta calida con acento dorado #E4BA6C. Se piden en la misma
conversacion de ChatGPT y de una en una, escritorio y luego movil.

| Seccion | Fondo |
|---|---|
| Hero | Cabina: profesional trabajando y el movil encendido en la mesa. Encima, notificacion HTML de WhatsApp ("Lucia, 21:47") y etiqueta "Sin responder · 2 h" |
| 02 fugas | Escenas sin caras: movil en recepcion de noche, recepcion vacia, presupuesto con cafe frio |
| 03 recupera clientas | Clienta en casa leyendo el movil, de espaldas |
| 04 caotica a organizada | Recepcion de dia, desenfocada. El centro ya no es imagen: es HTML (mensajes de 3 canales que caen en una agenda) |
| 05, 06, 07, 10 | **Lisos** con brillo dorado. El caso de Pilar va liso a proposito: nada generado detras de un caso real |
| 08 + 09 | **Una sola foto** (despacho de dia) en `.dupla`, con linea crema entre las dos |
| 11 equipo y garantia | **Blanco** (`caja clara`) |
| 12 CTA | La duena al atardecer, de espaldas, anclada a la derecha. **Falta la version movil** (hay un recorte provisional) |

Otras decisiones del dia:

- **Vinetas animadas**: `[data-vi]` + `.vi` con retraso en `--d`. Aparecen al
  entrar en pantalla y se reinician al salir, para que vuelvan a salir. Sin
  JS o con movimiento reducido se ven quietas.
- **La demo** ("Pruebalo tu") lleva el copy de la demo de coaching v3
  ("Asi responde EasyRobots a una clienta") y va en fondo oscuro con el chat
  dentro de un movil y botones de frases dorados.
- Las fotos nuevas llevan `?v=2` en la URL: con el mismo nombre de archivo
  el navegador seguia ensenando las viejas.

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
- Dirección: **Tonndorfer Hauptstraße 61, Hamburgo (Alemania)**. **Solo en
  `privacy.html`** (aviso legal, obligatorio por §5 DDG / LSSI): Anais no quiere
  que salga en los pies ni en el JSON-LD (2026-10-14). No volver a ponerla ahí.
- Email: **info@easyrobots-ai.cloud**. Recibir: ImprovMX reenvia `info@` (y el
  comodin `*`) al Gmail. Enviar: Gmail "Enviar como" por el SMTP gratis de Brevo
  (`smtp-relay.brevo.com:587`, dominio autenticado con DKIM `brevo1/brevo2`).
  Montado el 2026-10-15. Nada de Google Workspace (de pago).
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
nada; están respaldados en `borradores/retratos-ia/`. En cuanto alguien les ve en
Instagram o en la llamada, no cuadra, y ahí se va la credibilidad del equipo,
que es medio argumento de venta.

**Instagram no se puede leer desde aquí**: el perfil devuelve el muro de inicio
de sesión y las direcciones de las imágenes caducan. Las fotos las pasa Anaís.

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

## Clinicas por canal y tamanos unificados (2026-10-14)

- **Las dos paginas de clinicas se nombran por canal** (opcion elegida por
  Anais): "Clinicas · WhatsApp" (`/estetica/`) y "Clinicas · Llamadas"
  (`/agente-de-voz/`). Solo cambio el texto visible (cintillo, menu, pie de la
  home, puerta de `/clinicas/`). **Y desde el mismo dia tambien las URL**:
  `/clinicas/whatsapp/` y `/clinicas/llamadas/`. Las viejas redirigen
  conservando UTM y ancla; las dos paginas llevan `<html data-nicho>` para que
  GA4, Meta y Cal.com sigan llamando al nicho `estetica` / `agente-de-voz`.
- Home, sectores: rejilla de 6 columnas (3 + 2 tarjetas) y "¿No ves el tuyo?"
  a lo ancho con chips de sector; cada chip abre el calendario con
  `nicho = home-<sector>`.
- Al final de cada pagina viva (menos coaching, que es la referencia de movil)
  hay un bloque "Tamanos unificados": movil h1 ~38, h2 27, texto >= 13-14;
  escritorio h2 ~42 vistos. En agente de voz, .s03, limites y control llevan
  zoom propio en movil y sus valores van divididos.
- "Escuchar la llamada" lleva `data-pronto`: avisa de que la grabacion aun no
  esta. Al tener el audio, quitar ese bloque del final de la pagina.

## Blog (2026-10-14)

Todo en `docs/blog.md`: archivos, reglas del contenido, flujo de n8n y temas.
Articulos con `noindex` hasta que Anais los aprueba.

## Gama AURA publicada (2026-11-08)

Peticion de Anais: lo que estaba en `/borradores-aura/` (con precios) pasa a ser la web viva: home, `/clinicas/`,
inmobiliarias, concesionarios, ecommerce y coaching, indexables, mas `/aura-business/` y `/aura-setter/` con `noindex`.
Las versiones anteriores, sin precios, estan en `BORRADORES ANTIGUOS SIN PRECIOS/` (raiz del repo, no se publica).
`/clinicas/` es ahora la pagina unica de clinicas: `/clinicas/whatsapp/` y `/clinicas/llamadas/` redirigen ahi con UTM.
Ofertas de pago, todas con `noindex`: `/reactivador-flash/`, `/agente-10-preguntas/`, `/agente-secretaria/`,
cada una con su `/gracias/`. Sus botones `data-pago` esperan los enlaces de Stripe.

## Cuadre de margenes y titulares (2026-11-11)

Peticion de Anais: en las paginas de nicho ningun apartado puede arrancar en otro margen que el
resto, y los titulares tienen que medir lo mismo. Medido con un script (posicion del primer texto y
del h2 de cada seccion, a 1440 y 1920), no a ojo.

- **La causa:** la calculadora (`.ic-calc`), "Un sistema conectado" (`.pzs`), captacion y precios
  (`.pc`) son **bloques comunes pegados en cada pagina** con contenedor propio (1240 px) y titular
  propio. Arrancaban 86 px mas adentro que el resto, y `.pzs` pegado al borde (78 px) y con el
  titular creciendo hasta 63 px a 1920 porque iba en unidades de la foto.
- **El arreglo** esta en un `<style id="er-cuadre">` al final de inmobiliarias, concesionarios,
  ecommerce, coaching y clinicas. Solo escritorio (desde 1081 px); **el movil no se toco**. La
  variable `--er-lado` lleva el margen de cada pagina (5,6vw y 80 px desde 1440; coaching 6,7vw y
  96 px; inmobiliarias 6,54vw). **Un bloque comun nuevo tiene que usar ese contenedor** (1440 px +
  `--er-lado`), no uno suyo.
- `.pzs`: la escena se limita a 1580 px (lo que mide a 1440) con los bordes fundidos, y el texto
  arranca en el margen de la pagina.
- Titulares de seccion en escritorio: **47 px en todas** (46 en coaching), tambien a 1920, donde
  unos subian a 52 y otros no.
- Clinicas: la demo del chat (`.wz-caja`) tenia contenedor de 1080; ahora el de la pagina.
- Coaching, "Donde se cae": columna de texto de 420 a 520 px (el titular partia dejando "habia"
  suelto), velo mas cerrado a la izquierda y cursiva y parrafo mas claros, que no se leian.
- Home: el boton final (`.k-btn`) tenia el ancho fijo de "Reservar llamada" y el texto nuevo se
  salia; ahora mide lo que su texto. En integraciones, la frase larga de "Y muchas mas" estiraba
  las ocho tarjetas: sale debajo de la rejilla (`.i-nota`) y la tarjeta lleva "Las que ya utilizas
  en tu negocio."
- Sin tocar: en clinicas "Asi funciona el sistema" va centrado a proposito, y el hero de
  inmobiliarias arranca 8 px antes que sus secciones.
- **CRM y canales en `/aura-business/` y `/aura-setter/`, sin detalle** (Anais, 2026-11-11): no quiere
  que se pueda copiar el proyecto; las funciones se explican en llamada. El punto del CRM dice solo
  "Todo en un solo panel. Te ensenamos su funcionamiento en la llamada." y el de canales (Business)
  ya no enumera canales ni cuenta como reconoce al contacto. **No volver a detallar funciones del
  CRM en ninguna pagina.**
- **Agente web vendedor: desde 495 EUR y mantenimiento desde 97 EUR/mes** (Anais, 2026-11-11; antes 395).
  Va en la home (tambien en su JSON-LD) y en las cinco paginas de nicho.

