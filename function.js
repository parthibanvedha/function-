////function using anonyms ////
// 1. print the 0dd number
function odd(){
  for(var i=0;i<=a.length;i++)
  {
  if(i%2===0)
  {
    console.log("number is odd");
  }
  else{
    console.log("number is even")
}
}
}
let a=[1,2,3,4,5,6]
odd(a);

////2.sum of numbers ///

function sum(arr) { 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) 
        sum += arr[i]; 

    return sum; 
} 
 let arr = [12, 3, 4, 15];
console.log("Sum of given array is " + sum(arr));



//////5. remove duplicate array///
var ar = ["apple", "mango", "apple",
"orange", "mango", "mango"];

function removeDuplicates(arr) {
return [...new Set(ar)];
}

console.log(removeDuplicates(ar));


//////// 4.return all palindromes/////
function isPalindrome(s)
{
    
    let a = s;
    s = s.split('').reverse().join('');
 
   
    return s == a;
}
 

function PalindromicStrings(arr1,N)
{
    let ans = [];
    for (let i = 0; i < N; i++)
     {
 
     if (isPalindrome(arr1[i]))
 {
   ans.push(arr1[i]);
 }
    }
    return ans;
}
 
let arr1 = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;
 

let s = PalindromicStrings(arr1, N);
if(s.length == 0)
    console.log("-1");
for(let st of s)
    console.log(st," ");


 ///////return all prime numbers
 function AllPrimeNumber(array, num) {
    array = new Array();
        for (var i = 2; i <= num; i++) {
            for(var j = 2; j < i; j++){
                if(i % j==0){break; }
                array.push(i);
            }

        }
    return array;
}

     let c=AllPrimeNumber([], 15);
     console.log(a);


