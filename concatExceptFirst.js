function concatExceptFirstReg(vals){
    return vals[0].substring(1)+vals[1].substring(1);
}

const concatExceptFirstArrow=(vals)=>{
    return vals[0].substring(1)+vals[1].substring(1);
}

module.exports={
    Regular: concatExceptFirstReg,
    Arrow: concatExceptFirstArrow
}