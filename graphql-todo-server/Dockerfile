# Use the official Node.js 14 Alpine image as a base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install production dependencies.
RUN npm install --production

# Copy the local code to the container's working directory
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Command to run the app
CMD ["node", "index.js"]

