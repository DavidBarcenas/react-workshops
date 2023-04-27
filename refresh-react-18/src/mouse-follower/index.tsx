import { useEffect, useState } from 'react';

function MouseFollower() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    console.log('efecto');
  });

  return (
    <>
      <h1>Seguir puntero</h1>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'}</button>
    </>
  );
}

export default MouseFollower;
