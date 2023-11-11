// const content = document.querySelector('#wrapper');

//program to print event obj in console on click ,idhr event pass na kre aur arguments[0] log krvade toh bhi event obj print hojayega automatically pass hojata hai event obj
// content.addEventListener('click' , function(event){ //event object as an argument pass hojayega --> internal working? find out
//     console.log(event);
// });

//default aciton:
// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click' , function(event){
        //internal working kaise event prevent ho rha hai event object ke uper .preventDefault lgane se?
//     event.preventDefault();//default action/event anchor tag ka prevent hojayega 
//     console.log('maza agya'); //third link pe click krenge toh console main maza agya print hojayega
// });

// `NodeList` and `HTMLCollection` are two common objects in JavaScript that are used to store collections of DOM elements, typically selected by methods like `querySelectorAll`, `getElementsByClassName`, or `getElementsByTagName`. While they share some similarities, there are also some important differences between them:

// **NodeList:**

// 1. **Static:** A `NodeList` is a static list of nodes, which means it represents a snapshot of elements that matched the criteria at the time it was created. It doesn't automatically update if elements are added or removed from the DOM.

// 2. **Accessing Elements:** You can access elements in a `NodeList` using indices (like an array) or by using the `forEach` method. It's also possible to iterate through it using a `for...of` loop.

// 3. **Usage:** `NodeList` is commonly returned by methods like `querySelectorAll` and represents a collection of nodes (including elements, text nodes, comments, etc.). It's a general-purpose collection.

// **HTMLCollection:**

// 1. **Live:** An `HTMLCollection` is a live collection, which means it reflects the current state of the DOM. If elements are added or removed from the DOM that match the criteria, the `HTMLCollection` is automatically updated to reflect these changes.

// 2. **Accessing Elements:** You can access elements in an `HTMLCollection` using indices (like an array) or by using the `namedItem` method (if elements have `name` attributes). It doesn't have a `forEach` method.

// 3. **Usage:** `HTMLCollection` is typically returned by methods like `getElementsByClassName` and `getElementsByTagName`. It's more specialized for working with elements, rather than other types of nodes.

// In summary, the key difference is that a `NodeList` is static and doesn't update when the DOM changes, while an `HTMLCollection` is live and reflects the current state of the DOM. The choice between them depends on your specific use case. If you need a static snapshot of elements that matched a criteria at a particular time, you'd use a `NodeList`. If you need a dynamic, always up-to-date collection, an `HTMLCollection` might be more suitable.

// let myDiv = document.createElement('div');


// function paraListener(event){ //idhr bhi bracket main event parameter dalna zaruri nhi , arguments[0] se bhi kam chl jayega
//     console.log('Para:' + event.target.textContent);  //isse aur optimize kr skte hai instead har para ko listener ke sath attatch krne ke bjaye div ko hi attatch krdo
// };//event.target.textContent add krne se jis element ke uper event occur hoga uska text content ajayega , toh isse div ke upeer bhi event listener lgake individual para ko access kr pa rhe hai , pr isse jab khali space pe print kr rhe hai toh mydiv ka sara text content print ho rha console pe

//In this case event obj will pass in paraListener inside event listener only when click event occurs --> internal working? How does this event listener method gets to know if its a click event? And whats the point of passing event obj if event Listener already know which type of event has occured , manlo do events ke liye ek function use kiya hai tab event obj kam ayega iss type ka event hai toh yeh execute krna warna yeh isss type ki condition lga skte hai aur bhi data ko use kr skte hai event object ke.
//The internal working of how events are handled in the DOM involves a combination of JavaScript, the browser, and the DOM itself. Here's a simplified overview of how the process works:

// 1. **Event Registration:**
// - When you use `addEventListener` to attach an event listener to an element, you're essentially telling the browser, "When this specific type of event occurs on this element, call this function."

// 2. **Event Occurrence:**
// - The event occurs in the browser, such as a user clicking the mouse, scrolling, pressing a key, or other interactions.

// 3. **Event Object Creation:**
// - When the event occurs, the browser automatically creates an event object. This object contains information about the event, such as the event type, target element, mouse coordinates, and more.

// 4. **Event Callback Execution:**
// - The browser then calls the registered event listener function, passing the event object as an argument.

// 5. **Event Handling:**
// - Inside the event listener function, you can access the event object's properties, including the `type` property, which tells you the type of event that occurred (e.g., "click," "scroll").

// 6. **Conditional Handling:**
// - You can use conditional statements to determine the event type and respond accordingly. For example, if the `type` is "click," you might perform actions related to a click event.
// Here's an example of how this process works:
//
// function eventHandler(event) {
//  if (event.type === "click") {
//      console.log("Click event occurred on element with ID: " + event.target.id);
//  } else if (event.type === "scroll") {
//      console.log("Scroll event occurred on element with ID: " + event.target.id);
//  } // Handle other event types here
// }
// myDiv.addEventListener("click", eventHandler);
// myDiv.addEventListener("scroll", eventHandler);
// In this example, when a click or scroll event occurs on the `myDiv` element, the browser creates an event object and passes it to the `eventHandler` function. Inside the function, you can check the `type` property of the event object to distinguish between different event types and respond accordingly.
//The browser's internal event handling system takes care of creating event objects, calling event listener functions, and providing them with the necessary information to respond to events.

//event.target returns the element where event occured
//myDiv.addEventListener('click' , paraListener); //pr ab div main kahi bhi click krenge toh para listner execute hojayega , humne har para pe jo click krne pe execute ho rha tha woh kho diya , individuality khodi har para pe click krke execute hone wali , ab kam ayenge phases

//pr iss function main event pass kyun nhi kravaya?
// When you set up an event listener using addEventListener, you don't need to pass any arguments to the event listener function directly. Instead, the browser automatically passes an event object to the event listener when the event occurs.

// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' +i;

    
//      //pehle jab listener ke andar function define kra tha tab har para ke liye alag listener hai to optimize hum ek listener for loop ke bahar bnakr har para ko uske sath attatch krdo);
//      myDiv.appendChild(newElement)
// }
// document.body.appendChild(myDiv); //document.appendChild nhi kr skte hai document element ka child element sirf html ho skta hai aur baaki elements html ke child elements honge toh jab hum sirf document.appendChild krte toh uska matlab hota hai html tag ke bahar append kr rhe hai uska kuch matlab nhi bna isliye .body bhi sath main use kiya usse ab body ke andar append hoga

let element = document.querySelector('#wrapper');

//sirf span pe click krne se print ho woh toh hum span ko classes de kr bhi kr skte the , idhr queryselectorall se class ko select krva ke ,un class ke liye event listener add krdete
element.addEventListener('click' , function(event){
    if(event.target.nodeName === 'SPAN')
        console.log("Span " + event.target.textContent); //iss case main para pe click krne pr pura print ho rha span ke andar ka text bhi aur khali jagah click krne pr article ke andar ke sare elements 
}); // agar hum chahte hai ki sirf span pe click krne pr chale toh .nodeName ka use kr skte hai , condition laga skte hai ki agar nodeNAme yeh hai tabhi console.log krna span ka nodeName SPAN hota hai

//The removeEventListener method is used to prevent memory leaks and unnecessary event handling, especially when dealing with dynamic content or single-page applications. It's essential to remove event listeners when they are no longer needed to avoid unexpected behavior in your JavaScript code.


// Yes, having a large number of event listeners in a web application can impact performance, especially if those listeners are not properly managed. Here are some ways in which having too many listeners can affect performance:

// 1. **Memory Consumption:** Each event listener consumes memory, as it creates a reference to a JavaScript function and its associated context. If you have many listeners, it can increase memory usage, which might lead to memory leaks in long-running applications.

// 2. **Event Handling Overhead:** When an event occurs, the browser has to invoke all the event listeners registered for that event type. With a large number of listeners, this can introduce overhead and slow down event handling.

// 3. **Page Load Time:** If you have a significant number of listeners, it can slow down the initial page load because the browser has to parse and execute more JavaScript code.

// 4. **Unnecessary Work:** Redundant or unnecessary event listeners can lead to extra work. For example, if multiple listeners are attached to the same element, all of them may execute for the same event, leading to redundant processing.

// To mitigate these performance issues, consider the following best practices:

// 1. **Event Delegation:** Use event delegation when possible. Instead of attaching an event listener to each individual element, you can attach a single listener to a parent element and use the event object to determine which child element triggered the event. This reduces the number of listeners.

// 2. **Remove Unused Listeners:** When you no longer need an event listener (e.g., when an element is removed from the DOM), remove it using `removeEventListener`. Failing to do so can lead to memory leaks.

// 3. **Use Throttling and Debouncing:** For events like scroll or resize that can fire rapidly, consider using throttling or debouncing techniques to limit how often the event listener is executed, reducing the performance impact.

// 4. **Efficient Event Handling:** Write efficient event listener functions. Avoid unnecessary computations or DOM manipulations within event listeners.

// 5. **Consider Event Propagation:** Understand the event propagation model (capturing and bubbling phases) and use it effectively to minimize the number of listeners needed.

// By following these best practices and being mindful of how you manage your event listeners, you can help ensure that your web application maintains good performance even with a significant number of events to handle.