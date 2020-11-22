const navigation = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section');

const scroller = ( sectionID ) => {
    window.scrollTo( 0, sectionID );
};

const navBuilder = () => {

    let navUI = '';

    sections.forEach( section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
        let toOffSection = section.offsetTop + 30;
        
        navUI += `<li><a class="menu__link"  id="#${sectionID}"  name="#${sectionID}" onClick="scroller(${toOffSection})">${sectionDataNav}</a></li>`;
    } );
    
    navigation.innerHTML = navUI;

    
    if ( sections ) {

        document.getElementById( '#' + sections[ 0 ].id ).style.cssText = "background-color: grey;";

        }

};

navBuilder();

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

const dimmer = ( section ) => {
    //console.log("removing highlight from navs #" + section.id);
    let nav = document.getElementById('#' + section.id);
    nav.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};

const highlight = ( conditional, section ) => {
    let nav = document.getElementById('#' + section.id);
    
    if(conditional){
      section.style.cssText = "background-color: grey;";

        //console.log( "test active viewport " + section.id )
        //console.log( "TEST HIGHLIGHTING NAV " + nav.id )
        nav.style.cssText = "background-color: grey;";
    };
};


const scrollHandler = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);
        inviewport = () => elementOffset < 140 && elementOffset >= -140;
        dimmer(section);
        highlight( inviewport(), section );
        
    });
};


window.addEventListener("scroll", scrollHandler);

