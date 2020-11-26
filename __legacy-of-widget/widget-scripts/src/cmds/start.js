const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackDevServer = require('webpack-dev-server')
const chalk = require('chalk')
const openBrowser = require('../utils/openBrowser')
const defaultConfig = require('../config/webpack.dev')
const { cwd } = require('../cons')
const getWebpackConfig = require('../utils/getWebpackConfig')
const getVersion = require('../utils/getVersion')
const getId = require('../utils/getId')

module.exports = (args) => {
  const mergedConfig = getWebpackConfig()(
    defaultConfig,
    {
      mode: defaultConfig.mode,
      id: getId(),
      version: getVersion(),
    },
    merge
  )

  // Cmd argument first
  const port = args.port || mergedConfig.devServer.port
  const host = args.host || mergedConfig.devServer.host

  const config = merge(
    {
      // Typescript will not hot reload
      entry: [
        `webpack-dev-server/client?http://0.0.0.0:${port}`,
        'webpack/hot/only-dev-server',
        path.join(cwd, './demo'),
      ],
    },
    mergedConfig,
    {
      // Cmd argument first
      devServer: {
        port,
        host,
      },
    }
  )

  const compiler = webpack(config)
  const server = new webpackDevServer(compiler, config.devServer)

  server.listen(port, host, () => {
    // eslint-disable-next-line no-console
    console.log(chalk.cyan(`Starting the development server...\n`))
    // Open browser after server had been started
    if (config.devServer.https) {
      openBrowser(`https://${host}:${port}`)
    } else {
      openBrowser(`http://${host}:${port}`)
    }
  })
}