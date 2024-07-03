function customReander(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop != "children") {
            domElement.setAttribute(prop, reactElement.props[prop])
        }
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://react.dev',
        target: '_blank',
    },
    children: "click me to visit react documentation"
}

const container = document.getElementById("root");

customReander(reactElement, container)