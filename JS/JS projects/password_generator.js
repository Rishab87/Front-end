const inputSlider = document.querySelector('[data-lengthSlider]');//custom attribute se aise element select krte hai
const lengthDisplay = document.querySelector('[data-lengthNumber]');
const passwordDisplay  = document.querySelector('[data-passwordDisplay]');
const copyBtn = document.querySelector('[data-copy]');
const copyMsg = document.querySelector('[data-copyMsg]');
const uppercaseCheck = document.querySelector('#uppercase');
const lowercaseCheck = document.querySelector('#lowercase');
const numbersCheck = document.querySelector('#numbers');
const symbolsCheck = document.querySelector('#symbols');
const indicator = document.querySelector('[data-indicator]');
const generateBtn = document.querySelector('.generateBtn');
const allCheckbox = document.querySelectorAll("input[type=checkbox]"); //sare input tag jinke tpye checkbox hai woh ajayenge 
const symbols = '~`!@#$%^&*()_-+={}[]|:;"<,>.?/'; 

//starting values by default when website loads
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider(); 
//set strength circle color to grey
setInidcator("#ccc");

//set passwordLength
function handleSlider(){ //yeh function bas passwordLength ko UI pe reflect krvata hai
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    //aur bhi kuch add krna hai?
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength)*100/(max)) + "% 100%";
}

function setInidcator(color){
      indicator.style.backgroundColor = color;
      indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min,max){
    //.floor nearest down integer main round off krta hai matlab 3.99 ko 3 krdega 3.3 ko bhi 3 , toh idhr round off hoga max value exclusive hogi , aur waise hi chahiye hume kyunki neeche ek jagah funcArr mai  yeh use kr rhe hai udhr bhi exlcusive chahiye last value
   return  Math.floor(Math.random() * (max-min)) + min; //floor se roundoff krdiya , math.random 0 se 1 ke beech main random number generate krega (0inclusive 1 exclusive), toh float number bhi generate kr skta hai isliye floor lgaya hai kyunki hume integer chahiye , max-min se multiply krne ke baad range 0 se max-min jitni hojayegi random no. generate krne ki min plus krke min se max ki range hojayegi random no. ki. EG: 10 se 20 ke beech int chahiye toh max-min se multiply random ko aur round off krdo toh 0 se 10 tak random int aa skte hai phir min iss case main jo 10 hai usse plus krdiya toh ab 10 se 20 tak ke beech main value ayegi , 20 exclusive
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123)); //String.fromCharCode no. ko jo char main convert krta hai acc to ASCII
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}

function generateSymbol(){
    const randNum = getRndInteger(0 , symbols.length); //random index generate krliya
    return symbols[randNum]; //ek index pe konsa character pda hai woh charat function btata hai , toh sare symbol jo string main hai uss main se random index pe jo symbol hoga string main woh return hojayega
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasSym = false;
    let hasNum = false;
    if(uppercaseCheck.checked){ //.checked js ka method hai jo btata hai checkbox ticked hai ya nhi
        hasUpper = true;
    }
    if(lowercaseCheck.checked){
        hasLower = true;
    }
    if(symbolsCheck.checked){
        hasSym = true;
    }
    if(numbersCheck.checked){
        hasNum = true;
    }

    if(hasUpper && hasLower &&(hasNum || hasSym) && passwordLength >=8){
        setInidcator('#0f0');
    }
    else if((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >=6){
        setInidcator('#ff0');
    }
    else{
        setInidcator('#f00');
    }
}

//await keyword ka use krenge taki pehle promise complete ho tabhi aye copied wala text 
async function copyContent(){
    //To access the Clipboard API in JavaScript, you don't need to import or install any additional packages or libraries. The Clipboard API is part of the browser's standard JavaScript functionality and can be used directly in your web application.
    try{ //study about this in dashboard codehelp , How to copy to clipboard section
        await navigator.clipboard.writeText(passwordDisplay.value); //this function returns promise
        //The value property sets or returns the value of the value attribute of a text field.
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "failed";
    }

    //However, keep in mind that clipboard interactions might require user consent and permissions, especially when working with modern browsers. Some modern browsers have stricter security policies that may prevent copying to the clipboard without user interaction or permission.
    //If you're developing a web application that uses the Clipboard API, it's important to be aware of these considerations and handle them accordingly in your code.

    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    } , 2000); 
}

inputSlider.addEventListener('input' , (e) =>{
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click' , ()=>{
    if(passwordDisplay.value){ //agar inout jaha password show hoga woh non empty hai toh copy kr skte hai password , input khali hoga toh yeh conditon null " " matlab 0 ke brabar hogi false
        copyContent();
    }
});

function shuffleMethod(array){
    //shuffle ke liye badi achi algorithm hoti hai jiska name Fisher Yates Method --> isse kisi array pe apply krke shuffle kr skte hai
    for(let i = array.length -1 ; i>0;i--){ //iss algo ko smjho
        const j = Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el)=> (str +=el));
    return str;
}

function handleCheckboxChange(){
    checkCount = 0; //ek ek krke check krenge checkbox checked hai ya nhi , honge toh checkCount++
    allCheckbox.forEach((checkbox) => {
        if(checkbox.checked)
            checkCount++;
    })
    //special case --> manlo agar length 1 hai aur sare checkbox ticked hai tab kya krenge toh humne iss case main aise handle kra hai ki slider 4 hojayega agar password kength 1 aur 4 select hai , teen select hai toh teen etc
    if(passwordLength <checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

//checkbox ke uper listener lgayenge taki kitne checkbox ticked hai uska count rkh paye , zero honge toh password generate nhi hoga
allCheckbox.forEach((checkbox)=>{ //har ek checkbox ke liye event listener lga diya
    checkbox.addEventListener('change' , handleCheckboxChange); //jitne bar checkbox check/uncheck hoga utna baar function call hoga aur checkCOunt 0 hojayega aur sare checkbox check honge ki checked hai ya uncheck agar check hoga toh CheckCount++
})


generateBtn.addEventListener('click' , ()=>{
    //agar koi bhi box checked nhi hoga toh kuch nhi hoga return kuch bhi nhi krega function return keyword ate hi khtm hojata hai , basically kuch nhi hoga agar sare boxes unchecked hai toh
    if(checkCount <=0) return;

    if(passwordLength <checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    //remove old password
    password ="";

    //pehle jo jo checkboxes checked hai unka characters daldiye password main ,iss approach se nhi kr rhe
    // if(uppercaseCheck.checked){
    //     passowrd += generateUpperCase();
    // }

    // if(lowercaseCheck.checked){
    //     passowrd += generateLowerCase();
    // }
    // if(lowercaseCheck.checked){
    //     passowrd += generateLowerCase();
    // }
    // if(symbolsCheck.checked){
    //     passowrd += generateSymbol();
    // }

    //ab baaki ka jo password bacha hai agar loength 10 se uper hai toh , toh uske liye age randomly lower , upper etc daldenge pr yeh kaise randomly find out kre ki upper dale no. dale etc, uske liye ek array main sare random lower , upper etc generate krne wale function dal skte hai aur uss array main koi bhi random index choose kr skte hai 

    let funcArr = [];
    if(uppercaseCheck.checked){
        funcArr.push(generateUpperCase);
    }
    if(lowercaseCheck.checked){
        funcArr.push(generateLowerCase);
    }
    if(symbolsCheck.checked){
        funcArr.push(generateSymbol);
    }
    if(numbersCheck.checked){
        funcArr.push(generateRandomNumber);
    }
    //compulsory addtion , pehle jo jo cheeze tick mark hai unke function array mai store krke woh compulsory jo cheeze password main honi chahiye jaise ek upper ya lower depends on jo bhi select kiya hai woh add krva liya
    for(let i=0; i<funcArr.length;i++){ //
        password += funcArr[i]();
    }

    //remaining addition --> ab ismain uske password main randomly characters insert kradiye agar password length selected checkbox se zyada hai toh
    for(let i=0;i<passwordLength - funcArr.length ; i++){
        let randIndex = getRndInteger(0,funcArr.length); 
        password += funcArr[randIndex](); 
    }

    //pr iske sath ek problem starting ke kuch char pta chl jayenge kya hoga for eg charo checkbox select hai toh pehla letter upper dusra lower phir no. phir symbol yeh saf saf pta chl rha hai phir random password kis baat ka hua
    //isliye ab shuffle krdenge characters

    password = shuffleMethod(Array.from(password)); //password ko array ki form main pass krdiya ,.split() method se bhi toh kr skte the , Array.from aur .split ka difference? find out

    //Show password in UI
    passwordDisplay.value = password;
    //calculate strength
    calcStrength();

});