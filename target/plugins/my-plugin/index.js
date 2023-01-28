definePlugin('@plugins/my-plugin', ['exports'], (function (exports) { 'use strict';

  const a = "let me fly";
  console.log("Hello World!", a);
  var index = {
    install: (app) => {
      alert("\u63D2\u4EF6\u52A0\u8F7D\u6210\u529F!");
      console.log(a, 999);
    }
  };

  exports.a = a;
  exports["default"] = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
