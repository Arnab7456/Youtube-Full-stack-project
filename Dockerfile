# Use an official Node runtime as a parent image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Create a minimal production image
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# The default command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
