function longestStringReg(vals){
    let res="";
    let curr=0;
    vals.forEach((element)=>{
        res=(element.length===curr)?((element>res)?res:element):res
        res = (element.length>curr)?element:res;
        curr=res.length
    })
    return res;
}
//console.log(longestStringReg(['abc','ced','aaa']))
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