#!/bin/bash
# Deploy script for GitHub Pages

echo "Cleaning old dist..."
npm run clean

echo "Installing deps..."
npm ci

echo "Linting..."
npm run lint

echo "Building..."
npm run build

echo "Deploying to gh-pages..."
npx gh-pages -d dist -f

echo "Deploy complete! Check https://huynguyenwi.github.io/lophoc10/"
echo "Enable Pages in repo Settings if needed."

