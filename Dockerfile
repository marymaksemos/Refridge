FROM node:14-bullseye

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
EXPOSE 5001
EXPOSE 3000
# Start the application
CMD ["node", "app.js"]
