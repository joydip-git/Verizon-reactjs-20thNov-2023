import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//const appDesign = App()
//root.render(appDesign);

// const appComp = new App({})
// const appDesign = appComp.render()
//root.render(appDesign);

root.render(<App x={10} y='joydip' />)
