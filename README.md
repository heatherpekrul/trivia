# Trivia

Node / Express / Vue / MySQL

## Local Development

### Install dependencies

```
npm install
```

### NVM

Install NVM. It's easiest with Homebrew:

```
brew install nvm
```

Then install and use the version of Node that this application uses:

```
nvm install 12.22.8
nvm use 12.22.8
```

### Environment variables

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

### Start server
```
npm run watch
```

## Linting

### ESLint

```
npm run lint
```

ESLint with autofix flag

```
npm run lint:fix
```

### Stylelint

```
npm run stylelint
```

Stylelint with autofix flag

```
npm run stylelint:fix
```

### Testing

#### Run unit tests
```
npm run test:unit
```

#### Clear test cache
```
npm run test:clear
```

## Production Deployment

```
npm install --production
touch /tmp/restart.txt
```