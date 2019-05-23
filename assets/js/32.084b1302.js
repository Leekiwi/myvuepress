(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{448:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/02/20/5c6cc276c6ef5.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"堆栈内存的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆栈内存的作用","aria-hidden":"true"}},[t._v("#")]),t._v(" 堆栈内存的作用")]),t._v(" "),a("p",[t._v("JS 引擎主要由两部分组成:")]),t._v(" "),a("ul",[a("li",[t._v("内存堆：这是内存分配发生的地方")]),t._v(" "),a("li",[t._v("调用栈：这是你的代码执行时的地方")])]),t._v(" "),a("p",[t._v("JS 中的内存分为堆内存和栈内存，所有堆栈内存的分配处理，浏览器（引擎）会自行在内部执行")]),t._v(" "),a("p",[t._v("栈内存：")]),t._v(" "),a("ul",[a("li",[t._v("提供一个供 JS 代码自上而下执行的环境（作用域，代码都是在栈内存中执行的）")]),t._v(" "),a("li",[t._v("由于基本类型比较简单，它们都是直接在栈内存中开辟一个位置，直接把值存储进去的")])]),t._v(" "),a("p",[t._v("堆内存：引用值对应的空间\n存储引用类型的（对象：键值对，函数：代码字符串）")]),t._v(" "),a("h3",{attrs:{id:"堆内存的释放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆内存的释放","aria-hidden":"true"}},[t._v("#")]),t._v(" 堆内存的释放")]),t._v(" "),a("p",[t._v("让所有引用堆内存空间地址的变量赋值为 "),a("code",[t._v("null")]),t._v(" 即可，当堆内存没有被任何的变量或者其他东西引用时，就会在浏览器执行垃圾回收的时候，被销毁掉。")]),t._v(" "),a("p",[t._v("堆内存释放后，里面存储的值也就会被释放掉。")]),t._v(" "),a("h2",{attrs:{id:"调用栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用栈","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用栈")]),t._v(" "),a("p",[t._v("JavaScript 是一门单线程的语言，这意味着它"),a("strong",[t._v("只有一个调用栈")]),t._v("，因此，它同一时间只能做一件事。")]),t._v(" "),a("p",[t._v("调用栈是一种数据结构，是"),a("strong",[t._v("解释器（引擎）追踪函数执行流的一种机制")]),t._v("，记录现在执行到程序的哪个位置。每当我们运行到一个函数，它就会将其放置到栈顶。当从这个函数返回的时候，就会将这个函数从栈顶弹出，这就是调用栈做的事情。")]),t._v(" "),a("ul",[a("li",[t._v("每调用一个函数，解释器就会把该函数添加进调用栈并开始执行。")]),t._v(" "),a("li",[t._v("正在调用栈中执行的函数还调用了其它函数，那么新函数也将会被添加进调用栈，一旦这个函数被调用，便会立即执行。")]),t._v(" "),a("li",[t._v("当前函数执行完毕后，解释器将其清出调用栈，继续执行当前执行环境下的剩余的代码。")]),t._v(" "),a("li",[t._v("当分配的调用栈空间被占满时，会引发“堆栈溢出”。")])]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1] Some codes here")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [2] Some codes here")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 `greeting` 函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [3] Some codes here")]),t._v("\n")])])]),a("p",[t._v("上面的代码执行步骤如下：")]),t._v(" "),a("ol",[a("li",[t._v("忽略前面所有函数声明（函数声明会保存在堆内存中），直到 greeting() 函数被调用")]),t._v(" "),a("li",[t._v("把 greeting() 添加进调用栈列表")]),t._v(" "),a("li",[t._v("执行 greeting() 函数体中的所有代码")])]),t._v(" "),a("blockquote",[a("p",[t._v("此时调用栈列表:")]),t._v(" "),a("ul",[a("li",[t._v("greeting")])])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("代码执行到 sayHi() 时，该函数被调用")]),t._v(" "),a("li",[t._v("把 sayHi() 添加进调用栈列表")])]),t._v(" "),a("blockquote",[a("p",[t._v("此时调用栈列表:")]),t._v(" "),a("ul",[a("li",[t._v("sayHi")]),t._v(" "),a("li",[t._v("greeting")])])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("执行 sayHi() 函数体中的代码，直到全部执行完毕")]),t._v(" "),a("li",[t._v("继续执行 greeting() 函数体中 sayHi() 后面的代码")]),t._v(" "),a("li",[t._v("弹出调用栈列表中的 sayHi() 函数")])]),t._v(" "),a("blockquote",[a("p",[t._v("调用栈列表:")]),t._v(" "),a("ul",[a("li",[t._v("greeting")])])]),t._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[t._v("当 greeting() 函数体中的代码全部执行完毕，返回到调用 greeting() 的代码行，继续执行剩余JS代码。")]),t._v(" "),a("li",[t._v("弹出调用栈列表中的 greeting() 函数")])]),t._v(" "),a("p",[t._v("一开始，我们得到一个空空如也的调用栈。随后，每当有函数被调用都会自动地添加进调用栈，执行完函数体中的代码后，调用栈又会自动地移除这个函数。最后，我们又得到了一个空空如也的调用栈。")]),t._v(" "),a("h3",{attrs:{id:"堆栈溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆栈溢出","aria-hidden":"true"}},[t._v("#")]),t._v(" 堆栈溢出")]),t._v(" "),a("p",[t._v('"'),a("strong",[t._v("堆栈溢出")]),t._v('"，当你达到调用栈最大的大小的时候就会发生这种情况。')]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当我们的引擎开始执行这段代码的时候，它从 foo 函数开始。然后这是个递归的函数，并且在没有任何的终止条件的情况下开始调用自己。因此，每执行一步，就会把这个相同的函数一次又一次地添加到调用堆栈中。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/02/20/5c6cc74903d40.jpg",alt:"enter description here"}})]),t._v(" "),a("p",[t._v("然后，在某一时刻，调用栈中的函数调用的数量超过了调用栈的实际大小，浏览器决定干掉它，抛出一个错误：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/02/20/5c6cc77d64d26.jpg",alt:"enter description here"}})]),t._v(" "),a("h3",{attrs:{id:"栈内存的释放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈内存的释放","aria-hidden":"true"}},[t._v("#")]),t._v(" 栈内存的释放")]),t._v(" "),a("p",[t._v("全局作用域会在页面关闭或者刷新的时候释放。（栈内存释放后，存储在栈内存中的值也都会销毁。\n）")]),t._v(" "),a("p",[t._v("私有作用域：一般情况下，当函数执行完成，所形成的私有作用域（栈内存）都会自动释放掉，但是也有特殊的情况。")]),t._v(" "),a("p",[t._v("函数执行完成，当前形成的栈内存中，某些内容被栈内存意外的变量一直占用，此时栈内存不能释放，栈内存中存储的基本值也不会被释放，一直保存下来。最典型的就是闭包。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> i = 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>7, i = 2 n =3，执行 n + (++i) => 3 + 3 = 6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>12, i = 5 n = 6，执行 n + (++i) => 6 + 6 = 12")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>16, i = 7 n = 8，执行 n + (++i) => 8 + 8 = 16")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>8, i = 3 n = 4，执行 n + (++i) => 4 + 4 = 8")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Call_stack",target:"_blank",rel:"noopener noreferrer"}},[t._v("调用栈"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5a05b4576fb9a04519690d42",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 如何工作：对引擎、运行时、调用堆栈的概述"),a("OutboundLink")],1)])]),t._v(" "),a("Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[],!1,null,null,null);s.default=e.exports}}]);