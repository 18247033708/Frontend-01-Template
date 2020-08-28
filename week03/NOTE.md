# 每周总结可以写在这里
对象分类。

宿主对象（host Objects）：由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。
内置对象（Built-in Objects）：由 JavaScript 语言提供的对象。
固有对象（Intrinsic Objects ）：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。
原生对象（Native Objects）：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。
普通对象（Ordinary Objects）：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承。

值属性
这些全局属性返回一个简单值，这些值没有自己的属性和方法。

Infinity
NaN
undefined
globalThis
函数属性
全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。

eval()
uneval()
isFinite()
isNaN()
parseFloat()
parseInt()
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()
已废弃
escape()
unescape()
基本对象
顾名思义，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。

Object
Function
Boolean
Symbol
错误对象
错误对象是一种特殊的基本对象。它们拥有基本的 Error 类型，同时也有多种具体的错误类型。

Error
AggregateError
EvalError
InternalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError
数字和日期对象
用来表示数字、日期和执行数学计算的对象。

Number
BigInt
Math
Date
字符串
用来表示和操作字符串的对象。

String
RegExp
可索引的集合对象
这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。

Array
Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
BigInt64Array
BigUint64Array
使用键的集合对象
这些集合对象在存储数据时会使用到键，包括可迭代的Map 和 Set，支持按照插入顺序来迭代元素。

Map
Set
WeakMap
WeakSet
结构化数据
这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON （JavaScript Object Notation）编码的数据。

ArrayBuffer
SharedArrayBuffer
Atomics
DataView
JSON
控制抽象对象
控件抽象可以帮助构造代码，尤其是异步代码（例如，不使用深度嵌套的回调）。

Promise
Generator
GeneratorFunction
AsyncFunction
反射
Reflect
Proxy
