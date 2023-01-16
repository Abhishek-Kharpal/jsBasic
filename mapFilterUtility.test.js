const {tripleEvenFiltering}=require('./mapFilterUtility');

describe('mapFilterUtility',()=>{
  describe('tripleEvenFiltering',()=>{

    it('should triple every element then filter the even numbers when input is an array',()=>{
      const result=tripleEvenFiltering([1,2,3]);
      expect(result).toEqual([6]);
    });

    it('should throw error when input is not an array',()=>{
      expect(()=>tripleEvenFiltering('abc')).toThrow(Error);
    });

    it('should throw error when array elements are not number',()=>{
      expect(()=>tripleEvenFiltering([12,16,'abc'])).toThrow(Error);
    });

  });
});