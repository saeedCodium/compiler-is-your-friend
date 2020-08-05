/*
Question #3: Encapsulation

The class below, SafeDivisor, exists so that every `divide()` method call will
not cause the "divide by zero" exception to occur.

Someone wrote an `exploit()` function to test this class. He's intentionally
setting the `divisor` member variable with 0 so that the `divide()` method
will explode.

Make a *single* code change such that the compiler will prevent him from bypassing
the encapsulation. In other words, he will need to call the `setDivisor()` method
to set the `divisor` member variable.
*/
var SafeDivisor = /** @class */ (function () {
    function SafeDivisor() {
        this.divisor = 1;
    }
    SafeDivisor.prototype.setDivisor = function (value) {
        if (value == 0) {
            throw new Error("Value should not be 0");
        }
        this.divisor = value;
    };
    SafeDivisor.prototype.divide = function (x) {
        return x / this.divisor;
    };
    return SafeDivisor;
}());
function exploit() {
    var sd = new SafeDivisor();
    sd.divisor = 0;
    return sd.divide(42);
}
