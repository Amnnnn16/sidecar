# Use Node.js for building the React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# # Use a lightweight HTTP server for serving static files

FROM node:18-alpine
WORKDIR /app

# Install and use http-server to serve files

RUN npm install -g http-server
COPY --from=build /app/build /app/build

# Expose port 3000 for internal communication
EXPOSE 3000
CMD ["http-server", "build", "-p", "3000"]
