let n1= 0, n2 = 1, next;
let fibSeq= (n) =>{
for (i = 0; i < n; i++){
  console.log(n1)
  next = n1 + n2;
  n1 = n2;
  n2 = next
}
}; console.log(fibSeq(6))


// let getValue = (event) => {
//   // event.preventDefault();
//   let n=parseInt(docoument.getElementById('input').value)
//   console.log("Fibonacci Sequence")
//   let n1= 0, n2 = 1, next
//   for (i = 0; i < n; i++){
//     console.log(n1)
//     document.getElementById('Fib').innerHTML= `${n1}`
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next
//   }
// }

// let arr = []
// let arrayGen = (max)=> {
// for (i = 0, t=max; i < t; i++){
// arr.push(Math.round(Math.random()*t))
// }return arr
// }
//  let isEqual = (arr)=>{
//    arrayGen(20);
//    console.log(arr)
//    for (i=0; i < arr.length; i++){
//      if (arr[i] % 2 == 0){
//        console.log(arr[i] + ' is equal')
//      }
//    }
//  }
//  isEqual(arr)

// let countDown = (num) =>{
//   if (num === 0 ){
//     return;
//   }else{
//   console.log(num);
//   return countDown(num - 1)}

// };
// console.log(countDown(7));


// let fibSeqRec = (num) =>{
//   let n1 = 0, n2=1, next;
//   if (next >= num){
//     return
//   } else{

// }
function fibonacci(num) {
  if(num <= 1) {
      return 1;
  }
  else {
     console.log(num);
     return fibonacci(num-1) + fibonacci(num - 2);
  }
}
console.log(fibonacci(6))