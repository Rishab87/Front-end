// const API_KEY = "43dcdfd4b3b379875e793757587f6ccb";

// //good practice --> generally ek function se ek hi kam kraye , jaise fetch krne ke liye alag function fetch ke andar render ka code nhi likha uska bhi alag function bna liya-->but why it is a good practice?
// //ANS: Assigning one task to a function is a good practice because it promotes code that is more modular, maintainable, and easier to understand. Here are some reasons why it's beneficial to follow this practice:

// // 1. **Clarity and Readability**: When a function has a single, well-defined responsibility, it becomes easier to understand its purpose just by looking at its name and signature. This makes your code more readable and helps others (or your future self) grasp its intent without delving into the implementation details.

// // 2. **Reusability**: Functions with a single responsibility are more reusable. You can use them in various parts of your codebase without worrying about side effects or unexpected behavior. This promotes the "Don't Repeat Yourself" (DRY) principle, as you can reuse a function whenever you need the specific task it performs.

// // 3. **Testability**: Smaller, focused functions are easier to test because you can write specific test cases to cover their individual behavior. This makes it simpler to ensure that each part of your code behaves correctly.

// // 4. **Debugging**: When a function performs a single task, it's easier to locate and fix issues. If a function is responsible for multiple things, identifying the source of a problem can be more challenging.

// // 5. **Maintainability**: Code that follows the Single Responsibility Principle (one of the SOLID principles) is more maintainable. When you need to make changes or enhancements, you can do so with less risk of unintended consequences in other parts of your codebase.

// // 6. **Collaboration**: When working in a team, adhering to this practice makes it easier for team members to work on different parts of the codebase simultaneously without stepping on each other's toes.

// // 7. **Abstraction and Encapsulation**: Dividing your code into smaller, single-responsibility functions encourages proper abstraction and encapsulation, isolating implementation details from the broader context.

// // 8. **Scaling**: As your project grows, the benefits of well-structured, single-responsibility functions become more evident. They allow you to scale your codebase more easily without sacrificing maintainability.

// // It's important to note that the practice of assigning a single task to a function doesn't mean you should create an excessive number of tiny functions. Use your judgment to strike a balance, focusing on meaningful separation of concerns and maintaining an overall structure that makes sense for your specific project.

// function renderWeather(data){
//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)} Celcius`;

//     document.body.appendChild(newPara);
// }

// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data. It's commonly used for transmitting data in web applications. For example, sending data from the server to the client so it can be displayed on a web page, or vice versa. 
// JSON is a lightweight format for storing and transporting data. It's easy for both humans and machines to read. JSON represents objects as name/value pairs, just like a Python dictionary. 
// JSON is a data interchange format that works natively with most modern languages, like Python, Java, PHP, and JavaScript. 

//A clipboard can also refer to a section of computer memory that temporarily stores data (such as text or a graphics image). This is especially useful for facilitating its movement or duplication. For example, in a word processor application, the user might want to cut text from one part of a document and paste it in another part of the document or somewhere else. 

// async function fetchWeatherDetails(){

//     try{
//         let city = "goa";

//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
//         const data  = response.json();
//         console.log(`weather data: ${data}`); //why data is coming properly with console.log("weather data: " , data); but not with my code
//         console.log(data);
//         //The behavior you're observing is due to the way string interpolation works in JavaScript. In the first code snippet:
//         // You are using template literals with `${data}` inside the string. When you use `${data}` in a template literal, it automatically calls the `toString` method on `data` to convert it into a string before interpolating it into the string. This means that if `data` is a Promise object, it will be converted to a string representation of the Promise object, which is why you see "Promise" in the console.
//         // You are using regular string concatenation, where the values are separated by commas. In this case, `data` is not automatically converted to a string, and the `console.log` method handles the Promise object differently. It shows more detailed information about the Promise object in the console, including its status and other properties, which is why you see the Promise details in this case.
//         //string main jab concatinate kr rhe ho tab bhi toString call hojayega promise ko uske string representation main convert krdega aur add hojayega str main

//         renderWeather(data);
//     }

//     catch(err){
//         console.log("ERORRRRRR");
//     }

// }
//response main promise ataa hai usse json main convert krne ke liye .json hota hai specifally for responses from api but JSON.parse use hota hai to convert JSON string to js object 
// // fetchWeatherDetails();

//The main difference between JSON and JavaScript objects is that JSON is a text-based format, while JavaScript objects are data structures. This means that JSON can be used to store and exchange data between different systems, while JavaScript objects can be used to store and organize data within a JavaScript application.

//WEATHER APP JS:

const userTab = document.querySelector('[data-userWeather]');
const searchTab = document.querySelector('[data-searchWeather]');
const userContainer = document.querySelector('.weather-container');
const grantLocation = document.querySelector('.grant-location-container');
const searchForm = document.querySelector('[data-searchForm]');
const loading = document.querySelector(".loading-container");
const userWeather = document.querySelector(".user-weather-container");
const wrapper = document.querySelector(".wrapper");
const notFound = document.querySelector('.not-found');

let currentTab = userTab;
const API_KEY = "43dcdfd4b3b379875e793757587f6ccb";
currentTab.classList.add("current-tab");
getfromSessionStorage(); //call kiya agar pehle se present ho toh grant access nhi ayega

function switchTab(clickedTab){
    if (clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
 
        if(!searchForm.classList.contains("active")){
            userWeather.classList.remove("active");
            grantLocation.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userWeather.classList.remove("active");
            //to display weather in your weather tab so lets check local storage for coordinates ,if we have saved them there
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click" , ()=>{
    switchTab(userTab)
})

searchTab.addEventListener("click" , ()=>{
    switchTab(searchTab)
})

//to check if coordinates are already present in session storage
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantLocation.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates){
    const {lat,lon} = coordinates;

    notFound.classList.remove("active");
    grantLocation.classList.remove("active");
    loading.classList.add("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json(); //why we use await again //Again, response.json() returns a Promise, and you use await to wait for that Promise to resolve and provide you with the actual JSON data. If you don't use await, you'll be dealing with the Promise itself, not the resolved data.
        loading.classList.remove("active");
        if(!response.ok){ //HTTP error status codes (e.g., 404 Not Found, 500 Internal Server Error) are considered valid responses from the server, and the fetch function does not treat them as errors. This is because some APIs return meaningful data along with error status codes.
            throw new Error('HTTP Error!');
        }
        userWeather.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        notFound.classList.add("active");
    }
}

function renderWeatherInfo(weatherInfo){

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    cityName.innerText = weatherInfo?.name;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity} %`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all} %`;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
}
    // backgroundChange(desc);


// function backgroundChange(desc){
//     if(desc.innerText == "mist"){
//         wrapper.style.background = "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);";
//     }
// }

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert('browser does not support this');
    }
}

function showPosition(position){
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };

    sessionStorage.setItem("user-coordinates" , JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessBtn = document.querySelector("[data-grantAccess]");
grantAccessBtn.addEventListener("click" , getLocation);

let searchInput = document.querySelector('[data-searchInput]');
searchForm.addEventListener("submit" , (e)=>{
    e.preventDefault();
    if(searchInput.value === "") return;

    fetchSearchWeatherInfo(searchInput.value);
})

async function fetchSearchWeatherInfo(city){
    loading.classList.add("active");
    userWeather.classList.remove("active");
    grantLocation.classList.remove("active");
    notFound.classList.remove("active");
//If the catch block is not being executed, it might be because the fetch operation is not throwing an error, even if the response status is not successful (e.g., 404 Not Found). The fetch function only rejects its promise when a network error occurs, not for HTTP error status codes.
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loading.classList.remove("active");
        if(!response.ok){
            throw new Error('HTTP Error!');
        }
        userWeather.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        notFound.classList.add("active");   
    }
}