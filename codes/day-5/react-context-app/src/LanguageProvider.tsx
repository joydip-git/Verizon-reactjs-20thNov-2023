import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import LanguageContext, { LanguageContextType } from './languagecontext';

function LanguageProvider() {
    const [lang, setLang] = useState<string>('jp')
    const updateLangState = (newLang: string) => {
        setLang(newLang)
    }
    const contextValue: LanguageContextType = {
        language: lang,
        updateLanguage: updateLangState
    }
    return (
        <LanguageContext.Provider value={contextValue}>
            <div>
                In provider - Current Language: &nbsp; {lang}
                <br />
                Type a New Language in the  Text Box:
                <br /><br />
                {/* <LanguageContext.Provider value='new language'> */}
                <LanguageSwitcher />
                {/* </LanguageContext.Provider> */}
            </div>
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;
