# React App with Docker

This repository contains a simple React application that can be easily set up and run using Docker.

## Prerequisites

Before you begin, make sure you have the following software installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Node.js: [Install Node.js](https://nodejs.org/)

## Features

- [React.js 18](https://reactjs.org/blog/2022/03/29/react-v18.html) - Blog introduce React v18.0.
- [Typescript 4](https://www.typescriptlang.org/) - Documentation of TypeScript.
- [Sass](https://sass-lang.com/) - Documentation of Sass.
- [react-dropzone](https://react-dropzone.js.org/) - Documentation of react-dropzone.

## Usage

This project using node >= 18.16.0 & npm


## Getting Started

Clone this repository to your local machine:

```bash
git clone https://github.com/OhayoNB/song-app-frontend.git
cd song-app-frontend
```

Install project dependencies:

```bash
npm install
```

Build the React app for production:

```bash
npm run build
```
#### Running the App with Docker

Build a Docker image for your app:

```bash
docker build -t react-app .
```

Run the Docker container:

```bash
docker run -p 3000:80 react-app
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Authors

 - [Bar Ohayon](https://github.com/OhayoNB)
