/* 
 写一个正则表达式 匹配所有 Number 直接量
 写一个 UTF-8 Encoding 的函数
 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
 */


/*
 * 第一题
 * 写一个正则表达式 匹配所有 Number 直接量
 * 思路：
 * 11  10进制
 * 0b11 2进制
 * 0o11 8进制
 * 0x11 16进制
 */

function isNumber(val) {
	return /^[-]?[\.\d]+$/.test(val);
}
isNumber(11);   //true
isNumber(0b11); //true
isNumber(0o11); //true
isNumber(0x11); //true


