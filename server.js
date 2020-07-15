/* eslint-disable @typescript-eslint/no-var-requires */

const { createServer } = require('http')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 80
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
  conf: {
    publicRuntimeConfig: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
})
const handler = app.getRequestHandler()

app.prepare().then(() => {
  createServer(handler).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
