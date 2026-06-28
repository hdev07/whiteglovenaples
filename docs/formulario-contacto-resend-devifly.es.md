# Formulario de contacto con Resend (devifly.dev → Gmail del cliente)

Esta guía configura el formulario **Schedule your assessment** para que, cuando alguien lo envíe, llegue un correo a **`whiteglove239@gmail.com`** con todos los datos. El correo **sale desde tu dominio** `notifications@devifly.dev` (marca Devifly), no desde Gmail.

---

## Cómo funciona

```
Visitante completa el formulario en whiteglovenaples.com
        ↓
POST /api/contact (Next.js en Vercel)
        ↓
Resend envía el correo
  · De:    White Glove Exteriors <notifications@devifly.dev>
  · Para:  whiteglove239@gmail.com
  · Reply-To: email del visitante (si lo dejó)
        ↓
Tu cliente recibe la solicitud en Gmail y puede responder al visitante
```

**Ventaja:** No necesitas verificar `whiteglovenaples.com` en Resend. Solo verificas **`devifly.dev`**, que ya es tuyo, y reutilizas la misma cuenta Resend para otros proyectos de clientes.

---

## Lo que ya está en el código

| Elemento | Ubicación |
|----------|-----------|
| Formulario | `src/components/CTASection.tsx` |
| API de envío | `src/app/api/contact/route.ts` |
| Formato del correo | `src/lib/contact-form.ts` |
| Email del cliente | `src/lib/site.ts` → `email: "whiteglove239@gmail.com"` |
| Remitente por defecto | `src/lib/site.ts` → `contact.fromEmail: "notifications@devifly.dev"` |

Variables de entorno opcionales (sobreescriben `site.ts`):

| Variable | Uso |
|----------|-----|
| `RESEND_API_KEY` | **Obligatoria** — clave API de Resend |
| `RESEND_FROM_EMAIL` | Remitente (default: `notifications@devifly.dev`) |
| `RESEND_FROM_NAME` | Nombre visible (default: `White Glove Exteriors`) |
| `CONTACT_NOTIFY_EMAIL` | Destino (default: `whiteglove239@gmail.com`) |

---

## Pasos que debes hacer tú (Devifly)

### Paso 1 — Cuenta Resend

1. Entra en [https://resend.com](https://resend.com) e inicia sesión (o crea cuenta).
2. Puedes usar la misma cuenta para todos tus clientes; cada proyecto solo necesita su API key.

### Paso 2 — Verificar el dominio `devifly.dev`

1. En Resend → **Domains** → **Add Domain**.
2. Escribe: `devifly.dev`
3. Resend te mostrará registros DNS (DKIM, SPF, a veces un registro de verificación).
4. Ve al panel DNS donde administras **devifly.dev** (Cloudflare, Namecheap, Vercel Domains, etc.).
5. Agrega **exactamente** los registros que indica Resend.
6. En Resend, pulsa **Verify DNS Records**.
7. Espera hasta que el estado sea **Verified** (minutos u horas según propagación).

> **SPF:** Si ya tienes un registro SPF en `@`, edítalo para incluir el proveedor de Resend (`include:amazonses.com` suele ser el valor que indica Resend). Solo puede haber **un** registro SPF por dominio.

### Paso 3 — Crear API Key

1. Resend → **API Keys** → **Create API Key**.
2. Nombre sugerido: `whiteglovenaples-contact-form`
3. Permiso: **Sending access**.
4. Copia la clave (`re_...`). **Solo se muestra una vez.**

### Paso 4 — Configurar variables en Vercel (producción)

1. Abre el proyecto del sitio en [Vercel](https://vercel.com).
2. **Settings** → **Environment Variables**.
3. Agrega:

| Name | Value | Environments |
|------|-------|--------------|
| `RESEND_API_KEY` | `re_xxxxxxxx` | Production (+ Preview si quieres probar) |
| `RESEND_FROM_EMAIL` | `notifications@devifly.dev` | Production |

4. Guarda.
5. **Deployments** → último deploy → **⋯** → **Redeploy** (para aplicar las variables).

### Paso 5 — Desarrollo local (opcional)

```bash
cp .env.example .env.local
```

Edita `.env.local`:

```env
RESEND_API_KEY=re_tu_clave_aqui
RESEND_FROM_EMAIL=notifications@devifly.dev
```

Reinicia `npm run dev`. **No subas `.env.local` a Git.**

### Paso 6 — Probar el formulario

1. Abre el sitio → sección **Contact** / `#contact`.
2. Envía datos de prueba (nombre y teléfono son obligatorios).
3. Deberías ver el mensaje de éxito en la página.
4. Revisa la bandeja **`whiteglove239@gmail.com`** (y carpeta Spam la primera vez).
5. El asunto será similar a: `New Assessment Request — [Nombre]`.
6. Si el visitante puso email, al pulsar **Responder** en Gmail la respuesta irá al visitante (campo Reply-To).

---

## Qué ve tu cliente en Gmail

- **De:** White Glove Exteriors \<notifications@devifly.dev\>
- **Para:** whiteglove239@gmail.com
- **Asunto:** New Assessment Request — Jane Smith
- **Cuerpo:** nombre, teléfono, email, tipo de propiedad, mensaje

El cliente no necesita configurar nada en Resend ni en el dominio del sitio; solo revisar su Gmail.

---

## Solución de problemas

### "Email service is not configured"

- Falta `RESEND_API_KEY` en Vercel → agrégala y redeploy.

### "Failed to send email"

Causas habituales:

1. **Dominio no verificado** — `devifly.dev` debe estar Verified en Resend.
2. **API key incorrecta** — revisa que no tenga espacios al copiar.
3. **Remitente no permitido** — `RESEND_FROM_EMAIL` debe ser una dirección del dominio verificado (`@devifly.dev`).

Revisa **Resend → Logs → Emails** para el error exacto.

### El correo llega a Spam

- Completa DKIM y SPF en el DNS de `devifly.dev`.
- Tras unos envíos legítimos, Gmail suele mejorar la reputación.
- El cliente puede marcar como "No es spam" la primera vez.

### Resend en plan gratis: solo envía a tu email

En cuentas nuevas, Resend puede limitar envíos a direcciones verificadas hasta que el dominio esté verificado. Una vez **`devifly.dev` Verified**, puedes enviar a cualquier Gmail.

### ¿Puedo usar `info@whiteglovenaples.com` como remitente?

Sí, pero tendrías que verificar **`whiteglovenaples.com`** en Resend (DNS en Wix). La guía alternativa está en `docs/configuracion-correo-wix-zoho-resend.es.md`. Con **`notifications@devifly.dev`** evitas tocar el DNS del cliente.

---

## Checklist rápido

- [ ] Dominio `devifly.dev` verificado en Resend (DKIM/SPF OK)
- [ ] API key creada y guardada de forma segura
- [ ] `RESEND_API_KEY` y `RESEND_FROM_EMAIL` en Vercel
- [ ] Redeploy del sitio
- [ ] Prueba del formulario en producción
- [ ] Correo recibido en `whiteglove239@gmail.com`
- [ ] Prueba de "Responder" al email del visitante

---

## Referencias

- [Resend — Domains](https://resend.com/docs/dashboard/domains/introduction)
- [Resend — Send Email API](https://resend.com/docs/api-reference/emails/send-email)
- Código del endpoint: `src/app/api/contact/route.ts`

*Devifly — White Glove Exteriors*
