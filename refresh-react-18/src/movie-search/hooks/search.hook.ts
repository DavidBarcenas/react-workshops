import { useEffect, useRef, useState } from 'react';

export function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState<null | string>(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if (search === '') {
      setError('El campo de búsqueda no puede estar vació');
      return;
    }

    if (search.match(/^[0-9]+$/)) {
      setError('El campo de búsqueda no puede contener números');
      return;
    }

    if (search.length < 3) {
      setError('El campo de búsqueda debe tener al menos 3 caracteres');
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
