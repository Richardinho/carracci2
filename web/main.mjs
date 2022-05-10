import { UMLClass } from "./components/uml-class.mjs";
import { UMLClassProperty } from "./components/uml-class-property.mjs";
import { UMLClassMethod } from "./components/uml-class-method.mjs";
import { UMLClassArg } from "./components/uml-class-arg.mjs";

import { delegationPatternDiagram } from "./uml-diagram.mjs";

const data = delegationPatternDiagram.types.abc1;

const umlClass = document.createElement("uml-class");

document.body.append(umlClass);

umlClass.name = data.name;
umlClass.properties = data.properties;
umlClass.methods = data.methods;
