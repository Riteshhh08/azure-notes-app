# Azure Notes App

A tiny notes app you can run locally, containerize with Docker, and deploy to Azure App Service.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Docker

```bash
docker build -t azure-notes .
docker run -p 3000:3000 azure-notes
```

## GitHub Actions

The workflow at `.github/workflows/azure-deploy.yml` builds and pushes a Docker image to Docker Hub.

Create these GitHub repo secrets:

- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

