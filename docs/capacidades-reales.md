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

- [ ] Concesionarios
- [ ] Clínicas estéticas
- [ ] Coaching e infoproductores
- [ ] Ecommerce

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
