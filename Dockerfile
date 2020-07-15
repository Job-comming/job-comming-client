FROM node:12-alpine
RUN apk add --no-cache git make gcc g++ python3

EXPOSE 80

ENV PORT=3000
ENV NODE_ENV=production

WORKDIR /app
COPY . .
RUN yarn install --production --frozen-lockfile
CMD yarn start
