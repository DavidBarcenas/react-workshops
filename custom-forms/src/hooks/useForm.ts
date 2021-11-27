import { useState } from 'react';

type UseForm<T> = {
  formData: T;
  onHandleChange: (e: React.FormEvent<HTMLFormElement>) => void;
  reset: () => void;
};

function useForm<T>(initialValue: T): UseForm<T> {
  const [formData, setFormData] = useState<T>(initialValue);

  function onHandleChange(e: React.FormEvent<HTMLFormElement>) {
    const { name, value } = e.target as HTMLFormElement;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function reset() {
    setFormData({ ...initialValue });
  }

  return { formData, onHandleChange, reset };
}

export default useForm;
