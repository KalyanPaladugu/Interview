// Hosting 

// function host(){
//     console.log(a,b,c);

   
//     var a=20;
//     let b=2;
//     const c=3;
// }

// host()


// Question:Implicit and explicit Binding 

// var obj={
//     name:"kalyan",
//     display:function (){
//         console.log(this.name);
//     }
// }

// var obj1={
//     name:"Ram"
// }

// obj.display()
// // obj.display.call(obj1)



// Question3: Caching and memoize function 


// function myMemoize(fn,context){
//     const res={};
//     return function (...args){
//         var argsCache=JSON.stringify(args);
//         if(!res[argsCache]){
//             res[argsCache]=fn.call(context || this, ...args)
//         }
//         return res[argsCache]
        
//     }

// }

// const clumsySquare=(num1,num2)=>{

// for (let i=1;i<=100000000;i++){

// }
// return num1 * num2



// }


// const finalResult=myMemoize(clumsySquare)

// console.time("First Call :");
// console.log(finalResult(33,3222));
// console.timeEnd("First Call")


// console.time("Second Call");
// console.log(finalResult(33,3222));
// console.timeEnd("Second  Call")


// Question4:Outputbased on event loop

// console.log("a");
// setTimeout(()=> console.log("Set"),0)   //task queue
// Promise.resolve(()=> console.log("pro")).
// then((res)=> res());    //microtask queue
// console.log("b");

// Question5:Infinite currying 



// function add(a){

//     return function (b){
//         return function (){
//             return a+b
//         }
//     }
// }

// console.log(add(4)(3)());

// + to write code infinitly 

// function add(a){
//     return function (b){
//         if (b) return add(a+b)
//         return a

//     }

// }

// console.log(add(4)(3)(5)(2)());



// Question 6: implement this code 



// const calc={
//     total:0,
//     add(a){
//         this.total +=a; 
//         return this
//        },
//        multiply (a){
//            this.total *=a ;
//            return this
//        },
//        subtract(a){
//            this.total-=a;
//            return this
//        },
// }


// const result=calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);
