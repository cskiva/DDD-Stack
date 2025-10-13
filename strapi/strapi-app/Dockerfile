# Use small, efficient Node.js image
FROM node:23-alpine

# Install dependencies needed for building native packages
RUN apk add --no-cache python3 make g++ libc6-compat bash

# Set working directory
WORKDIR /.

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the Strapi app
COPY . .

# Build admin panel
RUN npm run build

# Expose default Strapi port
EXPOSE 1337

# Start Strapi in dev mode
CMD ["npm", "run", "develop"]
