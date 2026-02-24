☁️ Azure Notes — Containerized Web Application

A lightweight notes application demonstrating end-to-end delivery from local development to public cloud hosting.

This project is deployed using two platforms:

☁️ Microsoft Azure App Service (Docker container)

▲ Vercel (serverless hosting)

🌐 Live Applications
☁️ Azure Deployment (Containerized)

👉 Open on Azure

▲ Vercel Deployment (Serverless)

👉 Open on Vercel

📌 Project Overview

Azure Notes is a web-based notes application that allows users to create and delete notes through a browser interface.

The application is:

🐳 Containerized for Azure deployment

▲ Serverless-ready for Vercel

📦 Portable across environments

⚡ Lightweight and stateless

This project demonstrates real-world cloud delivery strategies used in modern applications.

✨ Key Features

📝 Create and delete notes in real time

🔒 Secure public access via HTTPS

🐳 Containerized deployment on Azure

▲ Serverless deployment on Vercel

📦 Reproducible builds using Docker

⚡ Fast and minimal UI

🧩 Technology Stack
🖥️ Application

Node.js

Express

🐳 Containerization

Docker

☁️ Cloud Platforms

Azure App Service (Linux container)

Vercel (serverless platform)

📦 Registry

Docker Hub

🔧 Version Control

Git

GitHub

🔄 Automation

GitHub Actions

🏗️ Architecture
☁️ Azure Deployment
Client Browser
   ↓
Internet
   ↓
Azure App Service
   ↓
Docker Container
   ↓
Node.js Application
▲ Vercel Deployment
Client Browser
   ↓
Vercel Edge Network
   ↓
Serverless Runtime
   ↓
Node.js Application
🚀 Deployment Workflow (Azure)

💻 Develop and test locally

🧾 Create Dockerfile

🏗️ Build Docker image

📤 Push image to Docker Hub

⚙️ Configure Azure App Service

🌐 Deploy and validate

▲ Deployment Workflow (Vercel)

📁 Push code to GitHub

🔗 Import project into Vercel

⚙️ Automatic build

🌐 Deployment with public URL

🧪 Run Locally
▶️ Using Node.js
npm install
npm start

Open:

http://localhost:3000
🐳 Run with Docker
Build Image
docker build -t azure-notes .
Run Container
docker run -p 3000:3000 azure-notes

Access locally:

http://localhost:3000
📦 Container Registry

Docker Hub repository:

👉 vishwakarmaritesh08/azure-notes

Azure pulls the container image directly from this registry.

🔄 Continuous Integration

A GitHub Actions workflow automatically builds and pushes the Docker image.

Workflow file

.github/workflows/azure-deploy.yml

Required Secrets

DOCKER_USERNAME

DOCKER_PASSWORD
