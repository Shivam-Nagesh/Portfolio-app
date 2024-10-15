const home_link = document.getElementById('nav-link1');
const skill_link = document.getElementById('nav-link2');

const home_page = document.getElementById('home-page');
const skill_page = document.getElementById('skill-page');

home_link.addEventListener('click', function() {
    skill_link.classList.remove('active');
    skill_page.classList.add('deactive');

    home_page.classList.remove('deactive');
    this.classList.add('active');
});
skill_link.addEventListener('click', function() {
    home_link.classList.remove('active');
    home_page.classList.add('deactive');
    
    skill_page.classList.remove('deactive');
    this.classList.add('active');
});


