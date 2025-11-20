# Use Node.js 20 as base image (required for Mintlify)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install Mintlify CLI globally
RUN npm install -g mintlify

# Copy the documentation files
COPY . .

# Expose the default Mintlify port
EXPOSE 3000

# Start Mintlify dev server
CMD ["mintlify", "dev"]
