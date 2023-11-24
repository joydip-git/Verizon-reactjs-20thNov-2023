import { createContext } from "react";

export type LanguageContextType = {
    language: string,
    updateLanguage?: (args: string) => void
}
const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    updateLanguage: () => { }
})
export default LanguageContext