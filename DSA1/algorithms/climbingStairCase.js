// climbing stair case.
// given a staircase of 'n' steps, count the number of distinc ways to climb to h
// to the top
// You can neither climb 1 step or 2 step at a time .

//using recursion.
let n = 4
function climbingStairs(n)
{
    if(n < 3)return n
    return climbingStairs(n - 1) + climbingStairs(n - 2)
}
console.log(climbingStairs(n))