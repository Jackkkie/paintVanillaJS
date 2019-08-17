const styledComponent = aElement => {
  const el = document.createElement(aElement);
  return z => {
    const style = z[0];
    el.style = style;
    return el;
  };
};

const title = styledComponent("h1")`
  background-color: yellow;
  color: blue;
`;

const subtitle = styledComponent("span")`
  color: red;
`;

title.innerText = "This is h1";
subtitle.innerText = "This is span";

document.body.append(title, subtitle);
