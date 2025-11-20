# Use Node.js 20 as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install Mintlify CLI globally
RUN npm install -g mintlify

# Copy all documentation files
COPY . .

# Expose port 3000 (default Mintlify port)
EXPOSE 3000

# Start the Mintlify server
CMD ["mintlify", "dev", "--host", "0.0.0.0"]
