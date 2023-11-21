import { createElement } from "react";

export const Header = () => {
    const title = 'Welcome to Verizon'
    //<h1><p>Welcome to Verizon</p></h1>
    const paraelement = createElement('p', null, title)
    const helement = createElement('h1', null, paraelement)
    return helement
}