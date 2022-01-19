const openNav = document.querySelector(".ri-menu-line");
const Nav = document.querySelector("nav ul");
const closeNav = document.querySelector(".ri-close-line");

const toggleNav = () => {
    Nav.classList.toggle("show-nav");
}
openNav.addEventListener("click",toggleNav);
closeNav.addEventListener("click",toggleNav)

/*--------- tabs --------*/

const tabs = document.querySelectorAll(".services-change article");
const services = document.querySelectorAll(".service");


tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        services.forEach(service=>{
            service.classList.remove("active");

        })
        let id =tab.getAttribute('data-id');
        services[id-1].classList.add("active");
        services[id-1].animate([
            // keyframes
            {
                transform: 'translateY(500px)',
                opacity:0
            },
            {
                transform: 'translateY(0px)',
                opacity:1
            }
          ], {
            // timing options
            duration: 400,
          });
    })
})

/*--------- Scroll Reveak --------*/

const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration: 1000
});

sr.reveal(".services-tabs",{origin:"bottom"});
sr.reveal(".quote-section, .contact-section, footer, .services-underTitle, .services-change, .services-title");
sr.reveal(".small-post", {interval:"200",origin:"right"})
sr.reveal(".home-img, .about-data ",{origin:"right"});
sr.reveal(".home-section-data, .about-img, .blog-section article",{origin:"left"})

/*-------- Dark Mode --------*/

const darkBtn = document.querySelector(".ri-moon-clear-line");

darkBtn.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("html").classList.toggle("dark");
})