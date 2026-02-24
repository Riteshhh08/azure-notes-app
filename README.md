Azure Notes — Containerized Web Application

A lightweight notes application deployed to Microsoft Azure App Service using Docker containers.
This project demonstrates an end-to-end cloud delivery workflow:

Local development → Containerization → Registry publication → Managed cloud hosting

Live Application

Public URL:
https://azure-notes-ritesh-fuawg4axh0fqdraq.centralindia-01.azurewebsites.net/

Project Overview

Azure Notes is a stateless web application that allows users to create and manage notes through a simple browser interface. The application is packaged as a Docker image and deployed on Azure App Service using a Linux container environment.

The deployment follows production-style practices, ensuring portability, reproducibility, and minimal infrastructure management.

Key Features

Web-based note creation and deletion

Public HTTPS access

Containerized runtime using Docker

Managed cloud hosting on Azure

Reproducible deployment from a registry

Simple, lightweight interface

Technology Stack
Application

Node.js

Express

Containerization

Docker

Cloud Platform

Microsoft Azure App Service (Linux container)

Registry

Docker Hub

Version Control

Git

GitHub

Automation

GitHub Actions (image build and push)

Architecture
Client Browser
      ↓
   Internet
      ↓
Azure App Service
      ↓
Docker Container
      ↓
Node.js Application
Deployment Workflow

Develop and test locally

Create Dockerfile

Build container image

Push image to Docker Hub

Configure Azure App Service to pull image

Deploy and validate via public endpoint

Running Locally

Install dependencies and start the application:

npm install
npm start

Open in browser:

http://localhost:3000
Running with Docker

Build the container image:

docker build -t azure-notes .

Run the container:

docker run -p 3000:3000 azure-notes

The application will be available at:

http://localhost:3000
Container Registry

Docker Hub repository:
vishwakarmaritesh08/azure-notes

The Azure App Service deployment pulls the latest image directly from this registry.

Continuous Integration

A GitHub Actions workflow builds and publishes the Docker image on repository updates.

Workflow location:

.github/workflows/azure-deploy.yml
Required Repository Secrets

DOCKER_USERNAME

DOCKER_PASSWORD

Pipeline Steps

Checkout source code

Build Docker image

Authenticate to Docker Hub

Push image to registry

Infrastructure Overview

Azure App Service provides:

Managed container hosting

Automatic HTTPS

Integrated networking

Optional scaling capabilities

Monitoring integration

No virtual machine management is required.

Screenshots
Live Application

Shows the deployed notes interface accessible via the public URL.

(Insert UI screenshot here)

Azure App Service Overview

Displays the cloud hosting environment, runtime status, and container configuration.

(Insert App Service screenshot here)

Resource Architecture

Visual representation of the relationship between the web app and compute resources.

(Insert Resource Visualizer screenshot here)

Docker Hub Registry

Public repository containing the container image used for deployment.

(Insert Docker Hub screenshot here)

Local Container Execution

Docker Desktop showing the container running locally before deployment.

(Insert Docker Desktop screenshot here)

Source Code Repository

GitHub repository containing application code, Dockerfile, and workflow configuration.

(Insert GitHub screenshot here)

Limitations

Data is not persisted across container restarts

No authentication mechanism

Minimal monitoring configuration

Designed for demonstration purposes

Future Improvements

Persistent database integration

User authentication and authorization

Automated deployment to Azure

Structured logging and monitoring

Multi-service architecture

Conclusion

This project demonstrates a complete lifecycle for delivering a containerized application to the cloud using a managed platform. It reflects modern practices where applications are packaged as portable artifacts and deployed without direct infrastructure management.
