const renderNotes = () => {
  const container = document.querySelector(".listnotes--container");
  container.innerHTML = "";
  notes.forEach((note) => {
    if ((note.pinned == "false") && !note.trash ) {      
      const noteEl = createNoteDOM(note);
      container.append(noteEl);
    }
  });

  const pinnedcontainer = document.querySelector(".pinnednotes--container");
  pinnedcontainer.innerHTML = "";
  notes.forEach((note) => {
    if ((note.pinned == "true") && !note.trash) {
      const pinnednoteEl = createNoteDOM(note);
      pinnedcontainer.append(pinnednoteEl);
    }
  });
};

if (!notes.length) {
  console.log("Empty");
  const empty = document.querySelector(".empty");
  const firstText = document.querySelector("#remove1");
  const secondText = document.querySelector("#remove2");
  empty.removeChild(firstText);
  empty.removeChild(secondText);

  const emptyContainerEl = document.createElement("div");
  const emptyTextEl = document.createElement("p");

  emptyContainerEl.className = "flex-center";
  emptyTextEl.className = "empty--text";

  emptyTextEl.textContent = "No notes to keep";

  empty.append(emptyContainerEl);
  emptyContainerEl.append(emptyTextEl);
} else {
  renderNotes(notes);
}

