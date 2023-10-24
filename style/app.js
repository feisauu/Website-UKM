const faq = document.querySelectorAll (".faq .faqs");

faq.forEach (faq => {
    faq.addEventListener ("click", () => {
    faq.classList.toggle("active");

    
     });
});