FROM node:12

# Copy everything in.
COPY . /app/

RUN chown -R node /app

# Install!
USER 'node'

WORKDIR '/app'

RUN npm i -s

RUN npm i --dev
