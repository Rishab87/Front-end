//js main agar function ko neeche likh ke uper call kra function ke code se pehle toh bhi call hojayega
//kyunki js sara code execute krne se pehle functions ko sbse uper hoist krdeta hai , this is done automatically by js engine
//hoisting is the process of moving function aur variable(which are declared with var) declaration to the top of file

//function declaration --> function normally declare krna/banana

function run(){
    console.log('running');
}

//function assignment --> jab kisi function ko variable ko assign krdete hai
//Named function assignment --> function ka name hoga
let a = function hello(){
    console.log("hello");
}

//ab hello() likhne se call nhi hoga , a() likhne se hoga, a function se mapped hai aur , aur agar a() function ka code jidhr likha hai usse pehle call krenge toh error ayega kyunki let variable main assigned hai  ,
 let b = a; // b will point to same function in the memory as a, function is also a reference type
 // ab b() likhenge to bhi hello() call hoga

 // in function assignment we are able to call a function using variable because some variable is mapped to a function and paranthesis is used for calling function so when we write some variable lets say a() we are able to call the function as a is mapped to function

 //Anonymous function assignment --> function ka name nhi hoga
 let c = function(){
    console.log("helooji");
 }

 //Use Cases: Anonymous function expressions are often used when you need a function for a short-lived purpose, like passing it as a callback to another function, or if you don't need to reference the function elsewhere in your code.

//If both a named function and an anonymous function expression are assigned to a variable, there isn't a functional difference between the two when it comes to how they behave when invoked through that variable. Both can be called in the same way. 

//if a function takes two parameter and we if pass one eg:
function add(a,b){
    console.log(arguments)
    return a +b;
};

console.log(add(1)); //we will get NaN(not a no.)  , because second value undefined pass hojayegi , be default parameters are functions are initialized with undefined
console.log(add(1,2,33,45,6)) ; //if we pass more arguments than function need , code will still run in this case 3 will be printed
//jo bhi cheeze as an argument dete hai woh argument nam ke object main key-value pair ke form main store hojati hai
//is case main arguments main 0 key 1 ke sath map hogi 1 key 2 ke sath and so on, arguments array nhi hai aur na hi objects hai {} aise type ka.
//jitne parameters hai utne arguments main se orderwise value lelega function , jaise iss case main 2 parameters hai toh function 1 aur 2 lelega arguments main se

// we can make a sum function dynamic using arguments , jismain jitni chahe utni value arguments main pass kr skte hai unka sum ajayega.

function sum(){
    let total =0;
    for(let value of arguments){
        total += value;
    }
    return total;
};

console.log(sum(1,2,3,4,5,6,7,8,9,10));

//rest parameter
function s0(num1 , ...args){
    console.log(args);
}

s0(1,2,3,4,667,7); //ismain 1 num1 main chla jayega baaki args main
//rest operator use krke age koi parameter nhi dal skte hai

//default parameters --> just like pyhton , agar beech ke kisi parameter ko default parameter bnayenge toh age wale bhi sare defualt bnane pdenge nhi toh error ajayega , baat bhi logical hai yeh kyunki manlo beech wale default bna bhi diya aage nhi bnaya toh humesha hi beech wale ki value pass krani pdegi default parameter ka toh pt hi khtm hogya phir
function SI(p,q,r=5){
    return p*q*r/100;
}

console.log(SI(1,2));

// iska bhi ek hack hai jisse beech wale parameter ko default argument pass kra skte hai aur age wale ko koi value bhi value apne hisab se de skte hai toh:
function sum3(a,b=2,c=3){
    return a+b+c;
}

//The behavior you're observing, where passing undefined for a parameter results in the default value being used, is by design in JavaScript. It's defined in the ECMAScript specification, which is the standard that JavaScript follows.  
//ECMAScript is a standard for scripting languages that defines a core set of features and functionality. JavaScript is one of the most well-known implementations of ECMAScript.
// The ECMAScript Language Specification (ECMA-262) is the official standard for JavaScript. It defines the syntax, semantics, and behavior of the language. The specification is maintained by Ecma International, a standards organization.
// The ECMAScript specification is a blueprint for creating a scripting language. JavaScript is an implementation of that blueprint.    

console.log(sum3(1,undefined,3)); // pr yeh bad practice hai --> kyun?
// Lack of Clarity: Using undefined as an argument can make your code less clear and harder to understand. When reading the code, it's not immediately obvious why undefined is being used, and it might require additional comments or documentation to explain its purpose.
// Ambiguity: In JavaScript, undefined is a special value that can indicate missing or uninitialized data. When you explicitly pass undefined as an argument, it can be ambiguous. Is it meant to indicate a missing argument, or is it a deliberate choice to provide the value undefined? This ambiguity can lead to confusion for developers who read the code.

// we can also write console.log(sum3(1, , 3));
//undefined pass krte hai toh jo default value de krhi hoti hai woh use hojata hai

//Getter --> Access properties
//Setter--> Change/mutate properties

let person ={
    fName : 'Rishab',
    lName: 'Jha',

    get fullName(){
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value){
        if(typeof value != 'string'){ //hum khud bhi error add kr skte hai aise error ka object bnaya aur usmain error msg daldiya
            throw new Error("Not a string");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

console.log(person.fullName);//getter call hogya , paranthesis nhi lgaya function nhi hai

person.fullName = 'Rahul Kumar' //setter ne new value set krdi object main fname and lname ki

console.log(person.fullName);

//read only function value change nhi kr skte object ki , iski value change krni hai aur return krana hai toh getter setter ka use kr skte hai object ke andar
// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }

//Error handling --> Try and catch

//try block ke andar code likhenge jismain lgta hai error aa skta hai , phir jo exception lag rha hai aa skta hai hai usse handle krne ke liye catch block main code likhenge isse program mai error reduce hojayenge aur phir rukega nhi program ,crash nhi krega

//EG:

try{
    person.fullName = 1; //ismain error dega agar str input na dale toh
}
catch (e){ //e ka matlab error, agar hume error msg use krna hai toh catch main e pass kra skte hai optional hai zaruri nhi
    alert(e); //alert browser main chlega , not defined in node js , what is node js? seperate language or what?
    //Node.js is a JavaScript runtime built on Chrome’s VS JavaScript engine. It is a JavaScript running on the server. JavaScript runtime environment is just the environment your applications are running on. In 2009, an idea came to the mind of Ryan Dahl(Google Engineer) that why not run JavaScript outside the browser, so he took VS engine and embedded it in a C++ program and called it Node.exe which later on became Node.js.
    //JavaScript is a programming language used for building dynamic HTML pages. JavaScript runs on the browser that’s why it is called client-side scripting. But with the help of Node.js, we can also run it on the server. It was released in 1995, initially named LiveScript.
    //Node.js is neither a framework nor a language or library. It is simply a JavaScript runtime environment. Node.js is used when you’re dealing with I/O bound, data streaming, and real-time chat applications. Node.js works on a single thread using non-blocking I/O calls. It supports tens of thousands of concurrent connections and optimizes throughput and scalability in applications with many I/O operations. All of this makes Node.js applications very fast and efficient.
}

//hw: finally in js
//The finally block in JavaScript is a block of code that is always executed, regardless of whether an exception is thrown or not. It is often used to perform cleanup tasks, such as closing files or releasing memory.
//EG:try {
  // Read the contents of the file
//   const contents = fs.readFileSync("myfile.txt");
// } catch (error) {
//   // Handle the error
//   console.log(error);
// } finally {
//   // Close the file
//   fs.closeSync("myfile.txt");
// }

let arr5 = [1,2,4,5,6];

let totalSum = arr.reduce((accumulator , currentValue)=> currentValue + accumulator,0) //zero nhi bhi likhenge phir bhi shi output ayega kyunki accumalator by default koi value nhi di toh first value of arr se start hoga
console.log(totalSum);

//NOTE: both "" and '' are used to declare strings , theres no difference

//NOTE: In JavaScript, undefined is a special value and a primitive data type that represents the absence of a value or the lack of an assigned value to a variable. It is one of the possible values that a variable or expression can have.

//const numbers = [5, 10, 4, 40];

// numbers.sort(function(a, b) {
//     return a - b; // Compare as numbers, ascending order
// }); ascending order main nummbers ke beech main difference hoke jo value aa rhi hai uske basis pe sort ho rha hai

//Anonymous functions are often employed when you need a small, short-lived function and do not intend to reuse it elsewhere in your code. However, named functions are typically preferred for functions that need to be reused, and they provide better stack traces in case of errors.