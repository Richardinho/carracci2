const NAME_EL_ID = "name";
const TYPE_EL_ID = "type";

export class UMLClassArg extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");

    style.textContent = `
      :host {
        display: flex;
        flex-wrap: nowrap;
      }

      #name:before {
        content: ',';
      }

      :host(:first-child) #name:before {
        content: '';
      }

      #type:before {
        content: ':'
      }

    `;

    shadow.appendChild(style);
  }

  set data(data) {
    let nameEl = this.shadowRoot.getElementById(NAME_EL_ID);
    let typeEl = this.shadowRoot.getElementById(TYPE_EL_ID);

    if (data.name) {
      if (!nameEl) {
        nameEl = document.createElement("span");
        nameEl.id = NAME_EL_ID;

        this.shadowRoot.append(nameEl);
      }

      nameEl.textContent = data.name;
    } else {
      if (nameEl) {
        nameEl.remove();
      }
    }

    if (data.type) {
      if (!typeEl) {
        typeEl = document.createElement("span");
        typeEl.id = TYPE_EL_ID;

        this.shadowRoot.append(typeEl);
      }

      typeEl.textContent = data.type;
    } else {
      if (typeEl) {
        typeEl.remove();
      }
    }
  }
}

customElements.define("uml-class-arg", UMLClassArg);
