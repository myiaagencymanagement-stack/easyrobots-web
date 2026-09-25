# Capacidades reales por nicho

Regla de trabajo, fijada el 2026-09-25:

> **Antes de escribir una línea de copy de un nicho, se rellena su tabla de
> capacidades.** Tres estados y nada más: **Ya disponible**, **Requiere
> configuración**, **No confirmada**.
>
> Es la diferencia entre vender lo que tenemos y vender lo que nos gustaría
> tener. Un titular que se apoya en una fila "No confirmada" es un titular que
> habrá que retirar delante de un cliente.

Cuando una fila cambia de estado, se anota aquí con su fecha y se revisa qué
copy dependía de ella.

## El criterio que decide qué entra en el copy

Fijado por Anaís el 2026-09-25, y vale para las seis verticales:

> **Si el límite lo pone el cliente, va en el copy.**
> **Si el límite lo ponemos nosotros, no va hasta que exista.**

Lo primero es implantación y se habla en la llamada de diagnóstico: que la
clínica tenga o no software con API cambia **cómo** se monta, no **si** se
puede. Nadie pone en una web "siempre que tu programa exporte".

Lo segundo es una promesa que no podemos cumplir el día que alguien la ponga a
prueba. El ejemplo que lo ordena todo: si el hero dice que descolgamos el
teléfono, alguien llamará al número de la demo y no habrá nadie. Eso no se
arregla en la llamada de venta, porque no se llega a ella.

---

## Inmobiliarias · estado a 2026-09-25

### Voz
| Capacidad | Estado | Detalle |
|---|---|---|
| Descolgar una llamada entrante | **No confirmada** | Hoy **no descuelga**: no hay proveedor conectado |
| Proveedor de voz | **No confirmada** | Se irá a **Retell**, pero no hay cuenta. Solo existen dos workflows de un curso, desactivados, y son para *llamar*, no para *atender* |
| Transcripción y grabación | **Requiere configuración** | La base **ya tiene dónde guardar** transcripción, grabación, duración y resultado. Falta el proveedor |
| Transferir la llamada en caliente | **No confirmada** | La haría la plataforma de voz, que no está. Hoy **solo avisa** |
| Llamadas salientes | **No confirmada** | No se plantea de momento |

**Lo que sí hay hoy: respuesta inmediata por WhatsApp.** Esa es la primera
versión del producto y es lo único sobre lo que puede apoyarse el copy.

### Lo que sabe
| Capacidad | Estado | Detalle |
|---|---|---|
| Consultar pisos (referencia, precio, disponibilidad) | **No confirmada** | Sin feed ni CRM conectado. **El agente tiene prohibido inventar inmuebles o asegurar disponibilidad**, y dice que no lo sabe |
| Ver agenda y calcular huecos reales | **Ya disponible** | Contra horario y citas, **por sede**, no por comercial |
| Agenda por comercial | **Requiere configuración** | Hay que montarla |
| Crear la cita | **Ya disponible** | Y **recomprueba que el hueco sigue libre** antes de meterla |
| Empuje a Google Calendar | **Requiere configuración** | Pendiente de montar |

### Dónde deja el dato
| Capacidad | Estado | Detalle |
|---|---|---|
| Crear contacto en el CRM | **Ya disponible** | |
| Crear nota y oportunidad | **Requiere configuración** | Hoy no |
| Resumen automático de la conversación | **Requiere configuración** | Hay dónde guardarlo, pero no se genera solo todavía |
| Aviso al equipo | **Ya disponible** | Telegram, tarea en el CRM con prioridad alta o email. Las tres funcionan |
| Aviso por WhatsApp al comercial | **Requiere configuración** | No está hecho |

### Límites (van en la página, son argumento)
- Da **precios de su catálogo de servicios** (visita, valoración, asesoría).
  **Precio de un piso concreto, no.**
- Cuando no sabe algo: dice que lo consulta y crea una tarea para el equipo.
  **Tiene prohibido rellenar huecos inventando.**
- **Solo español.** Otros idiomas no se han probado: no se mencionan.

### Consecuencias para el copy
1. **El hero no puede decir que atendemos el teléfono.** El ángulo se mantiene
   —gana quien llega primero— pero quien llega primero es **un WhatsApp en
   segundos**, no una llamada descolgada.
2. **Ningún CRM inmobiliario por su nombre.** La landing dice "se integra con lo
   que ya usas" y el detalle se confirma en la llamada de diagnóstico, porque
   cada CRM del sector es un mundo.
3. **Nada de "consulta la disponibilidad del piso"**: hoy es justo lo que tiene
   prohibido afirmar. Y eso, bien contado, es una ventaja: un agente que no
   inventa.
4. Cuando Retell esté montado y probado, **se cambia el hero**. Es una tarde de
   trabajo, no una landing nueva.

---

## Pendientes de rellenar

- [ ] Clínicas estéticas

---

## Dental · estado a 2026-09-25

**Confirmado por Anaís: todo lo repasado va al copy sin condiciones, con una
única excepción, la voz.**

### La única excepción: voz
| Capacidad | Estado |
|---|---|
| Atender llamadas entrantes | **No confirmada** — no hay proveedor conectado |
| Agente de voz, transferencia, llamadas salientes | **No confirmada** |

No se promete descolgar el teléfono en ningún sitio de la página. Cuando haya
número de demo de voz se cambia el hero: es una tarde de trabajo, no una
landing nueva.

### Lo que sí va al copy, sin peros
| Capacidad | Estado |
|---|---|
| Seguimiento de presupuestos, **con su motivo de rechazo** | **Ya disponible** |
| Agenda por profesional | **Ya disponible** |
| Confirmaciones y recordatorios | **Ya disponible** |
| Recuperación de ausencias | **Ya disponible** |
| Recall de higiene y revisiones | **Ya disponible** |
| Reseñas | **Ya disponible** |
| Avisos al equipo | **Ya disponible** |
| Intervención humana | **Ya disponible** |
| Información detallada de tratamientos desde base de conocimiento | **Ya disponible** |
| Integración con el software de la clínica | **Ya disponible** — que tenga API o no cambia la implantación, no la viabilidad |

### Regla de diseño que no es una capacidad
El agente **no diagnostica, no interpreta síntomas, no recomienda tratamiento y
no sustituye el criterio clínico.** Informa de lo que la clínica autoriza,
gestiona lo administrativo y deriva. Esto va escrito en la página: en dental el
límite es argumento de venta, no letra pequeña.

### Consecuencia para la estrategia
Con el seguimiento de presupuestos disponible, **la tesis original se sostiene**:
el dolor central es el presupuesto presentado que nadie retoma, y la saturación
del mostrador entra después como explicación. El motivo de rechazo registrado
convierte ese seguimiento en información de negocio, no en un recordatorio.

---

## Concesionarios · estado a 2026-09-25

**Confirmado por Anaís: con el criterio correcto —¿es posible con nuestro
sistema?— la respuesta es sí a todo, salvo el bloque de voz.**

### Lo único que no se toca: voz
| Capacidad | Estado |
|---|---|
| Atender llamadas entrantes · agente de voz · centralita | **No confirmada** |
| Clasificación de llamadas en tiempo real · derivación · transferencia en caliente | **No confirmada** |
| Llamadas salientes · transcripción · grabación | **No confirmada** |

No hay plataforma elegida todavía, y eso no es una semana de trabajo. Nada de
esto entra en el copy.

### Verde
Conversación por WhatsApp · avisos por email y Telegram · agenda de taller ·
agenda comercial · agenda por profesional · consulta de huecos · crear,
modificar y cancelar citas · contactos · oportunidades · tareas · avisos al
equipo · seguimiento de leads · seguimiento de pruebas de conducción ·
seguimiento de presupuestos y ofertas · recordatorios de mantenimiento ·
campañas de revisión vencida · confirmaciones y ausencias · información de
vehículos desde base de conocimiento · financiación y garantías autorizadas ·
integración con su software (DMS y gestor de taller).

### Con matiz, que se mantiene
- **Stock y recambios:** se consultan si el cliente da la fuente. Es
  implantación, se habla en la llamada.
- **Tasación:** el agente recoge matrícula, kilómetros y estado y lo pasa al
  tasador. **No da un precio.**

### Consecuencia para la estrategia
La tesis de la centralita —"todo pasa por recepción"— **es una tesis de voz** y
se aparca entera hasta que haya proveedor. No se puede reconvertir como en
inmobiliarias, porque allí el valor era la respuesta y aquí es el triaje.

El eje de la página pasa a ser que **un concesionario pierde en sus dos
negocios por motivos opuestos**: en ventas por minutos, en posventa por meses.
Dolor central: la posventa vencida, que nadie persigue y que es margen
recurrente ya dentro de la casa. Segundo: el lead comercial que espera.

---

## Coaching e infoproductores · estado a 2026-09-25

**Verde salvo voz.** Mismo motor confirmado en dental y concesionarios.

| Capacidad | Estado |
|---|---|
| WhatsApp · Instagram DM · webchat · formularios · email · multicanal | **Ya disponible** (IG requiere cuenta profesional y permisos de Meta: es implantación) |
| Cualificación con criterios propios · preguntas por embudo · etiquetado · tono propio | **Ya disponible** |
| Agenda, crear llamada, modificar, cancelar, recordatorios | **Ya disponible** |
| **Recuperación de no-shows** | **Ya disponible** |
| Seguimiento automático · contactos · oportunidades · tareas · avisos (Telegram, email) | **Ya disponible** |
| **Memoria y contexto entre canales** | **Ya disponible con un identificador común** (teléfono o email). Sin dato común, unir dos identidades requiere configuración y no siempre es posible |
| **Recuperación de solicitudes abandonadas** | **Ya disponible si el formulario entrega lo rellenado antes del abandono.** Con formularios de terceros, requiere configuración |
| Resumen automático de la conversación | **Requiere configuración** |
| Agente de voz · llamadas salientes · transcripción | **No confirmada** |

### Estrategia cerrada por Anaís el 2026-09-25

- **Eje:** del "sí, me interesa" a una llamada que realmente ocurre.
- **Problema:** las oportunidades se enfrían entre conversación, aplicación,
  agenda y llamada. Es gente que **ya había levantado la mano**.
- **Mecanismo:** canal → conversación → cualificación → aplicación → agenda →
  recordatorio → recuperación → seguimiento.
- **Diferenciador:** no vende por el coach. Le quita el trabajo que ocurre
  **antes y después** de la llamada.
- **Prueba:** el recorrido completo, incluidos no-show, solicitud abandonada y
  aviso al equipo.
- **Tono:** cercano, directo, de marca personal. Nada de "automatiza tu
  negocio" ni "escala tus ventas".
- **Unidad económica: la llamada**, no el euro. En esta página no van cifras de
  dinero.
- Una sola página para coaches e infoproductores, con un solo vocabulario.

### Tres correcciones de redacción, obligatorias

1. **No** usar "que la agenda se llene sola". Choca con la regla de no prometer
   resultados. En su lugar: *una agenda más previsible y saber qué llamadas
   están realmente preparadas*.
2. **No** decir "donde se cae casi todo": es una afirmación cuantitativa sin
   datos. En su lugar: *donde muchas oportunidades se enfrían*.
3. La frase que mejor define la landing, y que resuelve la objeción principal
   del nicho: **"Esto no vende por ti. Se ocupa de que todo el que dice que sí
   llegue a tu llamada."**

---

## Ecommerce · estado a 2026-09-26

**Confirmado por Anaís: nada de la tabla es imposible.** Verde salvo voz, que
sigue sin proveedor.

| Capacidad | Estado |
|---|---|
| WhatsApp · Instagram DM · webchat · email · formularios · multicanal | **Ya disponible** |
| Contexto entre canales | **Ya disponible con identificador común** (email o teléfono del pedido) |
| Consultar estado del pedido | **Ya disponible** con los datos de la tienda |
| Integración con la tienda (Shopify, WooCommerce, PrestaShop…) | **Ya disponible** — API o no cambia la implantación |
| Seguimiento de envío / transportista | **Ya disponible** si el transportista expone el dato |
| Guiar cambios y devoluciones | **Ya disponible**, con las reglas de la tienda |
| **Ejecutar devolución: reembolso o etiqueta** | **Requiere configuración y autorización explícita.** Mueve dinero: el límite lo pone el cliente y se define en el montaje |
| Consultar stock y tallas | **Ya disponible** con la fuente del cliente |
| Detectar incidencia y avisar antes de que escale | **Ya disponible** |
| Pedir reseña en el momento adecuado | **Ya disponible** |
| Carrito abandonado | **Ya disponible** si la tienda envía el evento |
| Recompra por ciclo | **Ya disponible** |
| Mensaje proactivo por WhatsApp | **Ya disponible** con plantillas aprobadas y consentimiento |
| Contactos · oportunidades · tareas · etiquetado · avisos | **Ya disponible** |
| Resumen automático de la conversación | **Requiere configuración** |
| Agente de voz · llamadas salientes · transcripción | **No confirmada** |

### Estrategia cerrada

- **Tesis:** la postventa es el único sitio del negocio donde **una venta ya
  cobrada puede convertirse en pérdida**. No entramos por "la mitad de tu
  soporte es ¿dónde está mi pedido?": eso es queja de volumen, ya lo sabe, y
  nos mete a competir con cualquier chatbot barato.
- **Dolor central:** el pedido ya cobrado sigue generando trabajo y riesgo, y
  se decide de madrugada, en fin de semana o en plena campaña.
- **Mecanismo:** identifica el pedido → contesta con **el dato real** → guía
  cambio o devolución con las reglas de la tienda → avisa a una persona antes
  de que la incidencia escale → pide la reseña cuando toca → propone reposición.
- **Dos límites escritos, y son el argumento principal:** no inventa fechas de
  entrega y no mueve dinero sin autorización.
- **Unidad económica: el ticket y la hora**, no el euro.
- **Diferencia clave del nicho:** es el único donde el visitante **ya ha
  probado un chatbot y le ha salido mal**, y el único donde quien escribe ya es
  cliente y ya ha pagado.
- **Tono:** operativo y sobrio.
