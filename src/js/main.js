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

const presentationContainer = document.querySelector(".mainContainer__presentation");
const mainTitle = document.createElement("h2");


//presentation 
presentationContainer.appendChild(mainTitle);

mainTitle.textContent = "I'm Nicolas Carrasco";

const presentation = document.createElement("p");
presentationContainer.appendChild(presentation);
presentation.innerHTML = "and I'm Frontend developer striving to achieve great things. Check out my projects and find out more about me.";


//länk sektion


const checkMyLinks = document.createElement("h3");

const myLinksContainer = document.querySelector(".mainContainer__myLinksContainer");
checkMyLinks.innerHTML = "You can also find me here: ";

myLinksContainer.appendChild(checkMyLinks);


const myLinksNavigation = document.createElement("nav");
myLinksNavigation.classList.add("mainContainer__myLinksContainer__navigation");
myLinksContainer.appendChild(myLinksNavigation);

const myLinks = document.createElement("a");
myLinksNavigation.appendChild(myLinks);
myLinks.setAttribute("href", "https://github.com/Niccar95");

const myLinks2 = document.createElement("a");
myLinksNavigation.appendChild(myLinks2);
myLinks2.setAttribute("href", "https://www.linkedin.com/home?originalSubdomain=se");

//svg ikoner

const githubIcon = document.createElement("img");
githubIcon.src = "/src/img/github.svg";
myLinks.appendChild(githubIcon);

githubIcon.setAttribute("width", "50");
githubIcon.setAttribute("height", "50");

const linkedInIcon = document.createElement("img");
linkedInIcon.src = "/src/img/linkedin.svg";
myLinks2.appendChild(linkedInIcon);

linkedInIcon.setAttribute("width", "40");
linkedInIcon.setAttribute("height", "40");

githubIcon.classList.add("mainContainer__myLinksContainer__navigation-icon");
linkedInIcon.classList.add("mainContainer__myLinksContainer__navigation-icon");























const imgContainer = document.querySelector(".mainContainer__imgContainer");
const myPicture = document.createElement("img");
myPicture.src = "/src/img/myPicture.jpg";
myPicture.classList.add("mainContainer__imgContainer__myPicture");

imgContainer.appendChild(myPicture);






const myFooter = document.getElementById("myFooter");
const footerContent = document.createElement("p");

myFooter.appendChild(footerContent);
footerContent.innerHTML = "&copy; 2023 My Portfolio. All rights reserved.";

footerContent.setAttribute("id", "myFooter__footerContent");

