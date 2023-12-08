let homeIcon = document.getElementById("home-icon");
let bestPracticeButton = document.getElementById("best-practice-btn");
let bestPracticeWindow = document.getElementById("best-practices");
let processesButton = document.getElementById("processes");
let standardDocuemntsButton = document.getElementById("standard-docs");
let referenceDocumentsButton = document.getElementById("reference-docs");
let nxTrainingButton = document.getElementById("nx-training");


// Fucntions

function hideBestPractice() {
    document.getElementsById("best-practice-btn").style.display = "none";
}

// Event Listeners

homeIcon.addEventListener('click', (onclick) => {
    document.getElementById("best-practices").style.display = "none";
    document.getElementById("processes-window").style.display = "none";
    document.getElementById("std-docs-window").style.display = "none";
    document.getElementById("ref-docs-window").style.display = "none";
    document.getElementById("nx-training-window").style.display = "none";  
})

bestPracticeButton.addEventListener('click', (onclick) => {
    document.getElementById("best-practices").style.display = "flex";
    document.getElementById("processes-window").style.display = "none";
    document.getElementById("std-docs-window").style.display = "none";
    document.getElementById("ref-docs-window").style.display = "none";
    document.getElementById("nx-training-window").style.display = "none";  
})

processesButton.addEventListener('click', (onclick) => {
    document.getElementById("best-practices").style.display = "none";
    document.getElementById("processes-window").style.display = "flex";
    document.getElementById("std-docs-window").style.display = "none";
    document.getElementById("ref-docs-window").style.display = "none";
    document.getElementById("nx-training-window").style.display = "none";  
})

standardDocuemntsButton.addEventListener('click', (onclick) => {
    document.getElementById("best-practices").style.display = "none";
    document.getElementById("processes-window").style.display = "none";
    document.getElementById("std-docs-window").style.display = "flex";
    document.getElementById("ref-docs-window").style.display = "none";
    document.getElementById("nx-training-window").style.display = "none";  
})

referenceDocumentsButton.addEventListener('click', (onclick) => {
    document.getElementById("best-practices").style.display = "none";
    document.getElementById("processes-window").style.display = "none";
    document.getElementById("std-docs-window").style.display = "none";
    document.getElementById("ref-docs-window").style.display = "flex";
    document.getElementById("nx-training-window").style.display = "none";  
})

nxTrainingButton.addEventListener('click', (onclick) => {
    document.getElementById("best-practices").style.display = "none";
    document.getElementById("processes-window").style.display = "none";
    document.getElementById("std-docs-window").style.display = "none";
    document.getElementById("ref-docs-window").style.display = "none";
    document.getElementById("nx-training-window").style.display = "block";  
})





// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






















