const all = document.querySelectorAll('*');
const mode_btn = document.querySelector('.mode-btn');
const mode_text = document.querySelector('.mode');
const mode_img = document.querySelector('.mode-img');
const url = "https://api.github.com/users/";
const search_field = document.querySelector('[search-input]');
const form = document.querySelector('.search-container');
const notFound = document.querySelector('.not-found');
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const root = document.documentElement.style; //document.documentElement refers to the root element of the HTML document, which is usually the <html> element. The style property allows you to access and manipulate the inline styles of that element.
let darkMode = false;

fetchUserDetails("Rishab87");

if(localStorage.getItem("dark-mode")){
    changeMode();
}

//mode-change
function changeMode(){

    if(mode_text.innerText === "Dark"){
        root.setProperty("--lm-bg", "#141D2F");
        root.setProperty("--lm-bg-content", "#1E2A47");
        root.setProperty("--lm-text", "white");
        root.setProperty("--lm-text-alt", "white");
        root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
        mode_img.src = "./assets-dev-detective/images/sun-icon.svg";
        mode_text.innerText = "Light";
        darkMode = true;
        localStorage.setItem("dark-mode", true);
    }
    else{
        root.setProperty("--lm-bg", "#F6F8FF");
        root.setProperty("--lm-bg-content", "#FEFEFE");
        root.setProperty("--lm-text", "#4B6A9B");
        root.setProperty("--lm-text-alt", "#2B3442");
        root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
        mode_img.src = "./assets-dev-detective/images/moon-icon.svg";
        mode_text.innerText = "Dark";
        darkMode = false;
        localStorage.setItem("dark-mode", false);
    }

};


mode_btn.addEventListener('click' , changeMode);

function renderProfile(data){
    const devImg = document.querySelector('[dev-img]');
    const devName = document.querySelector('[dev-name]');
    const devGithub = document.querySelector('[dev-github]');
    const devBio = document.querySelector('[dev-bio]');
    const devJoinDate = document.querySelector('[dev-join-date]'); 
    const repos = document.querySelector('[repos]');
    const followers = document.querySelector('[followers]');
    const following = document.querySelector('[following]');
    const city = document.querySelector('[city]');
    const bio_link = document.querySelector('[bio-link]');
    const X = document.querySelector('[X]');
    const workplace = document.querySelector('[workplace]');
    let join_str = data?.created_at;
    let join_arr = join_str.split('-');//year-month-date
    
    devImg.src = `${data?.avatar_url}`;
    devName.innerText = data?.name;
    devGithub.href = `${data?.html_url}`;
    devGithub.innerText = `@${data?.login}`
    devBio.innerText = data?.bio;
    repos.innerText = data?.public_repos;
    followers.innerText = data?.followers;
    following.innerText = data?.following;
    devJoinDate.innerText = `Joined ${join_arr[2].slice(0,2)} ${months[join_arr[1]-1]} ${join_arr[0]}`;
    if(data?.location === null){
        city.innerText = 'Not Available';
    }
    else{
        city.innerText = data?.location;
    }
    
    if(data?.twitter_username === null){
        X.innerText = "Not Available";
    }
    else{
        X.href = `${data?.twitter_username}`;
    }
    
    if(`${data?.blog}` === ""){
        bio_link.innerText = "Not Available";
    }
    else{
        bio_link.href = `${data?.blog}`;
    }
    if(data?.company === null){
        workplace.innerText = "Not Available"
    }
    else{
        workplace.innerText = data?.company;
    }
}

async function fetchUserDetails(input){

    try{
        notFound.classList.remove("active");
        const response = await fetch(`${url + input}`);
        const data = await response.json();
        if(!response.ok){
            throw new Error("HTTP ERROR");
        }
        console.log(data);
        renderProfile(data);
    }
    catch(err){
        console.log(err);
        notFound.classList.add("active");
    }

}

form.addEventListener('submit' , function formSubmit(e){
    e.preventDefault();
    if(search_field.value === "") return;
    else fetchUserDetails(search_field.value);
});
