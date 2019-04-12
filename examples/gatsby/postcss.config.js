module.exports = ctx => {
  return {
    plugins: [require('postcss-preset-env')()]
  }
}
