modules=require('./concatExceptFirst')

test('concate two strings except their first character',()=>{
    expect(modules.Regular(["code", "academy"])).toEqual("odecademy");
})

test('concate two strings except their first character',()=>{
    expect(modules.Arrow(["code", "academy"])).toEqual("odecademy");
})