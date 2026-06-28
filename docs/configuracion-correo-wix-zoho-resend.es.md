# Guía: Configurar correo `info@whiteglovenaples.com` (Wix + Zoho + Resend)

Esta guía explica paso a paso cómo activar el correo profesional **`info@whiteglovenaples.com`** sin comprar Google Workspace, usando:

| Servicio | Función |
|----------|---------|
| **Wix** | Donde está registrado el dominio y se editan los DNS |
| **Zoho Mail (gratis)** | Bandeja real para recibir y enviar desde `info@` |
| **Resend** | Envía los correos del formulario de contacto del sitio web |
| **Hosting del sitio** (ej. Vercel) | Donde corre el sitio Next.js y la variable `RESEND_API_KEY` |

> **Nota:** El sitio web **no** tiene que estar en Wix. Solo el dominio y sus DNS se administran desde Wix.

---

## Resumen de lo que lograrás

1. Tu cliente tendrá una bandeja de entrada en **`info@whiteglovenaples.com`**.
2. Podrá **leer y responder** correos desde esa dirección (app web o móvil de Zoho).
3. Cuando alguien envíe el **formulario de contacto** en [whiteglovenaples.com](https://whiteglovenaples.com), llegará un correo a `info@` con todos los datos.
4. Al responder desde Zoho, el correo saldrá como **`info@whiteglovenaples.com`** (si el visitante dejó email, puedes usar **Responder** y le llegará directo).

---

## Requisitos previos

- [ ] Dominio **`whiteglovenaples.com`** conectado en Wix.
- [ ] Acceso al panel de Wix del cliente (cuenta propietaria del dominio).
- [ ] Acceso al hosting donde está desplegado el sitio (ej. Vercel).
- [ ] Un correo personal del cliente (Gmail, etc.) solo para crear cuentas en Zoho y Resend.
- [ ] Tiempo estimado: **45–90 minutos** (más propagación DNS, hasta 24–48 h en casos raros).

---

## Parte 1 — Crear la bandeja `info@` con Zoho Mail (gratis)

### Paso 1.1 — Crear cuenta en Zoho

1. Abre [https://www.zoho.com/mail/](https://www.zoho.com/mail/).
2. Haz clic en **Sign Up Now** o **Get Started**.
3. Elige el plan **Forever Free** (correo gratuito con dominio propio).
4. Regístrate con el correo personal del cliente o uno que administre el negocio.
5. Completa el registro y verifica el correo de confirmación de Zoho.

### Paso 1.2 — Agregar el dominio en Zoho

1. En el panel de Zoho Mail, ve a **Add Domain** / **Agregar dominio**.
2. Escribe: `whiteglovenaples.com`
3. Zoho mostrará registros DNS que debes agregar en Wix (MX, TXT de verificación, a veces CNAME).
4. **No cierres esta pantalla** — la usarás en el Paso 1.3.

### Paso 1.3 — Agregar registros DNS en Wix

1. Inicia sesión en [Wix](https://www.wix.com/).
2. Ve a **Dominios** → selecciona **`whiteglovenaples.com`**.
3. Abre **DNS Settings** / **Configuración DNS** o **Manage DNS Records**.
4. Agrega **exactamente** los registros que Zoho indica. Típicamente incluyen:

| Tipo | Nombre / Host | Valor | Prioridad |
|------|---------------|-------|-----------|
| **TXT** | `@` o en blanco | Código de verificación de Zoho | — |
| **MX** | `@` o en blanco | `mx.zoho.com` | 10 |
| **MX** | `@` o en blanco | `mx2.zoho.com` | 20 |
| **MX** | `@` o en blanco | `mx3.zoho.com` | 50 |
| **TXT** | `@` | `v=spf1 include:zoho.com ~all` | — |

> **Importante:** Usa los valores **exactos** que muestra Zoho en tu pantalla. Los de la tabla son orientativos; pueden variar según la región o versión del panel.

5. Guarda cada registro.
6. Vuelve a Zoho y haz clic en **Verify** / **Verificar dominio**.
7. Si falla, espera 15–30 minutos y vuelve a intentar (propagación DNS).

### Paso 1.4 — Crear el usuario `info@`

1. En Zoho Mail, ve a **Users** / **Usuarios** → **Add User**.
2. Crea el buzón:
   - **Email:** `info`
   - **Dominio:** `whiteglovenaples.com`
   - **Contraseña:** una segura (guárdala en un gestor de contraseñas).
3. Completa el asistente de configuración del buzón.
4. Inicia sesión en [https://mail.zoho.com](https://mail.zoho.com) con `info@whiteglovenaples.com`.

### Paso 1.5 — Probar recepción en Zoho

1. Desde tu correo personal, envía un email de prueba **a** `info@whiteglovenaples.com`.
2. Revisa la bandeja de Zoho (y carpeta Spam).
3. Si no llega en 30 minutos, revisa los registros MX en Wix (Parte 4 — Solución de problemas).

### Paso 1.6 — Probar envío desde Zoho

1. Desde la bandeja `info@`, envía un correo a tu correo personal.
2. Verifica que el remitente muestre **`info@whiteglovenaples.com`**.

---

## Parte 2 — Configurar Resend (formulario del sitio web)

El formulario de contacto del sitio envía correos mediante **Resend**. El correo sale **desde** y **hacia** `info@whiteglovenaples.com`, con **Reply-To** al email del visitante (si lo completó).

### Paso 2.1 — Crear cuenta en Resend

1. Abre [https://resend.com](https://resend.com).
2. Regístrate (puedes usar GitHub o correo).
3. Confirma el email de verificación.

### Paso 2.2 — Agregar y verificar el dominio

1. En Resend, ve a **Domains** → **Add Domain**.
2. Escribe: `whiteglovenaples.com`
3. Resend mostrará registros DNS (normalmente **DKIM** como registros TXT/CNAME y recomendaciones de **SPF**).
4. En **Wix → DNS** del mismo dominio, agrega esos registros **sin borrar** los de Zoho.

#### Convivencia SPF (Zoho + Resend)

Si ya tienes un registro SPF de Zoho, debes **combinarlos en un solo registro TXT** en `@`, por ejemplo:

```txt
v=spf1 include:zoho.com include:amazonses.com ~all
```

> Resend suele usar `include:amazonses.com` en SPF. Confirma el valor exacto en el panel de Resend al verificar el dominio.

**Regla:** Solo puede haber **un** registro SPF (`v=spf1 ...`) por dominio. Si agregas Resend, **edita** el existente en lugar de crear otro.

5. En Resend, haz clic en **Verify DNS Records**.
6. Espera hasta que el dominio aparezca como **Verified**.

### Paso 2.3 — Crear API Key

1. En Resend, ve a **API Keys** → **Create API Key**.
2. Nombre sugerido: `whiteglovenaples-contact-form`
3. Permiso: **Sending access** (envío).
4. Copia la clave (empieza con `re_`). **Solo se muestra una vez.**

---

## Parte 3 — Configurar el hosting del sitio

El sitio necesita la variable de entorno `RESEND_API_KEY`.

### Paso 3.1 — Si usas Vercel

1. Abre el proyecto en [Vercel](https://vercel.com).
2. Ve a **Settings** → **Environment Variables**.
3. Agrega:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_xxxxxxxx` (la clave de Resend)
   - **Environments:** Production (y Preview si quieres probar en staging)
4. Guarda.
5. Ve a **Deployments** → en el último deploy, menú **⋯** → **Redeploy** para aplicar la variable.

### Paso 3.2 — Desarrollo local (opcional)

1. En la raíz del proyecto, copia `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Edita `.env.local` y pega la API key:
   ```env
   RESEND_API_KEY=re_xxxxxxxx
   ```
3. Reinicia el servidor de desarrollo (`npm run dev`).
4. **No subas `.env.local` a Git** (ya está en `.gitignore`).

---

## Parte 4 — Probar el formulario de contacto

### Paso 4.1 — Prueba en el sitio

1. Abre [https://whiteglovenaples.com/#contact](https://whiteglovenaples.com/#contact) (o la URL de staging).
2. Completa el formulario con datos de prueba:
   - Nombre, teléfono (obligatorios)
   - Email, tipo de propiedad, mensaje (opcionales)
3. Haz clic en **Request My Assessment**.
4. Deberías ver el mensaje de éxito: *"Request received"*.

### Paso 4.2 — Verificar el correo en Zoho

1. Abre la bandeja `info@whiteglovenaples.com` en Zoho.
2. Debe llegar un correo con asunto similar a:
   ```
   New Assessment Request — [Nombre del cliente]
   ```
3. El cuerpo incluye: nombre, teléfono, email, tipo de propiedad y mensaje.

### Paso 4.3 — Probar respuesta al cliente

1. En Zoho, abre el correo del formulario.
2. Haz clic en **Responder**.
3. Si el visitante puso email, la respuesta debe ir a **su** dirección (gracias al campo Reply-To del formulario).

---

## Parte 5 — Solución de problemas

### El formulario muestra "Email service is not configured"

- Falta `RESEND_API_KEY` en el hosting.
- Solución: agregar la variable en Vercel y redeploy.

### El formulario muestra "Failed to send email"

- Dominio no verificado en Resend.
- API key incorrecta o revocada.
- Revisa **Logs** en Resend → **Emails** para ver el error exacto.

### No llegan correos a `info@` (ni del formulario ni de prueba)

1. Verifica registros **MX** en Wix (deben apuntar a Zoho).
2. Espera propagación DNS (hasta 24 h).
3. Revisa carpeta **Spam** en Zoho.
4. Usa [https://mxtoolbox.com/SuperTool.aspx](https://mxtoolbox.com/SuperTool.aspx) → escribe `whiteglovenaples.com` → **MX Lookup**.

### Los correos del formulario llegan a Spam

- Completa verificación DKIM y SPF de Resend en Wix.
- Asegúrate de un solo registro SPF combinado (Zoho + Resend).

### Conflicto de registros SPF

- Solo un TXT con `v=spf1` en `@`.
- Combina: `include:zoho.com` + el include que indique Resend.

### Wix no deja editar DNS

- El dominio debe estar **conectado** a Wix, no solo comprado en otro registrador sin apuntar nameservers a Wix.
- Si el DNS está en otro proveedor, los registros se agregan **allí**, no en Wix.

---

## Alternativa rápida (solo reenvío, sin bandeja Zoho)

Si el cliente tiene **plan premium de Wix** y solo quiere **recibir** en su Gmail personal (sin bandeja `info@` completa):

1. En Wix, busca **Email Forwarding** / **Reenvío de correo**.
2. Configura `info@whiteglovenaples.com` → correo personal del cliente.
3. **Limitación:** responder "como info@" desde Gmail requiere configuración extra (SMTP). Para un negocio profesional, **Zoho sigue siendo la mejor opción gratuita**.

---

## Checklist final

- [ ] Dominio verificado en Zoho Mail
- [ ] Usuario `info@whiteglovenaples.com` creado y accesible
- [ ] Prueba de envío/recibo manual en Zoho OK
- [ ] Dominio verificado en Resend (DKIM/SPF)
- [ ] `RESEND_API_KEY` en Vercel (o hosting)
- [ ] Redeploy del sitio después de agregar la variable
- [ ] Prueba del formulario en producción OK
- [ ] Correo del formulario llega a bandeja de `info@` (no solo Spam)

---

## Referencias técnicas del proyecto

| Elemento | Valor |
|----------|-------|
| Email de contacto | `info@whiteglovenaples.com` |
| Endpoint del formulario | `POST /api/contact` |
| Variable de entorno | `RESEND_API_KEY` |
| Archivo de configuración del sitio | `src/lib/site.ts` |
| Componente del formulario | `src/components/CTASection.tsx` |

---

## Soporte

- **Zoho Mail:** [https://help.zoho.com/portal/en/kb/mail](https://help.zoho.com/portal/en/kb/mail)
- **Resend:** [https://resend.com/docs](https://resend.com/docs)
- **Wix DNS:** [https://support.wix.com/en/article/editing-dns-records-in-your-wix-account](https://support.wix.com/en/article/editing-dns-records-in-your-wix-account)

*Documento generado para White Glove Exteriors — Devifly*
