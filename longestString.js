function longestStringReg(vals){
    let res="";
    let curr=0;
    vals.forEach((element)=>{
        if(element.length>curr){
            curr=element.length;
            res=element
        }
    })
    return res;
}

const longestStringArrow=(vals)=>{
    let res="";
    let curr=0;
    vals.forEach((element)=>{
        if(element.length>curr){
            curr=element.length;
            res=element
        }
    })
    return res;
}

module.exports={
    Regular: longestStringReg,
    Arrow: longestStringArrow
}