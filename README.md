# NEST TODO REST API

Sample REST API using [Nest](https://github.com/kamilmysliwiec/nest) framework
with a simple in memory database. (This project is having only API's, no frontend included till now)

## Installation

1. Clone the repository: `git clone https://github.com/shaharyar123/nest-todo-api.git`
2. Install modules by running : `npm install` on root of the project.
3. Start the server by typing: `npm start` in the project terminal.

## Routes

- **POST /todo**
- **GET /todo**
- **GET /todo/:id**
- **PUT /todo/:id**
- **DELETE /todo/:id**

- it includes Schema of the Todos having id (auto generated), description, completed
- having several functions and classes to check validation of the request
- error handling exceptions