# 每周总结可以写在这里
#### 4月第1周

**为了更好地查看，可以移步至语雀** [https://www.yuque.com/ddduolegeduo/lslgn8](https://www.yuque.com/ddduolegeduo/lslgn8)


# 前言

**
![](https://cdn.nlark.com/yuque/0/2020/svg/1251840/1586511181231-2acd2d72-ebee-43bb-b222-d909f4ae743c.svg)**<br />** 编程能力：**<br /> 就是用代码解决问题的能力，你编程能力越强，就能解决越复杂的问题，细分又有调试、算法、数据结构、OS   原理等这些的支撑，你才能解决各种麻烦的问题。<br />
<br />** 架构能力：**<br /> 则是解决代码规模的问题，当一个系统足够复杂，你会写每一块，能解决每一个问题，不等于你能搞定整个系   统，这就需要架构能力，架构能力包含了一些意识，比如解耦、接口隔离，也包含认识业务建立抽象模型，也有   一些常见的模式，比如经典的 MVC，还有设计层面，面向对象、设计模式等等。<br />
<br />** **[**工程能力**](https://www.infoq.cn/article/Kpd_C06scWePcO8fB7ex)**：**<br /> 则是解决协作的问题，当系统规模更大，光靠一个人，是没办法完成的，如何保证几个高手互相能够配合好？如   何保证项目里面水平最差的人不拖后腿？这个工程化建设，往往会跨越多个业务，以汇报关系上的团队为单位来   做。包括前后端解耦，模块化，质量保证，代码风格，等等。<br />
<br />
<br />溯源法常用网站

- [https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
- [https://www.w3school.com.cn/html/html_entities.asp](https://www.w3school.com.cn/html/html_entities.asp)
- [https://www.w3.org/1999/xhtml/](https://www.w3.org/1999/xhtml/)
- [https://html.spec.whatwg.org/multipage/](https://html.spec.whatwg.org/multipage/)
- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)


<br />![mvc.jpeg](https://cdn.nlark.com/yuque/0/2020/jpeg/1251840/1586511267805-b04b77d9-9ff6-41ae-9646-0991116db079.jpeg#align=left&display=inline&height=488&name=mvc.jpeg&originHeight=488&originWidth=935&size=71709&status=done&style=none&width=935)


# 构建自己的前端知识体系

**为什需要构建知识体系？**<br />我们大脑对新知识的记忆总是依赖于旧有的认知，如果我们大脑中储备的知识都是杂乱无章的，那么我们在掌握新知识的时候，大脑总是无法迅速联想到旧有知识，造成对新知识的遗忘变得很快<br />就像一间屋子，堆放了各种物品，当你要找一个东西时发现屋子里零零碎碎什么都有，没有办法快速找到所需要的东西，这时我们需要建立自己的知识体系，当有新知识时，放到合适的位置，方便提取和记忆<br />构建自己的知识体系，就是就是把一些零碎的，分散的，相对独立的知识概念或者观点加以整合，使之形成具有一定联系的知识系统**<br />
<br />


---

**winter大大的思维导图**
![](https://cdn.nlark.com/yuque/0/2020/svg/1251840/1586663962202-c4197b52-04e7-44d9-800b-062ffcfb31b2.svg)名词解释：

- DTD：Document Type Definition（[ https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd）](https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd%EF%BC%89)
- Entity：实体（在 HTML 语境下就是 & 符后边的东西）（[https://developer.mozilla.org/en-US/docs/Glossary/Entity](https://developer.mozilla.org/en-US/docs/Glossary/Entity)）
- ARIA：Accessible Rich Internet Applications（[ https://www.w3.org/TR/html-aria/）](https://www.w3.org/TR/html-aria/%EF%BC%89)
- Token：有效的输入元素
- Comment：注释
- WhiteSpace：空白符
- Line Terminator：行终止符
- Atom：原子
- Semantics：语义
- Runtime：运行时




---
自我扩展

**学习任何一门语言都要从语法和语义开始，那么他们到底是什么呢？**<br />

**词法分析（Lexical analysis或Scanning）和词法分析程序（Lexical analyzer或Scanner）**<br />　　词法分析阶段是编译过程的第一个阶段。这个阶段的任务是从左到右一个字符一个字符地读入源程序，即对构成源程序的字符流进行扫描然后根据构词规则识别单词(也称单词符号或符号)。词法分析程序实现这个任务。词法分析程序可以使用lex等工具自动生成。<br />
<br />**语法分析（Syntax analysis或Parsing）和语法分析程序（Parser）**<br />　　语法分析是编译过程的一个逻辑阶段。语法分析的任务是在词法分析的基础上将单词序列组合成各类语法短语，如“程序”，“语句”，“表达式”等等.语法分析程序判断源程序在结构上是否正确.源程序的结构由上下文无关文法描述.<br />
<br />**语义分析（Syntax analysis）**<br />　　语义分析是编译过程的一个逻辑阶段. 语义分析的任务是对结构上正确的源程序进行上下文有关性质的审查, 进行类型审查.例如一个C程序片断:<br />　　int arr[2],b;<br />　　b = arr * 10;<br />　　源程序的结构是正确的.<br />　　语义分析将审查类型并报告错误:不能在表达式中使用一个数组变量,赋值语句的右端和左端的类型不匹配.<br />
<br />**Lex**<br />　　一个词法分析程序的自动生成工具。它输入描述构词规则的一系列正规式,然后构建有穷自动机和这个有穷自动机的一个驱动程序,进而生成一个词法分析程序.<br />
<br />**Yacc**<br />　　一个语法分析程序的自动生成工具。它接受语言的文法,构造一个LALR(1)分析程序.因为它采用语法制导翻译的思想,还可以接受用C语言描述的语义动作,从而构造一个编译程序. Yacc 是 Yet another compiler compiler的缩写.<br />
<br />****源语言（Source language）和源程序（Source program）****<br />　　被编译程序翻译的程序称为源程序,书写该程序的语言称为源语言.<br />**目标语言（Object language or Target language）和目标程序（Object program or Target program）**<br />　　编译程序翻译源程序而得到的结果程序称为目标程序, 书写该程序的语言称为目标语言.<br />**中间语言（中间表示）（Intermediate language(representation)）**<br />　　在进行了语法分析和语义分析阶段的工作之后，有的编译程序将源程序变成一种内部表示形式，这种内部表示形式叫做中间语言或中间表示或中间代码。所谓“中间代码”是一种结构简单、含义明确的记号系统，这种记号系统复杂性介于源程序语言和机器语言之间，容易将它翻译成目标代码。另外，还可以在中间代码一级进行与机器无关的优化。<br /> <br />**文法（Grammars）**<br />　　文法是用于描述语言的语法结构的形式规则。文法G定义为四元组(，，，)。其中为非终结符号(或语法实体，或变量)集；为终结符号集；为产生式(也称规则)的集合；产生式(规则)是形如或 a ::=b 的(a , b)有序对,其中(∪)且至少含有一个非终结符，而(∪)。，和是非空有穷集。称作识别符号或开始符号，它是一个非终结符，至少要在一条规则中作为左部出现。<br />　　一个文法的例子: G=(={A，R},={0,1} ，={A?0R，A?01,R?A1},=A)<br />
<br />文法分类（A hierarchy of Grammars）<br />　　著名语言学家Noam Chomsky定义了四类文法和四种形式语言类，文法的四种类型分别是0型、1型、2型和3型。几类文法的差别在于对产生式施加不同的限制，分别是：<br />　　0型文法(短语结构文法)(phrase structure grammars)：<br />　　设G=(，，，)，如果它的每个产生式是这样一种结构： (∪)　　且至少含有一个非终结符，而(∪)，则G是一个0型文法。<br />　　1型文法（上下文有关文法）(context-sensitive grammars)：<br />　　设G=(，，，)为一文法，若中的每一个产生式均满足|，仅仅　　除外，则文法G是1型或上下文有关的。<br />　　2型文法（上下文无关文法）(context-free grammars)：<br />　　设G=(，，，)，若P中的每一个产生式满足：是一非终结符，(∪)　　则此文法称为2型的或上下文无关的。<br />　　3型文法（正规文法）(regular grammars)：<br />　　设G=(，，，)，若中的每一个产生式的形式都是A→aB或A→a，其中A和B都是非终结，a是终结符，则G是3型文法或正规文法。<br />　　0型文法产生的语言称为0型语言。<br />　　1型文法产生的语言称为1型语言，也称作上下文有关语言。<br />　　2型文法产生的语言称为2型语言，也称作上下文无关语言。<br />　　3型文法产生的语言称为3型语言，也称作正规语言。


---



**思考**<br />老师的知识再好，没消化也不是自己的，所以还是要逐步建立自己的知识体系逐步迭代更新、扩展，同时借鉴参考老师的知识体系，这个知识体系我会时常更新的<br />

![](https://cdn.nlark.com/yuque/0/2020/svg/1251840/1586940260782-e6f5585f-b106-416c-a272-f4d901d1ce5c.svg)


<br />
<br />
<br />其他：<br />google调试获取html代码
```
Array.prototype.map.call($0.querySelectorAll('code'), e => e.innerText).join('\n')
```

# 前端与工程体系

大家眼中的优秀的前端工程系是什么样？<br />熟练掌握Vue React ，会性能优化，Webpack Bable ，会写NodeJS ，十年经验，会闭包函数式编程···<br />
<br />winter眼中的优秀前端工程师是什么样的？
![](https://cdn.nlark.com/yuque/0/2020/svg/1251840/1586663566579-6c14b50c-b93a-45f4-8313-dc651ccac11f.svg)

通过实际的业务项目取得成就的案例：
```
业务案例--应用手势
业务目标&指标：点击率
技术方案：给tab组件增加手势操作
        实施：编写通用tab组件，在业务中加入对应功能上线；向所有导购业务推广，形成制度
        结果：点击率提升3倍；推广到所有导购业务，符合预期
备注：站在业务角度思考问题
```
```
技术案例--爬取商品价格
背景：在某浏览器插件项目中，需要爬取各个网站的价格比价，但是各个网站会采用图片价格等手段防御
方案：引入JS端的数字识别技术，靠AI技术解决
实施：直接上线
结果：成功采集到信息
```
```
工程案例--XSS攻击的预防
目标&指标：XSS攻击白帽子反馈漏洞
技术方案：整理安全手册，review历史代码，代码扫描工具
实施：对全体前端宣讲，整体review代码，更改代码发布流程
结果：XSS漏洞大幅减少
备注：XSS攻击通常指的是通过利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序。这些恶意网页程序通常是JavaScript，但实际上也可以包括Java、 VBScript、ActiveX、 Flash 或者甚至是普通的HTML。攻击成功后，攻击者可能得到包括但不限于更高的权限（如执行一些操作）、私密网页内容、会话和cookie等各种内容。
```
总结：<br />当你想在团队内做一个事情时：

1. 设定目标：目标最好能跟公司业务指标，或者团队痛点挂钩
1. 分析现状：能够量化的表示现在的现状。比如图形化你的数据
1. 技术方案：设计你的技术方案，并且能够预估收益，以此来调动资源
1. 小规模实施：发现潜在问题，验证方案
1. 迭代改良：大规模上线


<br />winter问答：<br />Q: 如何读开源项目源代码<br />A: 其中一个方法，通过单步追踪，在调试中学习。或者更深入的方法：1. 帮写文档2. fix bug3. 单步追踪4. 提交作者review<br />
<br />Q: 那些场景会用到链表<br />A: 链表用到的比较少，访问不是很方便，平时数据结构的需求主要用数组顺序表，二叉树多用于排序，还有哈希等等<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


