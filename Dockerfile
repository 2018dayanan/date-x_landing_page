# Step 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency definition files
COPY package.json package-lock.json ./

# Install dependencies cleanly
RUN npm ci

# Copy all application source code
COPY . .

# Optional build arguments for environment variables
ARG VITE_API_URL
ARG VITE_SERVER_URL
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_SERVER_URL=$VITE_SERVER_URL

# Build the production React SPA bundle
RUN npm run build

# Step 2: Production runtime stage with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration for React SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]