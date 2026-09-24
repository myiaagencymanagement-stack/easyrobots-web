# EasyRobots Web

Web de EasyRobots (sistemas de IA para clínicas estéticas). Repo:
`myiaagencymanagement-stack/easyrobots-web`, rama única `main`.

## Cómo se publica

- Todo lo que hay en `src/` se copia a la raíz de nginx (`Dockerfile`).
- Dominio: **easyrobots-ai.cloud** (también `www.`). Una página en `src/x.html`
  queda en `https://easyrobots-ai.cloud/x.html`.
- No hay `.github/workflows`, pero **el despliegue es automático**: al empujar a
  `main`, en pocos minutos el dominio ya sirve los archivos nuevos. Comprobado el
  2026-09-24 con `curl -o /dev/null -w "%{http_code} %{size_download}"` sobre las
  imágenes recién subidas: mismo tamaño en bytes que los locales.
- Se commitea y se empuja directo a `main`, sin ramas ni PRs.

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

### Imágenes

Regla de la casa: **WebP, recortada al ratio que ya pide el hueco, y lo más
ligera posible**. Referencia de lo que hay: 7–25 KB por foto. Receta usada:

```python
from PIL import Image
Image.open(origen).convert('RGB').crop(caja).resize(destino, Image.LANCZOS) \
     .save('assets/x.webp', 'WEBP', quality=72, method=6)
```

Los `<img>` llevan `loading="lazy"` y `decoding="async"`.

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

## Pendientes

- Foto real de Anaís para el hueco de Equipo (4:3.4, mismo tratamiento que la de
  Guillermo).
- Sustituir los retratos de IA que sigan vivos en `index.html` y en las landings
  de `lanzamientos/`.
- Sin publicar: alias `info@` en ImprovMX, dirección de Hamburgo, `privacy.html`
  e Impressum.
