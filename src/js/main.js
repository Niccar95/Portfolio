import '../scss/style.scss'


const headerNavigation = document.getElementById("header__navigation");

const navLink = document.createElement("a");
const navLink2 = document.createElement("a");
const navLink3 = document.createElement("a");
const navLink4 = document.createElement("a");

headerNavigation.appendChild(navLink);
headerNavigation.appendChild(navLink2);
headerNavigation.appendChild(navLink3);
headerNavigation.appendChild(navLink4);

navLink.setAttribute("href", "#");
navLink2.setAttribute("href", "#");
navLink3.setAttribute("href", "#");
navLink4.setAttribute("href", "#");

navLink.textContent = "Home";
navLink2.textContent = "Portfolio";
navLink3.textContent = "About";
navLink4.textContent = "Contact";

navLink.className = "header__navigation-links";
navLink2.className = "header__navigation-links";
navLink2.className = "header__navigation-links";
navLink3.className = "header__navigation-links";
navLink4.className = "header__navigation-links";


const presentationContainer = document.getElementById("mainContainer__presentation");
const mainTitle = document.createElement("h1");

presentationContainer.appendChild(mainTitle);

mainTitle.textContent = "<h1> I'm Nicolas Carrasco </h1>";

const presentation = document.createElement("p");
presentationContainer.appendChild(presentation);
presentation.textContent = "<p> and I'm Frontend developer striving to achieve great things. Check out my projects and find out more about me. </p>";



const checkMyLinks = document.createElement("p");

const myLinksContainer = document.getElementById("mainContainer__myLinksContainer");
myLinksContainer.appendChild(checkMyLinks);
checkMyLinks.textContent = "<p> You can also check out my other links: </p>";


const myLinksNavigation = document.getElementById("mainContainer__myLinksContainer-navigation");

const myLinks = document.createElement("a");
myLinksNavigation.appendChild(myLinks);

const myLinks2 = document.createElement("a");
myLinksNavigation.appendChild(myLinks2);

const myLinks3 = document.createElement("a");
myLinksNavigation.appendChild(myLinks3);

const myLinksIcon = document.createElement("svg");








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

