var area = require('../triangle.js');
var assert = require('assert');

describe('Area', function (){
    it('should return 10 when base is 2 and height is 5', function(){
        assert.equal(area(2,5), 10);
    });
});