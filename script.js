//this is the scirpt file for the personal website


function getRandomColorWithOpacity(opacity) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

document.addEventListener('click', function() {
    const opacity = 0.2; // Set your desired opacity here (0.0 to 1.0)
    document.body.style.backgroundColor = getRandomColorWithOpacity(opacity);
});

const toggleHome = document.getElementById('homelink');
const toggleAbout = document.getElementById('aboutlink');
const toggleContact = document.getElementById('contactlink');
const toggleProjects = document.getElementById('projectlink');

const homediv = document.getElementById('home');
const aboutdiv = document.getElementById('about');
const contactdiv = document.getElementById('contact');
const projectsdiv = document.getElementById('projects');

toggleHome.addEventListener('click', function() {
    toggleHomeVisibility(homediv);
});

toggleAbout.addEventListener('click', function() {
    toggleAboutVisibility(aboutdiv);
});

toggleContact.addEventListener('click', function() {
    toggleContactVisibility(contactdiv);
});

toggleProjects.addEventListener('click', function() {
    toggleProjectsVisibility(projectsdiv);
});

function toggleHomeVisibility() {
    const home = document.getElementById('home');
    if (home.style.display === "none") {
        home.style.display = "flex";
    } else {
        home.style.display = "none";
    }
}

function toggleAboutVisibility() {
    const about = document.getElementById('about');
    if (about.style.display === "none") {
        about.style.display = "flex";
    } else {
        about.style.display = "none";
    }
}

function toggleContactVisibility() {
    const contact = document.getElementById('contact');
    if (contact.style.display === "none") {
        contact.style.display = "flex";
    } else {
        contact.style.display = "none";
    }
}

function toggleProjectsVisibility() {
    const projects = document.getElementById('projects');
    if (projects.style.display === "none") {
        projects.style.display = "flex";
    } else {
        projects.style.display = "none";
    }
}





