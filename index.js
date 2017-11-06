function dirtyChai() {

    return function (chai) {
        var Assertion = chai.Assertion;
        Assertion.addChainableMethod('fucking', function() {return true});
        Assertion.addChainableMethod('FUCKING', function() {return true});
        Assertion.addChainableMethod('just', function() {return true});
        Assertion.addChainableMethod('JUST', function() {return true});
    }
}
module.exports = dirtyChai