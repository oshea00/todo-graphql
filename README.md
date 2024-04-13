# Simple TODO App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Creates a "todo" web application using containerized vite/react application that uses a graphql backend.

The service is orchestrated using docker compose.

Much of the code was produced using ChatGPT4 and the Copilot extension for VSCode.

[Chat Session](https://chat.openai.com/share/d7ca5b55-c401-46ac-9cc9-9900e28d781c)

## Installation

### Build and run service
~~~
> cd todo-app
> npm install
> npm run build
> cd ..
> docker compose up --build -d
~~~

UI
[localhost:3000](http://localhost:3000/)
Graphql
[localhost:4000](http://localhost:4000/)

### Cleanup
`> docker compose down`

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

