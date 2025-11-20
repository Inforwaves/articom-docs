FROM node:current-slim

# Install the Mintlify CLI globally
RUN npm install -g mint

# Set the working directory inside the container
WORKDIR /app

# Copy your documentation files into the container
# Make sure to run this from the root of your docs project
ADD . .

# Expose the port Mintlify uses for the dev server (if needed)
EXPOSE 3000

# Default command to run the dev server (can be overridden)
CMD ["mint", "dev"]