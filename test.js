var chai = require('chai')
var dirtyChai = require('./index')

chai.use(dirtyChai())


describe('dirty-chai', function() {
   it('fucking works', function() {
       chai.expect(true).to.fucking.be.true
       chai.expect(false).to.be.fucking.false
       chai.expect(true).to.be.just.FUCKING.true
       chai.expect(true).to.be.JUST.FUCKING.true
   })
});