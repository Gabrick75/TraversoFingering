import { useDarkMode } from '../context/DarkModeContext';

export default function DarkToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      id="dark-toggle"
      aria-label="Alternar modo noturno"
      onClick={toggle}
    >
      {isDark ? '☀' : '☾'}
    </button>
  );
}
