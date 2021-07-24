
import parseTemplateToTonkens from './parseTemplateToTonkens'
import readerTemplate from './renderTemplate'
//全局提供_mustache方法
window._mustache = {
    //渲染方法
    render(templateStr,data){
        var tokens = parseTemplateToTonkens(templateStr)
        
        var resultStr = readerTemplate(tokens,data)
        
        return resultStr
    }
}