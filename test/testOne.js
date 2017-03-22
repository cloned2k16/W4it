var w4it        = require('../index.js')
,   chai        = require('chai')
,   expect      = chai.expect
,   assert      = chai.assert
,   _           = {}
;
    _.inProgress= true;
    
describe('wait for delayed calls ...', function() {
  before                (function() {      });

  after                 (function() {      });

  beforeEach            (function() {    
    _.inProgress= true;
    setTimeout(function () { _.inProgress = false; },1234);   
  });

  afterEach             (function() {      });

  // test cases ------------------------------------------------------------------------------------
  
  it ("check that effectively waits, for 'inProgress' to change. (passing a function)"                   , function (){
    w4it.disableAnimation();
    w4it.done ( function done () { return !_.inProgress; }
                , function then () {
            expect(_.inProgress).equal(false);
        }        
  )}); 

  it ("check that effectively waits, for 'inProgress' to change. (passing var name and object context)"  , function (){
    w4it.disableAnimation();
    w4it.done ( 'inProgress',_
                , function then () {
            expect(_.inProgress).equal(false);
        }        
  )}); 

  
});

