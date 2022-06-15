//const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   lintOnSave: false,
//   transpileDependencies: true,
//   devServer: {
//     proxy:'http://localhost:9000'
//   }
// })
module.exports = {
  lintOnSave: false,
  //transpileDependencies: true,
  devServer: {
    proxy:'http://localhost:9000'
  }
}
