## Javascript
	- link:: [w3schools](https://www.w3schools.com/) [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS) [youtube](https://youtu.be/dSJM4Gyh8jE?feature=shared) 
	  type:: website 
	  duration:: 1hr
	  time:: 01:31 
	  date:: [[Jun 3rd, 2025]] 
	  tags:: #css, #code #development 
	  status:: Done
	  priority:: B
	  source:: website, YouTube
	  notes:: basic to advance 
	  review-date:: [[Jun 6th, 2025]] 
	  related-topics:: #javascript #coding
- ## JavaScript Basic
  
  1. the behavior is html elements is decided by JavaScript
  2. this lang can be used on server side and user side
  3. `ECMA` is the standard of JavaScript
  4. it is a dynamicallly typed language
  5. it is single threaded language
- ### introduction
- `console.log` is used to print anything in the browser
- JavaScript can be used in html by using `<script></script>` tag
- this tag can be used anywhere whether
- it is good to add JavaScript in the last of the document
- we can link `js` file as `<script src="fileName.js"> </script>` in the html file
- ### Variable and data types
- Variable is named memory locations
- whether we want to add `Number` or `"String"` or `True False`
- we can also create variable using `let` or `var` `const`
- `let age = 25` this line makes a block anywhere in the memory and then stores `25` there. `let name = "ammar"` the same goes for `name` variable
- we stopped using `var` because this is functin scoped and global scoped but not block scoped, you may face debugging issues
- but in 2015 with the model of ES6 we got `let` and `const`
- but `let` is a block scoped we cannot access `let` outside of the block
- redifinition is not possible in `let`
  
  | `let`                     | `var`          | `const`        |
  | ------------------------- | -------------- | -------------- |
  | function or block scoped | global scoped   | same as `let`  |
  | redifinitoin ❌            | redefinition ✔ | redefinition❌  |
  | manipulation ✔            | manipulation ✔ | manipulation ❌ |
- ### variable naminng convention
- variable can be started with `letter`, `$` and `_`
- there shouldn't be any space between our variables
- it should be in camel case ordering as `let markOfTopper = 25`
- it should be meaningful
- reserverd keywords must not be used
- #### Data types
- primitive data type : which JavaScript provides us [^1]
	- they all are stored in the stack memory
	- Number : when we interact with number like - 1, 2, 3.14, 4.4 etc.[^2]
	- BigInt : `BigInt` can represent and manipulate whole numbers larger than the maximum safe integer for the `Number` type. It can store both positive and negative large integers.
	- String : Sequence of characters if called strings.
	- Bool : when we interact with `True` and `False` data type
	- undefined : value is not provided to variable
	- null : when we insert a `null` value to the variable
	- todo : find out what is symbol data type
- non - primitive data type or refrence type : arrays, objects, functions
	- they are stored using two things as : refrence and data
	- refrence are stored in the stack and data is stored in the heap
		- object : it is just a collection of {key : pairs}
		- when we create another object and assign the first object to it then it creates a shallow copy[^9]
		  ```javascript
		  let obj = {
		      name = "google",
		      app = "gemini",
		      age = 25,
		      isWalking = false
		  };
		  ```
			- Array : it is a collection of items
			  ```javascript
			  let arr = [1, 2, 3, 4, 5, 6]; // Array literal
			  console.log(num);
			  let arr2 = new Array("love", 1, true); //constructor
			  ```
			  | methods  | work                                          |
			  | -------- | --------------------------------------------- |
			  | .push    | insert at the end of the array                |
			  | .pop     | remove last item                              |
			  | .shift   | remove first item                             |
			  | .unshift | insert at the beginning of the array          |
			  | .slice   | taking specific part of an Array              |
			  | .splice  | changing the content of array                 |
			  | .map     | apply some function to some values of array   |
			  | .filter  | filter the elements based on function         |
			  | .reduce  | reduce array to single output                 |
			  | .sort    | returns sorted array                          |
			  | .indexof | returns the index of an array                 |
			  | .find    | act like filter but returns the first element |
			  | .length  | returns the length of the array               |
			  | .foreach | action on each element of arr[]               |
			  ```javascript
			  let ansArray = arr.map((Number) => {
			    return number * number;
			  });
			  let evenArray = arr.filter((number) => {
			    return /*some filter*/;
			  });
			  let sum = arr.reduce((acc,curr)=>{
			      return acc + curr;
			  },0);
			  arr.foreach((value, index)=>{
			      console.log("Number : ", value, " Index : ", index);
			  });
			  ```
- ### operators and conditionals
- #### types of operators
- Arithmetic : there are two types of Arithmetic operators as `binary`(requires two operand) and `unary`(requires one operand)
- there are some symbols which do some work like -
- ##### binary operator
- ##### Arithmetic operator
  
  | operator | work           |
  | -------- | -------------- |
  | +        | addition       |
  | -        | subtraction    |
  | \*       | multiplication |
  | \*\*     | power          |
  | /        | division       |
  | %        | reminder       |
- ##### unary operator
  
  | operator | work       |
  | -------- | ---------- |
  | ++       | increament |
  | --       | decreament |
- ##### assignment operator
  
  | operator | work                   |
  | -------- | ---------------------- |
  | =        | assigns                |
  | +=       | assigns and adds       |
  | -=       | assigns and subtracts  |
  | \*=      | assigns and multiplies |
  | /=       | assigns and divides    |
- ##### comparison operator
  
  | operator | work                     |
  | -------- | ------------------------ |
  | <        | greator                  |
  | >        | less                     |
  | <=       | greater than or equal to |
  | >=       | less than or equal to    |
  | ==       | equal to                 |
  | !=       | not equal to             |
  | ===[^3]  | equal to                 |
  | !==      | not equal to             |
- ##### ternary operator
- `condition ? if true : if false`
- ##### logical operator
  
  | operator | work                   |
  | -------- | ---------------------- |
  | &&       | all true               |
  | \|\|     | one true               |
  | !        | if(true) returns false |
- ##### falsy and truthy
- values that are treated as false : `undefined`, `null`, `0`, `false`, `NaN`, `' '`,
- anything other than that is considered as true,
- short-circuitting : the `||` operator finds the truth value once it finds it, returns it
- ##### bitwise opertor
  
  | operator | work        |
  | -------- | ----------- |
  | &        | and         |
  | <p>&#124;</p>[^5]       | or |
  | ^[^4]    | xor         |
  | ~        | not         |
  | <<[^6]   | left shift  |
  | >>       | right shift |
- #### control flow statement
  
  ```javascript
  if(condition){
    //statement to be executed
    }else if(condition)
        //statement to be executed
    else{
        //statement to be executed
    }
  ```
  
  ```javascript
  switch(expression){
    case : //statement to be executed;
    break;
    case : //statement to be executed;
    break;
    case : //statement to be executed;
    break;
    default : //statement to be executed;
  }
  ```
- ### loops & Strings
- #### loops
- loops : when we want to execute a set of instructions multiple time then loop is needed
- types : for, while, do while, for in, for each, for of etc.
- for loop syntax
  
  ```javascript
  for (initialization; condition; updation) {
  //statement to be executed;
  }
  ```
- while loop syntax
  
  ```javascript
  initialization;
  while (condition) {
  //statement to be executed;
  updation;
  }
  ```
- do while loop
  
  ```javaScript
  initialization;
  do{
    //statement to be executed;
    updationच
  }while(condition)
  ```
  ```javascript
  //for in loop
  for(let key in obj) {
    console.log(key, " ",obj[key])
  }
  ```
  ```javascript
  for(let value of arr) {
    console.log(value);
  }
  ```
- #### Strings
- whether you write `""` or `"a"` `"ammar"` all are treated as string
- you can either `''` or `""`
- you can also use <code>``</code> to write strings. it is also called template strings. it also accepts <code>\n</code>
- ##### Methods of strings
  
  | method                 | definition                       |
  | ---------------------- | -------------------------------- |
  | concatinate            | add two strings using `+` symbol |
  | <code>`` </code>[^7] | `${op1}${op2}`                   |
  | .length                | measure the length of a string   |
  | .toUpperCase           | convert to uppercase of a string |
  | .toLowerCase           | convert to Lowercase of a string |
  | .substring(value)      | extract a part of a string       |
  | .split(base)           | split string into parts          |
  | .join[^8]              | join the parts of a string       |
- ### functions
- Function is used to encapsulate reusable code blocks
- ##### basic syntax
  
  ```javaScript
  function functionName(parameters){
    //code to be executed
    return /*some*/;
  }
  ```
- ##### function expression
  
  ```javascript
  let functionName = function (parameters) {
  //code to be executed
  };
  ```
- ##### arrow functions
  
  ```javascript
  let functionName = (parameters) => {
  //code to be executed
  return /* some value */;
  };
  ```
- #### Call stack and hoisting
- hoisting : shift the decalation of `var`[^10] or `function` to the top of their current scope
- call stack : it maintains which function is being called and how it manages the data
- why is function called first class citizens? 
  : assign to variable, pass as argument, can be returned, use in data Structures, use as property
- #### variable scoping
- global scope : we can access this variable everywhere
- block scope : we can't access a block outside a block[^11]
- temporal deadzone : we can not access the till its declaration
- #### classes
- class is the blueprint
	- it encapsulates properties and behaviours
	- objects are public by default[^12]
	- by putting `#` before any propery we can make it private
	- we can set value to any private member by setter and get value by getter
	- we create a encapulation layer
- constructor
	- constructors are useful sinnce since they help us set value by default without `setter` or `getter`
	- default parameters : allow to use functions with default values[^13] 
	    ```javascript
	    function sayMyName(myName = "Prabhu Deva"){
	      console.log("My name is : ", myName);
	    }
	    sayMyName()//if not parameters set this will return Prabhu Deva
	    ```
- #### in-built objects 
  1. math object 
   | object  | work                                     |
   | ------- | ---------------------------------------- |
   | .PI     | returns PI value                         |
   | .max    | returns max of nums                      |
   | .min    | returns min of nums                      |
   | .round  | round off a decimal number               |
   | .floor  | prints just smaller value                |
   | .ceil   | prints just bigger value                 |
   | .abs    | prints absolute value                    |
   | .random | prints the random value between 1 and 10 |
   | .sqrt   | prints the square root of a number       |
   | .pow    | returns the power of a number            |
  2. date object
   | object       | work                 |
   | ------------ | -------------------- |
   | Date         | prints the curr date |
   | .getDate     | prints the date      |
   | .getDay      | prints the day       |
   | .getFullYear | prints the full year |
   | .getMinutes  | prints the minutes   |
- #### object cloning[^14]
- object is dynamic in nature?
  : we can change its properties at run time
- we can clone an object : spread operator, assign method, iteration
  ```javascript
  let obj2 = {...obj}; //spread operator
  let obj2 = Object.assign({},obj); //by method
  for(let key in obj) {
    let newKey = key;
    let newValue = obj[key];
    // insert new key and value in obj2 and create a clone
    obj2[newKey] = newValue;
  }
  ```
- #### Garbage collector
- it is a built-in feature of JavaScipt
- memory which is no longer in use can freed using garbage collector
- it saves you from memory leaks
- #### Error handling in JavaScript
- if we create a flow and that flow distrupt due to any reason this is called **error**
- types of error : compile time error, run time error
- we use try catch mehod to handle the errors
  ```javascript 
  try {
    //error
    console.log(x);
  } catch (err) {
    //define what to do with the error
    console.log("This is your error : ", err)
  }finally{
  //this block will run everytime 
    console.log("\n\n\0I will run everytime as I am finally block \n")
  }
  ```
- if we `throw` our custom error
- when we are using [govt api](https://docs.ewaybillgst.gov.in/apidocs/api-error-codes-list.html), so we must try to handle them as the user do not get them 
  ```javascript
  try {
    //error
    console.log(x);
  }
  catch(err){
    //throw our custom error
    throw new Error("Please declare the value first")
  }
  ```
- ## JavaScipt DOM manipulation
- window object is the global object nothing is above it
- global `var` is the property of window and global method is considered the behaviour of the window
- window object lies on the top of every element
- this window object is created by your browser
- ### DOM
- Full Form - Document Object Model
  {{renderer code_diagram,mermaid}}
  ```mermaid
  flowchart LR
  id1["html code"] --> id2["js object"] --> id3["document"]
  ```
- #### changing and accessing HTML
- when you convert html code into javaScript object then that javaScipt object is called document. this whole makes document object model
- when you type the `document` in the browser console window then it will show you whole document
- tokenizer : converts html tags into tokens and those tokens can be converted into nodes and these nodes later make DOM
- DOM, BOM and JS core features comes under window object
- The interaction that you do with the browser, comes under browser object model(BOM) except the html content
- we can access and change the html using JS by id, class, tagname etc.
  
  | fetch                     | what                                 |
  | ------------------------- | ------------------------------------ |
  | .getElementById           | fetch Element by ID                  |
  | .getElementByClassName    | fetch Element by Class name          |
  | .getElementByTagName[^15] | fetch Element by Tag name            |
  | .querySelector            | fetch Element by Tag, Class, ID name |
  | `$0`                        | fetch Element by selecting           |
  | .nodeName                 | tells you element name               |
- now that we have learnt to access to the elements, but now we'll learn to update them like - `innerHTML` , `outerHTML`, text-content, innerText
- we can get/set any html tag 
  
  | update       | what                                         |
  | ------------ | -------------------------------------------- |
  | .innerHTML   | change inside html                           |
  | .outerHTML   | change inside html including element itself  |
  | .innerText   | returns the text considering the css         |
  | .textContent | returns the text without considering the css |
- #### adding element
  | Add                         | what                                       |
  | --------------------------- | ------------------------------------------ |
  | .createElement              | creates elements                           |
  | .append                     | add the tag to the document                |
  | .insertAdjacentElement[^16] | Inserts an element at a specified position |
- #### removing element
  | remove       | what                            |
  | ------------ | ------------------------------- |
  | .removeChild | removes the child of an element |
- #### changing and accessing CSS
- we can change the style of any element using `.style` method 
  
  | change         | what                                  |
  | -------------- | ------------------------------------- |
  | .style         | styles one element at a time          |
  | .style.csstext | styles multiple element at a time     |
  | .setAttribute  | let you add attribute                 |
  | .className     | let you set/get class                 |
  | .classList     | let you set/get class in array format |
- #### browser events
- Event : announcements by the browsers
- `monitorEvents` function, tells about events `unmonitorEvents` stops it.
- Event target : it is an entity where event is recieved
- event-listener : tells what to do if event happens
  
  ```javascript
  function changetext(){
      let fpara = document.getElementById('fpara');
      fpara.textContent = "text changed";
  }
  let fpara = document.getElementById('fpara');
  fpara.addEventListener("click",changetext);
  ```
  | method                    | work                              |
  | ------------------------- | --------------------------------- |
  | .addEventListener         | adds event listener to element    |
  | .removeEventListener[^17] | removes event listener to element |
  | .domcontentloaded         | removes dynamically add script    |
- #### phases of an event in DOM heirarchy
- capturing phase : where event reaches to its target
- At target phase : when target reached the element
- bubbling phase : the event then bubbles up from the target element to its ancestors, allowing each ancestor to potentially handle the event.
- by default the event listener executes in capturing phase, if we want in capturing phase we sent capturing phase true
- #### event object
- when an event triggers,  then it first goes to event listener as argument or parameter then you can utilize it
- #### default acion
- `.preventdefault` is a function which stops element from its default behaviour
- #### Avoiding too many listeners
- you can add event listener on each element by iteration. you can also target parent element
  
  ```javascript 
  function alertpara(){
        alert("you have clicked on para." + event.target.textContent);
    }
  let paras = document.querySelectorAll('p');
  for (let i = 0; i < paras.length; i++) {
    const para = paras[i];
    para.addEventListener('click',alertpara);
  }
  ```
  
  ```javascript
  function alertpara(){
    alert("you've clicked on para " + event.target.textContent);
  }
  let mydiv = document.getElementById("wrapper");
  mydiv.addEventListener('click',alertpara);
  
  ```
  
  ```javascript
  //code 1
  const t1 = performance.now();
  for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "this is my para " + i;
    document.body.appendChild(para);
    
  }
  const t2 = performance.now();
  console.log("Total time taken by code 1 " + (t2 - t1));
  
  //code 2
  const t3 = performance.now();
  let mydiv = document.createElement('div');
  for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
  para.textContent = "this is my para " + i;
    mydiv.appendChild(para);
  }
  document.body.appendChild(mydiv);
  const t4 = performance.now();
  console.log("Total time taken by code 2 " + (t4 - t3));
  ```
- #### performance improvement
- `.performance.Now` tells you time how much time the website is taking to load
- reflow and repaint
- `reflow` : calculating position and dimension of an element. it is computationnally intensive task.
- repaint : displaying content pixel by pixel. it is faster than reflow
- #### Document fragment
- it is a lightweight document object. you add text content in it. it doesn't take any reflow and repaint in appendage
- .createDocumentFragment : this method lets us create document fragment
- #### event loop
- synchronous code : the code which executes at the same time
- asynchronous code : the code which does not execute at the same time[^18] it is handled by event loop
- blocking : the code below the `setTimeout` waits to run this is called blocking state
- The event loop is an mechanism in javascipt that allows non-blocking execution of code, it manages operations like - Promises, setTimeout, DOM events, API calls
- Key Components:
    Call Stack: A stack that stores the current execution context of the code. It follows the Last-In-First-Out (LIFO) principle.
    Callback Queue (or Task Queue): A queue that stores tasks (callbacks) that need to be executed.
    Browser: Provides the environment for JavaScript execution and handles tasks like rendering, API calls, and timer events.
    How it works:
    The browser executes JavaScript code, and synchronous tasks are added to the Call Stack.
    When an asynchronous task (like setTimeout or fetch) is encountered, the browser handles it and puts the corresponding callback function in the Callback Queue.
    Once the Call Stack is empty, the Event Loop checks the Callback Queue for pending tasks.
    If there are tasks in the Callback Queue, the Event Loop pushes the oldest task to the Call Stack, where it's executed.
    In short, the Event Loop ensures that asynchronous tasks are executed after the Call Stack is empty, allowing for efficient and non-blocking execution of JavaScript code
- #### Promise
- A promise in javascript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value , it has two states : resolve, reject
  
  ```javascript 
  let promise = new Promise((resolve, reject) => {
  // async operation 
  resolve(1000);//promise resolved 
  reject(new Error("Internal server error")); //reject the error like this 
  });
  ```
- if we want to some task if the prommise is fullfilled we can use
- promise chaining : when we use `.then()` and after `.then()`
  | method         | work                                               |
  | -------------- | -------------------------------------------------- |
  | .then()        | to do some task if resolved                        |
  | .catch()       | to do some task if not resolved                    |
  | .finally()     | finally block always runs                          |
  | .promise.all() | promise that'll resolve after all promise resolved |
- #### aync function
- with aync and await you make your aync code act like sync code
- by using it you can execute your async code sequentially
  
  ```javascript
  async function getData(){
  setTimeout(function(){
    console.log("I am function");
  },3000);
  }
  
  getData();
  ```
- use aync-await only when you handle promises
- async function always returns a promise
- we can only mark await the function which is marked async
- ##### fetch APIs
- The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.
- there are different type of requests like - get, set, post, push, put and delete
- the data is fetch in json so to parse data, use `.json()` operator
- #### closure
- closure is a combination of function and its required data(lexical scope or surrounding state)
  
  ```javascript 
  function outerFunction(){
  let name = "Ammar";
  function innerFunction() {
    console.log(name);
  }
  return innerFunction;
  }
  let inner = outerFunction;
  inner();
  ```
- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.
- In other words, closure is just a fancy name for a function that remembers the external things used inside it.
  

  
  ---
  
  [^1]: we can check the data type of a variable using `typeof(variable)`
  [^2]: it can only keep the data between $-(2^{53}-1) <--> (2^{53} -1)$
  [^3]: denotes strict equality
  [^4]: if you give two different things I'll give one, if you give two same things I'll give zero
  [^5]: the negative numbers are printed differently, first we take 2's complement : we flip all the numbers -> 1's complement, and then add 1 to them
  [^6]: it shift binary numbers to the given place
  [^7]: this also accepts the `\n`
  [^8]: this method is only applicable on arrays and not the strings
  [^9]: Nothing new is created but the other object also points the previous one
  [^10]: only decalaration shifts on the top 
  [^11]: this does imply with `var`
  [^12]: they can be used inside and outside without any problem
  [^13]: this does not imply with `undefined`
  [^14]: object cloning and object refrencing is different thing
  [^15]: Returns only one value at a time, append ***All*** after `querySelector` to fetch all 
  [^16]: `insertAdjacentElement('postion', element)` position include : beforebegin, afterbegin, beforeend, afterend
  [^17]: object reference must be same
  [^18]: .setTimeout is a method to set time out