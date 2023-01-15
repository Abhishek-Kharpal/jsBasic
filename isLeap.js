function isLeapReg(val){
    return (val%400===0)?1:((val%4===0)&&(val%100!==0))?1:0;
}

const isLeapArrow = (val)=>{
    return (val%400===0)?1:((val%4===0)&&(val%100!==0))?1:0;
}

module.exports={
    Regular: isLeapReg,
    Arrow: isLeapArrow
}