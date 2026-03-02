# Regenmon - Actualización con Sistema de Monedas y Autenticación

## Características Implementadas

### 1. Sistema de Autenticación (Privy)
- Integración de Privy para inicio de sesión con Google y Email
- Botón de "Iniciar Sesión" cuando el usuario no está logueado
- Botón de "Cerrar Sesión" cuando el usuario está logueado
- Persistencia de sesión al recargar la página
- Información del usuario mostrada en el header

### 2. Sistema de Monedas ($FRUTA)
- Estado inicial: 100 monedas para usuarios nuevos
- Visualización de monedas en el header: "🍊 100 $FRUTA"
- Ganancia de monedas al conversar (2-5 monedas por conversación)
- Reducción de ganancia de monedas cuando se acerca a 100 monedas
- Visualización de monedas oculta cuando no estás logueado

### 3. Alimentar al Regenmon
- Botón actualizado: "🍎 Alimentar (10 🍊)" que cuesta 10 monedas
- Validaciones:
  - No se puede alimentar sin suficientes monedas
  - No se puede alimentar si el hambre ya está al mínimo
  - Mensaje de error cuando no hay suficientes monedas
- Reacción del Regenmon al ser alimentado

### 4. Feedback Visual
- Mensajes de estado:
  - "⏳ Procesando…" durante las acciones
  - "✅ ¡Listo!" cuando termina (desaparece en 2 segundos)
  - Mensajes de error en rojo
- Animaciones de monedas:
  - "-10 🍊" flotando hacia arriba cuando se gastan monedas
  - "+50 🍊" en verde flotando cuando se ganan monedas

### 5. Validaciones
- No se pueden hacer clics múltiples mientras se procesa
- El sistema previene acciones inválidas
- Protección contra gasto de monedas sin fondos suficientes

### 6. Pantalla Principal (después de login)
- Header con nombre/email del usuario + monedas + botón cerrar sesión
- Área de mensaje del Regenmon (donde reacciona a las acciones)
- Botones de acción actualizados

## Tecnologías Utilizadas
- HTML5, CSS3, JavaScript (Vanilla)
- NES.css para estilos retro
- Google Fonts ("Press Start 2P")
- Privy para autenticación
- localStorage para persistencia de datos

## Persistencia
- Las monedas se guardan al recargar (tanto local como con validación de privy)
- Los stats se guardan al recargar
- El estado del Regenmon refleja acciones previas
- Cada usuario tiene sus propios datos (por email)

## Notas de Implementación
- Se ha mantenido el estilo pixel art / retro de sesiones anteriores
- Diseño responsive (celular)
- Color principal: naranja
- Todas las funcionalidades solicitadas han sido implementadas