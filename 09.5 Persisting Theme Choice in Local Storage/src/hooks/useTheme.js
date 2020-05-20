import { useEffect, useState } from 'react';
export default () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const localStorageTheme = window.localStorage.getItem('theme');
        setTheme(localStorageTheme || 'light');
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
        }
    };

    return [theme, toggleTheme];
};
