import { useState } from 'react';

const PositiveNumberInput = () => {
  const [value, setValue] = useState(1);

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);

    if (newValue < 1) {
      return;
    }
    return setValue(newValue);
  };

  return (
    <input
      className='text-black'
      value={value}
      onChange={manejarCambio}
      type='number'
    />
  );
};
export default PositiveNumberInput;
