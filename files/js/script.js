document.getElementById("defaultOpen").click()
document.querySelector("nav#bodyDefaultOpen").click()


// document.querySelector("nav#bodyDefaultOpenProjects").click()

function openTab(evt, TabName) {
  // Declare all variables
  var i, tabcontent;
  // Get all elements with class="tabcontent" and hide them

  infocontent = document.getElementById("infoContent")

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    //infocontent.style.display = "none";
  }
 var i, tabcontent, tablinks;

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("col-6", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  if (document.getElementById(TabName) == document.getElementById('contactContent')){
    
    infoContentTab = document.querySelector('div#infoContent')
    mainContentTab= document.querySelector('main#mainContent')
    
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.className += " col-6";
    infoContentTab.style.display = "block"
    // mainContentTab.className = mainContentTab.className.replace("col-xl-12 col-lg-12 col-md-12 col-sm-12", "col-xl-9 col-lg-8 col-md-7 col-sm-12")
    }
  else {
    mainContentTab= document.querySelector('main#mainContent')
      if (document.getElementById(TabName) == document.getElementById('projectsContent')){
        document.querySelector("nav#bodyDefaultOpenProjects").click()
      } else if (document.getElementById(TabName) == document.getElementById('aboutMeContent')){
     document.querySelector("nav#bodyDefaultOpen").click()
        mainContentTab= document.querySelector('main#mainContent')
      }
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.className += " col-6";
    
  }
}
    
function showContent(evt, TabName) {
  // Declare all variables
  var i, bodycontent;
  // Get all elements with class="tabcontent" and hide them
  bodylinks = document.getElementsByClassName("bodylinks");
  bodycontent = document.getElementsByClassName("body-content");
  for (i = 0; i < bodycontent.length; i++) {
    bodycontent[i].style.display = "none";
    
    bodylinks[i].className = bodylinks[i].className.replace("active", "");
    bodylinks[i].className = bodylinks[i].className.replace("", "");
    //infocontent.style.display = "none";
  }

document.getElementById(TabName).style.display = "contents";
evt.currentTarget.className += " active";
 /* var i, bodycontent, tablinks;

  // Get all elements with class="tablinks" and remove the class "active"
  
  for (i = 0; i < bodylinks.length; i++) {
    bodylinks[i].className = bodylinks[i].className.replace("active", "disabled");
  }

  for (i = 0; i < bodylinks.length; i++) {
    bodylinks[i].className = bodylinks[i].className.replace("disabled", "");
  } */

  // Show the current tab, and add an "active" class to the button that opened the tab
  
  /*evt.currentTarget.className += " "; */
}

function showPortfolium (){

  firstPage = document.querySelector('div.first-page');
  secondPage = document.querySelector('div.second-page');
  
  firstPage.style.display = "none";
  secondPage.style.display = "flex";
}

const skillLinks = document.querySelectorAll("nav.skillsLinks")
const skills = document.querySelectorAll("p.skillSelected")

skillLinks.forEach((skillLink) => {
  //console.log(skillLink.innerText)
  skillLink.addEventListener("mouseover", (event) =>{
    for (i = 0; i < skills.length; i++) {
      skills[i].className = skills[i].className.replace("selected", "");
    }
    switch (skillLink.innerText){
      case "Linguagens":
        skills[0].classList.toggle("selected");
      break;
      case "Frameworks":
        skills[1].classList.toggle("selected");
      break;
      case "Frontend":
        skills[2].classList.toggle("selected");
      break;
      case "Banco de dados":
        skills[3].classList.toggle("selected");
      break;
      case "Cloud/Infra":
        skills[4].classList.toggle("selected");
      break;
      case "Versionamento":
        skills[5].classList.toggle("selected");
      break;
      case "Conhecimentos específicos":
        skills[6].classList.toggle("selected");
      break;
      case "Sistemas operacionais":
        skills[7].classList.toggle("selected");
      break;
      case "Metodologias":
        skills[8].classList.toggle("selected");
      break;
      case "Outras ferramentas":
        skills[9].classList.toggle("selected");
      break;  
    }

    skillLink.addEventListener("mouseout", (event) =>{
      for (i = 0; i < skills.length; i++) {
        skills[i].className = skills[i].className.replace("selected", "");
      }
    })
  })
})

skills.forEach((skill) => {
  //console.log(skillLinks.innerText)
  skill.addEventListener("mouseover", (event) =>{
    for (i = 0; i < skillLinks.length; i++) {
      skillLinks[i].className = skillLinks[i].className.replace("skillLinkSelected", "");
    }
    switch (skill.innerText){
      case "Ruby | Javascript":
        console.log("ok")
        skillLinks[0].classList.toggle("skillLinkSelected");
      break;
      case "Ruby on Rails | React":
        skillLinks[1].classList.toggle("skillLinkSelected");
      break;
      case "HTML | CSS | Bootstrap":
        skillLinks[2].classList.toggle("skillLinkSelected");
      break;
      case "MySQL | PostgreSQL":
        skillLinks[3].classList.toggle("skillLinkSelected");
      break;
      case "Heroku" :
        skillLinks[4].classList.toggle("skillLinkSelected");
      break;
      case "Git | Github":
        skillLinks[5].classList.toggle("skillLinkSelected");
      break;
      case "OOP | RESTful APIs": 
        skillLinks[6].classList.toggle("skillLinkSelected");
      break;
      case "Windows | Linux | MacOS":
        skillLinks[7].classList.toggle("skillLinkSelected");
      break;
      case "Scrum | Kanban" :
        skillLinks[8].classList.toggle("skillLinkSelected");
      break;
      case "Microsoft Office | Trello | Figma":
        skillLinks[9].classList.toggle("skillLinkSelected");
      break;    
    }    

    skill.addEventListener("mouseout", (event) =>{
      for (i = 0; i < skillLinks.length; i++) {
        skillLinks[i].className = skillLinks[i].className.replace("skillLinkSelected", "");
      }
    })        
  })
})  




/*scroll projects with the mouse wheel
const scrollContainerProjects = document.querySelector("div.projects");
scrollContainerProjects.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainerProjects.scrollLeft += evt.deltaY;
}); 

const scrollContainerAboutMe = document.querySelector("div.aboutMe");
  scrollContainerAboutMe.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainerAboutMe.scrollLeft += evt.deltaY;
}); */ 

/*hide cv icon and show text download as soon the mouse enter the button
//document.getElementsByClassName('cv-text-button')[1].style.display = 'none'
function showDownloadText(evt, TextName) {
  document.getElementsByClassName('cv-text-button')[1].style.display="inline-block"
  const buttonCV = document.getElementsByClassName('cv-text-button');
  for (i = 0; i < buttonCV.length; i++) {
    buttonCV[1].style.display = "inline-block";
  }
}

//show cv icon and hide text download as soon the mouse outs the button
function hideDownloadText(evt, TextName) {

  const buttonCV = document.getElementsByClassName('cv-text-button')
    for (i = 0; i < buttonCV.length; i++) {
      buttonCV[0].style.display = "inline-block";
      buttonCV[1].style.display = "none";
    }
}
*/



