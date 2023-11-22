import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const containerElement = document.getElementById('root') as HTMLElement
const appDesign = App()
const root = createRoot(containerElement);
root.render(appDesign);

//causing a delay
// setTimeout(
//     () => {
//         const containerElement = document.getElementById('root') as HTMLElement
//         const appDesign = App()
//         const root = createRoot(containerElement);
//         root.render(appDesign);
//     },
//     5000
// )




