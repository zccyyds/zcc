/*
* 掃描器
*/
export default class Scanner {
    constructor(templateStr){
        console.log(templateStr)
        this.templateStr =templateStr
        //指針
        this.pos = 0
        //剩餘文本
        this.tail = templateStr
    }

    //跳過指定內容
    scan(Tag) {
        if(this.tail.indexOf(Tag) == 0){
            //Tag有多長 pos加多長
            this.pos += Tag.length
            //pos的變長後 尾巴字符串也要變化
            this.tail = this.templateStr.substring(this.pos)
        }
    }
    
    //讓指針進行掃描 直到遇到指定內容結束 並且能夠返回結束之前路過的文字
    scanUtil(stopTag) {
        //記錄進入函數指針的位置
        const pos_backup = this.pos
        while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
            this.pos++;
            this.tail = this.templateStr.substring(this.pos)
        }
        //返回初始位置和末尾位置的字符串
        return this.templateStr.substring(pos_backup,this.pos)
    }

    //判斷是否走到模版字符串盡頭
    eos() {
        return this.pos >= this.templateStr.length
    }
}