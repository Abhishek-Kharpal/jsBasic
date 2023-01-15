modules=require('./scriptSuffix')

test('Check whether string has Script suffix',()=>{
    expect(modules.Regular('JavaScript')).toEqual(true);
    expect(modules.Regular('TypeScript')).toEqual(true);
    expect(modules.Regular('JavaScriPT')).toEqual(false);
    expect(modules.Regular('codeacademy')).toEqual(false);
})

test('Check whether string has Script suffix',()=>{
    expect(modules.Arrow('JavaScript')).toEqual(true);
    expect(modules.Arrow('TypeScript')).toEqual(true);
    expect(modules.Arrow('JavaScriPT')).toEqual(false);
    expect(modules.Arrow('codeacademy')).toEqual(false);
})