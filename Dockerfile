FROM node:14-alpine3.17

# Set the working directory
WORKDIR /app



# Copy the package.json and package-lock.json files to the container
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code to the container
COPY backend/ ./


# Expose the application port
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
