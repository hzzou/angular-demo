//node语法
module.exports = {
  plugins:[
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      stage:3
    }),
    // require('postcss-pxtorem')({
    //   rootValue:75,
    //   propList:['*','!font*'],
    //   minPixelValue:2
    // }),
    require('postcss-px-to-viewport')({
      unitToConvert:'px', //要转换的单位,
      viewportWidth:750, //视口宽度(设计稿)
      viewportHeight:1334, //视口高度(设计稿)
      propList: ['*',],//'!font*'
      viewportUnit:'vw', //转换之后的单位
      minPixelValue:2,
      mediaQuery:true, //允许在媒体查询中进行px转换
      unitPrecision: 3, //允许vw单位转换之后保存的小数位数
      landscape: true, // 允许横屏模式,如果设置为flase,手机横屏的时候，布局会很难看
      landscapeUnit: 'vw', //允许横屏时的单位
      fontViewportUnit: 'vmin', //字体要转换成的单位,始终选择vmin,避免因旋转的影响
      landscapeWidth: 1334, //设置横屏模式的width
      selectorBlackList: [/ant*/] // 不转换为vw的
    })
  ]
}