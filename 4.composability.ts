/*
Question #3: Composability
For this problem, coding on your part is not required. Thinking and 
explaining your understanding is what's required.
*/

//
// Non-composable implementation
//
function findFirstNegativeNumberNonComposable(numbers: number[]) : number | undefined {
    for (let i of numbers) {
        if (i < 0) 
        return i;
    }
}
function findFirstOneCharacterStringNonComposable(strings: string[]) : string | undefined {
    for (let str of strings) {
        if (str.length == 1)
         return str; 
    }
}

/*
Suppose now you want to log an error whenever we fail to find an element. The Non-composable
implementation now with logging probably will look like this.
*/
function findFirstNegativeNumberNonComposableWithLogging(numbers: number[]) : number | undefined {
    for (let i of numbers) {
        if (i < 0) 
        return i;
    }
    console.error("No matching value found");
}
function findFirstOneCharacterStringNonComposableWithLogging(strings: string[]) : string | undefined {
    for (let str of strings) {
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
function first<T>(range: T[], p: (elem: T) => boolean) : T | undefined {
    for (let elem of range) {
        if (p (elem)) 
        return elem;
    }
    console.error("No matching value found");
}
function findFirstNegativeNumberComposable(numbers: number[]) : number | undefined {
    return first(numbers, n => n < 0);
}
function findFirstOneCharacterStringComposable(strings: string[]) : string | undefined {
    return first(strings, str => str.length == 1);
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