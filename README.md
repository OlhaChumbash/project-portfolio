Portfolio Project
This repository contains a portfolio website built with React and Vite. The project is automatically deployed using GitHub Actions and Netlify.

Live Preview
You can view the live preview of the portfolio at: https://olha-chumbash-portfolio.netlify.app/

To automate the build and deployment of your React project using GitHub Actions and Netlify, follow these steps:



1. Configure Netlify
To set up Netlify for your project using the Netlify CLI, follow these instructions. This guide will walk you through initializing a new site on Netlify and configuring it properly.

netlify init

Go to your GitHub repository on GitHub.
Navigate to Settings > Secrets and variables > Actions.
Click on New repository secret and add the following secrets:
Secret Name: NETLIFY_AUTH_TOKEN
Value: Your Netlify authentication token. You can get this from your Netlify account settings under the "Access tokens" section.
Secret Name: NETLIFY_SITE_ID
Value: The ID of your Netlify site. You can find this in the Netlify dashboard under the site settings.
Note: These secrets are used by the GitHub Actions workflow to authenticate and deploy to Netlify.

2. Create a GitHub Actions Workflow File in Root directory of the project
.github/workflows/CI.yml

Contents:
name: CI/CD Pipeline

on:
  push:
    branches:
      - main     

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Deploy to Netlify
        run: |
          npm install -g netlify-cli
          netlify deploy --dir=dist --prod --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}

Explanation:
This workflow runs on every push to the main branch.
It checks out the code, installs dependencies, builds the application, and deploys it to Netlify.

3. Push Changes to GitHub
Commit and Push Your Changes

git add .
git commit -m "Set up CI/CD with GitHub Actions and Netlify"
git push origin main

After pushing changes, GitHub Actions will automatically build and deploy your site.
