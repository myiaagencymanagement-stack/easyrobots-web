---
name: blog-articulo
description: Escribe, revisa y publica articulos del blog de EasyRobots (easyrobots-ai.cloud/blog/). Usar cuando Anais diga "escribe el articulo de la semana", "articulo del blog", "nuevo post", "revisemos el borrador", "publica el articulo" o "que toca en el blog". Los escribe Claude (no Gemini), se guardan como borrador local en blog-borradores/ y solo se publican cuando ella lo aprueba.
---

# Articulos del blog de EasyRobots

Decision de Anais (2026-10-14): los articulos los escribe Claude en esta
conversacion, no Gemini en n8n ("Gemini flaquea"). Ella los revisa aqui y se
publican al aprobarlos. El aviso de cada lunes le llega por email con el
resumen de tareas (script de Windows, no n8n). Al publicar, marcar el tema como
"hecho" en docs/blog.md: el email coge el primero sin marcar.

## Antes de escribir, leer

1. `docs/blog.md` — reglas del contenido y lista de temas (el siguiente es el
   primero sin marcar como hecho).
2. `docs/seo-palabras-clave.md` — que se busca de verdad; el titulo y el
   primer parrafo llevan la busqueda del tema.
3. `docs/capacidades-reales.md` — no prometer nada que el sistema no haga.
4. El articulo ya publicado `src/blog/whatsapp-fuera-de-horario-clinica-estetica/index.html`
   como referencia de tono y estructura.

## Paso 1 · Borrador (no se publica)

- Escribir en `blog-borradores/AAAA-MM-DD-<slug>.html`, fuera de `src/`, asi
  que **no sale en el dominio** ni con un push.
- Rellenar `docs/blog-plantilla.html` (huecos `{{...}}` documentados arriba
  del archivo). `{{ROBOTS}}` = `noindex, follow`.
- 800-1.200 palabras. Titulo SEO <= 60 caracteres. Descripcion 130-155.
- Estructura: escena concreta → por que pasa → `ar-caja` con la consecuencia
  en una frase → que hacer, de lo simple a lo automatico → como medirlo en su
  negocio → CTA a la landing del nicho.
- Enlazar 1 landing y 2 piezas relacionadas (guia o articulo).
- **Cero cifras inventadas**, nada de testimonios, el sistema no tiene limites
  fijos (los decide el cliente). El unico caso citable es el de Pilar.
- Para que Anais lo lea, ensenarle el texto en el chat (titulo, entradilla y
  cuerpo en limpio) y la ruta del borrador. No publicar nada todavia.

## Paso 2 · Revision

Anais comenta, se corrige el borrador. Se repite hasta que diga que vale.

## Paso 3 · Publicar (solo con su "publicalo")

1. Mover a `src/blog/<slug>/index.html` con `{{ROBOTS}}` =
   `index, follow, max-image-preview:large`.
2. Anadir la tarjeta en `src/blog/index.html` justo debajo de `<!-- @@NUEVO@@ -->`
   con su `data-sector`.
3. Anadir la URL a `src/sitemap.xml` con la fecha del dia.
4. Si es el tercer articulo aprobado, quitar el `noindex` de `src/blog/index.html`
   y meter `/blog/` en el sitemap.
5. Marcar el tema como hecho en `docs/blog.md`.
6. Validar (HTMLParser), commit `blog: <titulo corto>` y push a `main`.
7. Decirle a Anais la URL para pedir la indexacion en Search Console (con https).
