const { override, fixBabelImports, addLessLoader } = require('customize-cra');


 module.exports = override(
     //使用import的babel插件，针对antd进行按需
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
    //  style: 'css',
    style: true,
   }),
   //添加less的loader配置
   addLessLoader({
       javascriptEnabled: true,
       modifyVars: { '@primary-color': '#f40' },
     }),

 );