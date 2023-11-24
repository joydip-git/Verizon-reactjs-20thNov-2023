import { memo, useContext } from "react"
import LanguageContext from "./languagecontext"

const LanguageSwitcher = () => {
    const { language, updateLanguage } = useContext(LanguageContext)
    return (
        <div>
            <div>
                <label htmlFor="txtLang">Language: &nbsp;</label>
                <input type="text" id="txtLang" value={language}
                    onChange={
                        (e) => {
                            const data = e.target.value
                            updateLanguage && updateLanguage(data)
                        }
                    } />
            </div>
        </div>
    )
}

export default memo(LanguageSwitcher)