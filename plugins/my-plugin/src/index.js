

const a = "let me fly"
console.log("Hello World!", a)

export default {
  install: (app) => {
    alert('插件加载成功!')
    console.log(a, 999)
  }
}


export {
  a
}