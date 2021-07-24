/*
*   判断obj对象的点运算符
*/
export default function lookUp(dataObj,keyName){
    //判断是否有点符号
    // console.log(keyName)
    if(keyName.indexOf('.' != -1) && keyName != '.'){
        // console.log(keyName,dataObj[keyName])
        var key = keyName.split('.');
        var item = dataObj;
        for(let i = 0; i < key.length; i++){
            item = item[key[i]];
        }
        return item;
    }
    //如果没有点符号返回
    // console.log(dataObj[keyName])
    return dataObj[keyName];
}