import { useState, useEffect, useCallback } from 'react';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function useKonamiCode() {
  const [activated, setActivated] = useState(false);
  const [index, setIndex] = useState(0);

  const createConfetti = useCallback(() => {
    const colors = ['#6366f1', '#06b6d4', '#818cf8', '#22d3ee', '#a78bfa', '#34d399'];
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden';
    document.body.appendChild(container);

    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 10 + 4;
      particle.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        left:${Math.random() * 100}%;
        top:-10px;
        opacity:1;
        transform:rotate(${Math.random() * 360}deg);
        animation:confetti-fall ${2 + Math.random() * 2}s ease-out forwards;
        animation-delay:${Math.random() * 0.5}s;
      `;
      container.appendChild(particle);
    }

    if (!document.getElementById('confetti-style')) {
      const style = document.createElement('style');
      style.id = 'confetti-style';
      style.textContent = `
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(${720 + Math.random() * 360}deg); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    setTimeout(() => container.remove(), 4000);
  }, []);

  const showToast = useCallback(() => {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);
      background:linear-gradient(135deg,#6366f1,#06b6d4);
      color:white;padding:24px 40px;border-radius:16px;z-index:10000;
      font-family:'Inter',sans-serif;text-align:center;
      box-shadow:0 25px 50px rgba(99,102,241,0.4);
      transition:transform 0.5s cubic-bezier(0.34,1.56,0.64,1);
    `;
    toast.innerHTML = `
      <div style="font-size:40px;margin-bottom:8px">🎮</div>
      <div style="font-size:18px;font-weight:700">You found the secret!</div>
      <div style="font-size:13px;opacity:0.8;margin-top:4px">↑↑↓↓←→←→BA</div>
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.transform = 'translate(-50%,-50%) scale(1)';
    });
    setTimeout(() => {
      toast.style.transform = 'translate(-50%,-50%) scale(0)';
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === KONAMI[index]) {
        const next = index + 1;
        if (next === KONAMI.length) {
          setActivated(true);
          setIndex(0);
          createConfetti();
          showToast();
        } else {
          setIndex(next);
        }
      } else {
        setIndex(0);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index, createConfetti, showToast]);

  return activated;
}
