FROM --platform=linux/amd64 node:12-alpine as builder

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

FROM --platform=linux/amd64 node:12-alpine

COPY --from=0 /usr/app /app

WORKDIR /app

EXPOSE 3000

CMD ["npm", "run", "build"]