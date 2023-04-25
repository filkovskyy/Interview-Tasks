## Task 1

You are given an array `S` consisting of` N` strings. Every string is of the same length `M`. 
Your task is to find a pair of strings in array `S`, such that there exists a position in which both of the strings have the same letter. 
Both the index in array S and the positions in the strings are numbered from zero.

For example, given `S = ["abc", "bca", "dbe"]`, string 0 `("abc")` and string 2 `("dbe")` have the same letter `b` in position 1. 
On the other hand, for strings "abc" and "bca" there does not exist a position in which they have the same letter.

Write a function:

`function solution (S)`

that, given a zero-indexed array `S` of `N` strings, returns an array describing a pair of strings from S which share a common letter at some index. If there is no such pair, the function should return an empty array. If there is more than one correct answer, the function can return any of them.

The result should be represented as an array containing three integers. The first two integers are the indexes in S of the strings belonging to the pair. The third integer is the position of the common letter.

For `S = ["abc", "bca", "dbe"]`, as above, the result array should be represented as `[0, 2, 1]`. Another correct answer is `[2, 0, 1]`, as the order of indexes of strings does not matter.

Examples:
1. Given: `S = ["abc", "bca", "dbe"]`, your function may return `[0, 2, 1]` as described above.
2. Given: `S = ["zzzz", "ferz", "zdsr", "fgtd"]`, your function may return `[0, 1, 3]`. Both "`zzzz" and "ferz"` have 'z' in position 3. The function may also return `[1, 3, 0]`, which would reflect strings `"ferz", "fgtd"` and letter `f`.
3. Given `A = ["gr", "sd", "rg"]`, your function should return ]. There is no pair of strings that fulfils the criteria.
4. Given `A = ["bdafg", "ceagi"]`, your function may return `[0, 1, 2]`.

Write an efficient algorithm for the following assumptions:
- `N` is an integer within the range `[1..30,000]`;
- `M` is an integer within the range `[1..2,000]`;
- each element of `S` consists only of lowercase English letters (a-z);
- `N * M ≤ 30,000`.


## Task 2
Write a function solution that, given integer `N`, returns the smallest non-negative integer whose individual digits sum to `N`.

Examples:

1. Given `N = 16`, the function should return `79`. There are many numbers whose digits sum to `16` (for example: `79, 97, 808, 5551, 22822,` etc.). The smallest such number is `79`.
2. Given` N=19`, the function should return `199` (the sum of digits is 1+9+9= 19).
3. Given `N = 7`, the function should return `7`.

 Assume that:

- `N` is an integer within the range `[0..50]`.

In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

## Task 3

There are `N` trees (numbered from `0` to `N − 1`) in a forest. The K-th tree is located at coordinates (`X[K], Y[K]`).
We want to build the widest possible vertical path, such that there is no tree on it. The path must be built somewhere between a leftmost and a rightmost tree, which means that the width of the path cannot be infinite.

What is the width of the widest possible path that can be built?

Write a function:

`function solution (X, Y)`

that, given two arrays X and Y consisting of N integers each, denoting the positions of the trees, returns the width of the widest possible path that can be built.

Examples:
1. Given `X = [1, 8, 7, 3, 4, 1, 8]`, `Y = [6, 4, 1, 8, 5, 1, 7]` the function should return `3`.
2. Given `X = [5, 5, 5, 7, 7, 7]`, `Y = [3, 4, 5, 1, 3, 7]` the function should return `2`.
3. Given `X = [6, 10, 1, 4, 3]`, `Y = [2, 5, 3, 1, 6]` the function should return `4`.
4. Given `X = [4, 1, 5, 4]`, `Y = [4, 5, 1, 3]` the function should return `3`.


## Task 4


A drawing robot is positioned at point (0, 0) of a coordinate plane, and the string moves describes the path the robot will take.

Each of the string's characters describes a single move made by the robot. Moreover, the robot will make the moves in the exact same order as they appear in the string, starting from position (0, 0).

Assuming the robot has already made some moves from the string, and is currently at point (x, y), if the next character of the string is:
- "^": the robot will move to (x, y + 1);
- "v": the robot will move to (x, y − 1);
- "<": the robot will move to (x − 1, y);
- ">": the robot will move to (x + 1, y).
Each time the robot moves, it draws a line between its current position and the point to which it moves.

It is guaranteed that the instructions provided in the string moves will never cause the robot to visit the same point more than once, with the exception of point (0, 0), which might be visited by the robot exactly twice: at the beginning and at the end of the robot's path.
The task is to determine whether, after the robot has made all moves provided in the string, all the lines it has drawn form a single rectangle.

Write a function:

`function solution (moves)`

that, given the string moves, returns true if the robot's path will form a rectangle or false otherwise.
