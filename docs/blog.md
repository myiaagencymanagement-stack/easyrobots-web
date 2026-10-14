# Blog de EasyRobots (2026-10-14)

## Como esta montado

| Archivo | Que es |
|---|---|
| `src/css/blog.css` | El diseno de todo el blog (indice y articulos). Se cambia aqui una vez |
| `src/js/blog.js` | Calendario de Cal.com en modal y filtros por sector del indice |
| `src/blog/index.html` | Indice. Las tarjetas nuevas van debajo de `<!-- @@NUEVO@@ -->` |
| `src/blog/<slug>/index.html` | Cada articulo, en su carpeta (URL sin .html) |
| `docs/blog-plantilla.html` | Plantilla con huecos `{{...}}` para n8n. No se publica |

Mismo sistema visual que la home v3 (oscuro, Fraunces en titulares, azul de
acento). Los articulos no llevan JavaScript propio.

**Publicar un articulo:** se crea con `noindex`. Al aprobarlo Anais se cambia
a `index, follow, max-image-preview:large` y se mete en `sitemap.xml`. El
indice `/blog/` se abre a Google cuando haya 3 articulos aprobados.

## Reglas del contenido (las de la web, aplicadas al blog)

- De tu, frases cortas, escena concreta → consecuencia (en `ar-caja`) →
  mecanismo → que hacer. Vocabulario del sector, nunca "tus clientes" generico.
- **Cero cifras inventadas.** Si no hay dato, se le ensena a medirlo.
- El sistema no tiene limites fijos: los decide cada cliente en el montaje.
- El unico caso publicable es el de Pilar, con sus cifras reales (53 / 8 / 2.000 EUR).
- Cada articulo enlaza a la landing de su nicho y termina con la CTA de llamada.
- **Siempre revisado por Anais antes de publicar.** Google castiga el
  contenido de IA en masa sin revisar.

## Flujo de n8n previsto

1. Disparo semanal (lunes). Lee el siguiente tema pendiente de la lista
   (Google Sheet: tema, nicho, palabra clave, landing, estado).
2. La IA escribe el borrador en JSON con los huecos de la plantilla, con un
   prompt que lleva las reglas de arriba.
3. Rellena `docs/blog-plantilla.html` con `ROBOTS = noindex, follow` y lo sube
   a GitHub en `src/blog/<slug>/index.html` (API de contenidos). Se publica solo.
4. Envia a Anais el enlace del borrador por email/Telegram con dos botones:
   **Aprobar** / **Rehacer con comentarios**.
5. Al aprobar: cambia `ROBOTS` a index, anade la tarjeta al indice y la URL al
   sitemap, y marca el tema como publicado.

## Temas propuestos (palabra clave → landing)

Clinicas (`/clinicas/whatsapp/`, `/clinicas/llamadas/`)
1. WhatsApp fuera de horario en una clinica estetica · **hecho (borrador)**
2. Como reducir los no-shows en una clinica estetica
3. Cuando escribir a una clienta para el retoque de microblading
4. Que contestar cuando preguntan "¿cuanto cuesta?" por WhatsApp
5. Por que el telefono de la clinica suena y nadie lo coge (y que hacer)
6. Como pedir resenas en Google sin incomodar a la paciente
7. Recordatorios de cita por WhatsApp: cuando y que mensaje

Inmobiliarias (`/inmobiliarias/`)
8. Que hacer con las llamadas de un portal fuera de horario
9. Como cualificar a un comprador antes de la visita

Concesionarios (`/concesionarios/`)
10. Como recuperar a los clientes que dejaron de ir al taller
11. Leads de coches de fin de semana: como no perderlos

Ecommerce (`/ecommerce/`)
12. "¿Donde esta mi pedido?": como dejar de contestarlo a mano
13. Cambios y devoluciones por WhatsApp sin saturar al equipo

Coaching (`/coaching/`)
14. Como reducir los no-shows en llamadas de venta
15. Que hacer con los leads que dicen "luego te escribo"
