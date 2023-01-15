modules=require('./nextChar')

test('Convert letter to next letter',()=>{
    expect(modules.Regular("codeacademy")).toEqual("dpefbdbefnz");
    expect(modules.Regular("lazyinterns")).toEqual("mbazjoufsot");
})

test('Convert letter to next letter',()=>{
    expect(modules.Arrow("codeacademy")).toEqual("dpefbdbefnz");
    expect(modules.Arrow("lazyinterns")).toEqual("mbazjoufsot");
})