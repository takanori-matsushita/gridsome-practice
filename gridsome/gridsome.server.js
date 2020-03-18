const nodeExternals = require('webpack-node-externals');

module.exports = function (api) {
  // 以下を追加
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/, /\.css$/]
        })
      ])
    }
  })

  // [省略]
}