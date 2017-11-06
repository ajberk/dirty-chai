function dirtyChai() {

    return function (chai) {
        var Assertion = chai.Assertion
        Assertion.addChainableMethod('fucking', function() {return true})
    }
}
module.exports = dirtyChai