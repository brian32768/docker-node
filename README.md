# docker-node

This is a microservice
to test deployment scenarios
with the nginx reverse proxy.

Deployment, choose one

    docker-compose up -d

or

    docker stack deploy -c docker-compose.yml node

Currently it just does the "Hello, world" thing on port 5001.
