/*
 * 写一个 UTF-8 Encoding 的函数
 * 思路：
 * 输入字符串，转成UTF8的值，输出字节
 */
// 
function UTF8_Encoding(str) {
	encoder = new TextEncoder('utf8');
    return encoder.encode(str);
	// return new Buffer();
}

UTF8_Encoding('厉害'); // Uint8Array(6) [229, 142, 137, 229, 174, 179]