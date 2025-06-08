# Student Hub - Development Setup

## 🏗️ Architecture Overview

This is a cross-platform monorepo built with:

- **Web App**: Next.js 15 with App Router
- **Mobile App**: React Native with Expo Router
- **Shared Packages**: UI components, database schemas, and configurations
- **Monorepo Management**: Turborepo + pnpm workspaces

## 📁 Project Structure

```
student-hub/
├── apps/
│   ├── web/                 # Next.js web application
│   └── mobile/              # React Native mobile app
├── packages/
│   ├── ui/                  # Shared UI components
│   ├── database/            # Database schemas & client
│   ├── eslint-config/       # Shared ESLint configuration
│   └── typescript-config/   # Shared TypeScript configurations
└── [config files]
```

## 🚀 Quick Start

### Prerequisites

- **Node.js**: >= 20.0.0
- **pnpm**: >= 8.0.0 (recommended package manager)
- **Expo CLI**: For mobile development
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd student-hub
   pnpm install
   ```

2. **Install Expo CLI globally:**
   ```bash
   npm install -g @expo/cli
   ```

3. **Set up environment variables:**
   ```bash
   # Copy environment files
   cp apps/web/.env.example apps/web/.env.local
   cp apps/mobile/.env.example apps/mobile/.env
   ```

## 🖥️ Web Development

### Running the Web App

```bash
# Start web development server
pnpm dev:web

# Or run from root
pnpm turbo dev --filter=web
```

The web app will be available at `http://localhost:3000`

### Web App Features

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS + Shadcn UI
- **Authentication**: Google OAuth
- **Database**: Neon PostgreSQL with Drizzle ORM
- **AI Integration**: OpenAI API for email summaries and job matching

## 📱 Mobile Development

### Running the Mobile App

```bash
# Start Expo development server
pnpm mobile

# Or run specific platforms
pnpm mobile:android    # Android emulator/device
pnpm mobile:ios        # iOS simulator/device
```

### Mobile App Features

- **Framework**: React Native with Expo Router
- **Navigation**: File-based routing with tabs
- **Styling**: NativeWind (Tailwind for React Native)
- **Notifications**: Expo Push Notifications
- **Authentication**: Expo Auth Session

### Mobile Development Setup

1. **Install Expo Go app** on your phone (for testing)
2. **Set up Android development:**
   - Install Android Studio
   - Set up Android SDK and emulator
   
3. **Set up iOS development (macOS only):**
   - Install Xcode
   - Set up iOS Simulator

## 🔧 Development Commands

### Root Level Commands

```bash
# Install all dependencies
pnpm install

# Run both web and mobile in development
pnpm dev

# Run specific app
pnpm dev:web
pnpm dev:mobile

# Build all apps
pnpm build

# Lint all packages
pnpm lint

# Type check all packages
pnpm type-check

# Format code
pnpm format
```

### Mobile Specific Commands

```bash
# Start development server
pnpm mobile

# Run on Android
pnpm mobile:android

# Run on iOS
pnpm mobile:ios

# Build for production
cd apps/mobile
expo build:android
expo build:ios
```

### Database Commands

```bash
# Generate database migrations
pnpm --filter=database db:generate

# Run migrations
pnpm --filter=database db:migrate

# Push schema changes
pnpm --filter=database db:push

# Open Drizzle Studio
pnpm --filter=database db:studio
```

## 🗄️ Database Setup

1. **Create a Neon database:**
   - Sign up at [neon.tech](https://neon.tech)
   - Create a new project
   - Copy the connection string

2. **Set environment variables:**
   ```bash
   # In apps/web/.env.local
   DATABASE_URL="postgresql://..."
   
   # In packages/database/.env
   DATABASE_URL="postgresql://..."
   ```

3. **Run initial migration:**
   ```bash
   pnpm --filter=database db:push
   ```

## 🔐 Authentication Setup

### Google OAuth Setup

1. **Create Google Cloud Project:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing
   - Enable Google+ API

2. **Create OAuth credentials:**
   - Go to Credentials section
   - Create OAuth 2.0 Client ID
   - Add authorized redirect URIs

3. **Set environment variables:**
   ```bash
   # Web app
   GOOGLE_CLIENT_ID="your-client-id"
   GOOGLE_CLIENT_SECRET="your-client-secret"
   NEXTAUTH_SECRET="your-secret"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Mobile app
   EXPO_PUBLIC_GOOGLE_CLIENT_ID="your-client-id"
   ```

## 🎨 UI Development

### Shared Components

The `@workspace/ui` package contains shared components that work on both web and mobile:

```typescript
// Usage in web app
import { Button } from '@workspace/ui/components/button';

// Usage in mobile app (with NativeWind)
import { Button } from '@workspace/ui/components/button';
```

### Adding New Components

```bash
# Add to shared UI package
cd packages/ui
# Create your component in src/components/
```

## 🧪 Testing

```bash
# Run tests for all packages
pnpm test

# Run tests for specific package
pnpm --filter=web test
pnpm --filter=mobile test
```

## 📦 Building for Production

### Web App

```bash
# Build web app
pnpm --filter=web build

# Start production server
pnpm --filter=web start
```

### Mobile App

```bash
# Build for Android
cd apps/mobile
eas build --platform android

# Build for iOS
eas build --platform ios
```

## 🔍 Debugging

### Web App Debugging

- Use Next.js built-in debugging tools
- Browser DevTools
- React Developer Tools

### Mobile App Debugging

- **Expo DevTools**: Available in development mode
- **React Native Debugger**: Standalone debugging tool
- **Flipper**: Advanced debugging platform

### Common Issues

1. **Metro bundler cache issues:**
   ```bash
   cd apps/mobile
   expo start --clear
   ```

2. **Node modules issues:**
   ```bash
   rm -rf node_modules
   pnpm install
   ```

3. **TypeScript errors:**
   ```bash
   pnpm type-check
   ```

## 🚀 Deployment

### Web App Deployment (Vercel)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Mobile App Deployment

1. **Set up EAS (Expo Application Services):**
   ```bash
   npm install -g eas-cli
   eas login
   eas build:configure
   ```

2. **Build and submit:**
   ```bash
   eas build --platform all
   eas submit --platform all
   ```

## 📚 Key Technologies

- **Monorepo**: Turborepo + pnpm workspaces
- **Web**: Next.js 15, React 19, Tailwind CSS, Shadcn UI
- **Mobile**: React Native, Expo Router, NativeWind
- **Database**: Neon PostgreSQL, Drizzle ORM
- **Authentication**: NextAuth.js, Expo Auth Session
- **AI**: OpenAI API
- **Notifications**: Expo Push Notifications

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📞 Support

For development questions or issues:
- Check the troubleshooting section above
- Review the requirements.md file
- Create an issue in the repository 