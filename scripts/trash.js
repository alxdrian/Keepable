const renderNotes = () => {
  const container = document.querySelector(".listnotes--container");
  container.innerHTML = "";
      
  notes.forEach((note) => {
    
    if (note.trash) {
      const noteEl = createNoteDOM(note);
      container.append(noteEl);
    }
  });
};
renderNotes(notes);