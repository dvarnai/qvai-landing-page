# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a landing page for QvAI, built with React Router. It's a modern, server-side rendered React application with TypeScript and TailwindCSS.

## Commands

### Development

```bash
# Install dependencies
npm install

# Start development server with HMR
npm run dev
```

The development server runs at `http://localhost:5173`.

### Building and Testing

```bash
# Type checking
npm run typecheck

# Build for production
npm run build

# Start production server
npm run start
```

### Docker

```bash
# Build Docker image
docker build -t qvai-landing-page .

# Run Docker container
docker run -p 3000:3000 qvai-landing-page
```

## Architecture

The project follows a typical React Router structure:

- `app/routes/` - Contains route components
- `app/components/` - Reusable UI components 
- `app/root.tsx` - Root component for the application
- `app/routes.ts` - Route configuration

### Key Components

The landing page is divided into several sections, all imported in the main `Home.tsx` component:

- Navigation
- HeroSection
- ServicesSection
- HowItWorksSection
- TechnologySection
- FutureVisionSection
- ContactSection
- CallToActionSection
- Footer

Each section is implemented as a separate component in the `app/components/home/` directory.

### Styling

The project uses TailwindCSS for styling with some custom gradients and animations. The animated background responds to scroll position and time.