const countValue = document.querySelector('#counter'); //const idhr element hai iss case main div iske age .innerText lgayenge tab andar ki value ayegi

const increment = ()=> {
    let value = parseInt(countValue.innerText); //getting the value and coverting str to int
    value++; //INcrementing value
    countValue.innerText = value; //set the value onto UI
};

const decrement = () => {
    let value = parseInt(countValue.innerText); //getting the value and coverting str to int
    value--; //Decrementing value
    countValue.innerText = value; //set the value onto UI
};
