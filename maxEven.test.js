const modules = require('./maxEven');

test('find max even number using regular function',()=>{
    expect(modules.Regular([1,2,3])).toEqual(2);
    expect(modules.Regular([1,2,3,5,7])).toEqual(2);
    expect(modules.Regular([1,3])).toEqual(-1);
    expect(modules.Regular([1,4,3,2])).toEqual(4);
})

test('find max even number using arrow function',()=>{
    expect(modules.Arrow([1,2,3])).toEqual(2);
    expect(modules.Arrow([1,2,3,5,7])).toEqual(2);
    expect(modules.Arrow([1,3])).toEqual(-1);
    expect(modules.Arrow([1,4,3,2])).toEqual(4);
})