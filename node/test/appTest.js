const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
  it('app should return Hello', function(){
    assert.equal(app(),'Hello ci test:1.');
  });
});