//add class to button
const button_panel = document.querySelector(".panel-btn"),
      button_scroll_to_about = document.querySelector(".scroll-animation"),
      link_home = document.querySelector(".home_"),
      link_about = document.querySelector(".about_"),
      link_skills = document.querySelector(".skills_"),
      link_projects = document.querySelector(".projects_"),
      link_contact = document.querySelector(".contact_"),
      content_html = document.getElementById("content-html"),
      test = document.getElementById("test"),
      test1 = document.getElementById("test1"),
      section_about = document.querySelector(".about"),
      height_about = section_about.offsetTop;


  
function scrollEfectButton(){
    document.addEventListener("DOMContentLoaded", function(){
        const scroll = document.documentElement.scrollTop;

        window.addEventListener("scroll", function(){
            const scroll = document.documentElement.scrollTop;

            if(scroll > 600){
                link_about.classList.add("active");
            }
            else{
                link_about.classList.remove("active");
            }
        });

        button_scroll_to_about.addEventListener("click", (e) => {
            e.preventDefault();
            
            if(scroll < 992){
                window.scroll(0, height_about);
                link_about.classList.add("active");
            }
        });
    });
}


function addClassToButtonPanel(){
    button_panel.addEventListener("click", (e) => {
        button_panel.classList.toggle("is-active");
    });
}

function getDataElement(url){  
    fetch(url)
    .then((response) => {
        return response.text();
    }).then((html) => {
        test.className = "";
        test1.className = "";
        test1.innerHTML = html;
    }).catch((err) => {
        console.warn('Something went wrong.', err);
    });
    
}

document.addEventListener("click", (e) => {
    if(e.target.matches(".home_")){
        window.scroll(0,0);
        link_contact.classList.remove("active");
        link_projects.classList.remove("active");
        link_skills.classList.remove("active");
    }
    if(e.target.matches(".about_")){
        link_projects.classList.remove("active");
        link_contact.classList.remove("active");
        link_skills.classList.remove("active");
        link_about.classList.add("active");
    }
    if(e.target.matches(".skills_")){
        getDataElement("../assets/contentHTML/skills.html");
        link_about.classList.remove("active");
        link_projects.classList.remove("active");
        link_contact.classList.remove("active");
        link_skills.classList.add("active");
    }
    if(e.target.matches(".projects_")){
        getDataElement("../assets/contentHTML/projects.html");
        link_about.classList.remove("active");
        link_contact.classList.remove("active");
        link_skills.classList.remove("active");
        link_projects.classList.add("active");
    }
    if(e.target.matches(".contact_")){
        getDataElement("../assets/contentHTML/contact.html");
        link_about.classList.remove("active");
        link_contact.classList.remove("active");
        link_skills.classList.remove("active");
        link_projects.classList.remove("active");
        link_contact.classList.add("active");
    }
});

// window.addEventListener("scroll", scrollEfectButton);
addClassToButtonPanel();
scrollEfectButton();



