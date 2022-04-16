// Header Section
const toggleBtn = $("#toggle-btn");
const leftHeader = $("#left-header");
const logo = $("#logo-container");
const backArrorwBtn = $("#back-arrow");
const searchBar = $("#search-bar");
const searchBtnContainer = $("#search-btn-container");
const searchBtn = $("#search-btn");
const searchMicContainer = $("#search-mic-container");
const searchMic = $("#mic-btn");
const searchMicImg = $("#mic-img");
const searchToggleBtn = $("#search-toggle-btn");
const rightHeader = $("#right-header");
const contactMeIcon = $("#contact-me-btn");

// Sidebar Section
const sidebar = $("#sidebar");
const homeContainer = $("#home-container");
const coursesContainer = $("#courses-container #title");
const instructorsContainer = $("#instructors-container #title");
const coursesContent = $("#courses-container #content"); 
const instructorsContent = $("#instructors-container #content");
const coursesBtn = $("#courses-container #content .course"); 

// Videos Container Section
const webPage = $("#web-page");
const videosContainer = $("#videos-container");

// Contact Me Section
const contactMeSection = $("#contact-section");

//............................. Logic .............................//

backArrorwBtn.hide();
contactMeSection.hide();

class Instructor {
  constructor(objectArray){
    this.channelName = objectArray[0][0];
    this.channelLink = objectArray[0][1];
    this.verified = objectArray[0][2];
    this.courses = objectArray.slice(1);
  }
  generateId(){
    let fullChannelName = this.channelName;
    let goLowerCase = false;
    let channelId = "";
    let emptySpace = " ";
    let capArray = [];

    // capArray => Hold on to the index of the letters we want to capitalize
    for(let index in fullChannelName){
      if(fullChannelName[index] === emptySpace){
        goLowerCase = true;
        capArray.push(Number(index) + 1);
      }
    }
    // If fullChannelName got emptySpace => fullChannelName.toLowerCase(), Ex. Bro Code
    if(goLowerCase){
      fullChannelName = fullChannelName.toLowerCase();
    }
    // Else => charAt(0).toLowerCase() + return, Ex. SuperSimpleDev
    else{
      channelId = fullChannelName.charAt(0).toLowerCase() + fullChannelName.substring(1);
      return channelId;
    }
    // channelId => add the channelName letters + capitalize 
    for(let i = 0; i < fullChannelName.length; i++){
      if(capArray.includes(i)){
        channelId += fullChannelName[i].toUpperCase();
      }
      else{
        channelId += fullChannelName[i];
      }
    }
    // Remove the emptySpace
    for(let letter of channelId){
      if(letter === emptySpace){
        channelId = channelId.replace(letter, "");
      }
    }
    return channelId;
  }
  getLogoUrl(){
    // container.attr("src", `images/instructors/${this.channelName}/logo.jpg`);
    return `images/instructors/${this.channelName}/logo.jpg`
  }
  getCourseImgUrl(courseName){
    const imgSentence = `images/instructors/${this.channelName}/${courseName.toLowerCase()}`;
    let extension;
    if (this.channelName === "London App Brewery"){
      extension = ".jpg";
    }
    else{
      extension = ".webp";
    }
    return `${imgSentence}${extension}`;
  }
}

const broCode = new Instructor(coursesArray("broCode"));

const londonAppBrewery = new Instructor(coursesArray("londonAppBrewery"));

const freeCodeCamp = new Instructor(coursesArray("freeCodeCamp"));

const SuperSimpleDev = new Instructor(coursesArray("SuperSimpleDev"));

const InstructorsArray = [broCode, londonAppBrewery, freeCodeCamp, SuperSimpleDev];

// Main Functions
function coursesArray(objectName){
  const broCodeArray = [
    ["Bro Code", "https://www.youtube.com/c/BroCodez", true],
  
    ["javascript", 
     "https://www.youtube.com/watch?v=8dWL3wF_OMw&t=12s",
     "8:00:00",
     "JavaScript Full Course 🌐【𝙁𝙧𝙚𝙚】", 
     "166K views &bull; 1 month ago"], 
  
    ["htmlCss", 
     "https://www.youtube.com/watch?v=cyuzt1Dp8X8&t=37s",
     "4:55:13",
     "HTML & CSS Full Course 🌎【𝙁𝙧𝙚𝙚】", 
     "454K views &bull; 1 year ago"],
  
    ["html", 
     "https://www.youtube.com/watch?v=HD13eq_Pmp8",
     "1:00:00",
     "Learn HTML in 1 hour 🌎【𝙁𝙧𝙚𝙚】", 
     "81K views &bull; 7 months ago"],
  
    ["css", 
     "https://www.youtube.com/watch?v=wRNinF7YQqQ&t=1252s",
     "1:00:00",
     "Learn CSS in 1 hour 🎨【𝙁𝙧𝙚𝙚】", 
     "57K views &bull; 7 months ago"]
  ];
  
  const londonAppBreweryArray = [
    ["London App Brewery", "https://www.youtube.com/channel/UCVD5Vh9LhLBxp3o1vRNyf_w", false],
  
    ["webDevelopment", 
     "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
     "65:00:00",
     "The Complete 2022 Web Development Bootcamp", 
     "608,534 students"],

    ["python", 
     "https://www.udemy.com/course/100-days-of-code/",
     "60:00:00",
     "100 Days of Code: The Complete Python Pro Bootcamp for 2022", 
     "443,380 students"]
  ];
  
  const freeCodeCampArray = [
    ["freeCodeCamp.org", "https://www.youtube.com/c/Freecodecamp", true],
  
    ["javascript", 
     "https://www.youtube.com/watch?v=jS4aFq5-91M&t=26139s",
     "7:44:20",
     "JavaScript Programming - Full Course", 
     "1.2M views &bull; 9 months ago"],
  
    ["htmlCssJavascript", 
     "https://www.youtube.com/watch?v=xV7S8BhIeBo",
     "3:25:55",
     "Portfolio Website Tutorial – Frontend Development with HTML, CSS, JavaScript", 
     "248K views &bull; 3 weeks ago"],
  ];
  
  const SuperSimpleDevArray = [
    ["SuperSimpleDev", "https://www.youtube.com/c/SuperSimpleDev", false],
  
    ["htmlCss", 
     "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=20973s",
     "6:31:24",
     "HTML & CSS Full Course - Beginner to Pro (2022)", 
     "208K views &bull; 2 months ago"]
  ];

  switch (objectName){
    case "broCode":
      return broCodeArray;
    case "londonAppBrewery":
      return londonAppBreweryArray;
    case "freeCodeCamp":
      return freeCodeCampArray;
    case "SuperSimpleDev":
      return SuperSimpleDevArray;
    default:
      break;
  }
}

function sidebarInstructorContent(InstructorsArray){
  
  InstructorsArray.forEach(instructor => {
    const instructorDiv = $(document.createElement("div"));
    const channelLogoDiv = $(document.createElement("div"));
    const channelLogoImg = $(document.createElement("IMG"));
    const textDiv = $(document.createElement("div"));
    // const anchorTagLogo = $(document.createElement("A"));
    // const anchorTagText = $(document.createElement("A"));

    // Instructor Container => instructorDiv
    instructorDiv.addClass("instructor");
    instructorDiv.attr("id", instructor.generateId());
    instructorDiv.append(channelLogoDiv);
    instructorDiv.append(textDiv);

    // Add channel link + Wrap the anchorTagLogo around the channelLogoImg
    channelLogoImg.attr("src", instructor.getLogoUrl());
    // anchorTagFunction(anchorTagLogo, instructor.channelLink, null, null);
    // anchorTagLogo.append(channelLogoImg);

    // Channel logo => channelLogoDiv
    // channelLogoDiv.append(anchorTagLogo);
    channelLogoDiv.append(channelLogoImg);
    channelLogoDiv.addClass("channel-logo");

    // Add channel link + Wrap the anchorTagText around the channelNameText
    // anchorTagFunction(anchorTagText, instructor.channelLink, null, instructor.channelName);

    // Instructor Name => textDiv
    // textDiv.append(anchorTagText);
    textDiv.html(instructor.channelName);
    textDiv.addClass("text flex");
    instructorsContent.append(instructorDiv);
  });
}

function courseTube(input, targetCourse){
  // Targeting every instructor
  input.forEach(instructor => {
    // Targeting each course of that instructor
    instructor.courses.forEach(course => {
      if(targetCourse){
        if(course[0].toLowerCase() === targetCourse.toLowerCase()){
          htmlCode(instructor, course);
        }
      }
      else{
        htmlCode(instructor, course);
      }
    });
  });

  function htmlCode(instructor, course){
    const channelName = instructor.channelName;
    const channelLink = instructor.channelLink;
    const verified = instructor.verified;
    const courseName = course[0].toLowerCase();
    const courseLink = course[1];
    const courseDuration = course[2];
    const courseTitle = course[3];
    const views = course[4];
    const courseImgUrl = instructor.getCourseImgUrl(courseName);
    const logoUrl = instructor.getLogoUrl();

    const videoPreviewDiv = $(document.createElement("div"));
    const AnchorTagTopSection = $(document.createElement("A"));
    const AnchorTagLogoSection = $(document.createElement("A"));
    const AnchorTagTitleSection = $(document.createElement("A"));
    const AnchorTagChannelNameSection = $(document.createElement("A"));
    const AnchorTagViewsSection = $(document.createElement("A"));
    const verifiedImg = $(document.createElement("IMG"));
  
    const topSectionDiv = $(document.createElement("div"));
    const videoImg = $(document.createElement("IMG"));
    const videoDurationDiv = $(document.createElement("div"));
  
    const bottomSectionDiv = $(document.createElement("div"));
    const leftBottomDiv = $(document.createElement("div"));
    const rightBottomDiv = $(document.createElement("div"));
    // leftBottomDiv
    const channelLogo = $(document.createElement("IMG"));
    // rightBottomDiv
    const videoTitleDiv = $(document.createElement("div"));
    const channelNameDiv = $(document.createElement("div"));
    const viewsDiv = $(document.createElement("div"));
    
    // Web Page
    videosContainer.append(videoPreviewDiv);

    // A block for each video / course => videoPreviewDiv with 2 sections (topSectionDiv & bottomSectionDiv)
    videoPreviewDiv.append(topSectionDiv , bottomSectionDiv);
    videoPreviewDiv.addClass("video-preview");
  
    // topSectionDiv => (AnchorTagTopSection (videoImg & videoDurationDiv))
    videoImg.attr("src", courseImgUrl);
    videoDurationDiv.html(courseDuration);
    videoDurationDiv.addClass("video-duration");
    // AnchorTagTopSection.attr("href", courseLink);
    // AnchorTagTopSection.attr("target", "_blank");
    anchorTagFunction(AnchorTagTopSection, courseLink, null, null);
    AnchorTagTopSection.append(videoImg, videoDurationDiv);
    topSectionDiv.append(AnchorTagTopSection);
    topSectionDiv.addClass("top-section");

    // bottomSectionDiv => (leftBottomDiv, rightBottomDiv)
    bottomSectionDiv.append(leftBottomDiv, rightBottomDiv);
    bottomSectionDiv.addClass("bottom-section");

    // leftBottomDiv (AnchorTagLogoSection (channelLogo))
    channelLogo.attr("src", logoUrl);
    anchorTagFunction(AnchorTagLogoSection, channelLink, channelName, null);
    AnchorTagLogoSection.append(channelLogo);
    leftBottomDiv.append(AnchorTagLogoSection);
    leftBottomDiv.addClass("left-bottom");

    // rightBottomDiv (videoTitleDiv (AnchorTagTitleSection), 
    //                 channelNameDiv (AnchorTagChannelNameSection, verifiedImg),
    //                 viewsDiv (AnchorTagViewsSection))

    // videoTitleDiv (AnchorTagTitleSection)
    anchorTagFunction(AnchorTagTitleSection, courseLink, courseTitle, courseTitle);
    videoTitleDiv.append(AnchorTagTitleSection);
    videoTitleDiv.addClass("video-title");

    // channelNameDiv (AnchorTagChannelNameSection, verifiedImg)
    anchorTagFunction(AnchorTagChannelNameSection, channelLink, channelName, channelName);
    verifiedImg.attr("src", "images/verified.png");
    verified ? channelNameDiv.append(AnchorTagChannelNameSection, verifiedImg) : 
               channelNameDiv.append(AnchorTagChannelNameSection);
    channelNameDiv.addClass("channel-name");

    // viewsDiv (AnchorTagViewsSection)
    anchorTagFunction(AnchorTagViewsSection, courseLink, null, views);
    viewsDiv.append(AnchorTagViewsSection);
    viewsDiv.addClass("views");
    rightBottomDiv.append(videoTitleDiv, channelNameDiv, viewsDiv);
    rightBottomDiv.addClass("right-bottom");
  }
}

function refreshFunction(){
  // Scroll to the top after the user refresh the page
  window.onbeforeunload = () => {window.scrollTo(0, 0)}

  // Logo Button
  logo.on("click", () => {
    location.reload();
    window.scrollTo(0, 0);
  });

  // Home Button
  homeContainer.on("click", () => {
    location.reload();
    window.scrollTo(0, 0);
  });
}

function searchFuntion(){
  let userInput;
  searchBar.on("click keypress keyup", (e) => {
    if(e.key === "Enter"){
      userInput = searchBar.val().toLowerCase();
      if(userInput){
        searchLogic(userInput);
      }
      searchBar.val("");
    }
    else if(e.keyCode == 27){
      searchBar.val("");
    }
  });

  searchBtn.on("click", () => {
    userInput = searchBar.val().toLowerCase();
    if(userInput){
      searchLogic(userInput);
    }
    searchBar.val("");
  });

  function searchLogic(userInput){
    let keyword = null;
    let userSeekingCourse = false;
    let userSeekingChannel = false;
  
    keyword = checkCourses(userInput);
  
    if(!keyword){
      keyword = checkInstructors(userInput);
    }
  
    if(userSeekingCourse){
      videosContainer.html("");
      courseTube(InstructorsArray, keyword);
    }
  
    if(userSeekingChannel){
      InstructorsArray.forEach(instructor => {
        if(instructor.channelName === keyword){
          videosContainer.html("");
          courseTube([instructor], null);
        }
      });
    }
  
    function checkCourses(userInput){
      if(userInput.includes("html") && userInput.includes("css") && userInput.includes("javascript")){
        keyword = "htmlCssJavascript";
      }
      else if(userInput.includes("html") && userInput.includes("css")){
        keyword = "htmlCss";
      }
      else if(userInput.includes("html")){
        keyword = "html";
      }
      else if(userInput.includes("css")){
        keyword = "css";
      }
      else if(userInput.includes("javascript")){
        keyword = "javascript"
      }
      else if(userInput.includes("web") && userInput.includes("development") || userInput.includes("web")){
        keyword = "webDevelopment";
      }
      else if(userInput.includes("python")){
        keyword = "python";
      }
      if(keyword){
        userSeekingCourse = true;
        return keyword;
      }
    }
    
    function checkInstructors(userInput){
      if(userInput.includes("bro") && userInput.includes("code")){
        keyword = "Bro Code";
      }
      else if(userInput.includes("london") && userInput.includes("app") && userInput.includes("brewery")){
        keyword = "London App Brewery";
      }
      else if(userInput.includes("london") && userInput.includes("app")){
        keyword = "London App Brewery";
      }
      else if(userInput.includes("free") && userInput.includes("code") && userInput.includes("camp")){
        keyword = "freeCodeCamp.org";
      }
      else if(userInput.includes("free") && userInput.includes("code")){
        keyword = "freeCodeCamp.org";
      }
      else if(userInput.includes("super") && userInput.includes("simple") && userInput.includes("dev")){
        keyword = "SuperSimpleDev";
      }
      else if(userInput.includes("super") && userInput.includes("simple")){
        keyword = "SuperSimpleDev";
      }
      if(keyword){
        userSeekingChannel = true;
        return keyword;
      }
    }
  }
}

function MicFunction(){
  let SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  if(SpeechRecognition){
    let recognition = new SpeechRecognition();
    searchMic.on("click", () => {
      if(searchMicImg.attr("src") === "images/mic-off.png"){
        recognition.start();
      }
      else{
        recognition.stop()
      }
    });
    recognition.onstart = () => {
      searchMicImg.attr("src", "images/mic-on.png");
    }
    recognition.onend = () => {
      searchMicImg.attr("src", "images/mic-off.png");
    }
    recognition.onresult = e => {
      let transcript = e.results[0][0].transcript;
      searchBar.val(transcript);
      setTimeout(() => {
        searchBtn.trigger("click");
        document.getElementById("search-btn-container").style.backgroundColor = "#bebebe80";
      }, 2000);
      setTimeout(() => {
        document.getElementById("search-btn-container").style.backgroundColor = "#e6e6e680";
      }, 2100);
    }
  }
}

// Assist Functions
function toggleClassFunction(){
  if (sidebar.hasClass("sidebar-on")){
    sidebar.removeClass("sidebar-on");
    sidebar.addClass("sidebar-off");
    webPage.removeClass("web-page-min");
    webPage.addClass("web-page-max");
    contactMeSection.removeClass("contact-min");
    contactMeSection.addClass("contact-max");
  }
  else{
    sidebar.removeClass("sidebar-off");
    sidebar.addClass("sidebar-on");
    webPage.removeClass("web-page-max");
    webPage.addClass("web-page-min");
    contactMeSection.removeClass("contact-max");
    contactMeSection.addClass("contact-min");
  }
}

function anchorTagFunction(element, link, title, htmlText){
  element.attr("href", link);
  element.attr("target", "_blank");
  if (title){
    element.attr("title", title);
  }
  if (htmlText){
    element.html(htmlText);
  }
}

sidebarInstructorContent(InstructorsArray);

courseTube(InstructorsArray, null);

refreshFunction();

const IDS = new Map([]);
InstructorsArray.forEach(instructor => {
  IDS.set(instructor.generateId(), instructor.channelName);
});

//............................. User actions .............................//

// Toggle Button
toggleBtn.on("click", toggleClassFunction);
// Courses Container
coursesContainer.on("click", () => coursesContent.slideToggle("slow"));
// Instructors Container
instructorsContainer.on("click", () => instructorsContent.slideToggle("slow"));

// Search Bar, Button
searchFuntion();

// Search Mic
MicFunction();

// Search Toggle Button
searchToggleBtn.on("click keyup", () => {
  searchToggleBtn.hide();
  searchBtnContainer.hide();
  leftHeader.hide();
  rightHeader.hide();
  backArrorwBtn.show();
  searchBar.show();
  searchMicContainer.show();
});

// Back Arrow Button
backArrorwBtn.on("click", () => {
  searchToggleBtn.show();
  leftHeader.show();
  rightHeader.show();
  searchBtnContainer.hide();
  backArrorwBtn.hide();
  searchBar.hide();
  searchMicContainer.hide();
  searchFuntion();
});

// Contact me Button
contactMeIcon.on("click", () => {
  console.log(true);
  webPage.hide("slow");
  contactMeSection.show("slow");
});

// Instructors Button (sidebar) => must be set after calling courseTube();
const instructorsBtn = $("#instructors-container #content .instructor");
instructorsBtn.on("click", function(){
  let targetChannel;
  IDS.forEach((value, key) => {
    // key === instructor.generatedId()
    if(key === this.id){
      // Value === instructor.channelName
      targetChannel = value;
    }
  });
  InstructorsArray.forEach(instructor => {
    if(instructor.channelName === targetChannel){
      videosContainer.html("");
      courseTube([instructor], null);
    }
  });
});

// Courses Button (sidebar)
coursesBtn.on("click", function(){
  let targetCourse = this.id;
  videosContainer.html("");
  courseTube(InstructorsArray, targetCourse);
});
