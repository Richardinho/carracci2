const NAME_EL_ID = "name";
const METHODS_EL_ID = "method";

export class UMLClass extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      :host {
        border: solid 1px black;
        background: rgb(255, 255, 206);
        display: inline-block;
        font-family: courier;
        font-size: 12px;
      }

      :host > div {
        padding: 10px;
      }

      :host > div:nth-child(n+3) {
        border-top: solid 1px black;
      }

    `;

    shadow.appendChild(style);
  }

  set name(name) {
    let nameEl = this.shadowRoot.getElementById(NAME_EL_ID);

    if (name) {
      if (!nameEl) {
        nameEl = document.createElement("div");
        nameEl.id = NAME_EL_ID;

        this.shadowRoot.append(nameEl);
      }

      nameEl.textContent = name;
    } else {
      if (nameEl) {
        nameEl.remove();
      }
    }
  }

  set properties(properties) {
    let propertiesEl = this.shadowRoot.getElementById("properties");

    if (properties && properties.length) {
      if (!propertiesEl) {
        propertiesEl = document.createElement("div");
        propertiesEl.id = "properties";

        this.shadowRoot.append(propertiesEl);
      }

      const frag = document.createDocumentFragment();

      propertiesEl.textContent = "";

      properties.forEach((property) => {
        const propertyEl = document.createElement("uml-class-property");
        propertyEl.data = property;
        frag.append(propertyEl);
      });

      propertiesEl.append(frag);
    } else {
      if (propertiesEl) {
        propertiesEl.remove();
      }
    }
  }

  set methods(methods) {
    let methodsEl = this.shadowRoot.getElementById(METHODS_EL_ID);

    if (methods && methods.length) {
      if (!methodsEl) {
        methodsEl = document.createElement("div");
        methodsEl.id = METHODS_EL_ID;

        this.shadowRoot.append(methodsEl);
      }

      const frag = document.createDocumentFragment();

      methodsEl.textContent = "";

      methods.forEach((method) => {
        const methodEl = document.createElement("uml-class-method");
        methodEl.data = method;
        frag.append(methodEl);
      });

      methodsEl.append(frag);
    } else {
      if (methodsEl) {
        methodsEl.remove();
      }
    }
  }
}

customElements.define("uml-class", UMLClass);
