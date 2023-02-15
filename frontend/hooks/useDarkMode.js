import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialState = false) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialState);
    return [darkMode, setDarkMode];
};
