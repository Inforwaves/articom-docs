FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json yarn.lock* ./

# Install dependencies (skip postinstall)
RUN yarn install --ignore-scripts

# Copy all files
COPY . .

# Build the application (this will run fumadocs-mdx)
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
