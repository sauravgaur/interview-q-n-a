/**
 A diamond is a quadrilateral whose four sides all have the same length and whose diagonals are parallel to the coordinate axes.

You are given N distinct points on a plane. Count the number of different diamonds that can be constructed using these points as vertices (two diamonds are different if their sets of vertices are different). Do not count diamonds whose area is empty.

Write a function:

class Solution { public int solution(int[] X, int[] Y); }

that, given two arrays X and Y, each containing N integers, 
representing N points (where X[K], Y[K] are the coordinates of the K-th point), 
returns the number of diamonds on the plane.

For example, for N = 7 points whose coordinates are specified in arrays
 X = [1, 1, 2, 2, 2, 3, 3] and Y = [3, 4, 1, 3, 5, 3, 4], 
 the function should return 2, since we can find two diamonds as shown in the picture below:



Given arrays: X = [1, 2, 3, 3, 2, 1], Y = [1, 1, 1, 2, 2, 2], 
the function should return 0, since there are no diamonds on the plane:



Write an efficient algorithm for the following assumptions:

N is an integer within the range [4..1,500];
each element of arrays X and Y is an integer within the range [0..N-1];
given N points are pairwise distinct.
 */

function solution(X, Y) {
    let cords=[];
    let distances={};
    for(let i=0; i<X.length;i++){
      cords.push({
          x:X[i],
          y:Y[i]
      })
    }
    console.log("cords-->",cords);
    for(let i=0;i<cords.length;i++){
        console.log("i-->",i);
        for(let j=i+1;j<cords.length;j++){
            console.log("j-->",j);
            console.log("cords-->",cords[j]);
            
            let dst=((cords[i].x-cords[j].x)*(cords[i].x-cords[j].x)+(cords[i].y-cords[j].y)*(cords[i].y-cords[j].y));
            if(cords[i][dst]){
                cords[i][dst].push({...cords[j]})
            } else{
                cords[i][dst]=[{...cords[j]}]
            }
        }
    }
    for(let i=0;i<cords.length;i++){
        for(let key in cords[i]){
            if(isNaN(key))
                continue;
            if(cords[i][key].length<2)
                delete cords[i][key];
        }
    }
    console.log("cords-->",JSON.stringify(cords));
    let cnt=0;
    for(let i=0;i<cords.length;i++){
        for(let key in cords[i]){
            if(isNaN(key))
                continue;
            let [crd1,crd2]=cords[i][key];
            for(let j=i+1;j<cords.length;j++){
                let dst1=((crd1.x-cords[j].x)*(crd1.x-cords[j].x)+(crd1.y-cords[j].y)*(crd1.y-cords[j].y));
                let dst2=((crd2.x-cords[j].x)*(crd2.x-cords[j].x)+(crd2.y-cords[j].y)*(crd2.y-cords[j].y));
                if(dst1==dst2){
                    cnt++
                }
            } 
            
        }
    }
    console.log(cnt);
  }
  

//   console.log(solution([1, 1, 2, 2, 2, 3, 3], [3, 4, 1, 3, 5, 3, 4]))

const X = [1, 1, 2, 2, 2, 3, 3];
const Y = [3, 4, 1, 3, 5, 3, 4];
console.log(solution(X, Y));  // Output: 2

// const X2 = [1, 2, 3, 3, 2, 1];
// const Y2 = [1, 1, 1, 2, 2, 2];
// console.log(solution(X2, Y2));  // Output: 0