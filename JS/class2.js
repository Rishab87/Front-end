console.log('hello ');

//object create
let rectangle = {
    length: 1,
    breadth: 2,

    draw: function(){ //function 
        console.log('draw'); //this means we have created a function with name draw
    }

    //we can also write it like this:
    // draw(){
    //     console.log('draw');
    // }
};// is type ki programming ko jaha object define krte hai properties define krte hai , behaviour define krte hai iss type ki programming ko OOP bolte hai

// if we want to make multiple rectangle objects instead of writing code again n again we can use a function to create objects.


rectangle.draw();

//factory function

function createRectangle(length ,breadth){
    return rectangle = {
        length: length, //lenght property ka name hai pehle: phir length jo value input di hai
        breadth: breadth,
        //we can also write like this:
        // length,
        // breadth,
    
        draw: function(){ //function 
            console.log('draw');
        } 
    };

}

let rectObj1 = createRectangle(5,4);//iss variable ke andar createRectangle function main jo object return kraya hai woh ajayega.

//constructor function --> Pascal notation follow krenge --> first letter of every word is capital --> eg: NumberOfStudents --> Rule nhi hai std hai yeh hum accross the globe baki logon ka bhi code smjh payenge aur woh humara kyunki yeh std accross the globe follow hota hai readability achi ho jati hai , property ya variable ka name define krne ke liye bhi std hai camelcase eg- firstName
//constructor function initialize ya define krta hai pproperties aur function ko
function Rectangle(length,breadth){
    this.length = length; //this ka matlab jisbhi current object pe kam kr rhe hai usko refer kr rha hota hai,python ke self keyword ki trah hai
    this.breadth =breadth; //eg rectangleObj.length =5 likh rhe hai toh uss case main current object rectangleObj hoga yani this rectanleObj ho jayega
    this.draw = function(){
        console.log('drawing');
    }
}

//object creation using constructor function
let rectangleObj = new Rectangle(4,6); //new keyword empty object ko return krta hai js main

//dynamic nature of objects

// agar manlo object ke andar sirf a aur b name ki property hai aur humne a.c = 4 krdiya toh c name ki porperty add hojayegi
rectangleObj.color = 'yellow';

// to delete any  property from object
delete rectangleObj.color;

console.log(Function.constructor); //Function ka constructor runtime enviromentfunction Function kyun aa rha hai woh kis cheez se bna hai
console.log(Rectangle.constructor);
console.log(rectangleObj.constructor);

//Rectangle ka constructor kaise implemented hai:

//Reactangle function jo bnaya ya koi bhi function ka constructor Function hai uska Constructor function hi aa rha hai kaise? find out , Function kaise bna hai?
let Rect = new Function('length' , 'breadth' , 
`   this.length = length; 
    this.breadth =breadth;
    this.draw = function(){
    console.log('drawing');
}`)

//Function jo function() ko create krta hai woh kaise bna hai? --> woh ek interface hai --> search about it to revise.

//for-in loop -can be used to access items inside objects , arrays, we can also do this with normal for loop , its just like for loop in python

// In JavaScript, the `for-in` and `for-of` loops serve different purposes than the traditional `for` loop. While you can achieve some similar functionality with all these loops, each has its specific use cases:

// 1. **`for-in` Loop:**
//    - Purpose: The `for-in` loop is used for iterating over the properties of an object. It is primarily designed for iterating over object properties, including those inherited from its prototype chain.
//    - Use Case: It is commonly used for tasks like iterating over the keys of an object or performing operations on the properties of an object.

//    Example:
//    ```javascript
//    const myObject = { a: 1, b: 2, c: 3 };
//    for (const key in myObject) {
//        console.log(key, myObject[key]);
//    }
//    ```

// 2. **`for-of` Loop:**
//    - Purpose: The `for-of` loop is used for iterating over iterable objects such as arrays, strings, maps, sets, and more. It provides a simple and concise way to loop through the values of iterable collections.
//    - Use Case: It is especially useful when you want to iterate over the elements or values of an iterable object.

//    Example:
//    ```javascript
//    const myArray = [1, 2, 3];
//    for (const value of myArray) {
//        console.log(value);
//    }
//    ```

// 3. **Traditional `for` Loop:**
//    - Purpose: The traditional `for` loop is more general and flexible. It allows you to create custom loops with specific conditions, incrementers, and control structures.
//    - Use Case: It is used for a wide range of loop scenarios, including iterating over arrays, numbers, or performing complex looping logic that can't be easily achieved with `for-in` or `for-of`.

//    Example:
//    ```javascript
//    for (let i = 0; i < 5; i++) {
//        console.log(i);
//    }
//    ```

// In summary, the choice between `for-in`, `for-of`, and a traditional `for` loop depends on your specific requirements. If you're working with iterable collections, `for-of` is often the most concise and appropriate choice. If you're dealing with object properties, `for-in` is the preferred option. The traditional `for` loop provides more control and can be used for various looping scenarios. It's important to choose the loop that best fits the task you're trying to accomplish.

let rect = {
    length: 2,
    breadth: 4
}

for(let key in rectangle){
    console.log(key,rect[key]);
}

//for-of sirf iterables pr lga skte hai jaise arrays , maps
for(let key of Object.keys(rect)){  //key of rect nhi likh skte hai woh iterable nhi key-value dono hai , agar object.keys(rect) likhnege toh usse array aajayegi
    console.log(key);
}
//What is Object in Object.keys?:
// Object is a global JavaScript object that provides various utility methods for working with objects.
// Object.keys() is one of these utility methods. It is used to extract the keys (property names) of an object and return them as an array. So, when you call Object.keys(rect), it takes the rect object and returns an array containing the keys (property names) of that object.

//if we need to find out if a property exists in object we can write:
if('length' in rect){
    console.log('present');
}
else{
    console.log('absent');
}

//DAte and time object:
//9 ways to create:
// new Date() shows current date and time if we print it.
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

//we can update values in date object using setters like date.setFullYear(1947) 
// or get values from date obj using getters like date.getDate.


//Objects in arrays

let courses = [
    {no:1 , naam:'Rishab'},
    {no:2 , naam:'Giddu'}
];

console.log(courses.includes({no:1 , naam: 'Rishab'})); //gives false kyunki array ke 0th index main koi object nhi hoga , 0th index arrya ka map hoga object se, object reference pass krta hai
console.log(courses.indexOf({no:1 , naam: 'Rishab'})); // issi reason ki vjah se idhr -1 ayega jiska matlab yeh hai nhi array main kisi bhi index pe


//theory of callback/predicate/comparision function to access obj in nb
//objects ke andar kuch search krna ho toh find function ka use krenge jo ki ek aur function pe depend krega jisse callback function bolte hai
// let course = courses.find(function(course){ //find function ki working aisi hai ki jo find ke andar function hai usmain ek ek krke array ke element pass honge jab tak jo condition lgayi hai callback function ke andar woh satisfy na hojaye.
//     return course.naam === 'Rishab'; //agar condition satisfy hogyi toh find function return krdega woh element array ka jiske sath condition satisfy hui thi, iss case main jo object parameter main dala hai usmain .naam='Rishab' aagya toh woh obj return krdega
// }); //agar aisa naam dalde jo hai hi nhi kisi bhi object main courses ke andar toh undefine return hojayega , undefined ek keyword bhi hai usse return kra skte hai , toh yeh find function aise work krta hai ki sare elements ke sath condition satisfy nhi hui toh undefined return krdega

// agar find ke andar jo function dala hai usse aur chota krna hai toh arrow function use kr skte hai

//agar single input parameter hai toh bracket bhi hta skte hai matlab (course) => ko  course => likh skte hai
let course = courses.find(course => course.naam === 'Rishab'); //agar single line of code hai toh {} yeh bracket hta skte hai aur yeh {} bracket hta lr return keyword hta na hi pdega

console.log(course);

// agar ek bhi parameter na ho toh arrow function () => aise likh skte hai , find function ke andar jo function hai usmain toh parameter cahiye hi waise agar arrow function bina parameter ke banana ho toh aise bna skte hai

let arr =[1,2,3,4,5];

arr.splice(2,2); //3,4 delete krdega arr se 
console.log(arr);

//filter to show +ve values in array
let arr2 = [1,-1,2,-2];

let filtered  = arr2.filter(value => value>=0);

console.log(filtered);

//map
let arr3 = [7,8,9];

arr3.map(function(value){
    return 'student_no' + value;
}); // isse pehle agar 0th index 7 se map tha ab student_no7 se hojayega

console.log(arr3); 

//mapping with objects
let arr4 = [1,2,3,4];
// we can write this 2 lines of code in one line using concept of chaining
// let filter2 = arr4.filter(value => value>=0);
// let items = filter2.map(num => obj = {value: num});
 // 1 ko map krdiya {value:1} obj se same for other elements in arr4

 let items = arr4.filter(value => value>=0).map(num => obj = {value: num}); //isko chaining bolte hai
 //pehle arr4 pe filter lgaya jisse sari +ve values ki array aagyi fir uss array pe map lgaya jisse object se map hogye elements

console.log(items);
