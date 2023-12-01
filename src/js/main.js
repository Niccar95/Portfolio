import '../scss/style.scss'


const headerNavigation = document.querySelector(".header__navigation");

const homeLink = document.createElement("a");
const portfolioLink = document.createElement("a");
const aboutLink = document.createElement("a");
const contactLink = document.createElement("a");

headerNavigation.appendChild(homeLink);
headerNavigation.appendChild(portfolioLink);
headerNavigation.appendChild(aboutLink);
headerNavigation.appendChild(contactLink);

homeLink.setAttribute("href", "#");
portfolioLink.setAttribute("href", "#");
aboutLink.setAttribute("href", "#");
contactLink.setAttribute("href", "#");

homeLink.textContent = "Home";
portfolioLink.textContent = "Portfolio";
aboutLink.textContent = "About";
contactLink.textContent = "Contact";

homeLink.className = "header__navigation-links";
portfolioLink.className = "header__navigation-links";
aboutLink.className = "header__navigation-links";
contactLink.className = "header__navigation-links";

const presentationContainer = document.getElementById("mainContainer__presentation");
const mainTitle = document.createElement("h1");

presentationContainer.appendChild(mainTitle);

mainTitle.textContent = "<h1> I'm Nicolas Carrasco </h1>";

const presentation = document.createElement("p");
presentationContainer.appendChild(presentation);
presentation.textContent = "<p> and I'm Frontend developer striving to achieve great things. Check out my projects and find out more about me. </p>";


const checkMyLinks = document.createElement("h4");

const myLinksContainer = document.getElementById("mainContainer__myLinksContainer");
checkMyLinks.textContent = "<p> You can also find me here: </p>";

myLinksContainer.appendChild(checkMyLinks);


const myLinksNavigation = document.createElement("nav");
myLinksNavigation.setAttribute("id", "mainContainer__myLinksContainer-navigation");
myLinksContainer.appendChild(myLinksNavigation);

const myLinks = document.createElement("a");
myLinksNavigation.appendChild(myLinks);

const myLinks2 = document.createElement("a");
myLinksNavigation.appendChild(myLinks2);

const githubIcon = document.createElement("object");
githubIcon.data = "/src/img/github.svg";
myLinks.appendChild(githubIcon);

githubIcon.setAttribute("width", "50");
githubIcon.setAttribute("height", "50");

const linkednIcon = document.createElement("svg");
myLinks2.appendChild(linkednIcon);














/*

const imgContainer = document.getElementById("mainContainer__imgContainer");
const myPicture = document.createElement("img");
myPicture.src = "/src/img/myPic.jpg";
myPicture.setAttribute("id", "mainContainer__imgContainer__myPicture");

imgContainer.appendChild(myPicture);

*/




const myFooter = document.getElementById("myFooter");
const footerContent = document.createElement("p");

myFooter.appendChild(footerContent);
footerContent.innerHTML = "&copy; 2023 My Portfolio. All rights reserved.";

footerContent.setAttribute("id", "myFooter__footerContent");

