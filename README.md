
## Strings:

+ Multi line strings can be create by using the `+` or `/` or template literal ` `(ES6)

+ Methods to get the URL

    + window.location.href;
    + document.URL;


### Promises

+ Promise is an object, It will represents the status of Asynchronous Operations
+ States in promises
    + pending
    + fulfilled/resolve
    + reject
+ If the promise is fulfilled the response can represent with then function
+ If the promise is rejected the error can display with in catch function

```
<script>
        var result=new Promise(function (resolve,reject){
           var data=true;
        //    var data=false;
           if(data){
               resolve("It's true statement")
           }
           else {
               reject("It's false statement")
           }
        })
        console.log(result)
        result.then(response => {
            console.log(response)
        }).catch(res=>{
            console.log(res)
        })
    </script>

 ```

###  callback functions

+ Passing function as argument for the another function
```
 function fname(){ var firstName="Kalyan";
        console.log(firstName)}
        function name(demo,lname) { var fullname="Paladugu";
                
          console.log(fullname);
          demo();
          console.log(lname)
    }
        name(fname,"Chakravarthi");

```

### closures

+ A closure gives you access to an outer function’s scope from an inner function

```
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

### async and await


+ `async` ensures that the function returns a promise, and wraps non-promises in it.
+ The keyword `await` makes JavaScript wait until that promise settles and returns its result.
```
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();

example2:
========= 

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
```

Higher Order Components:
========================

+ To use same counter logic in Hover component we have to pass state and event handler as props to parent component and pass from parent to hover component(This is not a great solution)

+ To share comman functionality between components(code reusability)
+ A pattern where a function takes component as argument and returns new component

+ `const newComponent = HigherOrderComponent(OriginalComponent)`

# localStorage & sessionStorage
===============================

Both storage objects provide same methods and properties:

* setItem(key, value) – store key/value pair.
* getItem(key) – get the value by key.
* removeItem(key) – remove the key with its value.
* clear() – delete everything.
* key(index) – get the key on a given position.
* length – the number of stored items.


## sessionStorage

+ The sessionStorage object is used much less often than localStorage.

+ Properties and methods are the same, but it’s much more limited:

+ The sessionStorage exists only within the current browser tab.
+ Another tab with the same page will have a different storage.
+ But it is shared between iframes in the same tab (assuming they come from the same origin).
+ The data survives page refresh, but not closing/opening the tab.


|  localStorage | 	sessionStorage |
| ------------- | ------------- |
| Shared between all tabs and windows with the same origin	| Visible within a browser tab, including iframes from the same origin  |
| Survives browser restart  | Survives page refresh (but not tab close)  |
+ [Referance link](https://javascript.info/localstorage)


### Axios

+ Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF
+ Axios (a promise-based HTTP client) and Fetch API (a browser in-built web API)