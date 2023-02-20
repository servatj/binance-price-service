# Use a Node.js image as the base image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install --production

# Copy the rest of the app's files to the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the app with the command "npm start"
CMD [ "npm", "start" ]
