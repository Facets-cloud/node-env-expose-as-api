# Environment Variables Exposer

This is a simple Node.js application, wrapped in a Docker container, that exposes the environment variables of the running container as a JSON object via an HTTP API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or higher)
- Docker

### Installing

1. Clone the repository
    ```bash
    git clone https://github.com/yourusername/env-exposer.git
    cd env-exposer
    ```

2. Build the Docker image
    ```bash
    docker build -t env-api .
    ```

3. Run the Docker container, passing in environment variables
    ```bash
    docker run -p 3000:3000 -e MY_VARIABLE=value env-api
    ```

This will start the application on port 3000 and you can see the environment variables by visiting `http://localhost:3000`.

## Built With

- [Node.js](https://nodejs.org) - JavaScript runtime
- [Express](https://expressjs.com) - Web application framework for Node.js
- [Docker](https://www.docker.com) - Containerization platform

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

