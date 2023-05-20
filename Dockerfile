FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY backend/package*.json ./backend/

# Copy the package.json and package-lock.json files for frontend
# COPY frontend/package*.json ./frontend/

# Install backend dependencies
RUN cd backend && npm install
# Install frontend dependencies
# RUN cd frontend && npm install

# Copy the rest of the backend code to the container
COPY backend/ ./backend/

# Copy the rest of the frontend code to the container
# COPY frontend/ ./frontend/

# Expose the application port
EXPOSE 8000
# EXPOSE 3000

# Start the application
CMD ["npm", "start"]
# CMD ["npm", "run", "start"]