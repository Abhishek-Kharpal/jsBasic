function isSameDigitReg(val)
{
    let dig = val%10;
    let flag = 1;
    while(val>0)
    {
        if(flag===0)
            break;
        switch(dig===(val%10)){
            case false:
                flag=0;
                break;

        }
        val=Math.trunc(val/10);
    }
    return flag;
}

const isSameDigitArrow = (val) =>{
    let dig = val%10;
    let flag = 1;
    while(val>0)
    {
        if(flag===0)
            break;
        switch(dig===(val%10)){
            case false:
                flag=0;
                break;

        }
        val=Math.trunc(val/10);
    }
    return flag;
}

module.exports = {
    Regular: isSameDigitReg,
    Arrow: isSameDigitArrow
};