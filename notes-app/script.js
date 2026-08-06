const addBtn = document.getElementById("addBtn");
const noteInput = document.getElementById("note");
const notesContainer = document.getElementById("notes");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function displayNotes() {
    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
            <p>${note}</p>
            <button onclick="deleteNote(${index})">Delete</button>
        `;

        notesContainer.appendChild(div);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    displayNotes();
}

addBtn.addEventListener("click", () => {
    const text = noteInput.value.trim();

    if (text === "") {
        alert("Please write a note.");
        return;
    }

    notes.push(text);
    saveNotes();
    displayNotes();

    noteInput.value = "";
});

displayNotes();