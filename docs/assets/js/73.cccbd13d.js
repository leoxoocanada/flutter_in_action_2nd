(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{502:function(s,a,t){s.exports=t.p+"assets/img/5-2.47017753.png"},679:function(s,a,t){"use strict";t.r(a);var n=t(45),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_5-2-装饰容器decoratedbox"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-装饰容器decoratedbox"}},[s._v("#")]),s._v(" 5.2 装饰容器DecoratedBox")]),s._v(" "),n("p",[n("code",[s._v("DecoratedBox")]),s._v("可以在其子组件绘制前(或后)绘制一些装饰（Decoration），如背景、边框、渐变等。"),n("code",[s._v("DecoratedBox")]),s._v("定义如下：")]),s._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DecoratedBox")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Decoration")]),s._v(" decoration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DecorationPosition")]),s._v(" position "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DecorationPosition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("background"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Widget")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" child\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[n("code",[s._v("decoration")]),s._v("：代表将要绘制的装饰，它的类型为"),n("code",[s._v("Decoration")]),s._v("。"),n("code",[s._v("Decoration")]),s._v("是一个抽象类，它定义了一个接口 "),n("code",[s._v("createBoxPainter()")]),s._v("，子类的主要职责是需要通过实现它来创建一个画笔，该画笔用于绘制装饰。")]),s._v(" "),n("li",[n("code",[s._v("position")]),s._v("：此属性决定在哪里绘制"),n("code",[s._v("Decoration")]),s._v("，它接收"),n("code",[s._v("DecorationPosition")]),s._v("的枚举类型，该枚举类有两个值：\n"),n("ul",[n("li",[n("code",[s._v("background")]),s._v("：在子组件之后绘制，即背景装饰。")]),s._v(" "),n("li",[n("code",[s._v("foreground")]),s._v("：在子组件之上绘制，即前景。")])])])]),s._v(" "),n("h3",{attrs:{id:"boxdecoration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#boxdecoration"}},[s._v("#")]),s._v(" BoxDecoration")]),s._v(" "),n("p",[s._v("我们通常会直接使用"),n("code",[s._v("BoxDecoration")]),s._v("类，它是一个Decoration的子类，实现了常用的装饰元素的绘制。")]),s._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BoxDecoration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Color")]),s._v(" color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//颜色")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DecorationImage")]),s._v(" image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//图片")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BoxBorder")]),s._v(" border"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//边框")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BorderRadiusGeometry")]),s._v(" borderRadius"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//圆角")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BoxShadow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" boxShadow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//阴影,可以指定多个")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Gradient")]),s._v(" gradient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//渐变")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlendMode")]),s._v(" backgroundBlendMode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//背景混合模式")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BoxShape")]),s._v(" shape "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BoxShape")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rectangle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//形状")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("各个属性名都是自解释的，详情读者可以查看API文档。下面我们实现一个带阴影的背景色渐变的按钮：")]),s._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DecoratedBox")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   decoration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BoxDecoration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n     gradient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinearGradient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Colors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Colors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shade700"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//背景渐变")]),s._v("\n     borderRadius"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BorderRadius")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("circular")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//3像素圆角")]),s._v("\n     boxShadow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//阴影")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BoxShadow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n         color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Colors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("black54"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         offset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Offset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         blurRadius"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.0")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Padding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    padding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EdgeInsets")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("symmetric")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("horizontal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vertical"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Login"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextStyle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Colors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("white"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("运行后效果如图5-2所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(502),alt:"图5-2"}})]),s._v(" "),n("p",[s._v("通过"),n("code",[s._v("BoxDecoration")]),s._v("我们实现了一个渐变按钮的外观，但此示例还不是一个标准的按钮，因为它还不能响应点击事件，我们将在后面“自定义组件”一章中实现一个完整功能的"),n("code",[s._v("GradientButton")]),s._v("。另外，上面的例子中使用了"),n("code",[s._v("LinearGradient")]),s._v("类，它用于定义线性渐变的类，Flutter中还提供了其它渐变配置类，如"),n("code",[s._v("RadialGradient")]),s._v("、"),n("code",[s._v("SweepGradient")]),s._v("，读者若有需要可以自行查看API文档。")])])}),[],!1,null,null,null);a.default=e.exports}}]);