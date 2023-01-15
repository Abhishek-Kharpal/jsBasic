function maxEvenReg (vals){
    let curr = Number.MIN_VALUE
    vals.forEach(
        (element)=>{
            switch(element%2){
                case 0:
                    curr=Math.max(element,curr)
                    break;
            }
        }
    )
    switch(curr===Number.MIN_VALUE){
        case true:
            return -1;
        default:
            return curr;
    }
}

const maxEvenArrow = (vals)=>{
    let curr = Number.MIN_VALUE
    vals.forEach(
        (element)=>{
            switch(element%2){
                case 0:
                    curr=Math.max(element,curr)
                    break;
            }
        }
    )
    switch(curr===Number.MIN_VALUE){
        case true:
            return -1;
        default:
            return curr;
    }
}

module.exports = {
    Regular: maxEvenReg,
    Arrow: maxEvenArrow
};