class App {
  constructor() {
    this.title = "";
    this.text = "";
    this.id = "";
    this.color = "";
    this.pinned = "";

    this.$modal = document.querySelector(".modal");
    this.$modalContent = document.querySelector(".modal-content");
    this.$modalTitle = document.querySelector(".modal-title");
    this.$modalText = document.querySelector(".modal-text");
    this.$modalPaleteButton = document.querySelector(".modal-palete");
    this.$modalTrashButton = document.querySelector(".modal-trash");
    this.$modalPinButton = document.querySelector(".modal-pin");
    this.$modalCloseButton = document.querySelector(".modal-close-button");

    this.addEventListeners();
  }

  addEventListeners() {
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

    paletteContainerEl.className = "palette hidden";
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
    this.$modalContent.append(paletteContainerEl);
    
    document.body.addEventListener("click", event => {
      this.selectNote(event);
      this.openModal(event);
    });

    this.$modalPaleteButton.addEventListener("click", () => {
      paletteContainerEl.className = "palette visible";

      whiteSelectorEl.addEventListener("click", () => {
        paletteContainerEl.className = "palette hidden";
        this.$modalContent.className = "modal-content white";
        this.$modalTitle.className = "modal-title white";
        this.$modalText.className = "modal-text white";
        this.color = "white";
      });
      redSelectorEl.addEventListener("click", () => {
        paletteContainerEl.className = "palette hidden";
        this.$modalContent.className = "modal-content red";
        this.$modalTitle.className = "modal-title red";
        this.$modalText.className = "modal-text red";
        this.color = "red";
      });
      orangeSelectorEl.addEventListener("click", () => {
        paletteContainerEl.className = "palette hidden";
        this.$modalContent.className = "modal-content orange";
        this.$modalTitle.className = "modal-title orange";
        this.$modalText.className = "modal-text orange";
        this.color = "orange";
      });
      yellowSelectorEl.addEventListener("click", () => {
        paletteContainerEl.className = "palette hidden";
        this.$modalContent.className = "modal-content yellow";
        this.$modalTitle.className = "modal-title yellow";
        this.$modalText.className = "modal-text yellow";
        this.color = "yellow";
      });
      greenSelectorEl.addEventListener("click", () => {
        paletteContainerEl.className = "palette hidden";
        this.$modalContent.className = "modal-content green";
        this.$modalTitle.className = "modal-title green";
        this.$modalText.className = "modal-text green";
        this.color = "green";
      });
      skyblueSelectorEl.addEventListener("click", () => {
        paletteContainerEl.className = "palette hidden";
        this.$modalContent.className = "modal-content skyblue";
        this.$modalTitle.className = "modal-title skyblue";
        this.$modalText.className = "modal-text skyblue";
        this.color = "skyblue";
      });
      cianSelectorEl.addEventListener("click", () => {
        paletteContainerEl.className = "palette hidden";
        this.$modalContent.className = "modal-content cian";
        this.$modalTitle.className = "modal-title cian";
        this.$modalText.className = "modal-text cian";
        this.color = "cian";
      });
      blueSelectorEl.addEventListener("click", () => {
        paletteContainerEl.className = "palette hidden";
        this.$modalContent.className = "modal-content blue";
        this.$modalTitle.className = "modal-title blue";
        this.$modalText.className = "modal-text blue";
        this.color = "blue";
      });
      violetSelectorEl.addEventListener("click", () => {
        paletteContainerEl.className = "palette hidden";
        this.$modalContent.className = "modal-content violet";
        this.$modalTitle.className = "modal-title violet";
        this.$modalText.className = "modal-text violet";
        this.color = "violet";
      });
      pinkSelectorEl.addEventListener("click", () => {
        paletteContainerEl.className = "palette hidden";
        this.$modalContent.className = "modal-content pink";
        this.$modalTitle.className = "modal-title pink";
        this.$modalText.className = "modal-text pink";
        this.color = "pink";
      });
    });

    this.$modalTrashButton.addEventListener("click", () => {
      notes.forEach((note) => {
        if (note.id === this.id) {
          note.trash = true;
        };
      });
      this.render();
      this.$modal.classList.toggle("open-modal");
    });

    this.$modalPinButton.addEventListener("click", () => {
      const pinEl = this.$modalPinButton.lastChild;
      if (this.pinned === "false") {
        this.pinned = "true";
        pinEl.setAttribute("src", "./assets/pin.svg");
      } else {
        this.pinned = "false";
        pinEl.setAttribute("src", "./assets/unpinned.svg");;
      };
    });

    this.$modalCloseButton.addEventListener("click", () => {
      this.closeModal();
    });
  }

  openModal(event) {
    // if (event.target.matches('.safe-trash')) return;  
      
    if (event.target.closest(".note")) {
      this.$modal.classList.toggle("open-modal");
      this.$modalTitle.value = this.title;
      this.$modalText.value = this.text;
      this.$modalContent.className = `modal-content ${this.color}`;
      this.$modalTitle.className = `modal-title ${this.color}`;
      this.$modalText.className = `modal-text ${this.color}`;
      const pinsvg = this.$modalPinButton.lastChild;
      const pinEl = document.createElement("img");
      this.$modalPinButton.replaceChild(pinEl, pinsvg);
      if (this.pinned === "false") {
        pinEl.setAttribute("src", "./assets/unpinned.svg");
      } else {
        pinEl.setAttribute("src", "./assets/pin.svg");;
      };
    }
  }

  closeModal() {
    this.editNote();
    this.$modal.classList.toggle("open-modal");
  }

  editNote() {
    const newtitle = this.$modalTitle.value;
    const newtext = this.$modalText.value;
    const newcolor = this.color;
    const newpinned = this.pinned;
    notes.forEach((note) => {
      if (note.id === this.id) {
        note.title = newtitle;
        note.body = newtext;
        note.color = newcolor;
        note.pinned = newpinned;
      };
    });
    this.render();
  }

  selectNote(event) {
    const $noteContent = event.target.closest(".note--content");
    const $noteContainer = $noteContent.parentElement;
    const $selectedNote = $noteContainer.parentElement;
    if (!$selectedNote) return;
    const findnote = notes.find(note => note.id === parseInt($selectedNote.id));
    this.title = findnote.title;
    this.text = findnote.body;
    this.id = findnote.id;
    this.color = findnote.color;
    this.pinned = findnote.pinned;
  }
  
  render() {
    this.saveNotes(); 
    renderNotes();
  }
  
  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}

new App();
