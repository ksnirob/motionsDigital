# Motions Digital Website

Custom marketing site for Motions Digital. Built with Next.js 14, TypeScript, Tailwind, and Framer Motion. Screens covered:

- Home hero + services, proof, CTA
- About story, values, leadership
- Services detail & process
- Work showcase
- Contact info + form

## Local Development

```bash
npm install
npm run dev
# visit http://localhost:3000
```

## Scripts

| Command        | Purpose            |
| -------------- | ------------------ |
| `npm run dev`  | Start dev server   |
| `npm run build`| Production build   |
| `npm start`    | Serve built app    |

## Stack

- Next.js App Router
- Tailwind CSS & custom CSS utilities
- Framer Motion for motion states
- Lucide icons
- Resend (for contact form emails)

Content and copy live directly inside the `app/` routes. Components are under `components/`.

## Contact Form Email Setup

The contact form uses Resend to send emails. To enable email notifications:

1. **Get a Resend API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Go to API Keys and create a new key
   - Copy your API key

2. **Create a `.env.local` file** in the root directory:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=hello@motionsdigital.com
   ```

3. **Verify your domain** (for production):
   - In Resend dashboard, add and verify your domain
   - Update the `from` field in `app/api/contact/route.ts` to use your verified domain
   - For development, you can use `onboarding@resend.dev` (already configured)

4. **Environment Variables:**
   - `RESEND_API_KEY`: Your Resend API key (required)
   - `CONTACT_EMAIL`: Email address where form submissions will be sent (optional, defaults to `hello@motionsdigital.com`)

The contact form will now send emails to the specified address whenever someone submits the form.