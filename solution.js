// Rami Al-Saadi 2022 
// My 100% performance 100% correctness efficient algorithm/solution to solve the coding test found at: https://app.codility.com/c/run/demoP9WWQW-UE3/
// The challenge is to write a function that, given an array of integers returns the smallest positive integer that does not exist in the array.
// But the algorithm has to be efficient and high performing.
// For example, given A = [1, 3, 6, 1, 2], the function should return 4.
// Given A = [1, 2, 3, 4], the function should return 5.
// Given A = [-1, -6], the function should return 1.

// function solution takes parameter A as the array to be processed and searched for the smallest positive number(if it exists), otherwise -if no positive integer is found- the function would return 1 since 1 is the smallest positive integer.


// solution function def.
// @params A : array
function solution(A) {
    const length = A.length;
// const length will holds the length of the array

    if (length < 1)
        return 1;
// early detection and termination with returning 1 in the case of an empty array input
    
    const B = A.sort((a, b) => a - b);
// As the first step I decided to sort the array (numerically ascending) and set it to a function-scope const variable B
// (Note that: Even though .sort does sort the A array too and A and B are heap variables and are both references the same array)
    
    let i = 0;
// i will be the index that we will be using throughout the function to scan the array items (ie the integers) starting with the smallest
    while (i < length) {
        if (B[i] > 0) {
            break;
        }
        i++;
        // with each loop we skip a negative number(if any exist)
    }
    // using the while loop above we skip all the negative numbers in the array (if any)
    
    if (B[i] !== 1 || i == length)
        return 1;
    // at this point we have already skipped the negative numbers, and so if now we(i) reached the end of the array then it means there 
    // are no positive integers so we return 0
    // at this point we have skipped all the negative integers and have reached the first positive integer, and so, if the smallest 
    // positive int is not 1, then 1 is the smallest positive int and our search is finished.
    
    while (i < length - 1) {
        if (B[i + 1] - B[i] > 1)
            return B[i] + 1;
        i++;
    }
    // this loop is scanning all the sorted positive integers in the array and will return the first missing one as soon as i reaches it
    if (B[i])
        return B[i] + 1;
    // in case the whole array is scanned and no missing number was found, this if statement is responsible for the highest number in the array + 1
    return 1;
    // if the program reaches this point for any strange reason, then return 1. 
}
