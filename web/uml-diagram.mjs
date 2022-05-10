export const delegationPatternDiagram = {
  name: "Delegation Pattern",
  types: {
    abc1: {
      name: "Delegator",
      id: "abc1",
      mode: "class",
      properties: [
        {
          name: "blah",
          visibility: "private",
          type: "string",
        },
        {
          name: "lallaHello",
          visibility: "protected",
          type: "boolean",
        },
      ],
      methods: [
        {
          name: "doThis",
          visibility: "public",
          args: [
            {
              name: "job",
              type: "string",
            },
            {
              name: "age",
              type: "number",
            },
          ],
          returnType: "string",
        },
      ],
      ui: {
        xCood: 474,
        yCood: 144,
        width: 53.359375,
        height: 49,
      },
    },
  },
  connectors: {
    abc3: {
      orientation: "horizontal",
      nodes: {
        left: {
          xCood: 527.359375,
          yCood: 164,
          attached: true,
          attachedBox: "abc1",
          arrow: {
            style: "none",
            direction: "left",
          },
        },
        proximal: {
          xCood: 643,
          yCood: 164,
          attached: false,
          attachedBox: "",
        },
        distal: {
          xCood: 643,
          yCood: 282,
          attached: false,
          attachedBox: "",
        },
        right: {
          xCood: 526.03125,
          yCood: 282,
          attached: true,
          attachedBox: "abc2",
          arrow: {
            style: "blackConnectArrow",
            direction: "left",
          },
        },
      },
      lineStyle: "solid",
    },
  },
  notes: {},
  banner: {
    title: "Delegator pattern",
    description:
      "the delegation pattern is a design pattern in object-oriented programming where an object, instead of performing one of its stated tasks, delegates that task to an associated helper object. There is an Inversion of Responsibility in which a helper object, known as a delegate, is given the responsibility to execute a task for the delegator. The delegation pattern is one of the fundamental abstraction patterns that underlie other software patterns such as composition (also referred to as aggregation), mixins and aspects.",
    author: "Richard Hunter",
    width: 300,
    fontSize: "12",
    created: "16th June 2015",
    fontFamily: "arial",
    paddingHorizontal: 12,
    xCood: 84,
    yCood: 121,
  },
};
