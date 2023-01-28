import initPlugin from './lib/my-lib.mjs'
initPlugin([
    {
      name: 'my-plugin',
      url: '/target/plugins/my-plugin/index.js', // NOTICE: 请确保该地址可以被访问
    },
]).then((pt) => {
    pt[0].default.install()
  console.log('Plugin Load Success', pt); // pt为插件导出的内容
});


