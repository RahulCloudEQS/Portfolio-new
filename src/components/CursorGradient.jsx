import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function CursorGradient() {
  const ref = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (!darkMode) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [darkMode]);

  if (!darkMode) return null;

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[5] will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, transparent 70%)',
      }}
    />
  );
}
