# Environment Variables Exposer

This is a Node.js application, wrapped in a Docker container, that exposes the environment variables of the running container via an HTTP API. Specifically, it lists only the environment variables that start with a specified prefix. This prefix is defined by the `PREFIX` environment variable. If `PREFIX` is not set, the application will return an empty JSON object.

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

3. Run the Docker container, passing in the `PREFIX` environment variable and any other environment variables that start with the prefix
    ```bash
    docker run -p 3000:3000 -e PREFIX=MY_PREFIX -e MY_PREFIX_VARIABLE=value env-api
    ```

This will start the application on port 3000. To see the filtered environment variables, visit `http://localhost:3000/get-configurations`.

## Built With

- [Node.js](https://nodejs.org) - JavaScript runtime
- [Express](https://expressjs.com) - Web application framework for Node.js
- [Docker](https://www.docker.com) - Containerization platform

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
