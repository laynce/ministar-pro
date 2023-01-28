// 把插件打包成库的入口文件

import { loadPluginList } from 'mini-star';



export default function initPlugin(config) {
  return loadPluginList(config)
}