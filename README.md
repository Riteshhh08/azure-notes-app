☁️ Azure Notes — Containerized Web Application

A lightweight notes application deployed to Microsoft Azure App Service using Docker containers.
This project demonstrates an end-to-end cloud delivery workflow:

💻 Local Development → 🐳 Containerization → 📦 Registry → ☁️ Managed Cloud Hosting

🔎 Explore

🌐 Live Demo: https://azure-notes-ritesh-fuawg4axh0fqdraq.centralindia-01.azurewebsites.net/

🐞 Report Bug: Open an issue

✨ Request Feature: Open a feature request

📑 Table of Contents

📖 About The Project

🧩 Built With

🚀 Getting Started

🧪 Usage

🏗️ Architecture

⚙️ Deployment Workflow

📦 Container Registry

🔄 Continuous Integration

☁️ Infrastructure Overview

🖼️ Screenshots

⚠️ Limitations

🔮 Future Improvements

🤝 Contributing

📜 License

📬 Contact

📖 About The Project

Azure Notes is a stateless web application that allows users to create and manage notes through a browser interface. The application is packaged as a Docker image and deployed on Azure App Service using a Linux container environment.

The deployment follows production-style practices, ensuring portability, reproducibility, and minimal infrastructure management.

✨ Key Capabilities

📝 Web-based note creation and deletion

🔒 Public HTTPS access

🐳 Containerized runtime using Docker

☁️ Managed cloud hosting on Azure

📦 Reproducible deployment from a registry

⚡ Lightweight and simple interface

🧩 Built With
🖥️ Application

🟢 Node.js

🚂 Express

🐳 Containerization

Docker

☁️ Cloud Platform

Microsoft Azure App Service (Linux container)

📦 Registry

Docker Hub

🔧 Version Control

Git

GitHub

🔄 Automation

GitHub Actions

🚀 Getting Started

Follow these steps to run the project locally.

📌 Prerequisites

Install:

🟢 Node.js (LTS recommended)

🐳 Docker (optional for container execution)

📥 Installation

Clone the repository:

git clone https://github.com/your_username/repo_name.git
cd repo_name

Install dependencies:

npm install

Start the application:

npm start

Open in browser:

http://localhost:3000
🧪 Usage

The application allows users to create and delete notes through a simple web interface.
It is designed as a lightweight demonstration of containerized cloud deployment.

🏗️ Architecture
Client Browser
      ↓
   🌐 Internet
      ↓
☁️ Azure App Service
      ↓
🐳 Docker Container
      ↓
🧠 Node.js Application
⚙️ Deployment Workflow

💻 Develop and test locally

🧾 Create Dockerfile

🏗️ Build container image

📤 Push image to Docker Hub

⚙️ Configure Azure App Service

🌐 Deploy and validate

🐳 Running with Docker

Build the container image:

docker build -t azure-notes .

Run the container:

docker run -p 3000:3000 azure-notes

Access locally:

http://localhost:3000
📦 Container Registry

Docker Hub repository:

vishwakarmaritesh08/azure-notes

Azure App Service pulls the latest image directly from this registry.

🔄 Continuous Integration

A GitHub Actions workflow builds and publishes the Docker image on repository updates.

📍 Workflow location:

.github/workflows/azure-deploy.yml
🔐 Required Repository Secrets

DOCKER_USERNAME

DOCKER_PASSWORD

🔁 Pipeline Steps

Checkout source code

Build Docker image

Authenticate to Docker Hub

Push image to registry

☁️ Infrastructure Overview

Azure App Service provides:

☁️ Managed container hosting

🔒 Automatic HTTPS

🌐 Integrated networking

📈 Optional scaling capabilities

📊 Monitoring integration

No virtual machine management is required.

🖼️ Screenshots
🌐 Live Application

Shows the deployed notes interface accessible via the public URL.

☁️ Azure App Service Overview

Displays the cloud hosting environment and runtime status.

🧭 Resource Architecture

Illustrates the relationship between the web app and compute resources.

📦 Docker Hub Registry

Public repository containing the container image used for deployment.

🐳 Local Container Execution

Docker Desktop showing the container running locally.

📁 Source Code Repository

GitHub repository containing application code and workflow configuration.

⚠️ Limitations

💾 Data is not persisted across container restarts

🔐 No authentication mechanism

📉 Minimal monitoring configuration

🧪 Designed for demonstration purposes

🔮 Future Improvements

🗄️ Persistent database integration

🔑 User authentication and authorization

🤖 Automated deployment to Azure

📊 Structured logging and monitoring

🧱 Multi-service architecture

🤝 Contributing

Contributions are welcome.

🍴 Fork the repository

🌿 Create a feature branch

💾 Commit your changes

📤 Push to your branch

🔁 Open a pull request

📜 License

Distributed under the Unlicense.
See the LICENSE file for details.

📬 Contact

Ritesh Vishwakarma
