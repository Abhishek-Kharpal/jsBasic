const modules = require('./isSameDigit')

test('check whether number has one distinct digit using regular function',()=>{
    expect(modules.Regular(22)).toEqual(1);
    expect(modules.Regular(23)).toEqual(0);
})

test('check whether number has one distinct digit using arrow function',()=>{
    expect(modules.Arrow(22)).toEqual(1);
    expect(modules.Arrow(23)).toEqual(0);
})