module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        publish: ['github'],
        productName: 'Arcfire',
        appId: 'com.arcfire.app'
      },
    },
  }
}