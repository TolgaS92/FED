const navigation = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section');


function scrollToSection(sectionID) {
	window.scrollTo(0, sectionID);
}

const navBuilder = () => {

    let navUI = '';
    sections.forEach(section => {

        const sectionID = section.id;
      const sectionDataNav = section.dataset.nav;
      let toOffSection = section.offsetTop + 30;

        navUI += `<li><a class="menu__link"  name="#${sectionID}" onClick="scrollToSection(${toOffSection})">${sectionDataNav}</a></li>`;

    });
    navigation.innerHTML = navUI;


};

navBuilder();

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

const removeActive = (section) => {
    section.classList.remove('active');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};

const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('active');
      section.style.cssText = "background-color: grey;";

      console.log("test active viewport " + section.id)
    };
};


const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);
        inviewport = () => elementOffset < 150 && elementOffset >= -150;
        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActivation);

