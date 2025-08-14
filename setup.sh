#!/bin/bash

set -e

echo "🚀 Migration Minor Web Prototype - Development Setup"
echo "=================================================="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command_exists docker; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command_exists docker-compose; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

if ! command_exists bun; then
    echo "⚠️  Bun is not installed. You can still use Docker, but for local development, consider installing Bun."
fi

echo "✅ Prerequisites check completed"
version="v1.0.0"
export VERSION=$version

echo "Starting container with version: $version"

docker compose -f compose.build.yaml up -d

echo "✅ Application is running!"
echo "🌐 Open http://localhost:3000 in your browser"
echo "📊 View logs with: docker compose -f compose.build.yaml logs -f"