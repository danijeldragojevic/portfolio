# Use Node.js LTS (Long Term Support) image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the development port
EXPOSE 8080

# Command to run the development server
CMD ["npm", "run", "dev"] 