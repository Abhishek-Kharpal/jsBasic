const modules = require('./changeCase')

test('change case of string',()=>{
    expect(modules.Regular("Abhishek")).toEqual("aBHISHEK");
    expect(modules.Regular("ABHISHEK")).toEqual("abhishek");
})

test('change case of string',()=>{
    expect(modules.Arrow("Abhishek")).toEqual("aBHISHEK");
    expect(modules.Arrow("ABHISHEK")).toEqual("abhishek");
})