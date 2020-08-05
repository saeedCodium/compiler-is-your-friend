/*
Question #2: Immutability
The function below is a "safe divide" function. That is, it promises not to throw any "divide by zero" exceptions.
Questions:
1) Spot and describe the cause of the bug that causes the "divide by zero" to occur.
the problem will occurs when the number is 42
2) Now, make a *single* code change on line 14:
2.1) without changing the number 42;
2.2) such that cause of the bug can be spotted by the compiler at *compile time*.
we changed the x to const but in line x = x - 42 we will have error because you can not assign a new value to the const
3) What did you learn from this exercise?
*/
function safeDivide() {
    var x = 42;
    if (x == 0)
        throw new Error("x should not be 0");
    x = x - 42;
    return 42 / x;
}
