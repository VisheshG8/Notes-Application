// Get references to the elements we will need to work with
const addNoteButton = document.querySelector("button.btn-primary");
const notesContainer = document.querySelector("#section1");
const noteTextArea = document.querySelector("#floatingTextarea");
const searchBar = document.querySelector("input[type='search']");
const searchButton = document.querySelector("button[type='submit']");

// Function to format the date and time
function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return day + "/" + month + "/" + year + " " + hours + ":" + minutes;
}

//Function to search the notes
function searchNote() {
  const searchText = searchBar.value.toLowerCase();
  const notes = document.querySelectorAll(".note");
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const noteText = note.querySelector(".card-text").textContent.toLowerCase();
    if (noteText.includes(searchText)) {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  }
}

// Create a function to add a new note
function addNote() {
  // Get the current date and time
  const currentDate = formatDate(new Date());
  // Get the text entered by the user
  const noteText = noteTextArea.value;
  // Clear the text area
  noteTextArea.value = "";

  // Create a new div to hold the note
  const newNote = document.createElement("div");
  newNote.classList.add("card", "text-center", "note");

  // Create a header element to hold the date and time
  const noteHeader = document.createElement("div");
  noteHeader.classList.add("card-header");
  noteHeader.textContent = currentDate;

  // Create a paragraph element to hold the note text
  const noteBody = document.createElement("div");
  noteBody.classList.add("card-body");
  const noteTextNode = document.createElement("p");
  noteTextNode.classList.add("card-text");
  noteTextNode.textContent = noteText;
  noteBody.appendChild(noteTextNode);

  // Create a footer element to hold the delete button
  const noteFooter = document.createElement("div");
  noteFooter.classList.add("card-footer", "text-muted");

// Add an event listener to the add note button to add a new note when clicked
addNoteButton.addEventListener("click", addNote);
searchButton.addEventListener("click", searchNote);

//Checking for existing notes in local storage
//Checking for existing notes in local storage
if (localStorage.getItem("notes")) {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
