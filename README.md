This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form email delivery

The contact form sends enquiries from `marutielectricals0007@gmail.com` to
`marutielec@rediffmail.com` through Gmail SMTP. Set these environment variables
locally in `.env.local` and in your hosting provider's environment settings:

```text
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=marutielectricals0007@gmail.com
SMTP_PASSWORD=your-google-app-password
```

`SMTP_HOST`, `SMTP_PORT`, and `SMTP_USER` default to the values shown above.
`SMTP_PASSWORD` must be a Google App Password, not your normal Google password.
Never commit `.env.local` or share the app password publicly. Gmail supports
port `465` with SSL and port `587` with STARTTLS. The form only reports success
after the mail server accepts the message.

### Deploying on Vercel

1. Import this repository into Vercel.
2. In **Project → Settings → Environment Variables**, add `SMTP_HOST`,
   `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASSWORD` for each environment you use.
   Keep the app password private.
3. Ensure `.env.local` stays uncommitted; it is ignored by `.gitignore`.
4. Deploy or redeploy after adding/changing variables so the new deployment
   receives them.
5. Submit a test enquiry and check the Vercel function logs if delivery fails.

The Vercel deployment uses Next.js server routes for email. The separate
GitHub Pages workflow builds a static export, so its deployment does not
include the contact API and cannot send email.

To create a Google App Password, enable 2-Step Verification on the sender
Google account, then open **Google Account → Security → 2-Step Verification →
App passwords** and create one for this app. Enter it as `SMTP_PASSWORD`
without spaces. Google may not offer this option for some account types or
security configurations.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
