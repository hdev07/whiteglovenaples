# Guía para el cliente: Activar tu correo info@whiteglovenaples.com

**Para:** Dueño de White Glove Exteriors  
**Nivel:** No necesitas saber de tecnología — solo seguir los pasos  
**Tiempo aproximado:** 1 hora (más espera de propagación DNS, hasta 24 h)

---

## ¿Qué vamos a lograr?

Al terminar tendrás:

- Un correo profesional: **info@whiteglovenaples.com**
- Una bandeja donde **recibes** mensajes de clientes (incluidos los del formulario de tu sitio web)
- La posibilidad de **responder** desde ese mismo correo, para que el cliente vea `info@whiteglovenaples.com` y no tu Gmail personal

### ¿Por qué hacemos esto?

| Lo que quieres | Cómo lo conseguimos |
|----------------|---------------------|
| Que te lleguen los mensajes del formulario del sitio | Tu desarrollador conecta el sitio; tú activas el buzón `info@` |
| Un correo que se vea profesional | Zoho Mail (gratis) crea el buzón con tu dominio |
| No pagar Google Workspace | Usamos Zoho Mail gratuito en lugar de Google |

> **Importante:** Tu desarrollador (Devifly) configurará la parte del **sitio web**. **Tú** solo necesitas completar esta guía para tener tu correo `info@` funcionando.

---

## Lo que TÚ debes hacer (resumen)

1. Crear cuenta gratuita en **Zoho Mail**
2. Conectar tu dominio **whiteglovenaples.com** (está en Wix)
3. Agregar unos registros en **Wix** (copiar y pegar — te guiamos)
4. Crear el usuario **info@**
5. Probar que puedes recibir y enviar correo

**No necesitas:** instalar programas, saber programar, ni comprar Google Workspace.

---

## Antes de empezar — ten a mano

- [ ] Tu usuario y contraseña de **Wix** (donde compraste el dominio)
- [ ] Un correo personal tuyo (Gmail, Yahoo, etc.) para crear la cuenta de Zoho
- [ ] Papel o notas para guardar la **contraseña de info@**
- [ ] Un teléfono o computadora con internet

Si no recuerdas tu acceso a Wix, recupéralo antes de continuar: [wix.com](https://www.wix.com) → **Iniciar sesión** → **¿Olvidaste tu contraseña?**

---

## PASO 1 — Crear tu cuenta en Zoho Mail

### ¿Por qué?

Zoho es el servicio **gratuito** que te da una bandeja de correo real con tu dominio (`info@whiteglovenaples.com`). Sin esto, el correo `info@` no existe y los mensajes del formulario no tienen dónde llegar.

### Qué hacer

1. Abre en tu navegador: **https://www.zoho.com/mail/**
2. Busca el botón **Sign Up** / **Registrarse** o el plan **Forever Free** (gratis para siempre).
3. Completa el formulario con:
   - Tu nombre
   - Un correo personal (para activar la cuenta)
   - Una contraseña para Zoho
4. Revisa tu correo personal y haz clic en el enlace de **verificación** que envía Zoho.
5. Inicia sesión en Zoho cuando te lo pida.

### ✅ Listo cuando…

Estés dentro del panel de Zoho Mail (verás opciones como "Add Domain" o "Agregar dominio").

---

## PASO 2 — Agregar tu dominio en Zoho

### ¿Por qué?

Le dices a Zoho: *"Quiero usar el dominio whiteglovenaples.com para mi correo"*. Zoho te dará unos códigos que debes poner en Wix para demostrar que el dominio es tuyo.

### Qué hacer

1. En Zoho, haz clic en **Add Domain** / **Agregar dominio**.
2. Escribe exactamente: `whiteglovenaples.com`
3. Zoho te mostrará una pantalla con **registros DNS** (parecen tablas con Tipo, Nombre, Valor).
4. **No cierres esta pantalla.** Déjala abierta en una pestaña del navegador.
5. Abre otra pestaña e inicia sesión en **Wix** (Paso 3).

### ✅ Listo cuando…

Zoho muestre los registros pendientes y tengas Wix abierto en otra pestaña.

---

## PASO 3 — Agregar registros en Wix (copiar y pegar)

### ¿Por qué?

Tu dominio vive en **Wix**. Zoho necesita permiso (vía DNS) para recibir correos en `@whiteglovenaples.com`. Es como dar la dirección correcta al cartero: sin estos registros, el correo no llega a tu buzón.

### Qué hacer

1. En **Wix**, ve a:
   - **Dominios** (o **Domains**)
   - Selecciona **whiteglovenaples.com**
   - Busca **DNS** / **Configuración DNS** / **Manage DNS Records**
2. Verás una lista de registros o un botón **Agregar registro** / **Add Record**.
3. Por **cada fila** que muestra Zoho, crea un registro en Wix:

   | En Zoho dice | En Wix eliges |
   |--------------|---------------|
   | TXT | Tipo: **TXT** |
   | MX | Tipo: **MX** |
   | CNAME | Tipo: **CNAME** |

4. Copia el **Nombre/Host** y el **Valor** de Zoho y pégalos en Wix **tal cual** (sin espacios extra).
5. Si Zoho pide **Prioridad** en un MX, pon el número que indique (ej. 10, 20).
6. Guarda cada registro.
7. Vuelve a la pestaña de **Zoho** y haz clic en **Verify** / **Verificar**.

### Si la verificación falla

- **Es normal** a la primera. Los cambios en internet pueden tardar **15 minutos a 24 horas**.
- Espera 30 minutos y vuelve a pulsar **Verificar** en Zoho.
- Revisa que copiaste los valores **sin errores** (una letra mal y no funciona).

### ⚠️ Muy importante

- **No borres** registros que ya existan en Wix si no sabes para qué son. Si tu desarrollador te envió registros adicionales (para el formulario del sitio), **agréguelos** sin eliminar los de Zoho.
- Si tienes dudas, **toma captura de pantalla** y envíasela a tu desarrollador antes de borrar algo.

### ✅ Listo cuando…

Zoho muestre el dominio como **Verified** / **Verificado** (marca verde o mensaje de éxito).

---

## PASO 4 — Crear tu correo info@

### ¿Por qué?

Hasta ahora conectaste el dominio. Ahora creas la **cuenta concreta** que usarás día a día: `info@whiteglovenaples.com`.

### Qué hacer

1. En Zoho, busca **Users** / **Usuarios** → **Add User** / **Agregar usuario**.
2. Completa:
   - **Nombre:** Info (o tu nombre de negocio)
   - **Correo:** `info` (Zoho añade solo `@whiteglovenaples.com`)
   - **Contraseña:** inventa una **segura** y **anótala** en un lugar seguro
3. Finaliza el asistente.
4. Abre **https://mail.zoho.com** e inicia sesión con:
   - Email: `info@whiteglovenaples.com`
   - La contraseña que creaste

### ✅ Listo cuando…

Puedas ver la bandeja de entrada vacía (o con correos de bienvenida) de `info@`.

---

## PASO 5 — Probar que todo funciona

### ¿Por qué?

Confirmar que recibes y envías correo **antes** de depender del formulario del sitio evita sorpresas.

### Prueba A — Recibir correo

1. Desde tu **correo personal** (Gmail, etc.), envía un mensaje a:  
   **info@whiteglovenaples.com**  
   Asunto: `Prueba`  
   Mensaje: `Hola, esto es una prueba`
2. Espera hasta **10 minutos**.
3. Revisa la bandeja de Zoho (`mail.zoho.com`). Mira también **Spam**.

**¿Llegó?** ✅ Perfecto.  
**¿No llegó?** Espera 1 hora y repite. Si sigue sin llegar, contacta a tu desarrollador con captura de los registros DNS en Wix.

### Prueba B — Enviar correo

1. Desde Zoho (`info@`), envía un correo a tu correo personal.
2. En tu bandeja personal, verifica que el remitente diga **info@whiteglovenaples.com**.

**¿Se ve bien?** ✅ Ya tienes correo profesional activo.

---

## PASO 6 — Lo que hace tu desarrollador (no tienes que hacerlo tú)

Para que el **formulario de contacto** de tu sitio web envíe mensajes a `info@`, tu desarrollador configurará:

- El servicio **Resend** (envío automático desde el sitio)
- Registros DNS adicionales en Wix (te puede pedir que los agregues igual que en el Paso 3)
- La conexión en el servidor donde está tu página web

**Tú solo necesitas:**

1. Completar los Pasos 1–5 de esta guía
2. Si tu desarrollador te envía **más registros DNS para Wix**, agrégalos como en el Paso 3 (copiar y pegar)
3. Avisarle cuando `info@` ya recibe y envía correo correctamente

---

## PASO 7 — Usar tu correo día a día

### Recibir mensajes del formulario del sitio

Cuando alguien llene el formulario en **whiteglovenaples.com**, recibirás un correo en `info@` con:

- Nombre del cliente
- Teléfono
- Email (si lo puso)
- Tipo de propiedad
- Mensaje

El asunto será algo como: **New Assessment Request — [Nombre]**

### Responder a un cliente

1. Abre el correo en Zoho.
2. Pulsa **Responder**.
3. Escribe tu respuesta y envía.

El cliente verá que le respondes desde **info@whiteglovenaples.com** (profesional).

### Acceder desde el celular

1. Descarga la app **Zoho Mail** (App Store o Google Play).
2. Inicia sesión con `info@whiteglovenaples.com` y tu contraseña.

---

## Lista de verificación final

Marca cada ítem cuando lo completes:

- [ ] Cuenta Zoho creada y verificada
- [ ] Dominio `whiteglovenaples.com` verificado en Zoho
- [ ] Registros DNS agregados en Wix
- [ ] Usuario `info@whiteglovenaples.com` creado
- [ ] Prueba de **recibir** correo — OK
- [ ] Prueba de **enviar** correo — OK
- [ ] Contraseña de `info@` guardada en lugar seguro
- [ ] Desarrollador avisado de que el correo está listo

---

## Problemas frecuentes (en palabras simples)

| Problema | Qué significa | Qué hacer |
|----------|---------------|-----------|
| Zoho no verifica el dominio | Internet aún no actualizó los registros | Esperar 30 min – 24 h y verificar de nuevo |
| No llegan correos a info@ | El "cartero" no sabe dónde entregar | Revisar registros MX en Wix con tu desarrollador |
| Correos en Spam | El filtro los marcó como sospechosos | Revisar carpeta Spam; marcar como "No es spam" |
| Olvidé la contraseña de info@ | — | En Zoho: recuperar contraseña o pedir ayuda al admin de la cuenta |
| No encuentro DNS en Wix | El menú cambia según la versión | Buscar "DNS" en la ayuda de Wix o pedir a tu desarrollador una videollamada de 10 min |

---

## ¿Necesitas ayuda?

**Contacta a tu desarrollador (Devifly)** si:

- No puedes entrar a Wix
- Zoho no verifica el dominio después de 24 horas
- No sabes si debes borrar un registro DNS
- El formulario del sitio no te llega correo (después de que info@ ya funciona en las pruebas manuales)

**Prepara antes de llamar:**

- Capturas de pantalla de Wix (registros DNS)
- Captura de Zoho (estado del dominio)
- Hora exacta en que enviaste la prueba

---

## Glosario (palabras que puedes ver)

| Palabra | Significado simple |
|---------|-------------------|
| **Dominio** | Tu dirección en internet: whiteglovenaples.com |
| **DNS** | La "guía telefónica" de internet que dice dónde va el correo |
| **MX** | Registro que indica dónde recibir correos |
| **Buzón / Inbox** | Tu bandeja de correo |
| **Wix** | Donde compraste y administras tu dominio |
| **Zoho Mail** | Donde lees y envías correos de info@ |

---

*Guía preparada para White Glove Exteriors — Devifly*  
*Tu sitio web: https://whiteglovenaples.com*  
*Tu correo profesional: info@whiteglovenaples.com*
