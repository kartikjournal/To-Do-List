document.addEventListener("DOMContentLoaded", function () {
    const notesContainer = document.getElementById("notes");
    const noteInput = document.getElementById("noteInput");
    const addNoteBtn = document.getElementById("addNoteBtn");

    // Load notes from local storage
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    // Display existing notes
    function displayNotes() {
      notesContainer.innerHTML = "";
      notes.forEach(function (note, index) {
        const noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.innerHTML = `
          <span>${note}</span>
          <button class="deleteBtn" onclick="deleteNote(${index})">Delete</button>
        `;
        notesContainer.appendChild(noteElement);
      });
    }

    // Add a new note
    function addNote() {
      const newNote = noteInput.value.trim();
      if (newNote !== "") {
        notes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(notes));
        noteInput.value = "";
        displayNotes();
      }
    }

    // Delete a note
    window.deleteNote = function (index) {
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      displayNotes();
    };

    // Event listeners
    addNoteBtn.addEventListener("click", addNote);

    // Initial display of notes
    displayNotes();
  });