import './App.css';
import LanguageProvider from './LanguageProvider';
import LanguageSwitcher from './LanguageSwitcher';

function App() {
  return (
    <div className="App">
      <LanguageProvider />
      <br />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
