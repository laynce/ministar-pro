### ministar 插件开发

## 安装

```js
  npm install mini-star
```

### 创建插件
```js
  // 通过cli快速创建一个新的插件
  npx ministar createPlugin
```

### 编译插件
```js
  // 插件开发完成后编译插件
  npx ministar createPlugin [pluginName]  or npm run compile
```

### 加载插件(方式不止这一种)

```js
  loadPluginList([
    {
      name: 'my-plugin',
      url: '/target/plugins/my-plugin/index.js', // NOTICE: 请确保该地址可以被访问
    },
  ]) // return Promise
```

### 开发调试
```js
  npm run serve
```

### 打包项目
```js
  npm run build
```

### 支持打包库，发布npm包

```js
  npm run lib

```

### 项目目录介绍

|  目录名称  | 描述               |
|   ---      | ---               |
|   dist     | 打包出口目录       |
|   lib      |  打包库存放目录    |
|   target   |  插件编译存放目录  |

### refer
[ministar官网](https://ministar.moonrailgun.com/zh-Hans/docs/tutorial/intro)