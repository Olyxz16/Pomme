FROM node:alpine3.17

WORKDIR /app

COPY . ./

RUN npm install

COPY ./src ./src
COPY ./static ./static

RUN npm run build

EXPOSE 4173

ENV HOST=0.0.0.0

CMD [ "npm", "run", "preview", "--", "--host" ]