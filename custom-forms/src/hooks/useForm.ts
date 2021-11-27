import { useState } from "react";

function useForm<T>(initialValue: T) {
  const [formData, setFormData] = useState<T>(initialValue)

  function onHandleChange(e: React.FormEvent<HTMLFormElement>) {
    const {name, value} = e.target as HTMLFormElement;
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function reset() {
    setFormData({...initialValue})
  }

  return {formData, onHandleChange, reset}
}

export default useForm;