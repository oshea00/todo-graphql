# Step 1: Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Step 2: Copy the build output from your local 'dist' folder to the Nginx container
COPY dist /usr/share/nginx/html

# Step 3: Expose port 80 to allow communication to/from the server
EXPOSE 80

# Step 4: Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]

