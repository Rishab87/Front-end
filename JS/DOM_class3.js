//adding 100 para
// const t1= performance.now();
// for(let i=1; i<=100;i++){ //ismain har para ke liye reflow aur repaint ho rha hai , in total 100 reflow aur repaint ho rhe hai
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();

// console.log("this took " + t2-t1 + " ms");

//optimising a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100;i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para ' + i;

//     myDiv.appendChild(element);
// }
// document.body.append(myDiv);
// const t4 = performance.now();
// console.log("this took " + t4-t2 + " ms");

let fragment = document.createDocumentFragment();
for(let i=1; i<=100;i++){ 
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para ' + i;

    fragment.appendChild(newElement);
}
document.body.appendChild(fragment); //1reflow and 1 repaint