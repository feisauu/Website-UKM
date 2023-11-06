let searchForm = document.querySelector('.search-form');

document.querySelector('.search').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('.login').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('.menu').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}




const content = document.querySelector('.Event .content');

function checkScroll() {
    const triggerPoint = content.getBoundingClientRect().top - window.innerHeight + 100;
    if (triggerPoint < 0) {
        content.classList.add('active');
        window.removeEventListener('scroll', checkScroll);
    }
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Check on page load





const faq = document.querySelectorAll (".faq .faqs");

faq.forEach (faq => {
    faq.addEventListener ("click", () => {
    faq.classList.toggle("active");

    
     });
});

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
