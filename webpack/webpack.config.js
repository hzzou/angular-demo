
module.exports = (config, options)=>{
  
  //options即是angular.json里配置它时的options
  //config 即是系统已经自定义配置好的webpack配置(与手动搭建框架的配置参数相同)
  //console.log(config.module.rules) 过滤掉要配置的
  config.module.rules = config.module.rules.filter(
    rule => rule.test.toString() !== "/\\.scss$|\\.sass$/"
  )

  config.module.rules.push({
    test: /\.scss$|\.sass$/,
    use: [
      {
        loader: 'raw-loader'
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './webpack/postcss.config.js'
          }
        }
      },
      {
        loader: 'sass-loader'
      },
    ]
  });

  return config;
}