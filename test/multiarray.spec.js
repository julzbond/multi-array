var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var multiArrays = require ('../multiarray.js');

describe ("multiArrays", function(){

  it('should be a function', function(){
    expect(multiArrays).to.be.a('function');
  });

  it('should return a boolean', function(){
    expect(typeof multiArrays(['a','b',['c','d',['e']]],'e')).to.equal('boolean');
  });

  it('should return true if the target value exists in a multidimentional array otherwise it returns false', function(){
    expect(multiArrays(['a','b',['c','d',['e']]],'e')).to.equal(true);
    expect(multiArrays(['a','b',['c','d',['e']]],'f')).to.equal(false);
  });

});