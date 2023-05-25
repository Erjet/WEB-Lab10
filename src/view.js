export function createElement(template) {
  return $(template).get(0);
}

export const remove = (component) => {
  component.getElement().remove();
};

export class View {
  render(element, containerName, place) {
    let component = element.getElement();
    let container = $(containerName);

    switch (place) {
      case "AFTERBEGIN":
        container.prepend(component);
        break;
      case "BEFOREEND":
        container.append(component);
        break;
    }
  }
}