# MERN Stack Project

This is a MERN (MongoDB, Express, React, Node.js) stack project.

## Prerequisites

- Docker
- Docker Compose

- Node:20 (for development)
- Mongodb (for development)

## Getting Started

To start the project using Docker Compose, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/thanhquang28/btl_csdl.git
   cd btl_csdl
   ```

2. Build and start the containers:

   ```sh
   cd docker
   docker compose -f backend.yaml -f frontend.yaml up -d --build
   ```

3. Open your browser and navigate to `http://localhost` to see the application running.

To start the project manually or want to develope more feature, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/thanhquang28/btl_csdl.git
   cd btl_csdl
   ```

2. Start your local MongoDB server and add database name `thanhlq`

3. Start the backend server:

   ```sh
   cd backend
   npm install
   npm start
   ```

4. Start the frontend server:

   ```sh
   cd frontend
   npm install
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Project Structure

- `frontend/` - React frontend
- `backend/` - Express backend
- `database/` - Store MongoDB data
- `docker-compose.yml` - Docker Compose configuration

## Useful Commands

- To stop the containers:

  ```sh
  cd docker
  docker compose -f backend.yaml -f frontend.yaml down
  ```
