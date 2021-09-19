const getNotes = () => {
  const initialNotes = [];

  const notes = localStorage.getItem("notes");
  const array = JSON.parse(notes);

  return notes ? array.reverse() : initialNotes;
};

const notes = getNotes();

const paletteContainerEl = document.createElement("div");
const whiteSelectorEl = document.createElement("div");
const redSelectorEl = document.createElement("div");
const orangeSelectorEl = document.createElement("div");
const yellowSelectorEl = document.createElement("div");
const greenSelectorEl = document.createElement("div");
const cianSelectorEl = document.createElement("div");
const skyblueSelectorEl = document.createElement("div");
const blueSelectorEl = document.createElement("div");
const violetSelectorEl = document.createElement("div");
const pinkSelectorEl = document.createElement("div");

whiteSelectorEl.className = "color-selector white border";
redSelectorEl.className = "color-selector red";
orangeSelectorEl.className = "color-selector orange";
yellowSelectorEl.className = "color-selector yellow";
greenSelectorEl.className = "color-selector green";
cianSelectorEl.className = "color-selector cian";
skyblueSelectorEl.className = "color-selector skyblue";
blueSelectorEl.className = "color-selector blue";
violetSelectorEl.className = "color-selector violet";
pinkSelectorEl.className = "color-selector pink";

paletteContainerEl.append(
  whiteSelectorEl,
  redSelectorEl,
  orangeSelectorEl,
  yellowSelectorEl,
  greenSelectorEl,
  cianSelectorEl,
  skyblueSelectorEl,
  blueSelectorEl,
  violetSelectorEl,
  pinkSelectorEl
);
paletteContainerEl.className = "palette hidden";

const createNoteDOM = (note) => {
  const noteEl = document.createElement("div");
  const buttonPinEl = document.createElement("button");
  const pinEl = document.createElement("img");
  const noteContainerEl = document.createElement("div");
  const noteContentEl = document.createElement("div");
  const titleEl = document.createElement("div");
  const titleTextEl = document.createElement("h4");
  const bodyEl = document.createElement("div");
  const bodyTextEl = document.createElement("p");
  const buttonContainerEl = document.createElement("div");  
  const buttonTrashEl = document.createElement("button");
  const trashEl = document.createElement("img");
  

  noteEl.className = `note ${note.color}`;
  noteEl.setAttribute("id", `${note.id}`);

  buttonPinEl.className = "btn btn--icon note--btn-pin";
  if (note.pinned === "false") {
    pinEl.setAttribute("src", "./assets/unpinned.svg");
  } else {
    pinEl.setAttribute("src", "./assets/pin.svg");;
  };

  noteContainerEl.className = "note--container";
  noteContentEl.className = "note--content";
  titleEl.className = "content--sm";
  titleTextEl.textContent = note.title;
  bodyEl.className = "content--lg";
  bodyTextEl.textContent = note.body;
  buttonContainerEl.className = "note--btn-container";  
  buttonTrashEl.className = "btn btn--icon";
  trashEl.setAttribute("src", "./assets/trash.svg");

  titleEl.append(titleTextEl);
  bodyEl.append(bodyTextEl);
  noteContentEl.append(titleEl, bodyEl);
  buttonTrashEl.append(trashEl);

  if (note.trash) {
  const buttonRestoreEl = document.createElement("button");
  const restoreEl = document.createElement("img");
  buttonRestoreEl.className = "btn btn--icon"
  restoreEl.setAttribute("src", "./assets/arrow.svg")
  buttonRestoreEl.append(restoreEl);
  buttonContainerEl.append(buttonTrashEl, buttonRestoreEl);

  buttonRestoreEl.addEventListener("click", () => {
    note.trash = false
    saveNotes(notes);
    renderNotes(notes);
  })

  }else{
    const buttonPaletteEl = document.createElement("button");
    const paletteEl = document.createElement("img");
    buttonPaletteEl.className = "btn btn--icon";
    paletteEl.setAttribute("src", "./assets/palette.svg");
    buttonPaletteEl.append(paletteEl);
    buttonContainerEl.append(buttonPaletteEl, buttonTrashEl);
    buttonPinEl.append(pinEl);
    noteEl.append(buttonPinEl);

    const paletteContainerEl = document.createElement("div");
    const whiteSelectorEl = document.createElement("div");
    const redSelectorEl = document.createElement("div");
    const orangeSelectorEl = document.createElement("div");
    const yellowSelectorEl = document.createElement("div");
    const greenSelectorEl = document.createElement("div");
    const cianSelectorEl = document.createElement("div");
    const skyblueSelectorEl = document.createElement("div");
    const blueSelectorEl = document.createElement("div");
    const violetSelectorEl = document.createElement("div");
    const pinkSelectorEl = document.createElement("div");

    whiteSelectorEl.className = "color-selector white border";
    redSelectorEl.className = "color-selector red";
    orangeSelectorEl.className = "color-selector orange";
    yellowSelectorEl.className = "color-selector yellow";
    greenSelectorEl.className = "color-selector green";
    cianSelectorEl.className = "color-selector cian";
    skyblueSelectorEl.className = "color-selector skyblue";
    blueSelectorEl.className = "color-selector blue";
    violetSelectorEl.className = "color-selector violet";
    pinkSelectorEl.className = "color-selector pink";

    paletteContainerEl.append(
      whiteSelectorEl,
      redSelectorEl,
      orangeSelectorEl,
      yellowSelectorEl,
      greenSelectorEl,
      cianSelectorEl,
      skyblueSelectorEl,
      blueSelectorEl,
      violetSelectorEl,
      pinkSelectorEl
    );

    buttonPinEl.addEventListener("click", () => {
      if (note.pinned === "false") {
        note.pinned = "true";
      } else {
        note.pinned = "false";
      }
      saveNotes(notes);
      renderNotes(notes);
    });
  
    buttonPaletteEl.addEventListener("click", () => {
      noteEl.append(paletteContainerEl);
      paletteContainerEl.className = "palette palette--container visible";
      paletteEl.setAttribute("src", "./assets/paletteselected.svg");
      buttonPaletteEl.className = "btn btn--icon btn--focus";
    });

    whiteSelectorEl.addEventListener("click", () => {
      note.color = "white";
      saveNotes(notes);
      renderNotes(notes);
    });
  
    redSelectorEl.addEventListener("click", () => {
      note.color = "red";
      saveNotes(notes);
      renderNotes(notes);
    });
  
    orangeSelectorEl.addEventListener("click", () => {
      note.color = "orange";
      saveNotes(notes);
      renderNotes(notes);
    });
  
    yellowSelectorEl.addEventListener("click", () => {
      note.color = "yellow";
      saveNotes(notes);
      renderNotes(notes);
    });
  
    greenSelectorEl.addEventListener("click", () => {
      note.color = "green";
      saveNotes(notes);
      renderNotes(notes);
    });
  
    cianSelectorEl.addEventListener("click", () => {
      note.color = "cian";
      saveNotes(notes);
      renderNotes(notes);
    });
  
    skyblueSelectorEl.addEventListener("click", () => {
      note.color = "skyblue";
      saveNotes(notes);
      renderNotes(notes);
    });
  
    blueSelectorEl.addEventListener("click", () => {
      note.color = "blue";
      saveNotes(notes);
      renderNotes(notes);
    });
  
    violetSelectorEl.addEventListener("click", () => {
      note.color = "violet";
      saveNotes(notes);
      renderNotes(notes);
    });
  
    pinkSelectorEl.addEventListener("click", () => {
      note.color = "pink";
      saveNotes(notes);
      renderNotes(notes);
    });

  } //else

  
  
  
  
  
  noteContainerEl.append(noteContentEl, buttonContainerEl);  
  noteEl.append(noteContainerEl);


  

  

  buttonTrashEl.addEventListener("click", () => {
    trashNote(note.id, notes);
    saveNotes(notes);
    renderNotes(notes);
  })

  

  return noteEl;
};

const form = document.querySelector("form");
const palettebutton = document.getElementById("palette");
const note_title = document.getElementById("note_title");
const note_input = document.getElementById("note_input");
form?.append(paletteContainerEl);
const defaultcolor = document.getElementById("bgcolor");
palettebutton?.addEventListener("click", () => {
  paletteContainerEl.className = "palette visible";
});
whiteSelectorEl.addEventListener("click", () => {
  paletteContainerEl.className = "palette hidden";
  defaultcolor.setAttribute("value", "white");
  form.className = "flex-col input-container white";
  note_title.className = "input__content white";
  note_input.className = "input__content white";
});
redSelectorEl.addEventListener("click", () => {
  paletteContainerEl.className = "palette hidden";
  defaultcolor.setAttribute("value", "red");
  form.className = "flex-col input-container red";
  note_title.className = "input__content red";
  note_input.className = "input__content red";
});
orangeSelectorEl.addEventListener("click", () => {
  paletteContainerEl.className = "palette hidden";
  defaultcolor.setAttribute("value", "orange");
  form.className = "flex-col input-container orange";
  note_title.className = "input__content orange";
  note_input.className = "input__content orange";
});
yellowSelectorEl.addEventListener("click", () => {
  paletteContainerEl.className = "palette hidden";
  defaultcolor.setAttribute("value", "yellow");
  form.className = "flex-col input-container yellow";
  note_title.className = "input__content yellow";
  note_input.className = "input__content yellow";
});
greenSelectorEl.addEventListener("click", () => {
  paletteContainerEl.className = "palette hidden";
  defaultcolor.setAttribute("value", "green");
  form.className = "flex-col input-container green";
  note_title.className = "input__content green";
  note_input.className = "input__content green";
});
cianSelectorEl.addEventListener("click", () => {
  paletteContainerEl.className = "palette hidden";
  defaultcolor.setAttribute("value", "cian");
  form.className = "flex-col input-container cian";
  note_title.className = "input__content cian";
  note_input.className = "input__content cian";
});
skyblueSelectorEl.addEventListener("click", () => {
  paletteContainerEl.className = "palette hidden";
  defaultcolor.setAttribute("value", "skyblue");
  form.className = "flex-col input-container skyblue";
  note_title.className = "input__content skyblue";
  note_input.className = "input__content skyblue";
});
blueSelectorEl.addEventListener("click", () => {
  paletteContainerEl.className = "palette hidden";
  defaultcolor.setAttribute("value", "blue");
  form.className = "flex-col input-container blue";
  note_title.className = "input__content blue";
  note_input.className = "input__content blue";
});
violetSelectorEl.addEventListener("click", () => {
  paletteContainerEl.className = "palette hidden";
  defaultcolor.setAttribute("value", "violet");
  form.className = "flex-col input-container violet";
  note_title.className = "input__content violet";
  note_input.className = "input__content violet";
});
pinkSelectorEl.addEventListener("click", () => {
  form.className = "flex-col input-container pink";
  paletteContainerEl.className = "palette hidden";
  defaultcolor.setAttribute("value", "pink");
  note_title.className = "input__content pink";
  note_input.className = "input__content pink";
});
form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const elements = event.target.elements;
  const title = elements.title.value;
  const body = elements.body.value;
  const color = elements.color.value;
  const pinned = elements.pinned.value;

  addNote(title, body, color, pinned);
  location.assign("index.html");
});

const addNote = (title, body, color, pinned) => {
  notes.push({
    id: Date.now(),
    title,
    body,
    color,
    trash: false,
    pinned,
  });
  saveNotes(notes);
};

const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const trashNote = (id) => {
  const index = notes.findIndex((note) => note.id === id);
  
  if (index >= 0) {
    notes[index].trash ? notes.splice(index, 1) : notes[index].trash = true;
  }
}


