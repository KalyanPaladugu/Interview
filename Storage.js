//  localStorage

// let data=localStorage.setItem('name','Kalyan')

// document.write(localStorage.getItem('name'))


//We can also use a plain object way of getting/setting keys, like this:
// set key
// localStorage.test = 2;

// // get key
// alert( localStorage.test ); // 2

// // remove key
// delete localStorage.test;

// Unfortunately, storage objects are not iterable.
// let keys = Object.keys(localStorage);
// document.write(keys)


// Please note that both key and value must be strings.

// To store objects we can use JSON

// localStorage.user = {name: "Kalyan"};
 localStorage.user=JSON.stringify({name:"Kalyan"})
 let user=JSON.parse(localStorage.user)
document.write(user.name)


