var assert = reqire('../triangle.js');

describe('Area', function (){
    it('should return 10 when first is 2 and second is 5', function(){
        assert.equal(area(2,5), 10);
    });
});