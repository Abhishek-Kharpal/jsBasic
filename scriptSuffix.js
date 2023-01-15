function suffixScriptReg(val){
    return val.endsWith('Script')
}

const suffixScriptArrow = (val)=>{
    return val.endsWith('Script')
}

module.exports={
    Regular: suffixScriptReg,
    Arrow: suffixScriptArrow
}