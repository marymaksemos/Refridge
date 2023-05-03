# Use an official Python runtime as a parent image
FROM python:3.10

# Set the working directory to /app
WORKDIR /app

# Copy the guestbook.py file into the container
COPY guestbook.py .

# Expose port 8080 for the web server
EXPOSE 8080

# Define the command to run the guestbook.py file when the container starts
CMD ["python", "guestbook.py new mmmmm"]
