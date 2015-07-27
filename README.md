# Multidimensional Array Search
Find an element if it exists in a collection of arrays within arrays.

## Specs
Write a function named "locate" that takes two arguments, a multidimensional array of values and a target. This function returns `true` if the target value exist in a multidimentional array otherwise it returns `false`

## Example:

    locate(['a','b',['c','d',['e']]],'e'); // should return true
    locate(['a','b',['c','d',['e']]],'a'); // should return true
    locate(['a','b',['c','d',['e']]],'f'); // should return false

## Additional Requirements
- Create a Git Repository for this challenge
    - commit often and have your commit messages be descriptive
- Write tests for your function using the Mocha and Chai Libraries.
  - Provide test for all cases. Handle unexpected inputs, invalid arguments, etc.