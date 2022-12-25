
export function LongTxt({desc,length=100, isReadMore}){

    function returnDescNum(){
        if(desc.length > length && isReadMore){
            return desc.slice(0,length)
        } else {
            return desc
        }
    }
    

    return returnDescNum()
}