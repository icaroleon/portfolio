document.getElementById("defaultOpen").click();
document.querySelector("nav#bodyDefaultOpen").click();

// Crie funções genéricas para adicionar e remover classes
function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

// Uma função para esconder todos os elementos de um array
function hideElements(elements) {
  elements.forEach(element => {
    element.style.display = "none";
  });
}

function openTab(evt, TabName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  hideElements(Array.from(tabcontent));
  
  const tablinks = document.getElementsByClassName("tablinks");
  Array.from(tablinks).forEach(link => {
    removeClass(link, "active");
    removeClass(link, "col-6");
  });
  
  const tabToDisplay = document.getElementById(TabName);
  if (tabToDisplay) {
    tabToDisplay.style.display = "block";
    addClass(evt.currentTarget, "active");
    addClass(evt.currentTarget, "col-6");
  }
  
  const infoContentTab = document.querySelector('div#infoContent');
  const mainContentTab= document.querySelector('main#mainContent');
  if (TabName === 'contactContent') {
    infoContentTab.style.display = "block";
  } else if (TabName === 'projectsContent') {
    document.querySelector("nav#bodyDefaultOpenProjects").click();
  } else if (TabName === 'aboutMeContent'){
    document.querySelector("nav#bodyDefaultOpen").click();
  }
}

function showContent(evt, TabName) {
  const bodycontent = document.getElementsByClassName("body-content");
  hideElements(Array.from(bodycontent));

  const bodylinks = document.getElementsByClassName("bodylinks");
  Array.from(bodylinks).forEach(link => {
    removeClass(link, "active");
  });

  const tabToDisplay = document.getElementById(TabName);
  if (tabToDisplay) {
    tabToDisplay.style.display = "contents";
    addClass(evt.currentTarget, "active");
  }
}

function showPortfolium() {
  document.querySelector('div.first-page').style.display = "none";
  document.querySelector('div.second-page').style.display = "flex";
}

const skillLinks = document.querySelectorAll("nav.skillsLinks");
const skills = document.querySelectorAll("p.skillSelected");

// Adicione eventos mouseover e mouseout em skillLinks
skillLinks.forEach((skillLink, index) => {
  skillLink.addEventListener("mouseover", () => {
    skills[index].classList.toggle("selected");
    skillLinks[index].classList.toggle("skillLinkSelected");
  });
  
  skillLink.addEventListener("mouseout", () => {
    skills[index].classList.remove("selected");
    skillLinks[index].classList.remove("skillLinkSelected");
  });
});

// Adicione eventos mouseover e mouseout em skills
skills.forEach((skill, index) => {
  skill.addEventListener("mouseover", () => {
    skillLinks[index].classList.toggle("skillLinkSelected");
    skills[index].classList.toggle("selected");
  });
  
  skill.addEventListener("mouseout", () => {
    skillLinks[index].classList.remove("skillLinkSelected");
    skills[index].classList.remove("selected");
  });
});
