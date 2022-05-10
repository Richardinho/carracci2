const VISIBILITY_EL_ID = "visibility";
const NAME_EL_ID = "name";
const TYPE_EL_ID = "type";

const visibilitySymbols = {
  private: "-",
  public: "+",
  protected: "#",
};

export class UMLClassProperty extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");

    style.textContent = `
      #visibility {
        padding-right: 4px;
      }

      :host {
        display: flex;
        flex-wrap: nowrap;
        padding: 2px 0;
      }


      #type:before {
        content: ':';
        margin-right: 4px;
      }
    `;

    shadow.appendChild(style);
  }

  set data(data) {
    let visibilityEl = this.shadowRoot.getElementById(VISIBILITY_EL_ID);
    let nameEl = this.shadowRoot.getElementById(NAME_EL_ID);
    let typeEl = this.shadowRoot.getElementById(TYPE_EL_ID);

    if (data.visibility) {
      if (!visibilityEl) {
        visibilityEl = document.createElement("span");
        visibilityEl.id = VISIBILITY_EL_ID;

        this.shadowRoot.append(visibilityEl);
      }

      visibilityEl.textContent = visibilitySymbols[data.visibility];
    } else {
      if (visibilityEl) {
        visibilityEl.remove();
      }
    }

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

customElements.define("uml-class-property", UMLClassProperty);
