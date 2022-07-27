# Dashr REST API 🇳🇬

## Description

A Fintech API for Dashr.

## Table of Contents

- [Features](#features)
- [Quick run](#quick-run)
- [Comfortable development](#comfortable-development)
- [Links](#links)
- [Automatic update of dependencies](#automatic-update-of-dependencies)
- [Database utils](#database-utils)
- [Tests](#tests)

## Features

- [x] Database ([typeorm](https://www.npmjs.com/package/typeorm)).
- [x] CI (Github Actions).
- [x] Swagger.
- [x] E2E and units tests.
- [x] Docker.




## Quick run

Run the application with docker
```bash

```

## Comfortable development

```bash
git clone https://github.com/r-scheele/dashr-api.git dashr
cd dashr
```

### - Install dependencies

```bash
npm install
```



### - Environment Configuration

Integrated Configuration Module so you can just inject `ConfigService`
and read all environment variables from `.env` files.

```bash
cp .example.env .env

```

### - Run the application in development mode

```bash
npm run start:dev
```


## Links

- Swagger: http://localhost:3000/docs
<!-- - Adminer (client for DB): http://localhost:8080
- Maildev: http://localhost:1080 -->



### Install Act for local testing of the github actions

Make sure you have docker installed for act to work.

```bash
npm install -g act
```

Or install using homebrew
```bash
brew install act
```

Test the github actions locally
```bash
$ act
```
For M1 users, 
```bash
$ act --container-architecture linux/amd64
```
