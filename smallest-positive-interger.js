/**

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

 */

//[1, 3, 6, 4, 1, 2]
//[6, 4, 1]

function smallestPInteger(A){
    let currentIndx=0;
    for(let i=0;i<A.length;i++){
        if(A[i]>0 && A[i]<A.length){
            let correctPos=A[i]-1;
            console.log("1->",A[i]);
            if(A[i]!==A[correctPos]){
                [A[i],A[correctPos]]=[A[correctPos],A[i]];
                
                i--;
            }
        }
    }
    console.log("A-->",A);
    for(let i=0;i<A.length;i++){
        if(A[i]!==i+1)
            return i+1;
    }
    return A.length+1;
}

// smallestPInteger([2,10,8,18,-1,-3])
console.log(smallestPInteger([2,3,1,-3,8,2]));
console.log(smallestPInteger([4,3,1,5,6,2]));