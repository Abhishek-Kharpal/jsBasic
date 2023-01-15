function changeCaseReg(val){
    for(let i=0;i<val.length;i++)
    {
        if((val[i]>='a')&&(val[i]<='z')){
            val=val.substring(0,i)+val[i].toUpperCase()+val.substring(i+1)
        }
        else if((val[i]>='A')&&(val[i]<='Z')){
            val=val.substring(0,i)+val[i].toLowerCase()+val.substring(i+1)
        }
    }
    return val
}

const changeCaseArrow = (val) =>{
    for(let i=0;i<val.length;i++)
    {
        if((val[i]>='a')&&(val[i]<='z')){
            val=val.substring(0,i)+val[i].toUpperCase()+val.substring(i+1)
        }
        else if((val[i]>='A')&&(val[i]<='Z')){
            val=val.substring(0,i)+val[i].toLowerCase()+val.substring(i+1)
        }
    }
    return val
}

module.exports = {
    Regular: changeCaseReg,
    Arrow: changeCaseArrow
};