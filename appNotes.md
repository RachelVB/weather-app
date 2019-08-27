
1. npm init (using defualt values)
2. npm i request 
  - See npm docs on this module. 


Call Stack -
  It tracks the program. For example, when you use the dev tools to debug, under an error message, is a long list of functions and 'calls'. Whenever we call a function it gets added to the 'call stack'. Once the function is completed, it gets removed from the call stack. 

  Callback Queue -
    Maintain a list of all the collback functions are executed. 
    Once the call stack is empty, the event loop can then add whats in the callback queue to the call stack and execute it. 
```js
console.log('Starting...');

setTimeout(() => {
  console.log('2 Second Timer!');
}, 2000);

setTimeout(() => {
  console.log('0 Second Timer');
}, 0)

console.log('Stopping...');

/* Output:
Starting...
Stopping...
0 Second Timer
2 Second Timer!
*/
```
Node is non-blocking and has multiple threads it uses. 
It keep running while waiting for other functions to complete. 