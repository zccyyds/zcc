/*
*   将数组拼接成dom字符串
*/
import lookUp from "./lookUp";
import parseArray from "./parseArray";

export default function readerTemplate(tokens,data){
    //拼接出来的DOM字符串
    var resultStr = ''
    //遍历一遍tokens
    for(let i = 0; i < tokens.length; i++){
        let token = tokens[i]
        //判断token的类型
        if(token[0] == 'text'){
            resultStr += token[1];
        }else if(token[0] == 'data'){
            resultStr += lookUp(data,token[1])
        }else if(token[0] == '#'){
            resultStr += parseArray(token,data)
        }

    }
    // console.log(resultStr)
    return(resultStr)
}