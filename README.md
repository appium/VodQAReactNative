# VodQAReactNative

[![CI](https://github.com/YOUR_USERNAME/VodQAReactNative/workflows/CI/badge.svg)](https://github.com/YOUR_USERNAME/VodQAReactNative/actions/workflows/ci.yml)

Sample React Native app demonstrating components and gestures.

## Development

### Prerequisites

- Node.js (latest LTS version recommended)
- npm
- React Native development environment

### Installation

```bash
npm install
```

### Available Scripts

- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm start` - Start Metro bundler
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run build` - Type check with TypeScript
- `npm run lint` - Check code style
- `npm run lint:fix` - Fix code style issues
- `npm run clean` - Clean build directory
- `npm run rebuild` - Clean and rebuild

## CI/CD

This project uses GitHub Actions for continuous integration:

- **CI Workflow**: Runs linting & build (Ubuntu) and tests (macOS) in parallel using latest LTS Node.js for both pushes and pull requests
- **Conventional Commits**: Validates PR titles follow [Conventional Commits](https://www.conventionalcommits.org) specification
- **Dependency Review**: Automatically reviews dependency changes in PRs
- **Dependabot**: Automatically creates PRs for dependency updates weekly

## Tech Stack

- React Native 0.63.2
- TypeScript 5.7.2
- ESLint 9 with Appium config
- Jest 29 with ts-jest
- React 16.13.1
