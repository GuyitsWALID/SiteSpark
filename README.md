# SiteSpark

Multi-page mini-websites built for creators, freelancers, and small businesses. Bookings, pricing, lead capture — all in one link.

## Features

- **Multi-page micro-websites**: Create sites with multiple pages (Home, About, Services, etc.)
- **Block-based editor**: Drag & drop blocks like links, images, pricing tables, booking widgets
- **Business widgets**: Integrated Calendly booking, Stripe pricing, contact forms
- **Templates marketplace**: Pre-built templates for different verticals
- **Custom domains & QR codes**: Professional branding for published sites
- **Analytics**: Track page views, link clicks, form submissions
- **Export & white-label**: Download static HTML or white-label for clients

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS
- **Backend**: Supabase (Auth, Postgres, Storage)
- **Payments**: Stripe
- **Hosting**: Vercel
- **Booking**: Calendly integration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Stripe account (for payments)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sitespark
```

2. Install dependencies:
```bash
npm install
```

3. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL schema from `src/lib/schema.sql` in the Supabase SQL Editor
   - Get your project URL and anon key from Settings > API

4. Set up Stripe:
   - Create a Stripe account at [stripe.com](https://stripe.com)
   - Get your publishable key and secret key

5. Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (site)/            # Public site routes
│   ├── dashboard/         # User dashboard
│   ├── editor/            # Site editor
│   └── api/               # API routes
├── components/            # Reusable components
└── lib/                   # Utilities and configurations
    ├── supabase.ts        # Supabase client
    ├── types.ts           # TypeScript types
    └── schema.sql         # Database schema
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

- **Landing Page**: `src/app/page.tsx`
- **Site Renderer**: `src/app/(site)/[slug]/page.tsx`
- **Dashboard**: `src/app/dashboard/page.tsx`
- **Editor**: `src/app/editor/[siteId]/[pageId]/page.tsx`

## Deployment

Deploy to Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
