
## Strings:

+ Multi line strings can be create by using the `+` or `/` or template literal ` `(ES6)

+ Methods to get the URL

    + window.location.href;
    + document.URL;

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
+ ![link](https://javascript.info/localstorage)

