# API Points

Rails Backend API at `https://localhost:3000`
React Front at `https://localhost:4000`

# Startup Instructions

## To run the project

```shell
docker-compose up
```

## For starting the project for the first time on local
```shell
# Build the images
docker-compose build

# Then stop the command and run migrations
docker­-compose run api bundle install
docker­-compose run api yarn install
docker­-compose run api rake db:prepare
docker­-compose run api rake db:seed

# Then you can run the servers
docker-compose up
```
