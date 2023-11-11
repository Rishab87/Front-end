console.log('Namaste Dunia'); //used to print
// to run js on terminal write node filename in terminal
// class ke baad open console in browser and try to run code without internet , if it is running then find the reason? --> HTML and JavaScript are processed in the web browser itself and do not require a connection to a server.
// HW: JAVA vs JS find the difference

let name = 'Rishab'; //let is used to create variable
//js is dynamically typed language 
//These are the languages that do not require any pre-defined data type for any variable as it is interpreted at runtime by the machine itself. In these languages, interpreters assign the data type to a variable at runtime depending on its value isliye hum ek hi variable main alag type ka data replace kr skte hai eg a=5 tha badmain humne a= 'rishab' krdiya.
//dynmically typed language how do they assign data type while running whats the internal working?
//we can create variables using var also.

//diff b/w let and var in notebook.

//In JavaScript, the use of semicolons to terminate statements is not always required, thanks to a mechanism called Automatic Semicolon Insertion (ASI). ASI automatically inserts semicolons in certain cases to separate statements. However, while JavaScript can automatically insert semicolons in many cases, it's still considered a best practice to include them explicitly for the following reasons:

// Predictability: Relying on ASI to insert semicolons can lead to unexpected behavior. It's safer and more predictable to include semicolons explicitly, as this ensures that you have full control over the code's interpretation.

// Readability: Code with explicit semicolons tends to be more readable. It's easier for you and others to understand where one statement ends and another begins. This can prevent common programming mistakes.

// Minification: In the process of minifying JavaScript for production use, unnecessary line breaks and whitespace are removed. Without explicit semicolons, this can lead to issues as ASI may not work correctly in all cases during minification.

// Avoiding Ambiguity: In some situations, omitting semicolons can lead to ambiguous code, where it's not clear whether two lines should be treated as separate statements or a single statement. Explicit semicolons eliminate this ambiguity.

var a;
console.log(a);
a =null;

b = 1
console.log(b)
// we can also give variable null (it is also a data type like strings , int etc) undefined matlab humne value di hi nhi variable ko define nhi kri null matlab variable empty hai humne value define kri hai jo ki empty hai matlab khali rkhna hai variable koi value nhi di hai.


names = ['rishab' , 'rahul'];
names[3] = 'raju';
console.log(names[2]);
console.log('' && null && 0);



// Memory allocation in dynamically typed languages is managed in a way that accommodates the flexibility and dynamic nature of data types. Here are some key aspects of memory allocation in dynamically typed languages:

// 1. **Objects or Values with Associated Types:** In dynamically typed languages, values or objects often carry their data types with them. Each value or object is associated with metadata that includes information about its data type. This allows the runtime environment to determine the type of a value when it's needed during execution.

// 2. **Heap Allocation:** Values and objects are typically allocated memory on the heap. The heap is a region of memory where dynamic memory allocation occurs. It allows for the allocation and deallocation of memory at runtime. The heap is essential for managing objects of varying sizes and lifetimes.

// 3. **Reference Counting or Garbage Collection:** Memory management strategies vary between dynamically typed languages. Some languages use reference counting, where each object keeps track of how many references point to it. When the reference count drops to zero, the memory is deallocated. Other languages use garbage collection, which automatically identifies and reclaims memory that is no longer accessible.

// 4. **Dynamic Resizing:** Data structures like arrays and lists in dynamically typed languages often support dynamic resizing. When an array or list exceeds its current capacity, the underlying memory is reallocated to accommodate more elements. This resizing is done behind the scenes by the language runtime.

// 5. **Polymorphic Data Structures:** In dynamically typed languages, data structures like arrays and lists can store elements of different types. The memory allocation mechanism must handle this polymorphism, which is made possible by storing type information alongside each element.

// Here's a high-level example in Python, a dynamically typed language, to demonstrate memory allocation and the association of data types with values:

// ```python
// # Dynamically typed language (Python)
// x = 42  # Memory allocated for an integer
// y = "Hello"  # Memory allocated for a string

// # The memory allocation for 'x' includes type information for an integer
// # The memory allocation for 'y' includes type information for a string
// ```

// In summary, memory allocation in dynamically typed languages involves associating type information with values, allocating memory on the heap, and using strategies like reference counting or garbage collection to manage memory efficiently. The dynamic nature of data types requires a more flexible approach to memory allocation and management.



// In polymorphic data structures in dynamically typed languages, type information for each element is typically stored in a data structure or metadata associated with the data structure itself, rather than directly with each element.

// Here's a high-level explanation of how this works:

// 1. **Data Structure Metadata:** The polymorphic data structure, such as an array or a list, has a metadata section that keeps track of the type of elements it contains. This metadata includes information about the types of elements and their locations within the data structure.

// 2. **Type Tags:** To efficiently manage elements of different types, a common approach is to use type tags or markers associated with each element. These type tags are typically small pieces of data that indicate the data type of the corresponding element. The type tags are stored alongside the elements in the data structure.

// 3. **Runtime Type Checks:** When accessing or manipulating elements in a polymorphic data structure, the runtime environment uses the type tags to perform type checks to ensure that operations are safe and valid. This allows the code to work with elements of different types within the same data structure.

// 4. **Type Inference:** In dynamically typed languages, the runtime environment can perform type inference to determine the actual type of an element at runtime based on the type tags and metadata. This allows for flexibility in working with elements of different types without requiring explicit type declarations.

// Here's a simplified example in a dynamically typed language like Python:

// ```python
// # Polymorphic list with type tags
// my_list = [1, "Hello", 3.14]

// # The list metadata stores information about types and locations
// # Each element is associated with a type tag:
// # - 1 is tagged as an integer
// # - "Hello" is tagged as a string
// # - 3.14 is tagged as a float
// ```

// This approach allows polymorphic data structures to store elements of different types while keeping track of their types using type tags and metadata. The runtime environment uses this information to perform type checks and ensure safe operations on these elements.



// Metadata of objects in dynamically typed languages is carried along by associating it with the object itself. This metadata includes information about the object's type, properties, methods, and other relevant details. Here's how this metadata is typically managed:

// 1. **Object Headers:** Each object in memory often has a header or a part of its memory layout dedicated to storing metadata. This header can contain information like the object's data type, reference count (in reference-counted systems), and other internal information.

// 2. **Type Information:** The type information for an object can include a reference to the object's class or prototype, method tables, and other data needed to support dynamic dispatch and method resolution.

// 3. **Property Descriptors:** For objects with properties (e.g., in an object-oriented context), metadata may include property descriptors that specify the properties' names, types, access levels, and other characteristics.

// 4. **Virtual Function Tables (vtables):** In object-oriented languages, vtables store information about methods and their memory addresses for polymorphic dispatch. These tables enable the runtime to look up and call the correct method for an object dynamically.

// 5. **Garbage Collection Information:** If the language uses garbage collection, the object's metadata may include information about its reachability and reference relationships, which helps the garbage collector identify objects that are no longer in use.

// 6. **Type Tags:** As mentioned earlier, type tags or markers may be associated with objects, especially in polymorphic data structures. These tags specify the type of the object, allowing for dynamic type checks.

// Here's a simplified example in Python to illustrate object metadata:

// ```python
// class MyClass:
//     def __init__(self, value):
//         self.value = value

// # Create an instance of MyClass
// obj = MyClass(42)

// # Metadata associated with 'obj':
// # - Type information (e.g., MyClass)
// # - Reference count (for reference counting systems)
// # - Method table for MyClass
// # - Property descriptors (e.g., 'value')
// ```

// In dynamically typed languages, metadata associated with objects plays a crucial role in enabling dynamic dispatch, type inference, and other runtime behaviors. It allows the language to provide flexibility and adapt to changing data types and structures during program execution.



// Metadata and type tags are typically stored in memory alongside the objects or data structures they describe. Here's a high-level explanation of where these pieces of information are stored:

// 1. **Metadata Storage:**
//    - Metadata associated with objects is typically stored in a reserved section of memory within the object itself. This section is commonly referred to as the object's header. The header is a part of the object's memory layout, and it stores metadata specific to the object's type and properties.
//    - In languages like C++ or C#, this metadata can include a pointer to a virtual function table (vtable) for supporting polymorphism and method dispatch, as well as information about the object's class or prototype.
//    - Metadata can also be associated with classes or types and may be stored in a global metadata repository. For example, metadata related to class hierarchies and method tables is often shared among instances of the same class.

// 2. **Type Tag Storage:**
//    - Type tags are usually stored directly with each element or object within a data structure, especially in polymorphic data structures like arrays and lists. A small piece of data (the type tag) is associated with each element to indicate its data type.
//    - Type tags are usually stored in the same memory space as the element they describe. The runtime uses these type tags to perform type checks and determine how to interpret or process each element.

// In practice, the exact memory layout and storage of metadata and type tags can vary between programming languages, compilers, and runtime environments. However, the general principle is that this information is stored in memory in a way that makes it accessible and useful for the runtime system to perform dynamic dispatch, type checking, and other runtime operations.

// Heap memory and stack memory are two distinct areas of memory within a computer's RAM (Random Access Memory), and they serve different purposes in the context of a program's execution. Here's an in-depth explanation of these memory areas, their layout, and how they are used in the context of programming:

// **1. Heap Memory:**

// Heap memory is a region of memory used for dynamic memory allocation. It is typically used to store objects whose lifetime is not tied to a specific scope or function, and the allocation and deallocation of memory occur at runtime. In many programming languages, heap memory is used to manage objects created with `new` or `malloc` functions.

// **Layout and Characteristics of Heap Memory:**

// - **Dynamic Allocation:** Memory is allocated and deallocated manually or through a garbage collector (in languages like Java or C#). Objects allocated on the heap exist until they are explicitly deallocated or garbage-collected.

// - **No Fixed Order:** Objects in the heap do not have a fixed order. They are allocated based on the availability of memory blocks. This means that objects are scattered throughout the heap.

// - **Unrestricted Size:** Heap memory is typically much larger than stack memory and can grow as needed, up to the limits of available RAM and the operating system.

// - **Non-Contiguous:** The heap is usually non-contiguous, meaning objects are stored in different memory blocks across the heap, and these blocks may not be adjacent to each other.

// - **Manual Memory Management:** In languages like C and C++, developers must manually allocate and deallocate memory using `malloc` and `free` functions. This can lead to memory leaks and invalid memory accesses if not managed correctly.

// - **Garbage Collection:** In languages like Java and C#, a garbage collector automatically reclaims memory from objects that are no longer in use.

// **2. Stack Memory:**

// Stack memory is a region of memory used for managing function call stacks, local variables, and control flow. It is typically organized as a Last-In, First-Out (LIFO) data structure, where function calls and variable contexts are pushed and popped from the stack.

// **Layout and Characteristics of Stack Memory:**

// - **Static Allocation:** Memory for stack-based variables is allocated and deallocated automatically as functions are called and return. Variables in the stack have a well-defined scope, limited to the lifetime of the function they belong to.

// - **Fixed Order:** Objects on the stack are organized in a fixed order. When a function is called, its local variables are pushed onto the stack, and when the function returns, they are popped off.

// - **Fixed Size:** Stack memory has a fixed size, and the size is usually much smaller than the heap. This means that the stack can quickly run out of space if not managed properly.

// - **Contiguous:** The stack is typically organized as a contiguous block of memory, and objects are stored in adjacent memory locations.

// - **Automatic Memory Management:** Memory for stack-based variables is managed automatically by the compiler or runtime system. Variables are created when entering a function and destroyed when the function exits.

// - **Faster Access:** Accessing variables on the stack is usually faster than accessing heap-allocated objects because the stack is more tightly managed and has a fixed structure.

// **In Summary:**

// Heap memory and stack memory serve different purposes and have distinct characteristics. Heap memory is used for dynamic memory allocation, supports objects with dynamic lifetimes, and has a less predictable layout. Stack memory, on the other hand, is used for managing function call stacks and local variables, has a fixed order, and is more tightly controlled by the program's execution flow.

// Understanding these memory areas is essential for effective memory management in programming and for avoiding issues such as memory leaks, stack overflows, or dangling pointers.



// Objects in memory are stored with a structured layout for their key-value pairs, and they can appear scattered in memory due to the dynamic nature of memory allocation. Let's break down how this works:
// 
// **Structured Layout for Key-Value Pairs:**
// 
// - Each object is stored as a contiguous block of memory that includes both the object's data (key-value pairs) and an object header, which contains metadata about the object's type and other relevant information. The key-value pairs are part of the object's structured layout.
// 
// - The key-value pairs in an object are typically organized in a way that allows efficient access. This organization may involve hashing, indexing, or other data structures to optimize key-based retrieval.
// 
// - The specific layout details can vary between programming languages and runtime environments. For example, in JavaScript, objects are often implemented as hash tables or dictionaries, allowing O(1) average-case access time for property retrieval.
// 
// **Scattered Memory Allocation:**
// 
// - Objects in memory can appear scattered because memory allocation for objects occurs dynamically. When an object is created, the runtime system allocates a block of memory to store it. These blocks may not always be contiguous in physical memory.
// 
// - Objects are allocated in available memory regions, and the location of these regions can vary. Objects can be placed in different memory blocks as they are created.
// 
// - The scattered allocation of objects allows for efficient memory usage, as memory is allocated based on demand rather than requiring large, contiguous memory segments for each object.
// 
// - Despite the scattered allocation, the runtime system keeps track of object locations and manages memory efficiently to ensure that objects can be accessed and modified in a structured and organized manner.
// 
// The structured layout and scattered allocation might seem contradictory, but they are both essential aspects of how modern programming languages and runtime environments manage memory efficiently. The structured layout within each object ensures that data is organized logically for efficient access, while scattered allocation allows the system to adapt to the dynamic memory needs of a running program.
// 
// In practice, developers work with objects and their properties using a simple and structured syntax, while the underlying memory management, organization, and allocation are handled by the runtime environment or language implementation. This abstraction simplifies programming and ensures memory is used efficiently.


// The spread operator (`...`) in JavaScript is used to expand elements from an iterable (e.g., an array or object) into another array, object, or function call. It has various use cases and behaviors, depending on where it's used. Here's an overview of how the spread operator works internally:

// 1. **Expanding Arrays:**

//    When used to expand elements from one array into another, the spread operator internally iterates through the source array and copies each element into the target array. Here's an example:

//    ```javascript
//    const sourceArray = [1, 2, 3];
//    const targetArray = [...sourceArray];
//    ```

//    Internally, it copies the elements `[1, 2, 3]` from `sourceArray` into `targetArray`.

// 2. **Expanding Objects:**

//    When used with objects, the spread operator copies the properties and values from one object into another. Here's an example:

//    ```javascript
//    const sourceObject = { a: 1, b: 2 };
//    const targetObject = { ...sourceObject };
//    ```

//    Internally, it copies the properties and values `{ a: 1, b: 2 }` from `sourceObject` into `targetObject`.

// 3. **Expanding Function Arguments:**

//    In function calls, the spread operator can be used to pass elements from an array as individual arguments to a function. Internally, it extracts the elements from the array and passes them as separate arguments to the function. For example:

//    ```javascript
//    function sum(a, b, c) {
//      return a + b + c;
//    }

//    const numbers = [1, 2, 3];
//    const result = sum(...numbers);
//    ```

//    Internally, the spread operator extracts the elements `1`, `2`, and `3` from the `numbers` array and passes them as separate arguments to the `sum` function.

// 4. **Merging Arrays and Objects:**

//    The spread operator can be used to merge multiple arrays or objects. For arrays, it concatenates them, and for objects, it combines their properties. For example:

//    ```javascript
//    const array1 = [1, 2];
//    const array2 = [3, 4];
//    const mergedArray = [...array1, ...array2];

//    const object1 = { a: 1 };
//    const object2 = { b: 2 };
//    const mergedObject = { ...object1, ...object2 };
//    ```

//    Internally, it combines the elements or properties from the source arrays or objects to create a merged array or object.

// The spread operator provides a concise and versatile way to work with arrays, objects, and function arguments, making your code more readable and maintainable by avoiding the need for explicit loops or concatenation. It's a powerful feature for handling collections and data manipulation in JavaScript.



// A hash table, also known as a hash map, is a data structure that stores key-value pairs and allows for efficient retrieval of values based on their associated keys. It is not an array but is often implemented using an array-like structure, as you mentioned, with keys transformed into indexes through a hash function. Let's explore the characteristics of a hash table and how objects are stored in memory using this data structure:

// 1. **Hash Function:**
//    - A hash table uses a hash function to convert keys (such as strings or numbers) into integer values, which are used as indices into an array-like structure.
//    - The hash function takes the key as input and produces a numeric value (the hash code) that is used to determine the index where the associated value will be stored.

// 2. **Array-Like Structure:**
//    - A hash table typically uses an array-like structure (often called a bucket or slot) to store key-value pairs.
//    - Each index of this array corresponds to a possible hash code generated by the hash function.

// 3. **Collisions:**
//    - Collisions occur when multiple keys produce the same hash code. To handle collisions, hash tables usually store multiple key-value pairs in the same index, typically in the form of a linked list, an array, or some other data structure.

// 4. **Storage of Objects:**
//    - When an object is stored in a hash table, it's typically the key that is hashed to produce a hash code.
//    - The hash code is used to determine the index in the array-like structure where the object's value is stored.
//    - If there are no collisions, the object's value can be directly stored at that index.
//    - In cases of collisions, as mentioned earlier, additional data structures (e.g., linked lists) are used to store multiple key-value pairs at the same index.

// 5. **Retrieval:**
//    - To retrieve a value from a hash table, you provide the associated key.
//    - The hash function is applied to the key to compute the hash code, and this code is used to look up the index in the array-like structure.
//    - If there are collisions at that index, additional steps are taken to locate the specific key-value pair that matches the given key.

// The use of a hash table provides efficient key-based retrieval, with an average-case time complexity of O(1) for lookups when collisions are minimized. It allows you to quickly find values associated with specific keys, making it a fundamental data structure for implementing dictionaries, sets, caches, and more.

// While hash tables are commonly used to store key-value pairs, their implementation details can vary depending on the programming language and data structure library used. The primary goal is to provide fast and efficient access to values based on keys, regardless of the underlying implementation.


// Linked lists are commonly used in hash tables to handle collisions, which occur when multiple keys hash to the same index in the hash table. When a collision occurs, linked lists are employed to store multiple key-value pairs at the same index. Here's how it works:
// 
// 1. **Initial Setup:**
//    - Each index in the hash table corresponds to a possible hash code generated by the hash function.
//    - When a collision happens (two or more keys produce the same hash code), the hash table uses a linked list to store the associated key-value pairs at that index.
// 
// 2. **Insertion:**
//    - When a new key-value pair needs to be inserted into the hash table, the hash function determines the index where it should be stored.
//    - If there is already one or more key-value pairs at that index (a collision has occurred), the new key-value pair is simply added to the linked list at that index.
//    - This process ensures that all key-value pairs with the same hash code are stored together in the linked list at that index.
// 
// 3. **Retrieval:**
//    - To retrieve a value based on a key, the hash function is used to determine the index where the value should be located.
//    - The hash table then searches the linked list at that index to find the key-value pair associated with the given key.
// 
// 4. **Deletion:**
//    - When removing a key-value pair, the hash table searches the linked list at the corresponding index for the key-value pair that matches the key to be removed and removes it from the list.
// 
// 5. **Collision Resolution:**
//    - If a collision is already present at an index and a new key is inserted with the same hash code, it is added to the end of the linked list, creating a chain of key-value pairs.
//    - Some hash tables use techniques such as resizing (increasing the number of buckets or slots) to minimize collisions and maintain an efficient load factor (the ratio of stored items to the total number of buckets).
// 
// Using linked lists to manage collisions in a hash table ensures that keys with the same hash code are stored in a structured manner and can be efficiently searched for retrieval or removal. This approach provides an effective way to handle collisions without compromising the efficiency of key-based lookups, especially when the hash function distributes keys relatively evenly across the table.



// Hoisting in JavaScript is a concept where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that they are recognized by the JavaScript engine before the code is executed. However, it's essential to understand that the hoisting process doesn't physically move code in your source file; it's a behavior enforced by the language's runtime.
// 
// Here's how hoisting works internally in JavaScript:
// 
// 1. **Compilation Phase:**
//    - Before your JavaScript code is executed, it goes through a compilation phase.
//    - During this phase, the JavaScript engine scans the code to identify variable and function declarations. Declarations are recognized by keywords like `var`, `let`, `const`, and `function`.
// 
// 2. **Declaration Extraction:**
//    - When a declaration is encountered, the JavaScript engine allocates memory for the declared variable or function, even before it encounters the actual assignment or definition.
//    - This process is called "declaration extraction" or "hoisting."
// 
// 3. **Variable and Function Initialization:**
//    - For variables declared with `var`, they are initialized with the value `undefined` during declaration extraction.
// 
//    - For function declarations (not to be confused with function expressions), the entire function (including its body) is moved to the top of the containing scope. This is why you can call functions before their actual placement in the code.
// 
//    - For variables declared with `let` and `const`, they are also hoisted to the top of their containing scope, but they are not initialized with `undefined`. Attempting to access them before their declaration results in a "temporal dead zone" error.
// 
// 4. **Execution Phase:**
//    - After declaration extraction and hoisting, the code is executed from top to bottom.
// 
// Here's an example of hoisting in action:
// 
// ```javascript
// console.log(x); // Outputs: undefined
// var x = 10;
// 
// foo(); // Outputs: "Hello, world!"
// function foo() {
//   console.log("Hello, world!");
// }
// ```
// 
// In this example, the variable `x` and the function `foo` are hoisted to the top of their containing scope, so you can reference them before their actual declarations in the code.
// 
// It's important to be aware of hoisting in JavaScript to avoid unexpected behavior, especially when using variables and functions in your code. To write clean and readable code, it's generally recommended to declare your variables and functions before you use them to prevent confusion and potential issues.


// The `new` keyword in JavaScript is used to create instances of constructor functions or classes. When you use `new` to create an instance, it goes through a series of steps internally to initialize the object. Here's how the `new` keyword works internally:

// 1. **Creation of an Empty Object:**
//    When you use `new`, an empty object is created. This object will become the instance of the constructor function or class.

// 2. **Setting the Prototype:**
//    The newly created object is automatically linked to the prototype of the constructor function or class. This is established through the `[[Prototype]]` property (or `__proto__` in some environments), which allows the instance to inherit properties and methods from the constructor's prototype.

// 3. **Invoking the Constructor Function:**
//    The constructor function or class is called with the `this` keyword referring to the newly created object. This allows the constructor to initialize the object by adding properties and methods to it.

// 4. **Return the Instance:**
//    By default, the instance is returned from the constructor function automatically. If the constructor does not explicitly return an object, the new instance is returned. However, if the constructor returns an object, that object will be returned instead of the new instance.

// Here's an example of how `new` works with a constructor function:

// ```javascript
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const john = new Person("John", 30);
// console.log(john.name); // "John"
// console.log(john.age);  // 30
// ```

// In this example, `new` is used to create an instance of the `Person` constructor. The constructor function initializes the `name` and `age` properties of the `john` instance.

// It's important to note that while `new` keyword provides a convenient way to create instances, it's not the only way to create objects in JavaScript. You can also use object literals, factory functions, or the `Object.create()` method, depending on your specific use case.

//In JavaScript, classes and objects are related concepts, but they serve different purposes.

// 1. **Objects:**
// - An object is a fundamental data type in JavaScript.
// - Objects are instances of the `Object` type.
// - They are collections of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.
// - Objects can be created using object literals `{}`, the `Object` constructor, or other specific constructors like `Array`, `Date`, etc.
// - Objects can have methods (functions as property values) and can be used for various purposes, including modeling real-world entities.

// Example of creating an object using an object literal:

// ```javascript
// const person = {
//   name: 'John',
//   age: 30,
//   sayHello: function() {
//     console.log('Hello!');
//   }
// };
// ```

// 2. **Classes:**
// - Introduced in ECMAScript 2015 (ES6), classes are a way to create objects using a more structured syntax.
// - Classes are essentially syntactic sugar over JavaScript's existing prototype-based inheritance.
// - They provide a more familiar and cleaner syntax for creating constructor functions and defining methods.
// - Classes support inheritance, allowing you to create a hierarchy of objects.

// Example of creating a class:

// ```javascript
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log('Hello!');
//   }
// }

// const john = new Person('John', 30);
// ```

// Classes help organize code and improve code readability, especially for those coming from object-oriented programming backgrounds.

// In summary, objects are instances of the `Object` type, and they can be created in various ways. Classes, on the other hand, provide a more structured and convenient syntax for creating objects and supporting inheritance. Under the hood, JavaScript still uses prototypes for inheritance even when using classes.


