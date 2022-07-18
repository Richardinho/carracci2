const VISIBILITY_EL_ID = "visibility";
const NAME_EL_ID = "name";
const RETURN_TYPE_EL_ID = "return-type";
const ARGS_EL_ID = "args";

const visibilitySymbols = {
  private: "-",
  public: "+",
  protected: "#",
};

export class UMLClassMethod extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");

    style.textContent = `
      :host {
        display: flex;
        flex-wrap: nowrap;
        padding: 4px 0;
      }

      #visibility {
        padding-right: 2px;
      }

      #args {
        display: flex;
        flex-wrap: nowrap;
      }

      #args:before {
        content: '(';
      }

      #args:after{
        content: ')';
      }

      #return-type:before {
        content: ':';
      }

    `;

    shadow.appendChild(style);
  }

  set data(data) {
    let visibilityEl = this.shadowRoot.getElementById(VISIBILITY_EL_ID);
    let nameEl = this.shadowRoot.getElementById(NAME_EL_ID);
    let returnTypeEl = this.shadowRoot.getElementById(RETURN_TYPE_EL_ID);
    let argsEl = this.shadowRoot.getElementById("args");

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

      if (!argsEl) {
        argsEl = document.createElement("span");
        argsEl.id = ARGS_EL_ID;

        this.shadowRoot.append(argsEl);
      }

      if (data.args) {
        const argsFrag = document.createDocumentFragment();
        data.args.forEach((arg) => {
          const argEl = document.createElement("uml-class-arg");
          argEl.data = arg;
          argsFrag.append(argEl);
        });
        argsEl.append(argsFrag);
      }

      nameEl.textContent = data.name;
    } else {
      if (nameEl) {
        nameEl.remove();
      }

      if (argsEl) {
        argsEl.remove();
      }
    }

    if (data.returnType) {
      if (!returnTypeEl) {
        returnTypeEl = document.createElement("span");
        returnTypeEl.id = RETURN_TYPE_EL_ID;

        this.shadowRoot.append(returnTypeEl);
      }

      returnTypeEl.textContent = data.returnType;
    } else {
      if (returnTypeEl) {
        returnTypeEl.remove();
      }
    }
  }
}

customElements.define("uml-class-method", UMLClassMethod);
