# MERN Stack Project

This is a MERN (MongoDB, Express, React, Node.js) stack project.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

To start the project using Docker Compose, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/thanhquang28/btl_csdl.git
   cd btl_csdl
   ```

2. Build and start the containers:

   ```sh
   docker-compose up --build
   ```

3. Open your browser and navigate to `http://localhost` to see the application running.

To start the project manually, follow these steps:

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
   npm start
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
  docker-compose down
  ```

- To rebuild the containers:

  ```sh
  docker-compose up --build
  ```
