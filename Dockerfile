FROM node:16-alpine

# Install build dependencies and MongoDB shell
RUN apk add --no-cache python3 g++ make

# Set the working directory
WORKDIR /app

# Copy only package.json and yarn.lock first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Remove build dependencies to reduce image size
RUN apk del python3 g++ make

# Command to run the application
CMD ["npm", "start"]