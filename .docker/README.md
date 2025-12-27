# Template Angular app

This image contains a production-style build of the **Template Angular app** from:

- Source: <https://github.com/dnd-mapp/template-angular-app>
- Image: `dndmapp/template-angular-app`

It is primarily intended for:

- Local development and testing of the template setup.
- Serving as a reference for how applications created from this template can be containerized for production environments.

> [!IMPORTANT]
> This image and the underlying source code are **not licensed for reuse**. See [License](#license) for details.

---

## What this image contains

- A built Angular application (using Node 24 and pnpm in a multi-stage build).
- A minimal Nginx-based runtime serving the built app.
- An image built for multiple architectures:
    - `linux/amd64`
    - `linux/arm64`

---

## Tags and publishing

Images are built and published from GitHub Actions using a Docker Bake.

### Tagging strategy

- **On every merge to `main`**:
    - Images are tagged with:
        - `dev`
        - The short Git SHA (e.g. `sha-abc1234`)

- **On every release**:
    - Versioned tags of the form:
        - `latest`
        - `{major}.{minor}.{patch}` (e.g. `1.2.3`)
        - `{major}.{minor}` (e.g. `1.2`)
        - `{major}` (e.g. `1`)

Examples:

- `dndmapp/template-angular-app:latest`
- `dndmapp/template-angular-app:1.2.3`
- `dndmapp/template-angular-app:1.2`
- `dndmapp/template-angular-app:1`
- `dndmapp/template-angular-app:dev`
- `dndmapp/template-angular-app:sha-<short-sha>`

---

## How to run

### Simple `docker run`

To run the latest image locally:

```bash
docker run --rm \
  -p 4200:8080 \
  --name template-angular-app \
  dndmapp/template-angular-app:latest
```

Then open:

```text
http://localhost:4200
```

Notes:

- Port `8080` inside the container is mapped to `4200` on your host.
- Nginx serves the app as a static site.

If you want to use a specific tag (e.g., a release):

```bash
docker run --rm \
  -p 4200:8080 \
  --name template-angular-app \
  dndmapp/template-angular-app:1.2.3
```

### Using Docker Compose

Using Docker compose with this Docker image can look something like:

```yaml
name: template-angular-app
services:
    template-angular-app:
        image: dndmapp/template-angular-app
        container_name: template-angular-app
        restart: on-failure
        ports:
            - '4200:8080/tcp'
```

Then you can create a container with the following command

```bash
docker compose up -d
```

Then access the app at:

```text
http://localhost:4200
```

This compose file:

- Tags the built image as `dndmapp/template-angular-app:latest`.
- Maps host port `4200` to container port `8080`.

---

## Building the image locally

If you want to build the image yourself (e.g., to test changes to the template):

From the repository root:

```bash
docker build \
  -f .docker/Dockerfile \
  -t dndmapp/template-angular-app:local \
  .
```

Then run:

```bash
docker run --rm \
  -p 4200:8080 \
  --name template-angular-app \
  dndmapp/template-angular-app:local
```

---

## Build details (Docker Bake)

The image is built in CI using **Docker Buildx** and a **bake** file.

Key points:

- **Platforms**: `linux/amd64`, `linux/arm64`
- **Context**: repository root (`.`)
- **Dockerfile**: `.docker/Dockerfile`
- **Tags**: controlled by the `TAGS` variable (set by CI)
- **Attestations**:
    - Build provenance (mode `max`)
    - SBOM (Software Bill of Materials)

---

## Environment variables and configuration

The default image is designed to be **simple**:

- Nginx serves the built Angular app from `/usr/share/nginx/html`.
- Port **8080** is exposed.
- There are **no mandatory environment variables** required just to run the image.

If you want to customize behavior (e.g., base path, additional headers, etc.), you can:

1. Fork or derive your own version of the template (with explicit permission).
2. Modify `.docker/default.conf` and rebuild the image.
3. Or layer your own image on top with a custom Nginx config.

Because this project is **all rights reserved**, you must have prior written permission before using this image or adapting it for your own deployments. See [License](#license) for more.

---

## Use cases

Typical intended uses for this image include:

- **Local development / testing** of the containerization setup itself.
- **Reference** for:
    - Multi-stage builds with Node 24 and pnpm.
    - Serving an Angular SPA behind Nginx in a container.
    - Multi-arch image builds with provenance and SBOM attestation.

For actual production deployments of applications created from this template, you would:

- Use a similar Dockerfile and bake/compose setup.
- Adjust configuration (Nginx, environment variables, CI pipeline) to your project’s needs.

---

## License

This project is **not licensed for reuse**.

- The author reserves all rights.
- The code is published on GitHub for transparency and personal reference only.
- You are **not permitted** to use, copy, modify, or distribute this code in any form, whether for commercial or non-commercial purposes, without prior written permission from the author.

For more info see the [LICENSE](https://github.com/dnd-mapp/template-angular-app/blob/main/LICENSE). For permission requests, contact: [mail.dndmapp@gmail.com](mailto:mail.dndmapp@gmail.com)
