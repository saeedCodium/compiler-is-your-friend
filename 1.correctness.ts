
/*
Question #1: Correctness
In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.
Given a string as an input, find the index of the string "Script" within the input string. 
You can use Google to look up the method calls.
Questions:
1) How to ensure that the input is a string at compile time?
our function only get String
2) What did you learn from this exercise?
we learned how to get index of the word in a string
*/

function getScript(sentence : string) : number {
    let index = sentence.indexOf("Script")
    console.log(index)
    return  index
}


getScript("Hello Script Man")