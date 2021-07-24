/*
*   整理tokens数组，处理嵌套关系
*/
export default function nestToken(tokens){
    //结果数组
    var nestedtokens = [];
    //收集需要嵌套的token，栈结构
    var sections = [];
    //收集器，指向要搜集的数组
    var collector = nestedtokens;
    
    //循环tokens
    for(let i = 0; i < tokens.length; i++){
        var token = tokens[i];
        //判断tokens每一项的第一项
        switch(token[0]){
            case '#':
                collector.push(token)
                sections.push(token);
                collector = token[2] = [];
                break;
            case '/':
                sections.pop();
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedtokens;
                break;
            default:
                collector.push(token)
        }
    }

    return nestedtokens
}