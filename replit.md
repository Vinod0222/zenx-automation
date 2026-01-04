# ZenX AI Automation Agency Website

## Overview

This is a modern, single-page marketing website for ZenX, an AI Automation Agency. The site showcases AI-powered chatbot and automation services with a dark, futuristic design featuring electric blue accents. It includes a hero section, services display, pricing tables, and a contact form for lead capture. The site also integrates a Botpress chatbot for visitor engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom dark theme and CSS variables
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **Animations**: Framer Motion for scroll animations and 3D hover effects
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **API Pattern**: Simple REST endpoints defined in `shared/routes.ts` with Zod schemas for type-safe request/response handling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **Migrations**: Managed via `drizzle-kit push`

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Page components
    hooks/        # Custom React hooks
    lib/          # Utility functions
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Database operations
  db.ts           # Database connection
shared/           # Shared code between client/server
  schema.ts       # Database schema
  routes.ts       # API route contracts
```

### Key Design Decisions
1. **Monorepo Structure**: Client and server share types and validation schemas through the `shared/` directory, ensuring type safety across the stack
2. **Component Library**: shadcn/ui provides accessible, customizable components that integrate well with Tailwind
3. **Dark Theme**: CSS variables in `client/src/index.css` define the color scheme with HSL values for easy theming
4. **Font Stack**: Inter for body text, Space Grotesk for headings

## External Dependencies

### Third-Party Services
- **Botpress**: AI chatbot integration loaded dynamically via CDN script (`cdn.botpress.cloud/webchat/v3.5/inject.js`)
  - Bot ID: `ae9965f2-0930-47c0-9f82-addd9ee197c4`
  - Configured with proactive messaging after 10-second delay

### Database
- **PostgreSQL**: Required via `DATABASE_URL` environment variable
- **Session Store**: connect-pg-simple for Express session storage

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `drizzle-orm` + `drizzle-zod`: Database ORM with validation
- `framer-motion`: Animation library
- `lucide-react`: Icon library
- `wouter`: Lightweight routing
- Full Radix UI primitive suite for accessible components