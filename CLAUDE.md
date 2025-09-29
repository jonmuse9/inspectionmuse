# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 marketing website for InspectionMuse, a professional home inspection service in Carroll County, Maryland. The site uses React 19, TypeScript, and Tailwind CSS with a component-based architecture.

## Commands

### Development
```bash
npm run dev       # Start development server on http://localhost:3000
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Custom components built with Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Email**: EmailJS for contact forms
- **Analytics**: Google Analytics (gtag) with custom tracking hooks

### Project Structure
- `/src/app/*` - Next.js App Router pages and layouts
- `/src/components/ui/*` - Reusable UI components (Button, Card, Input, etc.)
- `/src/components/sections/*` - Page sections (Hero, Services, CTA, etc.)
- `/src/components/services/*` - Service-specific components
- `/src/components/layout/*` - Navigation and Footer components
- `/src/hooks/*` - Custom React hooks (useIframeTracking for analytics)
- `/src/lib/utils.ts` - Utility functions including `cn()` for className merging

### Key Patterns

**Component Variants**: Components use the `class-variance-authority` library for variant styling:
```typescript
// Example from CallButton component
const variantClasses = {
  'white-overlay': '!bg-transparent !text-white border-white',
  'outline-overlay': 'bg-transparent border-primary text-primary',
  // ...
};
```

**Path Aliases**: Uses `@/*` alias for `/src/*` imports configured in tsconfig.json.

**Metadata**: Each page exports metadata for SEO, configured in layout.tsx with a base URL of https://inspectionmuse.com.

**Tracking**: Custom `useIframeTracking` hook for Google Analytics event tracking on embedded widgets (Spectora scheduling iframe).

**Styling**: Uses Tailwind CSS with custom color scheme including branded "neon-green" colors. CSS variables defined in globals.css for theming.

### Third-Party Integrations
- **Spectora**: Scheduling widget embedded via iframe on `/schedule` page
- **Google Analytics**: Tracking code (AW-17580553822) loaded in root layout
- **EmailJS**: Contact form integration for sending emails

### Important Files
- `tailwind.config.ts` - Custom color definitions and theme extensions
- `src/app/layout.tsx` - Root layout with metadata, navigation, and analytics
- `src/hooks/useIframeTracking.ts` - Custom hook for tracking iframe interactions

### Development Notes
- Site uses static generation where possible
- Images stored in `/public/images/` directory
- Custom favicon and logo files in `/public/images/logos/`
- Backup directory (`_backup_20250825_165238`) present but excluded from main codebase