import { useThemeContext } from '@/context/ThemeContext';

const ThemeButton = () => {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className='underline' onClick={toggleTheme}>
      {theme === 'dark'
        ? 'Cambiar a modo claro 🌞'
        : 'Cambiar a modo oscuro 🌚'}
    </button>
  );
};
export default ThemeButton;
