# STAGE 1: Build
FROM node:22-alpine as build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Install production server
RUN npm install -g serve

# STAGE 2: Runtime
FROM node:22-alpine

WORKDIR /app

# Copy static build from previous stage
COPY --from=build /app/dist ./dist
RUN npm install -g serve

EXPOSE 3100
CMD ["serve", "-s", "dist", "-l", "3100"]
