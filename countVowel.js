function countVowelReg(val){
    let vowels=['a','e','i','o','u'];
    let res=0;
    for(let i=0;i<val.length;i++)
    {
        if(vowels.includes(val[i])){
            ++res;
        }
    }
    return res;
}
const countVowelArrow=(val)=>{
    let vowels=['a','e','i','o','u'];
    let res=0;
    for(let i=0;i<val.length;i++)
    {
        if(vowels.includes(val[i])){
            ++res;
        }
    }
    return res;
}

module.exports={
    Regular: countVowelReg,
    Arrow: countVowelArrow
}