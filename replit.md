# Overview

RizzKonnect is a dating mentorship platform that connects users with dating coaches ("Rizz Coaches") for personalized guidance. The application features a modern, dark-themed UI with neon pink accents and provides a Tinder-like swipe interface for browsing mentors, along with features for booking sessions and generating personalized dating strategies.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development
- **Routing**: Wouter for client-side routing (lightweight React router)
- **State Management**: TanStack React Query for server state management
- **UI Library**: Radix UI components with custom shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Structure**: Modular component architecture with reusable UI components

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build System**: esbuild for production bundling
- **Server Structure**: Route-based organization with middleware for logging and error handling

## Data Storage
- **Database**: PostgreSQL with Neon Database (@neondatabase/serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema Definition**: Shared schema definitions between client and server

## Authentication & Sessions
- **Session Management**: PostgreSQL-based sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Type Safety**: Zod schemas for validation with drizzle-zod integration

## UI/UX Design System
- **Theme**: Dark mode with neon pink (#FF3B5C) primary color
- **Typography**: Inter font family for clean, modern appearance
- **Layout**: Responsive design with mobile-first approach
- **Animations**: CSS animations and transitions for interactive elements
- **Component Library**: Complete shadcn/ui component set with custom theming

## Development Environment
- **Hot Reload**: Vite HMR with custom error overlay for Replit
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Build Process**: Separate client and server build pipelines
- **Asset Handling**: Vite-based asset processing with path aliases

# External Dependencies

## Core Framework Dependencies
- React 18 ecosystem (react, react-dom)
- Vite for build tooling and development server
- Express.js for backend API server

## Database & ORM
- Neon Database serverless PostgreSQL
- Drizzle ORM and Drizzle Kit for database management
- connect-pg-simple for PostgreSQL session storage

## UI Component Libraries
- Radix UI primitives for accessible components
- Lucide React for icons
- Embla Carousel for interactive carousels
- class-variance-authority for component variants

## State Management & Data Fetching
- TanStack React Query for server state
- React Hook Form with Hookform Resolvers for form management

## Validation & Type Safety
- Zod for runtime type validation
- drizzle-zod for database schema validation
- TypeScript for compile-time type safety

## Utilities & Styling
- Tailwind CSS for styling
- clsx and tailwind-merge for conditional classes
- date-fns for date manipulation
- cmdk for command palette functionality

## Development Tools
- Replit-specific plugins for development environment
- PostCSS with Autoprefixer for CSS processing
- Various Replit integration tools for deployment and debugging