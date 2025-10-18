# GitHub Actions Workflows

This directory contains GitHub Actions workflows for continuous integration and deployment.

## Workflows Overview

### 1. Lint and Test (`lint-test.yml`)

**Triggers:**

- Push to `master` branch
- Pull requests to `master` branch

**What it does:**

- Checks out the code
- Sets up Node.js (LTS version)
- Installs dependencies
- Runs ESLint to check code quality
- Runs Jest tests

### 2. Conventional Commits (`conventional-commits.yml`)

**Triggers:**

- Pull request events (opened, edited, synchronize, reopened)

**What it does:**

- Validates that PR titles follow the [Conventional Commits](https://www.conventionalcommits.org/) specification

**Allowed PR Title Types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

**Example PR titles:**

```
feat: add user authentication
fix: resolve crash on app startup
docs: update README with installation steps
```

**Note:** Individual commit messages are not validated, only PR titles.

### 3. Build iOS and Android (`build.yml`)

**Triggers:**

- Push to `master` branch
- Pull requests to `master` branch
- Manual trigger via workflow_dispatch

**What it does:**

#### Android Build Job:

- Sets up Node.js (LTS version) and Java 17
- Installs npm dependencies
- Builds Android APK (release variant)
- Uploads the APK as an artifact **only on master branch merges** (available for 30 days)

#### iOS Build Job:

- Runs on macOS
- Sets up Node.js (LTS version) and Ruby
- Installs CocoaPods dependencies
- Builds iOS archive (without code signing)
- Uploads the archive as an artifact **only on master branch merges** (available for 30 days)

**Note:** Builds run for both PRs and master pushes, but artifacts are only uploaded when code is pushed to the master branch.

## Dependabot Configuration

Dependabot is configured to automatically check for dependency updates and create pull requests. It monitors:

### NPM Dependencies

- **Schedule:** Weekly on Mondays at 9:00 AM
- **Scope:** All npm packages in `package.json`
- **Commit prefix:** `chore`
- **Ignores:** Major version updates for React and React Native (require manual review)

### GitHub Actions

- **Schedule:** Weekly on Mondays at 9:00 AM
- **Scope:** All GitHub Actions used in workflows
- **Commit prefix:** `ci`

### Gradle Dependencies (Android)

- **Schedule:** Weekly on Mondays at 9:00 AM
- **Scope:** Android Gradle dependencies
- **Commit prefix:** `build`
- **Ignores:** Major Android Gradle Plugin updates (require manual intervention)

**Configuration file:** `.github/dependabot.yml`

## Setup Instructions

### 1. Enable Workflows

These workflows are automatically enabled when you push them to your GitHub repository.

### 2. Configure Dependabot

Update the `.github/dependabot.yml` file to replace `your-github-username` with your actual GitHub username(s) for reviewers and assignees, or remove these fields if not needed.

### 3. Configure Secrets (if needed)

For the iOS build workflow to sign the app, you may need to add the following secrets in your GitHub repository settings:

- `IOS_CERTIFICATE_BASE64`: Base64 encoded signing certificate
- `IOS_PROVISION_PROFILE_BASE64`: Base64 encoded provisioning profile
- `IOS_KEYCHAIN_PASSWORD`: Password for the temporary keychain

For Android signing, you may need:

- `ANDROID_KEYSTORE_BASE64`: Base64 encoded keystore file
- `ANDROID_KEYSTORE_PASSWORD`: Keystore password
- `ANDROID_KEY_ALIAS`: Key alias
- `ANDROID_KEY_PASSWORD`: Key password

## Local Testing

### Test Linting

```bash
npm run lint
```

### Test Jest

```bash
npm test
```

### Build Android Locally

```bash
cd android
./gradlew assembleRelease
```

### Build iOS Locally

```bash
cd ios
xcodebuild -workspace VodQAReactNative.xcworkspace \
  -scheme VodQAReactNative \
  -configuration Release \
  archive
```

## Artifacts

Built artifacts are uploaded and can be downloaded from the GitHub Actions run page:

- **Android APK**: `android-apk` artifact
- **iOS Archive**: `ios-archive` artifact

Artifacts are retained for 30 days by default.

## Troubleshooting

### Workflow fails on lint

- Run `npm run lint` locally to see the errors
- Fix the linting issues or run `npm run lint -- --fix` for auto-fixable issues

### Workflow fails on conventional commits

- Check that your PR title follows the conventional commits format
- Example: `feat: add new feature` or `fix: resolve bug`

### Android build fails

- Check that you have the correct Java version (17)
- Ensure all dependencies are properly specified in `package.json`

### iOS build fails

- Ensure `Podfile.lock` is committed to the repository
- Check that the scheme name matches your project

## Contributing

When contributing to this project, please ensure:

1. Your code passes linting (`npm run lint`)
2. All tests pass (`npm test`)
3. Your PR title follows conventional commits format
