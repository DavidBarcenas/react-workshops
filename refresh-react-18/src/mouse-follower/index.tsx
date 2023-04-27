import { useEffect, useState } from 'react';

function MouseFollower() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener('mousemove', handleMove);
    }

    return () => window.removeEventListener('mousemove', handleMove);
  }, [enabled]);

  return (
    <main>
      <div
        className='absolute bg-amber-300 rounded-full opacity-80 pointer-events-none -left-10 -top-10 w-20 h-20 translate-x-52'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'}</button>
    </main>
  );
}

export default MouseFollower;
