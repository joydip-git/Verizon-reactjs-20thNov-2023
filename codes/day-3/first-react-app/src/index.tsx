import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const containerElement = document.getElementById('root') as HTMLElement
const root = createRoot(containerElement);
root.render(<App />)