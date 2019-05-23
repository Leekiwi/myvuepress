/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2016/12/html语义化/index.html",
    "revision": "ef00b224b9219407c604d7761bfb0b93"
  },
  {
    "url": "2017/07/gulp-自动化构建工具/index.html",
    "revision": "9a91f970a614bb876ef74f8146972a42"
  },
  {
    "url": "2017/07/markdown语法/index.html",
    "revision": "978bfc82605803c95be0da43e5e5f0fc"
  },
  {
    "url": "2017/08/初学者资源推荐/index.html",
    "revision": "38a0ba8dfe6f156ab37b2b7d80ef51f2"
  },
  {
    "url": "2017/08/去除inline-block元素间间距的n种方法/index.html",
    "revision": "636947715e27fb0daf850af8079e8b4a"
  },
  {
    "url": "2017/09/githubpages-hexo-搭建个人博客/index.html",
    "revision": "e546e015d5e4cbd92811c617d96122b8"
  },
  {
    "url": "2017/09/hello-world/index.html",
    "revision": "ce7b5d1c8ef4078292568730db1bb06a"
  },
  {
    "url": "2017/09/hexo-next主题高级配置/index.html",
    "revision": "3f30e77a350bb8a1231466f8443f95c5"
  },
  {
    "url": "2017/09/hexo-yilia主题-githubpages博客添加友言评论功能/index.html",
    "revision": "91a5864a3d9f45ec5d63e30c38be2980"
  },
  {
    "url": "2017/09/javascript-面向对象编程/index.html",
    "revision": "ad14c874a6de0d03a9c67eaaf08b18eb"
  },
  {
    "url": "2017/09/sublimetext-实用插件介绍/index.html",
    "revision": "68e359b4bea3c2be86c733f0510f2f8a"
  },
  {
    "url": "2017/10/canvas画布/index.html",
    "revision": "866669b20d4a18891dd6a91624bb58da"
  },
  {
    "url": "2017/10/css实现元素的居中显示/index.html",
    "revision": "62417b411a9524ce26d6491311f5722a"
  },
  {
    "url": "2017/10/css渐变的简单使用/index.html",
    "revision": "cdd7d03d62725055a2ff2494e8d93e4e"
  },
  {
    "url": "2017/10/sass的使用/index.html",
    "revision": "2317e70d4d90c93a15b81394c6dfbc58"
  },
  {
    "url": "2017/10/transform-引起的-z-index-失效‘/index.html",
    "revision": "b2edf63dd2895f5053c2c4da2a67333c"
  },
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "2c048c561b4b5576b336732784cad3f3"
  },
  {
    "url": "2017/10/关于flex布局/index.html",
    "revision": "567a1efe4d968ba3d48911f2c32bbc35"
  },
  {
    "url": "2017/10/关于inline-block问题/index.html",
    "revision": "307a7e3b6b25cada0ebed1cd3be70c8e"
  },
  {
    "url": "2017/10/浅谈响应式/index.html",
    "revision": "c7b77e777cac9f0c98619c4a2e66bbc1"
  },
  {
    "url": "2017/10/深入理解层叠上下文和层叠顺序/index.html",
    "revision": "4b90ffd57967b3028fa556f6bc897e79"
  },
  {
    "url": "2017/10/给不了解前端的同学讲前端/index.html",
    "revision": "45cdc931e1d5c75ab56c478e8d1f3ddf"
  },
  {
    "url": "2017/10/编码规范-（一）html/index.html",
    "revision": "0d03d57bb6da99e66f2643e7daaa85a6"
  },
  {
    "url": "2017/10/编码规范（二）css/index.html",
    "revision": "369566270509fc880f2aa632751684e6"
  },
  {
    "url": "2017/10/说说css学习中的瓶颈/index.html",
    "revision": "7aa7dc3e1d1c7d6abd2558f904b8e024"
  },
  {
    "url": "2017/11/canvas画五角星/index.html",
    "revision": "dbf8fdfcdb9c28b9134f1486523a52ae"
  },
  {
    "url": "2017/11/canvas画时钟/index.html",
    "revision": "ccce83ff63ba132f1a966a5de6658edd"
  },
  {
    "url": "2017/11/js类型转换总结/index.html",
    "revision": "55e9d946f5bb85716cd5963ffeb9b71f"
  },
  {
    "url": "2017/12/eslint-（一）简介与安装/index.html",
    "revision": "3fdfdf55b3bb894cf3f55d0ed5e20f8d"
  },
  {
    "url": "2017/12/eslint-（二）配置文件/index.html",
    "revision": "59328aa0a9c0160d1613f2a1e21fa8b2"
  },
  {
    "url": "2017/12/markdown添加latex数学公式/index.html",
    "revision": "08b36a36c9f3b4d1afe1dfaa16fbee24"
  },
  {
    "url": "2017/12/前端学习历程/index.html",
    "revision": "de874e7982a903205d8b3278daab3db8"
  },
  {
    "url": "2018/06/荔园的浪漫/index.html",
    "revision": "a754e09956eee8aa48e78dff8f454179"
  },
  {
    "url": "2018/07/js变量的创建机制/index.html",
    "revision": "a540d102a58470a9f711fc61859fe3c3"
  },
  {
    "url": "2018/08/dom的映射机制/index.html",
    "revision": "acf8a4a017f22224afa0791dfea1eb5c"
  },
  {
    "url": "2018/08/js作用域与作用域链/index.html",
    "revision": "9cc6852a4d76c3a5041b780d3951eafa"
  },
  {
    "url": "2018/08/js变量提升/index.html",
    "revision": "41bfd06b41c3e75b8354b44b36f8c874"
  },
  {
    "url": "2018/08/js堆栈内存/index.html",
    "revision": "81b8a8dc0b00e8683f822f43a3a34f24"
  },
  {
    "url": "2018/08/记第一次博客改版更新/index.html",
    "revision": "88f7547fd5eb4a7b0c6578053f370bb0"
  },
  {
    "url": "2018/09/js函数/index.html",
    "revision": "6d3d8f9217e3eaea9adcbe25913de43d"
  },
  {
    "url": "2018/09/js函数的执行机制/index.html",
    "revision": "1d2050ef497b0e34752806eda2340242"
  },
  {
    "url": "2018/10/js运算符的优先级/index.html",
    "revision": "7020a50dae1d99cbcad650845ac2737b"
  },
  {
    "url": "2018/12/前端工程师的未来在哪里/index.html",
    "revision": "c85fbb5cd12184353751f545b8f09fc8"
  },
  {
    "url": "2019/02/chrome插件英雄榜/index.html",
    "revision": "a184042a12c637bc92e888439dd28730"
  },
  {
    "url": "2019/02/js中扯不完的分号问题/index.html",
    "revision": "dee0148c3b7604412a28cc6ffed01d04"
  },
  {
    "url": "2019/02/mvc-mvp-mvvm-图示（转）/index.html",
    "revision": "680df7767b26d393a62c0acbe45d991b"
  },
  {
    "url": "2019/02/vscode插件之polaroid/index.html",
    "revision": "0301029d78c1b47b3e58dddbf79903ea"
  },
  {
    "url": "2019/02/vuepress入门/index.html",
    "revision": "fcadca61db368879c6a1087218e7a259"
  },
  {
    "url": "2019/02/前端学习知识图谱/index.html",
    "revision": "bf1c66e70b21ea620ce84b1329ad7f7b"
  },
  {
    "url": "2019/02/浅谈fc/index.html",
    "revision": "ac947d43c0e9a9afce61a5735c938b8e"
  },
  {
    "url": "2019/03/机械键盘介绍/index.html",
    "revision": "c22cdf2f63bee8ed0fba416d59e3e69a"
  },
  {
    "url": "2019/04/观察者模式与发布订阅模式的区别/index.html",
    "revision": "9c2574b49f0c9677b4220b0eb748d578"
  },
  {
    "url": "2019/05/grid-网格布局（转）/index.html",
    "revision": "d9d3b09a656b60ef0c4e267cd9cf59c7"
  },
  {
    "url": "404.html",
    "revision": "dc447831ba4b1fc349f5ff6ef9e254da"
  },
  {
    "url": "about/index.html",
    "revision": "a073f5b5987f44e973447f2e7ae61067"
  },
  {
    "url": "assets/css/0.styles.5c6133b3.css",
    "revision": "d67ec59f0641c15cfd039e8167a246df"
  },
  {
    "url": "assets/img/iconfont.cdd1cd30.svg",
    "revision": "cdd1cd303d5828d17626ebbe95966b50"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0e5003ce.js",
    "revision": "0568b355a6830393ea2386dafac53ab4"
  },
  {
    "url": "assets/js/10.3b6ad085.js",
    "revision": "101221931af96ff091075aa2bd856895"
  },
  {
    "url": "assets/js/11.8938d65a.js",
    "revision": "b8d81bdc360f965cd95b084e0e49d928"
  },
  {
    "url": "assets/js/12.4953dd20.js",
    "revision": "adcfe11bbf19a4abe1a761b890d85ea6"
  },
  {
    "url": "assets/js/13.8e4d97db.js",
    "revision": "c2075d6a99b55b3891fcfb84e53f15f3"
  },
  {
    "url": "assets/js/14.498b4800.js",
    "revision": "fd200ce0ce98b68cc54adffe780624f2"
  },
  {
    "url": "assets/js/15.7ca692b0.js",
    "revision": "78ed17d31a3945acf2f2aff0d0409ff4"
  },
  {
    "url": "assets/js/16.5cd5d8b0.js",
    "revision": "3010573dbdff8411aa7a3cbb6baa0c98"
  },
  {
    "url": "assets/js/17.4106de3a.js",
    "revision": "b29ac08a78dd311f35ce4a63cf21fba1"
  },
  {
    "url": "assets/js/18.fe9c8e4b.js",
    "revision": "65563a51b09cde4edc9503de237b897d"
  },
  {
    "url": "assets/js/19.e0d2b2b7.js",
    "revision": "00ef86739b5eb2d44bfa67ee11330875"
  },
  {
    "url": "assets/js/2.3fc66548.js",
    "revision": "cee0644b4f1b92d424ca9d60bcb5bf06"
  },
  {
    "url": "assets/js/20.1b3a7a52.js",
    "revision": "4dab346e3d4a30c80a119c0c5e90abf8"
  },
  {
    "url": "assets/js/21.5b808319.js",
    "revision": "55fc8a69c52ea51e9ccc627495f32fdc"
  },
  {
    "url": "assets/js/22.425d8b3d.js",
    "revision": "da4ebb63f83aeb8cc17f89ca9ac15851"
  },
  {
    "url": "assets/js/23.ebc5ec97.js",
    "revision": "22401ba55f758c6798fc1ba68926abdd"
  },
  {
    "url": "assets/js/24.142c91f9.js",
    "revision": "d9f256f9400fab3bb665faf789d46af7"
  },
  {
    "url": "assets/js/25.5fb60fb1.js",
    "revision": "eb4b271b1bef7dadb20fffb0a1a682ec"
  },
  {
    "url": "assets/js/26.8cfa3115.js",
    "revision": "ae159dd43965d1a939cd63762d168c53"
  },
  {
    "url": "assets/js/27.6a93deb8.js",
    "revision": "61b3c87f698b7a7ea01201f3283194e8"
  },
  {
    "url": "assets/js/28.3d4deb89.js",
    "revision": "e19f9088afa319280a0c32c3a7cfcef5"
  },
  {
    "url": "assets/js/29.69305363.js",
    "revision": "756fea6947bb27a2bd9f9e33abc68b79"
  },
  {
    "url": "assets/js/30.2fba5a79.js",
    "revision": "de4eddfaefef97ee1c2eb84988384bdb"
  },
  {
    "url": "assets/js/31.ab24b401.js",
    "revision": "383fa5306dbddba21fa04300dc408e50"
  },
  {
    "url": "assets/js/32.084b1302.js",
    "revision": "067310acc999f36cb658c720cded5621"
  },
  {
    "url": "assets/js/33.14351902.js",
    "revision": "be35e0edf4db63160a4024f6f5bcb163"
  },
  {
    "url": "assets/js/34.d110ed29.js",
    "revision": "22f499ccee9a538e81e6ac76f1e206d3"
  },
  {
    "url": "assets/js/35.c39524af.js",
    "revision": "31945d6c51b07c6f05378485391cfd3e"
  },
  {
    "url": "assets/js/36.76b50a8f.js",
    "revision": "dedecfc2a79b6416b0998ebb18326819"
  },
  {
    "url": "assets/js/37.8cb8e4b9.js",
    "revision": "43fa39f1db43ecb38c761680eb03c06a"
  },
  {
    "url": "assets/js/38.a4c51d95.js",
    "revision": "756b90f130452ace176ddce1d2d914dd"
  },
  {
    "url": "assets/js/39.d8485dec.js",
    "revision": "c6d2c28a6f561c87afc9c351de84ae12"
  },
  {
    "url": "assets/js/4.9b7261ec.js",
    "revision": "52ae24d0dca4beac3c45cbb41edc2c1a"
  },
  {
    "url": "assets/js/40.b58d3d83.js",
    "revision": "1730844fbe6d77b33d364721e0361134"
  },
  {
    "url": "assets/js/41.30d814ab.js",
    "revision": "840839b7f1bb7bd5350e936a3c5df871"
  },
  {
    "url": "assets/js/42.2f2b79a1.js",
    "revision": "50f62f6cbb6b05dd6db4229c1524875c"
  },
  {
    "url": "assets/js/43.11c7732a.js",
    "revision": "31fff37512311dd22512a995810bdfe7"
  },
  {
    "url": "assets/js/44.72b3f1df.js",
    "revision": "56d7f16b6b230aa874b408e0a822294b"
  },
  {
    "url": "assets/js/45.1f90d80a.js",
    "revision": "e2068370e85e36be4ce09a55e6f7dd96"
  },
  {
    "url": "assets/js/46.15435561.js",
    "revision": "04ed041dee1b3bea2a72df7606f3469e"
  },
  {
    "url": "assets/js/47.0176aebc.js",
    "revision": "fd4e1334e955f8d54ea20562489fc062"
  },
  {
    "url": "assets/js/48.a51fc08f.js",
    "revision": "b17b97decbbaf252adecfcda7824d2cc"
  },
  {
    "url": "assets/js/49.dd4f194a.js",
    "revision": "591a414a4c6b9288c6028b1dde831172"
  },
  {
    "url": "assets/js/5.9c07ae29.js",
    "revision": "b3d6759601eca0fbc32077f6498922ad"
  },
  {
    "url": "assets/js/50.83f233a2.js",
    "revision": "1773c189c9b4ea08873e7a4d5ad072cd"
  },
  {
    "url": "assets/js/51.69cccda4.js",
    "revision": "33c94d9a17cd66a821647a6eaa79142a"
  },
  {
    "url": "assets/js/52.44725c9b.js",
    "revision": "be2d2d255a7ed82c2193d32b727f056a"
  },
  {
    "url": "assets/js/53.714289a2.js",
    "revision": "e7bbeba3f35a83b28348118240271150"
  },
  {
    "url": "assets/js/54.464e4fc2.js",
    "revision": "0189d8754ac2e440832bd4b188ce5fa7"
  },
  {
    "url": "assets/js/55.ce099d9e.js",
    "revision": "1ce587786f660ea0f13b5d96db659afa"
  },
  {
    "url": "assets/js/56.a5b03714.js",
    "revision": "064a48626c667aac84b01fac154ccd4c"
  },
  {
    "url": "assets/js/57.a353f3c7.js",
    "revision": "55302efcacf4b2e298d217853c8c891b"
  },
  {
    "url": "assets/js/58.c77e6f70.js",
    "revision": "61583cd6151f65892a6c8123e1c8f61f"
  },
  {
    "url": "assets/js/59.896fdf75.js",
    "revision": "3c50e45035b581b68a173606aea6e8b2"
  },
  {
    "url": "assets/js/6.6034c83b.js",
    "revision": "e0e440146528185fc635350d002ee45b"
  },
  {
    "url": "assets/js/60.68a0eca2.js",
    "revision": "a021726b4b1d33f4fe0ccf286967d4d0"
  },
  {
    "url": "assets/js/61.0b15bb5d.js",
    "revision": "0c1851a1953e18ce1131c07cde59b25a"
  },
  {
    "url": "assets/js/62.18b16176.js",
    "revision": "2b869558d9bed32817b659a352109200"
  },
  {
    "url": "assets/js/63.13c59290.js",
    "revision": "eed73fcbb25a5b1d7b6842f3af9e138d"
  },
  {
    "url": "assets/js/64.9a3877b7.js",
    "revision": "62ea411e7fdf2489cf44df86fdc2dabb"
  },
  {
    "url": "assets/js/65.8166be3a.js",
    "revision": "466ff7e9c003967a126f7f1bb3d46c48"
  },
  {
    "url": "assets/js/66.7da63164.js",
    "revision": "cc8d1ee58d094bca421283f9a8f9dc1b"
  },
  {
    "url": "assets/js/67.2fbcfb60.js",
    "revision": "80d47f8efc51cc49882a9e02aacf7837"
  },
  {
    "url": "assets/js/68.4678f2c1.js",
    "revision": "6266d81c4946a5dcc2b06c1102acfcdf"
  },
  {
    "url": "assets/js/69.0b250b63.js",
    "revision": "940832e1ddd7b840a1c3cba44eaee672"
  },
  {
    "url": "assets/js/7.25fb2419.js",
    "revision": "38be73b94608de41ccb992473f4feebb"
  },
  {
    "url": "assets/js/8.8aac9e16.js",
    "revision": "e3cc132f6f1cc706b81c7a1062ef1d40"
  },
  {
    "url": "assets/js/9.ddd0725e.js",
    "revision": "023d5c9f444a355dd899adbd7b571696"
  },
  {
    "url": "assets/js/app.f737bde1.js",
    "revision": "128f649e48dff52355c0c9baa1b4527d"
  },
  {
    "url": "blog/index.html",
    "revision": "5a7b793046fae60abd79c4ef7b97cd31"
  },
  {
    "url": "blog/page/10/index.html",
    "revision": "5355f58bf1de85181faf4b0ef5837d98"
  },
  {
    "url": "blog/page/11/index.html",
    "revision": "ffa9805f792e189586d58ad467cec8fc"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "ac1098ab0c5e5f283751007c148c0350"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "d152e5f83183811460ee39b05dfba51f"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "5e7d95875804fa9d59924a5ea539dbd1"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "5c5323520a1985a86b5994ba712bf195"
  },
  {
    "url": "blog/page/6/index.html",
    "revision": "4cdbe6df8b6e05edd3f445ea21929b8b"
  },
  {
    "url": "blog/page/7/index.html",
    "revision": "ca9f294fd36bf251b2eaa09173d9ee5e"
  },
  {
    "url": "blog/page/8/index.html",
    "revision": "e788edf348862a8b55df948928dd4871"
  },
  {
    "url": "blog/page/9/index.html",
    "revision": "26ff7dc1878bfa3e59a0fb4f15c226cd"
  },
  {
    "url": "book/index.html",
    "revision": "7541d72295ada53a8dab218df71c21de"
  },
  {
    "url": "categories/index.html",
    "revision": "8a03b50b885e52ced45ad7455710b4aa"
  },
  {
    "url": "categories/个人随笔.html",
    "revision": "ff7a556c344bd2d404d681700db39ffb"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "76f2312e94eee25c008b7017949cacff"
  },
  {
    "url": "categories/前端视角.html",
    "revision": "03ef5f41235c0e96fe8f75e812b6a65c"
  },
  {
    "url": "categories/前端资源.html",
    "revision": "4d88ba98f8e0bbee6bf7b421f92daf55"
  },
  {
    "url": "categories/博客建站.html",
    "revision": "d7122f8b0f02eb10306c3e9d99a0b184"
  },
  {
    "url": "categories/资源分享.html",
    "revision": "d9c3094158b0a4ae35bbec0d43634a54"
  },
  {
    "url": "hy.jpg",
    "revision": "39a777c22e840b0469249f05d2f70bb0"
  },
  {
    "url": "index.html",
    "revision": "65d82ef4e7d217cfa2db478e3c7c4344"
  },
  {
    "url": "logo.jpg",
    "revision": "520cf00678363bffafec3d7c2054b7dc"
  },
  {
    "url": "tags/Canvas.html",
    "revision": "b3348aab30f049500025f62d4a060d22"
  },
  {
    "url": "tags/CSS.html",
    "revision": "d67788e061e965616c39a67321cd938f"
  },
  {
    "url": "tags/CSS3.html",
    "revision": "c9dadb22606f9013c121f8fc36f5d6fe"
  },
  {
    "url": "tags/css预处理器.html",
    "revision": "da02f064fe45074f68de89755a87ffac"
  },
  {
    "url": "tags/DOM.html",
    "revision": "45939535ea18d7db219991ec0fea8f6b"
  },
  {
    "url": "tags/github.html",
    "revision": "0a3fceb65534437ad978c21527ed7229"
  },
  {
    "url": "tags/gulp.html",
    "revision": "63a7257a5dfdb35baed962d37f305ce1"
  },
  {
    "url": "tags/hexo.html",
    "revision": "7c398eb51f16f63adde8097a60b0d599"
  },
  {
    "url": "tags/html.html",
    "revision": "0b622b452cd4218f146019ab38d3ffc5"
  },
  {
    "url": "tags/index.html",
    "revision": "ef15c8a4709401caee3f5ac76f3af715"
  },
  {
    "url": "tags/JavaScript.html",
    "revision": "830e0f8109d742b4b41b239c95e58147"
  },
  {
    "url": "tags/markdown.html",
    "revision": "d5a8341593b7f21c9daf914155150365"
  },
  {
    "url": "tags/next.html",
    "revision": "2b0bb88aa3b6a17c3d03ab6498a9bece"
  },
  {
    "url": "tags/sass.html",
    "revision": "5ee071d03b13ca1376958860967f005f"
  },
  {
    "url": "tags/sublimetext.html",
    "revision": "871504bc4e85291457091a5177c2e55f"
  },
  {
    "url": "tags/VSCode.html",
    "revision": "1f72614aab37bfe81b73f9af5197c136"
  },
  {
    "url": "tags/VuePress.html",
    "revision": "23e2eacbc471f4bb91446dbeea57c68a"
  },
  {
    "url": "tags/web前端.html",
    "revision": "822fa02b380844776c22231dcc6f9219"
  },
  {
    "url": "tags/yilia.html",
    "revision": "52cd491e59aeca9a22db5733fb562aea"
  },
  {
    "url": "tags/人生历程.html",
    "revision": "9903299c6b6ac3d2d96378e6de33adab"
  },
  {
    "url": "tags/博客前言.html",
    "revision": "6b4ea2389866d3a3b318218fa2a47270"
  },
  {
    "url": "tags/博客版本更迭.html",
    "revision": "44087df9fc0fc116738109fb6e5d6d56"
  },
  {
    "url": "tags/响应式.html",
    "revision": "71f4bf87d13efb16c7cdcc0cfe16d8fd"
  },
  {
    "url": "tags/开发工具.html",
    "revision": "1651279fe43c64137a39064ae9848f70"
  },
  {
    "url": "tags/插件.html",
    "revision": "266738e81afe4eed6608c3131d21a052"
  },
  {
    "url": "tags/搭建博客.html",
    "revision": "cd365c6ae219115e3e410de00d0828db"
  },
  {
    "url": "tags/框架原理.html",
    "revision": "2c0b3a38550d3d4fb7896f421f674d55"
  },
  {
    "url": "tags/浏览器.html",
    "revision": "3fa66d179d13d74d3a2d9516293eb4ad"
  },
  {
    "url": "tags/移动端.html",
    "revision": "9a3f1b2ef3edf229bdd5cc1e3fb1a409"
  },
  {
    "url": "tags/编码规范.html",
    "revision": "4c9e71534cb7947c8d0dd4b3005825be"
  },
  {
    "url": "tags/编辑器.html",
    "revision": "63ef46060991ac9ca591db1a8fa885ea"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
