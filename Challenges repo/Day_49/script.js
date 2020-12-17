let fibonacci = (n) =>{
  if (n <= 1) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
  
};
console.log('Stricly recursive result is', fibonacci(5))

let fibonacci2 = (n2, memo) => {
  memo = memo || {}
  if (memo[n2]) {
    return memo[n2]
  }
  if (n2 <= 1) {
    return 1
  }; 
  return memo[n2] = fibonacci2(n2 - 1, memo) + fibonacci2(n2 - 2, memo)
}
console.log('Recursive plus memoization result is ', fibonacci2(5))

let memoizer = (fun) => {
  let cache = {}
  return function (n) {
    if (cache[n] != undefined) {
      return cache[n]
    } else {
      let result = fun(n)
      cache[n] = result
      return result
    }
  }
}
const fibMemoFunction = memoizer(fibonacci)
console.log('Memoization as a higher order function result is ', fibMemoFunction(5))