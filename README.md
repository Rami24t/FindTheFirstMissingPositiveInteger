# Find The First Missing Positive Integer
## I crafted this efficient algorithm that solved this test

my soluiton: https://github.com/Rami24t/FindTheFirstMissingPositiveInteger/blob/main/solution.js

#### My 100% performance 100% correctness efficient algorithm/solution to solve the coding test found at: https://app.codility.com/c/run/demoP9WWQW-UE3/

### The challenge/test 
The challenge is to write a function that, given an array of integers returns the smallest positive integer that does not exist in the array.

But the algorithm has to be efficient and high performing.

### Examples and Tests:
Examples of Expected Return value/ Tests:
Given [1, 3, 6, 1, 2], the function should/would return 4.
Given [1, 2, 3, 4], the function should/would return 5.
Given [-1, -6], the function should/would return 1.
Given [], the function should/would return 1.
Given [1, 2, 3, -5, 5, 6, 7, 4, 8, 9, 10, - 1, 0] , the function should/would return 11.
Given [1, 2, 3, -5, 5, 6, 7, 8, 9, 10, - 1, 0] , the function should/would return 4.
Given [-4,-3,-2,-1,0] , the function should/would return 1.

### My function and algorithm

My function solution takes parameter A as the array to be processed and searched for the smallest positive number(if it exists),
otherwise -if no positive integer is found- the function would return 1 as 1 is the smallest positive integer.

My algorithm starts by sorting the given array and then skipping the negative integers and scanning its positive integers for any missing integer starting from the smallest existing integer.
The algorithm also includes checks that would check if the inputted array had no positive integers or was empty an array and return 1 if the case was so.
The algorithm would also check If 1 was missing, and then the search is ended and 1 is returned. 

As soon as the first missing positive integer is found, the process ends by returning it.
The efficiency of this algorithm is in the fact that it needs to only scan the sorted array items once after its integers have been sorted, and in the fact that it terminates as soon as the missing value is found.

## Rami Al-Saadi 2022 
