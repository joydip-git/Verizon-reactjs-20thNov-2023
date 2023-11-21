import { createElement } from "react";

export function Footer() {
    //<h3 id='footerElement'>Verizon, 2023 </h3>
    const footerElement = createElement('h3', { id: 'footerElement' }, 'Verizon, 2023')
    return footerElement
}