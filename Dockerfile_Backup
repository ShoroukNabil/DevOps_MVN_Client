# Stage 1: Build Angular app
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve with official nginx:alpine (non-root)
FROM nginx:alpine

# Remove default nginx index and configuration
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output
COPY --from=build /app/dist/angularclient /usr/share/nginx/html

# Adjust file permissions for non-root user
RUN chown -R nginx:nginx /usr/share/nginx/html

# Switch to non-root user provided by nginx:alpine
USER nginx

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
