FROM node:16-alpine3.15

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install @vue/cli@4.5.13 -g

COPY ./sample-project/package*.json /app

COPY ./sample-project /app

RUN npm install

RUN npm run build

CMD ["npm", "run", "serve"]

EXPOSE 8080
