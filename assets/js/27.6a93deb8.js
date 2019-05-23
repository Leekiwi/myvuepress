(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{451:function(t,n,s){"use strict";s.r(n);var a=s(8),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 作用域")]),t._v(" "),s("p",[t._v("作用域就是代码的执行环境，全局执行环境就是全局作用域，函数的执行环境就是私有作用域，它们都是栈内存。")]),t._v(" "),s("p",[t._v("执行环境定义了变量或函数有权访问的其他数据，决定了它们各自的行为。每个执行环境都有一个与之关联的变量对象，环境中定义的所有变量和函数都保存在这个对象中。虽然我们编写的代码无法访问这个对象，但解析器在处理数据时会在后台使用它。")]),t._v(" "),s("p",[t._v("全局执行环境是最外围的一个执行环境。根据 ECMAScript 实现所在的宿主环境不同，表示的执行环境的对象也不一样。")]),t._v(" "),s("ul",[s("li",[t._v("在 Web 浏览器中，全局执行环境被认为是 "),s("code",[t._v("window")]),t._v(" 对象，因此"),s("strong",[t._v("所有全局变量和函数都是作为 "),s("code",[t._v("window")]),t._v(" 对象的属性和方法创建的")]),t._v("。")]),t._v(" "),s("li",[t._v("在 NODE 环境中，全局执行环境是 "),s("code",[t._v("global")]),t._v(" 对象。")])]),t._v(" "),s("p",[t._v("某个执行环境中所有的代码执行完毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁（全局执行环境直到应用程序退出时，如关闭浏览器或网页，才会被销毁）")]),t._v(" "),s("p",[t._v("每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。而在函数执行之后，栈将被环境弹出，把控制权返回给之前的执行环境。ECMAScript 程序中的执行流正是由这个方便的机制控制着。")]),t._v(" "),s("p",[t._v("概括来说：\n作用域就是代码执行开辟栈内存")]),t._v(" "),s("ul",[s("li",[t._v("私有作用域  ----\x3e 函数执行都会形成一个私有作用域")]),t._v(" "),s("li",[t._v("全局作用域  ----\x3e 页面一打开就会形成一个全局的作用域")]),t._v(" "),s("li",[t._v("私有变量   ----\x3e 在私有作用域里边形成的变量 (通过 var 声明； 形参)")]),t._v(" "),s("li",[t._v("全局变量   ----\x3e 在全局作用域形成的变量（var a = 12 或者函数内没有声明，直接赋值的变量）")])]),t._v(" "),s("h2",{attrs:{id:"_2-作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-作用域链","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 作用域链")]),t._v(" "),s("p",[t._v("当代码在一个环境中执行时，会创建变量对象的一个作用域链（作用域形成的链条）")]),t._v(" "),s("ul",[s("li",[t._v("作用域链的前端，始终都是当前执行的代码所在环境的变量对象")]),t._v(" "),s("li",[t._v("作用域链中的下一个对象来自于外部环境，而在下一个变量对象则来自下一个外部环境，一直到全局执行环境")]),t._v(" "),s("li",[t._v("全局执行环境的变量对象始终都是作用域链上的最后一个对象")])]),t._v(" "),s("p",[s("strong",[t._v("内部环境可以通过作用域链访问所有外部环境，但外部环境不能访问内部环境的任何变量和函数。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> undefined")]),t._v("\n")])])]),s("p",[t._v("如函数的执行，形成一个私有作用域，形参和当前私有作用域中声明的变量都是私有变量，保存在内部的一个变量对象中，其下一个外部环境可能是函数，也就包含了函数的内部变量对象，直到全局作用域。")]),t._v(" "),s("p",[t._v("当在内部函数中，需要访问一个变量的时候，首先会访问函数本身的变量对象，是否有这个变量，如果没有，那么会继续沿作用域链往上查找，直到全局作用域。如果在某个变量对象中找到则使用该变量对象中的变量值。")]),t._v(" "),s("p",[t._v("由于变量的查找是沿着作用域链来实现的，所以也称作用域链为"),s("strong",[t._v("变量查找的机制")]),t._v("。")]),t._v(" "),s("p",[t._v("这个机制也说明了"),s("strong",[t._v("访问局部变量要比访问全局变量更快")]),t._v("，因为中间的查找过程更短。但是 JavaScript 引擎在优化标识符查询方面做得很好，因此这个差别可以忽略不计。")]),t._v(" "),s("Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[],!1,null,null,null);n.default=e.exports}}]);