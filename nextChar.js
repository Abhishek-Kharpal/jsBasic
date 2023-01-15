function nextCharReg(val){
    let res='';
    for(let i=0;i<val.length;i++){
        if(val[i]==='z'){
            res+='a';
            continue;
        }
        if(val[i]==='Z')
        {
            res+='A';
            continue;
        }
        if(val[i].toLowerCase==val[i].toUpperCase){
            continue;
        }
        res+=String.fromCharCode(val.charCodeAt(i)+1);
    }
    return res;
}

let nextCharArrow=(val)=>{
    let res='';
    for(let i=0;i<val.length;i++){
        if(val[i]==='z'){
            res+='a';
            continue;
        }
        if(val[i]==='Z')
        {
            res+='A';
            continue;
        }
        if(val[i].toLowerCase==val[i].toUpperCase){
            continue;
        }
        res+=String.fromCharCode(val.charCodeAt(i)+1);
    }
    return res;
}

module.exports={
    Regular: nextCharReg,
    Arrow: nextCharArrow
}