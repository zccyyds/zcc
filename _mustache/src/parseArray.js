/*
*   处理数组，结合renderTemplate实现递归
*/

import lookUp from "./lookUp";
import readerTemplate from "./renderTemplate";

export default function parseArray(token,data){
    //得到整体数据data中这个数组要使用的部分
    var v = lookUp(data,token[1]);
    // console.log(v)
    //结果字符串
    var resultStr = '';
    //遍历v数组
    for(let i = 0; i < v.length; i++){
        //假如v[i]是数组就要添加扩展运算符将其扩张开来        
        resultStr += readerTemplate(token[2],{
            ...v[i],
            '.': v[i]
        })
    }
    console.log(resultStr)
    return resultStr
}