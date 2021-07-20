
import parseTemplateToTonkens from './parseTemplateToTonkens'
//全局提供_mustache方法
window._mustache = {
    //渲染方法
    render(templateStr,data){
        var tonken = parseTemplateToTonkens(templateStr)

        console.log(tonken)
    }
}