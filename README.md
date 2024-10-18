# Comments App Server

This project is a backend application built with Node.js, Express, and Sequelize. It provides a basic REST API for a comments application, allowing users to create comments, reply to comments, delete comments, and list all comments. This code serves as an initial implementation with minimal features, and there are many opportunities for improvement.

## Watch Full App Demo

[App Demo](https://www.webmobilefirst.com/en/screencasts/hA5hMnvpBJ/)

## Prerequisites

Ensure you have the following installed on your system:

- Node.js
- PostgreSQL

## Getting Started

Follow the instructions below to set up the project.

### 1. Clone the Repository

```bash
git clone https://github.com/LuisGerar321/node-comments-api.git
cd node-comments-api
```

### 2. Environment Variables

Create a `.env` file in the root directory of the project and add your environment variables:

```
HOST="localhost"
HOST_PORT="3001"

DB_HOST="localhost"
DB_USER="postgres"
DB_PASS="postgres"
DB_NAME="node-api"
```

### 3. Install Packages

This project utilizes Sequelize-TypeScript as the ORM, Express to handle server requests, and several other essential libraries. To install the required packages, run the following command:

```bash
npm install
```

### 4. Running the Application

Once the packages have been installed, ensure that your PostgreSQL database server is running and that your .env configuration is correctly set up. Then, start the application using:

```bash
npm run dev
```

### 5. Accessing the Application

The API includes CRUD operations available at the /comments endpoint. Additionally, I have shared my Postman collection in this repository as NODE-API.postman_collection.json. This collection includes predefined variables to facilitate the execution of the API methods from start to finish. To use it, simply import the file into your Postman collections.

## Technologies Used

- Node.js
- Express
- Sequelize
- PostgreSQL
- Docker
- TypeScript

## License

This project is licensed under the ISC License.
