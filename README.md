# Only Hockey

A modern, interactive hockey factoids website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Single Column Design**: Clean, centered layout taking 60% of screen width
- **Interactive Factoids**: Click to expand and read detailed hockey stories
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Utilities**: clsx, tailwind-merge

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/          # Reusable components
│   └── Factoid.tsx     # Interactive factoid component
├── data/               # Data files
│   └── factoids.ts     # Hockey factoids data
├── types/              # TypeScript type definitions
│   └── index.ts        # Main type interfaces
└── lib/                # Utility functions
    └── utils.ts        # shadcn/ui utilities
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### Today's Lineup
The main section displays 12 interactive hockey factoids covering:
- **WEEK**: Historical hockey events and milestones
- **QUOTE**: Famous hockey quotes and wisdom
- **PHIL**: Philosophical insights from hockey
- **GEO**: Geographic and demographic hockey facts
- **TRVL**: Travel tips and hockey logistics

### Interactive Elements
- Click any factoid to expand and read the full story
- Hover effects and smooth transitions
- Responsive design that works on all devices

## Development

The project uses:
- **shadcn/ui** for consistent, accessible components
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons

## License

MIT License
