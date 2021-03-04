// When the user scrolls the page, function named myFunction() is executed.
window.onscroll = function() {myFunction()};

// This function is executed when the webpage is scrolled.
function myFunction() {
  // This line of code create a variable and sets how much pixel is scrolled vertically.
  var winScroll = document.documentElement.scrollTop;

  // The scrollHeight property returns entire height of document and client height returns viewable height of document.
  // This line of code creates a variable and store the portion of document that is not viewable until scrolled.
  var scrolledHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // This line of code creates a variable and converts the scrolled height into percentage.
  var scrolledPercentage = (winScroll / scrolledHeight) * 100;

  // This line of code  defines how much width should be occupied by scrollProgress id in terms of perfentage.
  document.getElementById("scrollProgress").style.width = scrolledPercentage + "%";
}

// This is a function to validate the form which is executed when the button is pressed to submit.
function validateForm(){

  // Here, four variables are created and values obtained from form are stored in each of them accordingly.
  var name = document.forms["messageBox"]["name"].value;
  var email = document.forms["messageBox"]["email"].value;
  var subject = document.forms["messageBox"]["subject"].value;
  var message = document.forms["messageBox"]["message"].value;

  // This line of code is executed when all the fields are left empty.
  if(name == "" && email == "" && subject == "" && message == ""){
    alert("Form is empty, please complete the form.");
  }

  // This line of code is executed when the name field is left empty.
  else if(name == ""){
    alert("Field for name is empty, please enter your name.");
  }

  // This line of code is executed when email field is left empty.
  else if(email == ""){
    alert("E-mail address hasn't beed filled, please enter your e-mail address.");
  }
  
  // This line of code is executed when subject field is left empty.
  else if(subject == ""){
    alert("The subject of message is empty, please enter appropriate subject.");
  }

  // This line of code is executed when the message field is left empty.
  else if(message == ""){
    alert("No message is written, please write what you want to say.");
  }

  // This line of code is executed when all the fields are filled.
  else{
    alert("Thankyou for the message " + name + " , your message would be considered.");
  }
  
}

// This is function executed that displays the hidden content when read more button is clicked.
function readMore() {

  // This is variable created for the division that holds the content to be hidden or displayed.
  var expandText = document.getElementById("expand");

  // This is variable created for the button where text should be changed from read more to read less and vice-versa.
  var changeText = document.getElementById("changeText");
  
  // These are codes that are executed according to appropriate condition.
  // IF condition is executed when read less button is clicked.
  if (expand.style.display === "inline") {
    expand.style.display = "none";
    changeText.innerHTML = "READ MORE &#8250;&#8250;&#8250;"; 
  }

  // ELSE condition is executed when read more button is clicked.
  else {
    expand.style.display = "inline";
    changeText.innerHTML = "READ LESS &#8249;&#8249;&#8249;";
  }

}


// This is the block of code that manages the functionality of popup.
var modal = document.getElementById("imagePopup");

// There are variable created to get the image kept in html files.
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");

// This is a variable that is used to get image tag where image to be displayed is assigned.
var modalImg = document.getElementById("img01");

// When first image is clicked, this block of code is executed.
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// When second image is clicked, this block of code is executed.
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// When third image is clicked, this block of code is executed.
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// This is a variable that is used to get the span tag created for cross sign to exit from popup.
var span = document.getElementsByClassName("close")[0];

// When span tag with cross sign is clicked, the popup is collapsed.
span.onclick = function() { 
  modal.style.display = "none";
}


