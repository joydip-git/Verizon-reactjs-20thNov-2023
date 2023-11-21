import { createElement } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export function App() {
    const headerDesign = Header()
    const footerDesign = Footer()

    //<div>
    //...header
    //.....
    //...footer
    //</div>
    const divElement = createElement('div', null, [headerDesign, footerDesign])
    return divElement
}