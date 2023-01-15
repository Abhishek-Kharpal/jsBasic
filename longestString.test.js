modules=require('./longestString')

test('find longest string in array',()=>{
    expect(modules.Regular(["we", "love", "code", "academy"])).toEqual("academy")
})

test('find longest string in array',()=>{
    expect(modules.Arrow(["we", "love", "code", "academy"])).toEqual("academy")
})