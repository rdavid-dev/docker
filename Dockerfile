FROM node:16-alpine3.15

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g npm@8.4.0

COPY ./app/package*.json /app

COPY ./app /app

RUN npm install

RUN npm run build

CMD ["npm", "run", "dev"]

EXPOSE 8080