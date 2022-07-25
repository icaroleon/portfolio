document.getElementById("defaultOpen").click()

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
    mainContentTab.className = mainContentTab.className.replace("col-xl-12 col-lg-12 col-md-12 col-sm-12", "col-xl-9 col-lg-8 col-md-7 col-sm-12")
    }
  else {
    mainContentTab= document.querySelector('main#mainContent')
      if (mainContentTab.className == ("col-xl-9 col-lg-8 col-md-7 col-sm-12")){
        infoContentTab.style.display = "none"
        mainContentTab.className = mainContentTab.className.replace("col-xl-9 col-lg-8 col-md-7 col-sm-12", "col-xl-12 col-lg-12 col-md-12 col-sm-12")
    }
    mainContentTab= document.querySelector('main#mainContent')
    
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.className += " col-6";
    
  }
}
  
  


//scroll projects with the mouse wheel
const scrollContainerProjects = document.querySelector("div.projects");
scrollContainerProjects.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainerProjects.scrollLeft += evt.deltaY;
}); 

const scrollContainerAboutMe = document.querySelector("div.aboutMe");
  scrollContainerAboutMe.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainerAboutMe.scrollLeft += evt.deltaY;
}); 

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
function showPortfolium (){

  firstPage = document.querySelector('div.first-page');
  secondPage = document.querySelector('div.second-page');

  firstPage.style.display = "none";
  secondPage.style.display = "flex";
}

