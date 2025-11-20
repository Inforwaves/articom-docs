# Use Node.js 20 as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install Mintlify
RUN npm install -g mintlify

# Copy docs
COPY . .

# Build the Mintlify site
RUN mintlify build

# Expose port
EXPOSE 3000

# Start production server
CMD ["mintlify", "start", "--host", "0.0.0.0"]
