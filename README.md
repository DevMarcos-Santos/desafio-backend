


## Project setup

```bash
$ npm install

```

## Apenas se utilizar Banco Local (Sem Docker)


```bash
$ npx prisma init

```

```bash

$ npx prisma migrate dev --name init

```


## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

## Run tests

```bash
# unit tests
$ npm run test


## Docker

$ docker-compose up --build

## Swagger

http://localhost:3000/api