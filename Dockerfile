# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port on which your Node.js application listens
EXPOSE 8000

# Set the command to start your application
CMD [ "npm", "start" ]
