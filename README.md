# grammar-analyzer

Takes an English sentence and parses into JSON representation of grammatical categories and relationships.

## Table of Contents

-   [Purpose](#purpose)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Configuration](#configuration)
    -   [Development](#development)
    -   [Building and Running](#building-and-running)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/' target='_blank'>Table of contents generated with markdown-toc</a></i></small>

## Purpose

The grammar-analyzer tool is a node.js project that parses sentences to find grammatical info and delivers a JSON representation of the grammatical analysis. The goal of this project is to provide the foundation for a web app that allows users to interact with and understand the some of the complexities of English grammar. This project leverages the power of the OpenAI API to analyze and return detailed grammatical structures in an easy-to-parse format.

## Getting Started

This guide will help you set up your development environment and get the backend running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

-   Node.js (v21.0.0 or later)
-   npm (v10.0.0 or later)

_[Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)_

### Installation

1. Clone the repository to your local machine:

```sh
git clone https://github.com/charliecarrot/grammar-analyzer.git
```

2. Navigate to the project directory:

```sh
cd grammar-analyzer
```

3. Install the necessary dependencies:

```sh
npm install
```

### Configuration

Before running the application, you'll need to set up your environment variables, including your OpenAI API key:

1. Create a `.env` file in the root directory of the project.
2. Add the following line, replacing `YOUR_API_KEY` with your actual OpenAI API key:

```
OPENAI_API_KEY=YOUR_API_KEY
```

### Development

To start the development server with hot reload, run:

```sh
npm run dev
```

This command uses `nodemon` to automatically restart the server upon detecting changes in the source code, facilitating rapid development.

### Building and Running

To build the project for production, run:

```sh
npm run build
```

This script compiles the TypeScript code and outputs JavaScript to the `dist/` directory.

After building, start the production server with:

```sh
npm start
```

This command serves the application from the `dist/` directory.

## Usage

To analyze a sentence, make a POST request with the sentence you wish to analyze. Here's an example using `curl`:

```sh
curl -X POST http://localhost:3000/
-H "Content-Type: application/json"
-d '{"sentence": "The quick brown fox jumps over the lazy dog."}'
```

The API will return a JSON response detailing the grammatical structure of the sentence.

## Contributing

We welcome contributions! Please feel free to fork the repository, make changes, and submit pull requests, or use it as the basis for your own project.

[Trello Board](https://trello.com/b/oNtxIq6k/charliedevs)

## Acknowledgements

This project is powered by the OpenAI API, enabling us to provide detailed analyses of English sentence structures.

Much of the grammar analysis categories, names, and format is based on the book _Grammar In Real Life_ by linguist and conlanger [Jessie Sams](https://jessiesams.com).
