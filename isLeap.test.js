modules=require('./isLeap')

test('check whether is leap',()=>{
    expect(modules.Regular(2000)).toBe(1);
    expect(modules.Regular(4)).toBe(1);
    expect(modules.Regular(200)).toBe(0)
})

test('check whether is leap',()=>{
    expect(modules.Arrow(2000)).toBe(1);
    expect(modules.Arrow(4)).toBe(1);
    expect(modules.Arrow(200)).toBe(0)
})