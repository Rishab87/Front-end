// let meraPromise = new Promise(function(resolve , reject){ //resolve matlab promise pura sucessfully fullfilled , reject matlab promise not fullfilled 
//     console.log('I am inside promise');
//     resolve(1998); //resolve ke andar koi bhi value dal skte hai to resolve promise , what does it do , how does it work?
// });

// console.log('Pehla');

// let meraPromise = new Promise(function(resolve , reject){
//     setTimeout(function(resolve , reject){
//         console.log("I am inside promise");
//     } , 3000);
//     //resolve(13213); //iska result 13213 ayaa hai
//     reject(new Error('Erorrrrrrrrrrrrrrrr')); //we can also reject a promise , reject isliye krte hai jab kuch error ho
// });

// Promises are used in JavaScript to manage asynchronous code in a more structured and predictable way, especially when dealing with multiple asynchronous operations, error handling, and complex control flows. While it may seem that your asynchronous code runs the same without Promises, there are several advantages to using Promises:

// 1. **Readability and Maintainability:** Promises provide a clear and structured way to handle asynchronous operations. They make your code more readable and easier to understand, especially when you have multiple asynchronous tasks or a complex sequence of asynchronous operations.

// 2. **Error Handling:** Promises have built-in error handling through the `.catch()` method. This allows you to centralize error handling for multiple asynchronous operations, making it easier to manage and debug errors.

// 3. **Chaining:** Promises support method chaining with `.then()`. This enables you to create a sequence of asynchronous operations that depend on the results of previous ones. It's a cleaner way to express complex control flow.

// 4. **Avoiding Callback Hell:** Promises help you avoid the so-called "callback hell" or "Pyramid of Doom," a situation where deeply nested callbacks can become hard to manage and read. Promises provide a flatter, more structured approach.

// 5. **Consistency:** Promises provide a consistent pattern for handling asynchronous code, making it easier for multiple developers to collaborate on a codebase and understand how asynchronous operations are managed.

// 6. **Concurrency:** Promises can be used with other asynchronous constructs like `Promise.all()` to manage multiple asynchronous tasks concurrently, improving the efficiency of your code.

// 7. **Support for Async/Await:** Promises serve as the foundation for the `async/await` syntax, which is a more modern and synchronous-looking way to handle asynchronous code. `async/await` is built on top of Promises and makes asynchronous code even more intuitive.

// While it's true that you can write asynchronous code using plain callbacks or other techniques, Promises provide a standardized and more structured approach. They are a crucial part of modern JavaScript for handling asynchronous operations effectively and maintaining code quality as your projects become more complex.


let meraPromise = new Promise(function(resolve , reject){
    setTimeout(function(resolve , reject){
        console.log("I am inside promise");
    } , 3000);
    //resolve(2233);
    reject(new Error('errorrrrrrrrrrrrrrrr'));
 
});

//meraPromise.then((value) => {console.log(value)}); //async function jo value return krega iss case main 2233 print krvadega
meraPromise.catch((error) => {console.log("Received an error")});

//error ko then mmethod ke andar bhi handle kr skte hai , dalke catch ke andar jo dala hai woh daldo

//iss promise ke baad yeh phir yeh isse promise chaining kehte hai
let wadaa1 = new Promise(function(resolve , reject){
    setTimeout(()=> {
        console.log('settimout 1 started');
    },2000);
    resolve(true); //resolve ya reject hoga tabhi then kam krega aur age ka code execute hoga
});

//iss code main timer lgaya 3 sec ka aur wadaa1 ko resolve mark krdiya phir wadaa2 main 3 sec ka timer hai toh age chla gya code wadaa2 resolve hogya , value return hogyi , output woh value print krali , phir setimout 1 print hoga 2 sec khtm hone ke baad phir setimout 2 3 sec pure hone ke baad 
let output = wadaa1.then(() => {
    let wadaa2 = new Promise(function(resolve , reject){
        setTimeout(()=> console.log("setimeout 2 started") , 2000);
        resolve("wadaa 2 resolved");
    })
    return wadaa2; //wadaa 2 resolved ki string output main return hojayega
});

output.then((value) => console.log(value));

// In Promises, both the `.then()` and `.catch()` methods serve different purposes in handling the results and errors of asynchronous operations. While it's true that you can handle errors using `.then()`, the primary reasons for having a separate `.catch()` method are clarity and consistency.

// 1. **Clarity and Readability:** The use of `.catch()` is more intuitive for handling errors. When you read code that has a `.catch()`, it's immediately clear that the purpose is to handle errors. This improves code readability because it separates the error-handling logic from the regular result-handling logic in a more structured way.

//    ```javascript
//    somePromise
//      .then(result => {
//        // Handle the successful result
//      })
//      .catch(error => {
//        // Handle any errors
//      });
//    ```

// 2. **Consistency:** Promises provide a consistent pattern for handling errors across asynchronous operations. In a chain of Promises, the error will propagate down the chain until a `.catch()` block is encountered. This consistent error-handling pattern makes your code more maintainable and easier to understand.

//    somePromise
//      .then(result => {
//        // Handle the successful result
//      })
//      .then(anotherResult => {
//        // Handle another result
//      })
//      .catch(error => {
//        // Handle any errors in any part of the chain
//      });

// 3. **Multiple Errors:** In a chain of Promises, you can have multiple `.then()` blocks, and you might want to handle errors differently in different parts of the chain. Using `.catch()` allows you to centralize common error-handling logic and handle specific errors differently in the `.then()` blocks.

// 4. **Avoiding Unhandled Promise Rejections:** If an error occurs in a Promise chain and you don't have a `.catch()` block to handle it, it will be treated as an unhandled promise rejection. This can lead to unexpected behavior or errors in your application. Having a `.catch()` block ensures that you handle errors and prevent unhandled promise rejections.

// While you can technically handle errors with `.then()`, using `.catch()` is a best practice because it provides a clear and consistent way to manage errors in Promises, making your code more readable and maintainable. It also helps prevent the unintentional omission of error handling in your asynchronous code.

async function utility(){
    let delhiMausam = new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("delhi main bohot garmi hai")
        } , 3000);
    });
    
    let hyderabadMausam = new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("Hyderabad main bhi bohot garmi hai");
        } , 1000);
    });
//but if 2nd promise depends on result of first , and in background 2nd one completes immediately and first one takes time , so when the code is executed both promises starts running in bg and then we encounter await keyword for first promise but before encountering await keyword 2nd promise is already finished , shouldnt that should give error?
//ANS: but I think 2nd will not give the error in the situation described by me above because function of 2nd promise will be in event queue and when we encounter await first promise function will go to call stack and then when we encounter await keyword for 2nd 2nd function will go to call stack so is this right or wrong? -->this is right confirmed from chatgpt
    let dM = await delhiMausam; //jab tak line no. 114 execute nhi hojata tab tak age ki line execute nhi hogi  , jab tak delhi mausam resolve nhi hota aur dM delhimausam ka result nhi milajata  tab tak age execute hoga hi nhi code , phir chahe hyderabadMausam pehle hi kyun na complete hogya ho
    let hM = await hyderabadMausam;

    return(dM,hM);
}

//Fetch API

async function utility2(){ // this is the code to retireve data , GET call --> call to Retrieve data
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1'); //fetch API returns Promise , await use krne se jab tak data nhi aajata tab tak agle line pe bdega nhi
    let output = await content.json(); //iss line se content ko json format main convert krdiya , json matlab javascript object notation, jaise javascript ka object hai ussi prakar ka format hai
    console.log(output);
}
//POST call
async function helper(){
  
    let options = {
        method: 'POST',
        //JSON.stringify   converts javascript value in JSON string format
        body: JSON.stringify({ //hum iss code se in teen fields , title , body , userId ko send kr rhe hai ki yeh apne database main store krlo , iss format main isliye bhej rhe hai kynuki yeh syntax hai
        title: 'Rishab',
        body: 'no',
        userId: 1,
        weight: '60kg'
        }),
        headers: { //sequence-key , encryption key etc jaise data header main dalke bhejte hai , sequence-key matlab jab networkn pe kahi data bhejte hai toh packets main fata jata hai toh sequence key btata hai data recieve hone pr kis sequence main arrange hoga 
        'Content-type': 'application/json; charset=UTF-8',
        }
    };

    let content = await fetch('https://jsonplaceholder.typicode.com/posts' , options);
    let response = content.json();
    return response;
}

async function utility3(){
    let ans = await helper();
    console.log(ans)
}
