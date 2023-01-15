modules=require('./countVowel')

test('count vowel in string',()=>{
    expect(modules.Regular('codeacademy')).toEqual(5);
})

test('count vowel in string',()=>{
    expect(modules.Arrow('codeacademy')).toEqual(5);
})