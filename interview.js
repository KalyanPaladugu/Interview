
//  Render data from array in hooks and delete specific element 

// import {useState} from 'react'
// export default function App() {

//   const empList1=[{
//     id:1,username:"Kalyan"
//   },
//   {
//     id:2,username:"Ram"
//   },{
//     id:3,username:"Chakravarthi"
//   }]

// const [list, setList]=useState(empList1);
// let deleteData=(e)=>{
  
//   const result=list.filter(data=> e!==data.id)
//   setList(result)
// }
//   return (
//     <div>
  
//     {
//       list.map(
//         (data)=>
//              <h1> {data.id} and {data.username}
//               <button onClick={()=>deleteData(data.id)}>
//               Delete this id
//              </button></h1>
        
//       )
//     }
  
   
//    </div>
//   );
// }


// let &const hoisting, temporal dead zone


// console.log(b)
// var a=10;  //result is undefined
// let b=20;  //referance error


// code checker 
  // obj1={a:10};
// const obj2=obj1; //obj2 is referance obj1 
// const obj2={...obj1}  //obj1:10 obj2:20
// obj2.a=20;
// console.log(obj1);
// console.log(obj2);
// let obj1;  referance error :cannot access obj1 before initialization
// 

// Infosys

// + Hoisting
// debugger;

// console.log(a,b);
// var a=8;
// let b;
// // const c;

// var demo=()=>{
//   console.log("ok")
// }

// demo()

// + Closures

// var a=2;  //globalscope

// function add(){
//   var b=3;   //outerscope
//   function add1(){
//     var c=5;  //innerscope
//     return a+b+c
//   }
//   return add1
// }
// var re=add()
// console.log(add())
// console.log(re())


// + IIFE (immmediate invoked function expression)

// var name="Ganesh";
// (function(name){
//   name="Dinesh"
// })(name)
// console.log(name)

// + this 


// let emp={
//    name:"Kalyan",
//    getName:function (){
//      return this.name;
//    }

// }

// console.log(emp.getName())


// Call ,apply and Bind 

// let person1={fname:"kalyan",lname:"chakravarthi"}
// let person2={fname:"Hari",lname:"Narayan"}

// function emp(company){
//   console.log(this.fname+ " "+ this.lname+ "is working in ",company)
// }

// emp.call(person1,"Infosys")  //invokes the function and allows us to pass arguments as one by one

// emp.apply(person2,["Dell"])  //invokes the function and allows us to pass arguments as an array

// let result=emp.bind(person1)   //creates a function
// result()



// Asynchronous


// console.log("First")
// setTimeout(()=>{     //It is asynchronous that's why it will execute after third
//   console.log("Second")
// })
// console.log("Third")





// Promises 

// const p1=Promise.resolve("Promise1")
// const p2=34;
// const p3=new Promise((resolve,reject)=>{
//   setTimeout(resolve,1000,"Promises3")
// })

// Promise.all([p1,p2,p3]).
// then(re1=> console.log(re1))


// Promise examples 
// fetch('https://api.github.com/users').then(response=>response.json()).
// then(data=> console.log(data))

// axios.get('https://api.github.com/users').then(
//   result => console.log(result.data)
// )




// Async/Await

// function add(value,error){
//   return new Promise((resolve,reject)=>{
//     if(!error){
//        resolve(value+10)
//     }
//     else {
//       reject("Something went wrong")
//     }
//   })

// }

// async function result1(){
//   let re= await add(3,false)
//   console.log(re)
//   return re;
// }

// async function result2(){
//   let re=await Promise.resolve(4);

//   return re
// }


// console.log(result1())
// console.log(result2())




// Shallow copy & Deep copy 


// Deep copy 

// let a=10
// let b=a;
// b=20;
// console.log(b) //different referance object
// console.log(a) //different referance object

//shalow copy

let emp={
  name:"kalyan"
}

// let newemp=emp;
// newemp.name="Ram"   // if we change newemp value original emp value will be change beacuase both object are referance same object


//deep copy


// let newemp=JSON.parse(JSON.stringify(emp))
// newemp.name="Ram"


// let newemp=Object.assign({},emp)
// newemp.name="Ram"


//  let newemp={...emp}
//  newemp.name="Ram"
// console.log(newemp)
// console.log(emp)

// + Event loop 

// function foo(b) {
//   let a = 10
//   return a + b + 11
// }

// function bar(x) {
//   let y = 3
//   return foo(x * y)
// }

// const baz = bar(7)
// console.log(typeof(baz))



// + Event prpagation 

//event handling

// let parent=document.getElementById("parent");
// parent.addEventListener('click',()=>{
//   console.log("Parent clicked")
// },true)

//bubble phase
// let child=document.getElementById("child");
// child.addEventListener('click',()=>{
//   console.log("childclicked")
// })

// let event1=document.getElementById("event1");
// event1.addEventListener('click',()=>{
//   console.log("Event Clicked")
// })


// capturing phase
// let child=document.getElementById("child");
// child.addEventListener('click',()=>{
//   console.log("childclicked")
// },true)

// let event1=document.getElementById("event1");
// event1.addEventListener('click',()=>{
//   console.log("Event Clicked")
// },true)

//event delegation
// let tasks=document.getElementById("tasks");
// tasks.addEventListener('click',(e)=>{
//   e.target.classList.toggle("completed")
// },true)
