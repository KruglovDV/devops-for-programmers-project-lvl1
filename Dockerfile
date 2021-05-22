FROM node:14.6.0

WORKDIR /app

RUN npm install --global @nodosjs/cli@0.0.55

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

CMD ["nodos", "server", "-h", "0.0.0.0"]