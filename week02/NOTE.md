# 每周总结可以写在这里

为了更好的观看体验，可以移步这里 
- [编程语言通识](https://www.yuque.com/ddduolegeduo/lslgn8/adpta6)
- [JavaScript词法，类型](https://www.yuque.com/ddduolegeduo/lslgn8/peubwu)

# 编程语言通识与JavaScript语言设计

<a name="fnu4K"></a>
# 语言按语法分类
- 非形式语言（阿拉伯文，很多其他语言）
  - 中文，英文
- 形式语言（乔姆斯基谱系）
  - 0型 无限制文法（相对于其他文法无限制）?::=? 
  - 1型 上下文相关文法  ?<A>?::=?<B>?
  - 2型 上下文无关文法  <A>::=? 
  - 3型 正则文法（正则表达式）<A>::=<A>?

 四种文法，从0型到3型，其规则和约定越来越多，限制条件也越来越多

<a name="lppZX"></a>
# BNF范式
BNF(Backus-Naur Form)是描述**编程语言的文法**。巴科斯范式是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。<br />**<br />**文法：**自然语言存在不同程度的二义性。这种模糊、不确定的方式无法精确定义一门程序设计语言。必须设计一种准确无误地描述程序设计语言的语法结构，这种严谨、简洁、易读的形式规则描述的语言结构模型称为**文法**。<br />
<br />BNF规定是推导规则(产生式)的集合，写为：
```
符号 ::= <使用符号的表达式>
```


- 用尖括号括起来的名称来表示语法结构名
- 语法结构分成基础结构和需要用其他语法结构定义的复合结构
  - 基础结构称终结符
  - 复合结构称非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- *表示重复多次
- |表示或
- +表示至少一次
<a name="9TZSh"></a>
## 终结符和非终结符
**终结符**：终结符是一个形式语言的基本符号。就是说，它们能在一个形式语法的推到规则的输入或输出字符串存在，而且他们不能被分解为更小的单位。<br />**非终结符**：非终结符是可以被取代的符号。一个形式文法中必须有一个起始符号，这个起始符号属于非终结符的集合。在上下文无关文法中，每个推到规则的左边只能有一个非终结符而不能有两个以上的非终结符或中介符。（并非所有的语言都可以被上下文无关文法产生）
<a name="dFmlF"></a>
## BNF范式的语法
在BNF中，双引号中的字(“word”)代表着这些字符本身。而double_quote用来代表双引号。<br />在双引号外的字（有可能有下划线）代表着语法部分。
```
< >     : 内包含的为必选项。
[ ]     : 内包含的为可选项。
{ }     : 内包含的为可重复0至无数次的项。
|       : 表示在其左右两边任选一项，相当于"OR"的意思。
::=     : 是“被定义为”的意思
"..."   : 术语符号
[...]   : 选项，最多出现一次
{...}   : 重复项，任意次数，包括 0 次
(...)   : 分组
|       : 并列选项，只能选一个
```
例如，Java语言总的`for`语句的BNF范式定义如下：
```
FOR_STATEMENT ::=
    "for" "(" ( variable_declaration |
    ( expression ";" ) | ";" )
    [ expression ] ";"
    [ expression ]
    ")" statement
```



---

参考链接：<br />[http://sighingnow.github.io/%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86/bnf.html](http://sighingnow.github.io/%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86/bnf.html)

[http://icodeit.org/2015/09/write-a-parser/](http://icodeit.org/2015/09/write-a-parser/)

---

<a name="EGDzF"></a>
# 图灵完备性
<a name="JXIEt"></a>
## 概念

- 图灵完备性
- **命令式”有时也被称作“指令式”**，“命令式”强调的是how，如果你是在写命令式的程序，那么你将step-by-step的**告诉计算机如何完成一项工作**，大多数的程序都是这样的。在命令式场景下，计算机是不具备“智能”的，只是很机械的完成你交代的事情，至于结果如何，要看你的水平
- **“声明式”有时也被成为“描述式”或者“申明式”**，为**告诉计算机你想要什么**，“声明”你想要的what，由计算机自己去设计执行路径，需要计算机或者是“运行时”具备一定的“智能”。在这种情况下，计算机显然不会实现所有你想要的what，用专业术语说就是“**非图灵完备**”，但是针对特定的任务，“声明式”要远比“命令式”方便，最常见的声明式语言就是**SQL**—— 告诉计算机你想要的结果集，SQL语言的运行时，即数据库，帮你设计获取这个结果集的执行路径，并返回结果集。众所周知，使用SQL语言获取数据，要比自行编写处理过程去获取数据容易的多。
<a name="HyrEE"></a>
## **声明式和命令式**
**声明式语⾔言：SQL  HTMl  XML  CSS  VUE**<br />**命令式语⾔言：C++  Java   JavaScript **<br />
<br />命令式——图灵机

  - goto
  - if和while

声明式——lambda

  - 递归



参考链接：<br />微信公众号 - EAWorld（eaworld），作者：宋潇男 [https://cloud.tencent.com/developer/article/1080886](https://cloud.tencent.com/developer/article/1080886)<br />


---

<a name="enaXk"></a>
# 动态与静态
动态

- 在用户设备/在线服务器
- 产品实际运行时
- Runtime

静态

- 在程序员设备上
- 产品开发时
- Compiletime



<a name="oRRG7"></a>
## 类型系统

- 动态类型系统和静态类型系统
- 强类型与弱类型
- 复合类型
  - 结构体
  - 函数签名
- 子类型
  - 逆变/协变

 
![](https://cdn.nlark.com/yuque/0/2020/svg/1251840/1587456568719-0e04bc45-d27b-4d1e-a280-d58a7d0ee461.svg)<a name="2NpNg"></a>
#### 动态类型语言（Dynamically Typed Language）

- 运行期间才做数据类型检查的语言，即动态类型语言编程时，永远不用给任何变量指定数据类型。该语言会在第一次赋值给变量时，在内部将数据类型记录下来。
- JavaScript，Python和Ruby就是典型动态类型语言
- 优点：方便阅读，不需要写非常多的类型相关的代码；
- 缺点：不方便调试，命名不规范时会造成读不懂，不利于理解等
<a name="etRps"></a>
#### 静态类型语言（Statically Typed Language）

- 编译期间做检查数据类型的语言，即写程序时要声明所有变量的数据类型，是固定的。使用数据之前，必须先声明数据类型（int ,float,double等）。相当于使用之前，首先要为它们分配好内存空间。
- 例如：C/C++是静态类型语言的典型代表，其他的静态类型语言还有C#、JAVA等
- 优点：结构非常规范，便于调试，方便类型安全
- 缺点：为此需要写更多类型相关代码，不便于阅读、不清晰明了
<a name="KrLGU"></a>
#### 强类型定义语言（Explicit type conversion，，类型安全的语言）

- 强制数据类型定义，语言一旦变量被指定某个数据类型，如果不经强制转换，即永远是此数据类型。
- 强类型语言是指需要进行变量/对象类型声明的语言，一般情况下需要编译执行。例如C/C++/Java/C#
<a name="4mc6n"></a>
#### 弱类型定义语言（Implicit type conversion，类型不安全的语言）

- 数据类型可以被忽略的语言。它与强类型定义语言相反, 一个变量可以赋不同数据类型的值。

![20190215142539332.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/1251840/1587457282714-c3458cac-e439-4a11-a494-d809cf3ecc9d.jpeg#align=left&display=inline&height=337&margin=%5Bobject%20Object%5D&name=20190215142539332.jpg&originHeight=337&originWidth=500&size=19596&status=done&style=none&width=500)<br />
<br />
<br />
<br />**参考链接：**[https://www.jianshu.com/p/336f19772046](https://www.jianshu.com/p/336f19772046)<br />**<br />**

---

**<br />**
<a name="C61kw"></a>
#### 编程语言

- atom
  - laentfier
  - literal
- expression
  - atom
  - operator
  - punctuator
- statement
  - expression
  - keyword
  - punctuator
- structure
  - function
  - class
  - process
  - namespace
- program
  - program
  - module
  - package
  - library





# JavaScript 词法、类型

**学习流程**

1. Unicode 【字符集】
1. Atom【原子】
1. Expression【表达式】
1. Statement【声明】
1. Structure【结构体】
1. Program/Module【程序/模块】
<a name="mtFUc"></a>
# Unicode【字符集】
<a name="MAlEU"></a>
### 基础知识
**定义**<br />`Unicode `（中文：万国码、国际码、统一码、单一码）是计算机科学领域里的一项业界标准。它对世界上大部分的文字系统进行了整理、编码，使得电脑可以用更为简单的方式来呈现和处理文字。<br />
<br />**起源**<br />`Unicode `是为了解决传统的字符编码方案的局限而产生的，例如 `ISO 8859-1 `所定义的字符虽然在不同的国家中广泛地使用，可是在不同国家间却经常出现不兼容的情况。很多传统的编码方式都有一个共同的问题，即容许电脑处理双语环境，但却无法同时支持多语言环境

**写法**

- 在表示一个 `Unicode` 的字符时，通常会用“U+”然后紧接着一组十六进制的数字来表示这一个字符。
- 在基本多文种平面（英语：Basic Multilingual Plane，简写 `BMP`。又称为“零号平面”、plane 0）里的所有字符，要用四个数字（即两个`byte`，共16 bits，例如 `U+4AE0`，共支持六万多个字符）；
- 在零号平面以外的字符则需要使用五个或六个数字。



**实例**<br />JavaScript 允许采用`\uxxxx`形式表示一个字符，其中`xxxx`表示字符的 Unicode 码点
```javascript
"\u0061"
>> "a"
```
但是，这种表示法只限于码点在`\u0000`~`\uFFFF`之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。
```javascript
"\u5389\u5bb3"
>>厉害

"\u20BB7"
>>" 7"
```
上面代码表示，如果直接在`\u`后面跟上超过`0xFFFF`的数值（比如`\u20BB7`），JavaScript 会理解成`\u20BB+7`。由于`\u20BB`是一个不可打印字符，所以只会显示一个空格，后面跟着一个`7`。<br />ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
```javascript
"\u{20BB7}"
>> "𠮷"

"\u{41}\u{42}\u{43}"
>> "ABC"

let hello = 123;
hell\u{6F} /
>> 123

'\u{1F680}' === '\uD83D\uDE80'
>> true
```
JavaScript 共有 6 种方法可以表示一个字符。
```javascript
'\z' === 'z' // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true
```

<br />

<a name="ohEOC"></a>
### 编码方式

- 统一码的编码方式与 `ISO 10646` 的通用字符集概念相对应。当前实际应用的统一码版本对应于 `UCS-2`，使用 16 位的编码空间。也就是每个字符占用 2 个字节。这样理论上一共最多可以表示 2（即 65536）个字符。基本满足各种语言的使用。实际上当前版本的统一码并未完全使用这 16 位编码，而是保留了大量空间以作为特殊使用或将来扩展。
- 上述 16 位统一码字符构成基本多文种平面。最新（但未实际广泛使用）的统一码版本定义了 16 个辅助平面，两者合起来至少需要占据 21 位的编码空间，比 3 字节略少。但事实上辅助平面字符仍然占用 4 字节编码空间，与 `UCS-4 `保持一致。
- 未来版本会扩充到 `ISO 10646-1`实现级别 3，即涵盖 `UCS-4 `的所有字符。`UCS-4 `是一个更大的尚未填充完全的 31 位字符集，加上恒为 0 的首位，共需占据 32 位，即 4 字节。理论上最多能表示 2个字符，完全可以涵盖一切语言所用的符号。
| 平面 | 始末字符值 | 中文名称 | 英文名称 |
| :---: | :---: | :---: | :---: |
| 0号平面 | U+0000 - U+FFFF | **基本多文种平面** | Basic Multilingual Plane，简称**BMP** |
| ··· | ··· | ··· | ··· |


<br />

<a name="wczIB"></a>
### 实现方式

- `Unicode `的实现方式不同于编码方式。一个字符的 `Unicode` 编码是确定的。但是在实际传输过程中，由于不同系统平台的设计不一定一致，以及出于节省空间的目的，对 `Unicode` 编码的实现方式有所不同。`Unicode `的实现方式称为 **Unicode转换格式**（Unicode Transformation Format，简称为 **UTF**）。
- 如某字符为十六进制编码 `4E59` ，按两个字节拆分为 4E 和 59，在 Mac 上读取时是从低字节开始，那么在 Mac OS 会认为此 `4E59 `编码为 `594E`，找到的字符为“奎”，而在 Windows 上从高字节开始读取，则编码为 `U+4E59 `的字符为“乙”



**UTF-8 编码**

- `UTF-8`是一种非常通用的可变长字符编码方式
- 可变长编码就是指在针对某个字符进行编码时，他的表示长度是不固定的。像`UTF-8`里面，`ASCII`所表示的字符集就是用1 `Byte`来表示，而大部分汉字则是用3 `Byte`来表示



**UTF-16 编码**

- 把`Unicode`字符集的抽象码位映射为16位长的整数
- `UTF-16`最少也会用2 Byte来表示一个字符，因此没有办法兼容ASCII编码（ASCII编码使用1 Byte来进行存储）
- JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），JavaScript 会认为它们是两个字符



<a name="5ShWE"></a>
### 学习文档
Unicode学习网址：[https://www.fileformat.info/info/unicode/](https://www.fileformat.info/info/unicode/)<br />Unicode中主要看 [Blocks](https://www.fileformat.info/info/unicode/block/index.htm)、[Categories](https://www.fileformat.info/info/unicode/category/index.htm)

| [U+000A](https://www.fileformat.info/info/unicode/char/000a/index.htm) | 回车   LINE FEED (LF) (U+000A)  |
| :--- | :--- |

| [U+0020](https://www.fileformat.info/info/unicode/char/0020/index.htm) | 空格  SPACE (U+0020) |
| :--- | :--- |


<br />**字符串的扩展**<br />`codePointAt()`方法返回的是码点的十进制值，如果想要十六进制的值，可以使用`toString`方法转换一下
```javascript
中文
"厉"转成16进制   "厉害".codePointAt(0).toString(16)   \u5389
"害"转成16进制   "厉害".codePointAt(1).toString(16)    \u5bb3
var \u5389\u5bb3 = 1;
console.log(厉害);
// 1
```
`String.fromCodePoint()`方法，可以识别大于`0xFFFF`的字符，在作用上，正好与`codePointAt()`方法相反。
```javascript
String.fromCodePoint(0x20BB7)
// "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true
```

<br />参考链接：[https://es6.ruanyifeng.com/#docs/string](https://es6.ruanyifeng.com/#docs/string)<br />


---

<a name="g9gm6"></a>
# JavaScript 词法
<a name="yyEB2"></a>
## 四种词法定义
看ECMA文档
```http
InputElementDiv::
       WhiteSpace
       LineTerminator
       Comment
       CommonToken
       DivPunctuator
       RightBracePunctuator
InputElementRegExp::
       WhiteSpace
       LineTerminator
       Comment
       CommonToken
       RightBracePunctuator
       RegularExpressionLiteral
InputElementRegExpOrTemplateTail::
       WhiteSpace
       LineTerminator
       Comment
       CommonToken
       RegularExpressionLiteral
       TemplateSubstitutionTail
InputElementTemplateTail::
       WhiteSpace
       LineTerminator
       Comment
       CommonToken
       DivPunctuator
       TemplateSubstitutionTail
```
**词法分析**

- 词法分析阶段是编译过程的第一个阶段，这个阶段的任务是从左到右一个字符一个字符地读入源程序，即对构成源程序的字符流进行扫描然后根据构词规则识别单词(也称单词符号或符号)
- ECMAScript 源码文本会被从左到右扫描，并被转换为一系列的输入元素，包括 token、控制符、行终止符、注释和空白符。ECMAScript 定义了一些关键字、字面量以及行尾分号补全的规则。



<a name="XV8i5"></a>
## InputElement
**InputElement词法**

- `WhiteSpace` 空白字符
- `LineTerminator` 换行符
- `Comment` 注释
- `Token`词
  - `IdentifierName 标识符名称`：典型案例就是使用的变量名，注意这里关键字也包含在内。
  - `Punctuator 符号`：使用的运算符和大括号等符号。
  - `NumericLiteral 数字直接量`：就是写的数字。
  - `StringLiteral 字符串直接量`：就是用单引号或者双引号引起来的直接量。
  - `Template 字符串模板`：用反引号 ` 括起来的直接量。

**
<a name="287U9"></a>
### `WhiteSpace`

- `<HT>`(或称`<TAB>`) 是 `U+0009`，是缩进 `TAB` 符，字符串中写的 `\t` 。tab制表符
- `<VT>`是 `U+000B`，也就是垂直方向的 `TAB 符 \v`。
- `<FF>`是 `U+000C`，`Form Feed`，分页符，字符串直接量中写作 `\f`。
- `<SP>`是 `U+0020`，就是最普通的空格。
- `<NBSP>`是 `U+00A0`，非断行空格，它是 `SP` 的一个变体，在文字排版中，可以避免因为空格在此处发生断行，其它方面和普通空格完全一样，&nbsp 重点处理排版
- `<ZWNBSP>`(旧称`<BOM>`) 是 `U+FEFF`，这是 `ES5` 新加入的空白符，是`Unicode`中的零宽非断行空格，在以 `UTF 格式`编码的文件中，常常在文件首插入一个额外的 `U+FEFF`，解析 `UTF 文件`的程序可以根据 `U+FEFF` 的表示方法猜测文件采用哪种 `UTF 编码`方式。这个字符也叫做`bit order mark`。（首行回车，防止有些解析BOM吞了字符）
<a name="jnvMg"></a>
#### 


<a name="qmvkY"></a>
### `LineTerminator`
四种换行符<br /><LF>：是 U+000A，就是最正常换行符，在字符串中的 \n<br /><CR>：是 U+000D，这个字符真正意义上的回车，在字符串中是 \r<br /><LS>：是 U+2028，是 Unicode 中的行分隔符。 //平时不要用<br /><PS>：是 U+2029，是 Unicode 中的段落分隔符。//平时不要用<br />注意：换行符会影响 JavaScript 的两个重要语法特性：自动插入分号 和 no line terminator规则。<br />

<a name="7cJMu"></a>
### `Comment`
单行，多行注释<br />// 多行注释/* MultiLineCommentChars */ <br />

// 单行注释// SingleLineCommentChars<br />

<a name="c19tm"></a>
### `Token`
重新分类

- 帮助程序实现结构`Punctuator，Keywords`
- 实际写出来代码包含的有效信息`IdentifierNmae，Literal`



<a name="rmitG"></a>
#### `IdentifierNmae 标识符`
`Keywords`<br />`Identifier`<br />`Future reserved Keywords:enum`

- 变量名，不能和关键字重合
- 属性，能和关键字重合
- 关键字：await break case catch class const continue debugger default delete do else export extends finally for function if import ininstance of new return super switch this throw try typeof var void while with yield


<br /><ZWNJ><br /><ZWJ><br />
<br />扩展字符编码笔记：ASCII，Unicode 和 UTF-8 【[http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)】<br />

<a name="FQleF"></a>
# JavaScript 类型
7大基本类型<br />Number；String；Boolean；Undefined；Null；Symbol；Object
<a name="sD4Pg"></a>
### Number
Number  IEEE 754 Double Float<br />Number中布局 

- Sign（1）
- Exponent (11)
- Fraction (52)

语法

- 8进制  0o10     //8
- 2进制 0b001   //1
- 12.3E10 //123000000000

根据浮点数的定义，非整数的 Number 类型无法用 ==（=== 也不行）来比较

**关于javaScript中 `0.1 + 0.2 == 0.3 ?` **
```javascript
console.log( 0.1 + 0.2 == 0.3);
>> false
```
这是浮点运算特点导致的, 这里错误的不是结论，而是比较的方法，正确的比较方法是使用javaScript提供的最小精度值：EPSILON<br />`Number.EPSILON`：两个可表示数字之间的最小间隔
```javascript
console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);
>> true
```
这样的比较输出结果为`true`，`检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法`。<br />揭秘 0.1 + 0.2 != 0.3【[https://www.barretlee.com/blog/2016/09/28/ieee754-operation-in-js/](https://www.barretlee.com/blog/2016/09/28/ieee754-operation-in-js/)】<br />

<a name="BUdon"></a>
### String

- Character 字符
- Code Point 码点
- Encoding 编码
  - ASCII （128）
  - Unicode 
  - UCS ( U+0000 - U+FFFF)
  - GB ( GB2312、GBK、 GB18030)
  - ISO-8859  欧洲
  - BIG5  繁体中文

语法Grammar  ' " \ b f n r t v

| 转义序列 | 字符名称 | Unicode 编码 |
| --- | --- | --- |
|  \' | 单引号 | 0x0027 |
| \" | 双引号 | 0x0022 |
| \\ | 反斜杠 | 0x005C |
| \0 | 空 | 0x0000 |
| \a | 警报 | 0x0007 |
| \b | 退格符 | 0x0008 |
| \f | 换页符 | 0x000C |
| \n | 换行符 | 0x000A |
| \r | 回车 | 0x000D |
| \t | 水平制表符 | 0x0009 |
| \v | 垂直制表符 | 0x000B |



<a name="QyLTH"></a>
### Undefined

- 类型表示未定义，它的类型只有一个值，就是 undefined
- 任何变量在赋值前是 Undefined 类型、值为 undefined
- JavaScript 的代码 undefined 是一个变量，而并非是一个关键字，这是 JavaScript 语言公认的设计失误之一
- 为了避免无意中被篡改，可以使用 void 0 来获取 undefined 值。



<a name="dDWug"></a>
### Null

- 与 undefined 不同，null 是 JavaScript 关键字
- undefined则是一种数据类型，表示未定义
- null属于对象（object）的一种，意思是该对象为空
```javascript
typeof null; // object
typeof undefined; // undefined
```

---

<a name="G2Adg"></a>
### 思考
```javascript
(1.1+1.3) -2.4 < Number.EPSILON
>> false
```


```javascript
var\uFEFFAa=1
>> vara=1 
vara=1
>> undefined
a
>> 1
```
<a name="zOSCB"></a>
### 参考链接

- 正则表达式：[ https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
- 揭秘 0.1 + 0.2 != 0.3 [https://www.barretlee.com/blog/2016/09/28/ieee754-operation-in-js/](https://www.barretlee.com/blog/2016/09/28/ieee754-operation-in-js/)
- ASCII，Unicode 和 UTF-8 ：[ http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
<a name="9xeGc"></a>
### 参考名词

- [字符集](https://zh.wikipedia.org/zh/%E5%AD%97%E7%AC%A6%E7%BC%96%E7%A0%81)：字符编码（英语：Character encoding）、字集码是把字符集中的字符编码为指定集合中某一对象（例如：比特模式、自然数序列、8 位组或者电脉冲），以便文本在计算机中存储和通过通信网络的传递。常见的例子包括将拉丁字母表编码成摩斯电码和 ASCII。其中，ASCII 将字母、数字和其它符号编号，并用 7 比特的二进制来表示这个整数。通常会额外使用一个扩充的比特，以便于以 1 个字节的方式存储。在计算机技术发展的早期，如 ASCII（1963 年）和 EBCDIC（1964 年）这样的字符集逐渐成为标准。但这些字符集的局限很快就变得明显，于是人们开发了许多方法来扩展它们。对于支持包括东亚 CJK 字符家族在内的写作系统的要求能支持更大量的字符，并且需要一种系统而不是临时的方法实现这些字符的编码。
- [Unicode ](https://zh.wikipedia.org/zh-hans/Unicode)：中文：万国码、国际码、统一码、单一码。是计算机科学领域里的一项业界标准。它对世界上大部分的文字系统进行了整理、编码，使得电脑可以用更为简单的方式来呈现和处理文字。
- [ASCII ](https://zh.wikipedia.org/wiki/ASCII)：（American Standard Code for Information Interchange，美国信息交换标准代码）是基于拉丁字母的一套电脑编码系统。它主要用于显示现代英语，而其扩展版本延伸美国标准信息交换码则可以部分支持其他西欧语言，并等同于国际标准 ISO/IEC 646。美国信息交换标准代码是这套编码系统的传统命名，互联网号码分配局现在更倾向于使用它的新名字 US-ASCII[2]。美国信息交换标准代码是美国电气和电子工程师协会里程碑之一。
- Token：记号、标记。JS 里有效的输入元素都可以叫 Token。
- [NBSP ](https://zh.wikipedia.org/wiki/%E4%B8%8D%E6%8D%A2%E8%A1%8C%E7%A9%BA%E6%A0%BC)：不换行空格（英语：no-break space，NBSP）是空格字符，用途是禁止自动换行。HTML 页面显示时会自动合并多个连续的空白字符（whitespace character），但该字符是禁止合并的，因此该字符也称作“硬空格”（hard space、fixed space）。Unicode 码点为：U+00A0 no-break space。
- [零宽空格](https://zh.wikipedia.org/zh-hans/%E9%9B%B6%E5%AE%BD%E7%A9%BA%E6%A0%BC)：（zero-width space, ZWSP）是一种不可打印的 Unicode 字符，用于可能需要换行处。在 HTML 页面中，零宽空格可以替代。但是在一些网页浏览器（例如 Internet Explorer 的版本 6 或以下）不支持零宽空格的功能。
