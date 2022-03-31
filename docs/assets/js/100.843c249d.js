(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{625:function(t,a,e){"use strict";e.r(a);var s=e(45),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_12-1-包和插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-包和插件"}},[t._v("#")]),t._v(" 12.1 包和插件")]),t._v(" "),e("p",[t._v("本节将会介绍 Flutter 中包和插件，然后介绍一些常用的包，但本节不会介绍具体的")]),t._v(" "),e("h2",{attrs:{id:"_12-1-1-包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-1-包"}},[t._v("#")]),t._v(" 12.1.1 包")]),t._v(" "),e("p",[t._v("第二章中已经讲过如何使用包（Package），我们知道通过包可以复用模块化代码，一个最小的Package包括：")]),t._v(" "),e("ul",[e("li",[t._v("一个"),e("code",[t._v("pubspec.yaml")]),t._v("文件：声明了Package的名称、版本、作者等的元数据文件。")]),t._v(" "),e("li",[t._v("一个 "),e("code",[t._v("lib")]),t._v(" 文件夹：包括包中公开的(public)代码，最少应有一个"),e("code",[t._v("<package-name>.dart")]),t._v("文件")])]),t._v(" "),e("p",[t._v("Flutter 包分为两类：")]),t._v(" "),e("ul",[e("li",[t._v("Dart包：其中一些可能包含Flutter的特定功能，因此对Flutter框架具有依赖性，这种包仅用于Flutter，例如"),e("a",{attrs:{href:"https://pub.dartlang.org/packages/fluro",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("fluro")]),e("OutboundLink")],1),t._v("包。")]),t._v(" "),e("li",[t._v("插件包：一种专用的Dart包，其中包含用Dart代码编写的API，以及针对Android（使用Java或Kotlin）和针对iOS（使用OC或Swift）平台的特定实现，也就是说插件包括原生代码，一个具体的例子是"),e("a",{attrs:{href:"https://pub.dartlang.org/packages/battery",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("battery")]),e("OutboundLink")],1),t._v("插件包。")])]),t._v(" "),e("h2",{attrs:{id:"_12-1-2-插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-2-插件"}},[t._v("#")]),t._v(" 12.1.2 插件")]),t._v(" "),e("p",[t._v("Flutter 本质上只是一个 UI 框架，运行在宿主平台之上，Flutter 本身是无法提供一些系统能力，比如使用蓝牙、相机、GPS等，因此要在 Flutter 中调用这些能力就必须和原生平台进行通信。目前Flutter 已经支持 iOS、Android、Web、macOS、Windows、Linux等众多平台，要调用特定平台 API 就需要写插件。插件是一种特殊的包，和纯 dart 包主要区别是插件中除了dart代码，还包括特定平台的代码，比如 image_picker 插件可以在 iOS 和 Android 设备上访问相册和摄像头。")]),t._v(" "),e("h3",{attrs:{id:"插件实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件实现原理"}},[t._v("#")]),t._v(" 插件实现原理")]),t._v(" "),e("p",[t._v("我们知道一个完整的Flutter应用程序实际上包括原生代码和Flutter代码两部分。Flutter 中提供了平台通道（platform channel）用于Flutter和原生平台的通信，平台通道正是Flutter和原生之间通信的桥梁，它也是Flutter插件的底层基础设施。")]),t._v(" "),e("p",[t._v("Flutter与原生之间的通信本质上是一个远程调用（RPC），通过消息传递实现：")]),t._v(" "),e("ul",[e("li",[t._v("应用的Flutter部分通过平台通道（platform channel）将调用消息发送到宿主应用。")]),t._v(" "),e("li",[t._v("宿主监听平台通道，并接收该消息。然后它会调用该平台的API，并将响应发送回Flutter。")])]),t._v(" "),e("p",[t._v("由于插件编写涉及具体平台的开发知识，比如 image_picker 插件需要开发者在 iOS 和 Android 平台上分别实现图片选取和拍摄的功能，因此需要开发者熟悉原生开发，而本书主要聚焦 Flutter ，因此不做过多介绍，不过插件的开发也并不复杂，感兴趣的读者可以查看官方的"),e("a",{attrs:{href:"https://flutter.cn/docs/development/packages-and-plugins/developing-packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件开发示例"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"如何获取平台信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何获取平台信息"}},[t._v("#")]),t._v(" 如何获取平台信息")]),t._v(" "),e("p",[t._v("有时，在 Flutter 中我们想根据宿主平台添加一些差异化的功能，因此 Flutter 中提供了一个全局变量 "),e("code",[t._v("defaultTargetPlatform")]),t._v(" 来获取当前应用的平台信息，"),e("code",[t._v("defaultTargetPlatform")]),t._v('定义在"platform.dart"中，它的类型是'),e("code",[t._v("TargetPlatform")]),t._v("，这是一个枚举类，定义如下：")]),t._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TargetPlatform")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fuchsia"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  iOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("可以看到目前Flutter只支持这三个平台。我们可以通过如下代码判断平台：")]),t._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("defaultTargetPlatform "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TargetPlatform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是安卓系统，do something")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("由于不同平台有它们各自的交互规范，Flutter Material库中的一些组件都针对相应的平台做了一些适配，比如路由组件"),e("code",[t._v("MaterialPageRoute")]),t._v("，它在android和ios中会应用各自平台规范的切换动画。那如果我们想让我们的APP在所有平台都表现一致，比如希望在所有平台路由切换动画都按照ios平台一致的左右滑动切换风格该怎么做？Flutter中提供了一种覆盖默认平台的机制，我们可以通过显式指定"),e("code",[t._v("debugDefaultTargetPlatformOverride")]),t._v("全局变量的值来指定应用平台。比如：")]),t._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("debugDefaultTargetPlatformOverride"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TargetPlatform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("defaultTargetPlatform"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会输出TargetPlatform.iOS")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("上面代码即在Android中运行后，Flutter APP就会认为是当前系统是iOS，Material组件库中所有组件交互方式都会和iOS平台对齐，"),e("code",[t._v("defaultTargetPlatform")]),t._v("的值也会变为"),e("code",[t._v("TargetPlatform.iOS")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"常用的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的插件"}},[t._v("#")]),t._v(" 常用的插件")]),t._v(" "),e("p",[t._v("Flutter 官方提供了一系列常用的插件，如访问相机/相册、本地存储、播放视频等，完整列表见：https://github.com/flutter/plugins/tree/master/packages 读者可以自行查看。除了官方维护的插件，Flutter 社区也有不少现成插件，具体读者可以在 https://pub.dev/ 上查找。")])])}),[],!1,null,null,null);a.default=r.exports}}]);