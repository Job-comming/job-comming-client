FROM node:12-alpine
RUN apk add --no-cache git make gcc g++ python2

WORKDIR /app

EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production

COPY package*.json ./

RUN yarn install --production --frozen-lockfile

COPY . .

RUN yarn build

CMD yarn start
