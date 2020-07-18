/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const withPlugins = require('next-compose-plugins')
const Dotenv = require('dotenv-webpack')

module.exports = withPlugins([
  {
    webpack: (config) => {
      config.plugins = config.plugins || []
      config.plugins = [...config.plugins, new Dotenv()]
      return config
    },
  },
])

// "dev": "DOTENV_CONFIG_PATH=./.env node -r dotenv/config $(which next) -p 3000",
