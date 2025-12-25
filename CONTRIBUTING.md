# Contributing to dnd-mapp/template-angular-app

Thank you for considering contributing to `dnd-mapp/template-angular-app`! 🎉

This repository hosts an Angular template used within the `dnd-mapp` organization. The goal is to provide a clean, modern, and consistent starting point for new Angular applications.

This document explains how to propose changes, report issues, and work with the project’s tooling.

---

## 1. Code of Conduct

By participating in this project, you agree to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

Please read it before opening issues or submitting pull requests.

---

## 2. Project scope and goals

This repository is:

- A **template Angular app** used mainly within the `dnd-mapp` organization.
- A starting point that is:
    - Up-to-date with recent Angular versions (currently Angular `21.0.4`).
    - Equipped with sensible defaults: ESLint, Prettier, Stylelint, Vitest, Playwright, and `@analogjs`.

Contributions are welcome if they help:

- Improve the developer experience or clarity of the template.
- Keep dependencies and tooling modern and well-configured.
- Fix bugs or rough edges that could trip up new apps based on this template.

---

## 3. What you can contribute

You are welcome to contribute in many ways, including:

### 3.1. Bug reports

- Report issues you encounter when:
    - Cloning and running the template.
    - Using the generated project structure in real apps.
- Attach:
    - Steps to reproduce.
    - Logs or stack traces if available.
    - Your environment details (Node version, pnpm version, OS, etc.).

### 3.2. Feature suggestions

Examples of useful suggestions:

- Improvements to the default Angular setup (e.g., better testing defaults).
- Adjustments to the folder structure that clarify typical usage.
- Reasonable defaults for commonly used libraries (where they don’t make the template too opinionated).

Please open an issue first for larger or more opinionated changes, so we can discuss fit and scope before you invest a lot of time.

### 3.3. Documentation improvements

- Clarifying setup steps or README sections.
- Improving inline comments where they help explain template choices.
- Adding examples, tips, or “gotchas” that you’ve encountered using the template.

### 3.4. Tooling and CI improvements

- Enhancing ESLint / Prettier / Stylelint configs.
- Improving Vitest / Playwright setup or test coverage of core template pieces.
- Improving GitHub Actions or other CI workflows (if/when present).

---

## 4. License and usage

This template is **not open-licensed**. It is provided for viewing only.

From `LICENSE` / `package.json`:

- License: `unlicensed`
- **All rights reserved** by D&D Mapp.
- You **may not**:
    - Use, run, copy, modify, merge, publish, distribute, sublicense, or sell this software or any derived artifacts (builds, container images, etc.) without prior written permission.

If you’re unsure whether your intended use is allowed, please refer to the license text and/or contact: [mail.dndmapp@gmail.com](mailto:mail.dndmapp@gmail.com).

Contributions you make to this repository are submitted under the same “all rights reserved” policy and may be used by `dnd-mapp` in this project.

---

## 5. Getting started locally

The basic setup and run instructions are documented in the [README](./README.md). **Please start there**.

To avoid duplication and drift, this document will not repeat all setup steps. In short, you will typically:

- Use **Node 24** (recommended via [Mise](https://github.com/jdx/mise) if you use it).
- Use **pnpm** as the package manager.

Common commands (exact details in the README):

```bash
pnpm install
pnpm start
pnpm test
```

If any README instructions are unclear or outdated, please open an issue or submit a pull request to improve them.

---

## 6. Tools and scripts

This project uses:

- **Framework**: Angular (currently `21.0.4`, updated as new versions are
  supported)
- **Package manager**: `pnpm`
- **Linting & formatting**:
    - ESLint
    - Prettier
    - Stylelint
- **Testing**:
    - `@analogjs`
    - Vitest
    - Playwright (for running unit tests in a real browser environment)
- **Other tooling**:
    - Mise (recommended to align tool and runtime versions)

You can run checks locally via:

```bash
pnpm lint           # Runs ESLint
pnpm stylelint      # Runs Stylelint
pnpm format:check   # Runs Prettier in check mode
pnpm format:write   # Runs Prettier to fix formatting issues
```

**Requirement:**  
Your code must pass **CI checks**, which include at least ESLint, Prettier, and Stylelint. Any code style is fine as long as these tools pass.

---

## 7. Issues

### 7.1. Before opening an issue

- **Search existing issues** to see if your problem or idea has already been reported or discussed.
- If a closely related issue exists:
    - Add a comment there instead of opening a new one if appropriate.

### 7.2. Using issue templates

If there is an issue template that fits your situation (e.g. “Bug report”, “Feature request”), **please use it**. It helps provide consistent and useful information for triage.

### 7.3. Opening a new issue

When opening an issue, please include:

- A clear and descriptive **title**.
- A detailed **description** of:
    - What you are trying to do.
    - What you expected to happen.
    - What actually happened.
- Steps to reproduce, including:
    - Commands you ran.
    - Configuration changes, if any.
- Your environment:
    - OS
    - Node version (preferably 24)
    - pnpm version
    - Any other relevant tooling details (e.g., Mise config).

---

## 8. Pull requests

### 8.1. Before starting a major change

For **larger** changes (e.g., new features, significant refactors, new default libraries):

- Please open an issue first to discuss your idea.
- This helps avoid unnecessary work if the change is not a good fit for the template’s goals.

Smaller fixes (typos, simple bug fixes, small tweaks) can usually go straight to a PR without prior discussion.

### 8.2. Branch naming

Please use clear and descriptive branch names, ideally prefixed by type, for example:

- `feature/add-routing-example`
- `chore/update-angular-deps`
- `scout/investigate-ci-failure`
- `fix/playwright-config`

This helps keep the history and pull requests easier to scan.

### 8.3. Commit messages

Commit messages should be:

- **Clear and descriptive** (what changed and why).
- Focused: each commit should ideally do one logical change.

Conventional Commit prefixes (like `feat:`, `fix:`, etc.) are welcome but not strictly required as long as the message is understandable.

### 8.4. PR content guidelines

When submitting a pull request:

1. **Keep the scope focused**
    - Avoid mixing unrelated changes in a single PR.
    - Smaller, focused PRs are easier to review and quicker to merge.

2. **Make sure tests and checks pass**
    - Run relevant tests locally (Vitest and/or Playwright, as appropriate).
    - Run at least:
      ```bash
      pnpm lint
      pnpm stylelint
      pnpm format:check
      ```
    - Fix any issues reported by these tools.

3. **Update documentation**
    - If your change affects the way users work with this template, update:
        - `README.md`
        - Any other relevant docs or inline comments.

4. **Add or update tests where it makes sense**
    - For new features or bug fixes, add tests when practical.
    - If tests are not added, a short explanation in the PR description can help.

5. **Link to an issue, if applicable**
    - If your PR addresses an existing issue, mention it (e.g. `Closes #123`).

### 8.5. Review process

- The repository maintainer will review PRs as time allows.
- You may be asked to:
    - Make changes or clarifications.
    - Split a large PR into smaller parts.
- Please keep discussions respectful and technical. See the [Code of Conduct](./CODE_OF_CONDUCT.md) for behavior expectations.

---

## 9. Style and conventions

- **Code style**:  
  There is no strict manual style guide beyond:
    - Code must pass ESLint, Stylelint, and Prettier checks.
    - It should follow general Angular best practices where reasonable.

- **Project structure**:  
  This is a template, so:
    - Try to keep changes broadly useful and not overly opinionated.
    - If a change adds strong opinions (e.g., a specific state management library), it may be discussed carefully to ensure it fits the project’s goals.

---

## 10. Questions and feedback

If you’re unsure about anything in this document, or you’re not sure whether a change belongs here, you can:

- Open an issue asking for clarification.
- Propose changes to `CONTRIBUTING.md` itself if you think it can be improved.

Thanks again for your interest in improving `dnd-mapp/template-angular-app`! Your feedback and contributions help make this template more robust and useful for everyone using it within the `dnd-mapp` organization.
