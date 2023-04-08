# Logity Dispatch website

Written on node.js & Express.js

### Building for Production

```
docker build . -t vanyaaa/logity-dispatch:nodejs-app

docker run -d \
    -p 8083:8080 \
    --env-file .env \
    --network logity-dispatch_default \
    vanyaaa/logity-dispatch:nodejs-app

```
