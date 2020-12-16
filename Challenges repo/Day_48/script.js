let n=parseInt(prompt("please enter a number"))
console.log("Fibonacci Sequence")
let n1= 0, n2 = 1, next
for (i = 0; i < n; i++){
  console.log(n1)
  // document.getElementById('Fib').innerHTML= `${n1}`
  next = n1 + n2;
  n1 = n2;
  n2 = next
}

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