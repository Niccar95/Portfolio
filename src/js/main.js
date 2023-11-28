import '../scss/style.scss'


const navigation = document.getElementById("header__navigation");

const navLink = document.createElement("a");
const navLink2 = document.createElement("a");
const navLink3 = document.createElement("a");
const navLink4 = document.createElement("a");

navigation.appendChild(navLink);
navigation.appendChild(navLink2);
navigation.appendChild(navLink3);
navigation.appendChild(navLink4);

navLink.setAttribute("href", "#");
navLink2.setAttribute("href", "#");
navLink3.setAttribute("href", "#");
navLink4.setAttribute("href", "#");

navLink.textContent = "Home";
navLink2.textContent = "Portfolio";
navLink3.textContent = "About";
navLink4.textContent = "Contact";


const presentationContainer = document.getElementById("mainContainer__presentation");
const mainTitle = document.createElement("h1");

presentationContainer.appendChild(mainTitle);

mainTitle.textContent = "I'm Nicolas Carrasco";

const presentation = document.createElement("p");
presentationContainer.appendChild(presentation);
presentation.textContent = "I'm an aspiring Frontend developer...";

const myFooter = document.getElementById("myFooter");
const footerContent = document.createElement("p");

myFooter.appendChild(footerContent);
footerContent.innerHTML = "&copy; 2023 My Portfolio. All rights reserved.";


