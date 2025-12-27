# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to **semantic versioning** where practical.

## [Unreleased]

### Added

- Modern Angular 21 setup with all core dependencies (@angular/core, @angular/router, @angular/forms, etc.).
- Preconfigured Vite build system with @analogjs/vite-plugin-angular for Angular integration.
- Vitest unit testing framework with browser-based testing via Playwright.
- Code coverage reporting with V8 provider (configured to include src/app, exclude index.ts files).
- HTML test reports and coverage reports in reports/ directory.
- GitHub Actions integration for test reporting in CI/CD environments.
- Comprehensive linting setup:
    - ESLint with @angular-eslint for TypeScript and HTML templates.
    - Prettier for code formatting with eslint-config-prettier for conflict resolution.
    - Stylelint with SCSS support for stylesheet linting.
- Docker setup with:
    - Multi-stage Dockerfile for optimized production builds.
    - Docker Compose configuration for local development.
    - Docker buildx bake configuration for multi-platform builds.
    - Nginx reverse proxy configuration for serving the application.
- Local HTTPS development support via mkcert for self-signed certificates.
- Version generation script for automated versioning in builds.
- Comprehensive documentation:
    - README with setup instructions, prerequisites, and development guidelines.
    - CONTRIBUTING.md with contribution guidelines and project scope.
    - CODE_OF_CONDUCT.md for community standards.
    - SECURITY.md for vulnerability reporting procedures.
- Issue and pull request templates for standardized GitHub workflows.
- Root component (RootComponent) with app version signal display.
- TypeScript configuration optimized for Angular development with path aliases via vite-tsconfig-paths.
- Preconfigured Angular schematics with:
    - OnPush change detection for new components.
    - SCSS styling by default.
    - Type suffixes for directives, services, guards, interceptors, modules, pipes, and resolvers.
    - End-to-end testing support using Playwright, including configuration and E2E test scripts.
    - GitHub Actions workflow to run E2E smoke tests on pull requests.
    - Dependencies to run Playwright-based E2E tests.
    - Configuration to serve the application over HTTP to support browser-based E2E tests.
    - Move unit test report output to the `reports/` directory for easier CI collection.
    - Tailwind CSS utility-first styling support and recommended Tailwind VS Code extension.
    - VS Code run/debug configurations for common development tasks.
    - Markdownlint configuration and rules for consistent Markdown formatting.

### Changed

- Default component selector prefix configured to "dma" (dnd-mapp).
- Component selector style set to kebab-case.
- Directive selector style set to camelCase.
- pnpm configured as the project package manager (v10.26.2).
- Adjusted test and CI scripts (renamed and updated calling scripts).
- Updated README and Docker Compose tags for publishing to Docker Hub.
- Updated VS Code configuration settings.
- Pinned/adjusted pnpm project version setting.

### Fixed

- Fix markdownlint errors reported by the new markdownlint configuration.

### Security

- Add SECURITY.md with vulnerability reporting procedures and guidance for reporters.

---

## Conventions

### Versioning

- Versions follow **semantic versioning** (`MAJOR.MINOR.PATCH`) where feasible:
    - **MAJOR**: Incompatible or breaking changes to the template structure, default configuration, or tooling.
    - **MINOR**: Backwards-compatible additions or improvements to the template.
    - **PATCH**: Backwards-compatible bug fixes and small changes.

### Categories

Within each release, changes are grouped into the following sections:

- **Added**: New features or capabilities.
- **Changed**: Changes in existing behavior or configuration.
- **Fixed**: Non-security bug fixes.
- **Security**: Security-related changes, including:
    - Fixes for vulnerabilities.
    - Security hardening and configuration improvements.
    - Security-impacting dependency updates.

### Security Entries and Credits

For security issues:

- Include a short, clear description of the vulnerability and its impact.
- Mention affected versions if applicable.
- Reference a GitHub Security Advisory ID if one exists.
- Credit the reporter (by GitHub handle or name) unless they request anonymity.

Example security entry:

- Fix insecure default CORS configuration in the dev server setup that could allow unintended cross-origin requests in certain environments. Reported by @example-researcher.

For details on how to report vulnerabilities, see [SECURITY.md](./SECURITY.md).

---

## License Notice

This project is **not licensed for reuse**. All rights are reserved by the copyright holder.

The changelog documents changes to this repository but does **not** grant any license rights. For license terms, see the [LICENSE](./LICENSE) file.
