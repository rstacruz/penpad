# Developer notes

## Dev setup with Docker

You can set up a development environment with [Docker]. First install _docker_ and _docker-compose_, then:

```sh
alias dr='docker-compose run --rm web'

# Install dependencies
dr yarn
docker-compose up
```

## Dev setup without docker

With Yarn:

```sh
yarn
yarn develop
```

or with npm:

```
npm install
npm run develop
```
