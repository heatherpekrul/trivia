# Trivia

Node / Express / Vue / MySQL

## Local Development

### Install dependencies:

```
npm install
```

Start server:
```
npm run start:server
```

### Environment Variables

A `.env` file in the root project directory will include necessary environment variables for local development.

```
touch .env
```

Example file contents (you will need to retrieve the unspecified values from the repository owner):

```
SESSION_SECRET=
MYSQL_DB=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_HOST=
MYSQL_PORT=3306
NODE_ENV=development
APP_PORT=3000
HMR_ENABLED=true
LOG_LEVEL=INFO
```

## Linting

ESLint

```
npm run lint
```

ESLint with Autofix Flag
```
npm run lint:fix
```