# Todo List API

A REST API built with Node.js, TypeScript, Express, MongoDB and Mongoose.

This project is a simple Todo List API designed as a reference implementation for building a maintainable Node.js backend following common industry practices for project structure, configuration, code quality, and maintainability.

## Tech Stack

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/docs/index.html)

## Prerequisites

Before starting, make sure you have installed:

- [Node.js](https://nodejs.org/) (v22.22.3)
- [Git](https://git-scm.com/)
- [NVM](https://github.com/nvm-sh/nvm) (optional, but recommended)

## Getting Started

### 1. Clone the repository

```sh
git clone <repository-url>
cd <repository-name>
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure environment variables

Copy the example file and complete the required values.

```sh
cp .env.example .env
```

> **Note:** Never commit the .env file to the repository. Use .env.example to document the required environment variables without exposing sensitive values.

### 4. Start the development server

```sh
npm run dev
```

## Available Scripts

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Start the development server in watch mode |
| `npm run build`        | Compile the TypeScript project             |
| `npm run start`        | Run the compiled application               |
| `npm run lint`         | Run ESLint                                 |
| `npm run format`       | Format the codebase with Prettier          |
| `npm run format:check` | Check code formatting with Prettier        |

## Project structure

The project follows a layered architecture to keep responsibilities separated and make the codebase easier to maintain and extend.

```txt
.
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── repositories/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   ├── app.ts
│   └── index.ts
├── .env.example
├── package.json

```

## Code Quality

This project enforces code quality, consistency, and maintainability using the following tools:

- **ESLint** enforces coding standards and helps identify potential code issues.
- **Prettier** ensures consistent code formatting across the codebase
- **Husky** automates Git hooks to run checks before commits
- **Commitlint** validates commit messages according to the project's Conventional Commits convention.

## Conventional Commits

This project follows the Conventional Commits specification.

Scopes are optional but recommended when the change affects a specific module or feature.

Supported commit types:

| Type       | Description                                       |
| ---------- | ------------------------------------------------- |
| `feat`     | Introduce a new feature                           |
| `fix`      | Fix a bug                                         |
| `docs`     | Documentation changes                             |
| `style`    | Code style changes (formatting, whitespace, etc.) |
| `refactor` | Refactor code without changing behavior           |
| `test`     | Add or update tests                               |
| `chore`    | Maintenance, configuration, or tooling changes    |
| `ci`       | Continuous integration or deployment changes      |
| `revert`   | Revert a previous commit                          |

Examples:

```text
feat(tasks): add task creation endpoint
fix(tasks): prevent empty task title
refactor(tasks): extract task validation logic
docs(readme): update setup instructions
style(tasks): format controller
test(tasks): add task service tests
chore: update dependencies
ci: add continuous integration workflow
revert(tasks): revert task deletion endpoint
```

## Environment Variables

All required environment variables are documented in the `.env.example` file.
