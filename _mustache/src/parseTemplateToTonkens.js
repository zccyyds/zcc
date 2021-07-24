import nestToken from "./nestToken";
import Scanner from "./Scanner";
/*
*   将扫描器得到的结果转换为数组形式
*/

export default function parseTemplateToTonkens(templateStr){
    var tonken = []
    //创建扫描器
    var scanner = new Scanner(templateStr)
    var words
    //让扫描器工作
    while (!scanner.eos()) {
        words = scanner.scanUtil('{{')
        if(words != ''){
            tonken.push(['text',words])
        }
        //跳过指定字符串
        scanner.scan('{{')
        //收集标记字符串之间的值
        words = scanner.scanUtil('}}')
        if(words != ''){
            if(words[0] == '#'){
                tonken.push(['#',words.substring(1)])
            }else if(words[0] == '/'){
                tonken.push(['/',words.substring(1)])
            }else{
                tonken.push(['data',words])
            }
        }
        scanner.scan('}}')
    }

    return nestToken(tonken)
}