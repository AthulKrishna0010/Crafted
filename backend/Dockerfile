# Use official Node.js LTS base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the app source
COPY . .

# Expose port (adjust if your app uses a different one)
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]
