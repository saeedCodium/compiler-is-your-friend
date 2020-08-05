/*
Question #3: Composability
For this problem, coding on your part is not required. Thinking and
explaining your understanding is what's required.
*/
//
// Non-composable implementation
//
function findFirstNegativeNumberNonComposable(numbers) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var i = numbers_1[_i];
        if (i < 0)
            return i;
    }
}
function findFirstOneCharacterStringNonComposable(strings) {
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var str = strings_1[_i];
        if (str.length == 1)
            return str;
    }
}
/*
Suppose now you want to log an error whenever we fail to find an element. The Non-composable
implementation now with logging probably will look like this.
*/
function findFirstNegativeNumberNonComposableWithLogging(numbers) {
    for (var _i = 0, numbers_2 = numbers; _i < numbers_2.length; _i++) {
        var i = numbers_2[_i];
        if (i < 0)
            return i;
    }
    console.error("No matching value found");
}
function findFirstOneCharacterStringNonComposableWithLogging(strings) {
    for (var _i = 0, strings_2 = strings; _i < strings_2.length; _i++) {
        var str = strings_2[_i];
        if (str.length == 1)
            return str;
    }
    console.error("No matching value found");
}
/*
Now, I refactor the code such that it looks like this now.
*/
//
// Composable implementation
//
function first(range, p) {
    for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
        var elem = range_1[_i];
        if (p(elem))
            return elem;
    }
    console.error("No matching value found");
}
function findFirstNegativeNumberComposable(numbers) {
    return first(numbers, function (n) { return n < 0; });
}
function findFirstOneCharacterStringComposable(strings) {
    return first(strings, function (str) { return str.length == 1; });
}
/*
Think. Compare and contrast the:
1) Non-composable implementation
2) with the Composable implementation
Question:
1) What did you learn from this problem? Why would we want to refactor the code to be
like the Composable implementation?
if we use Generic we will reduce the redunduncing and there is one function can get string and number and solve the problem
*/ 
