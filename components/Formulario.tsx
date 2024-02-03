import { ChangeEvent, SetStateAction, useState } from 'react';

const Formulario = ({
  setShowForm,
}: {
  setShowForm: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [stateForm, setStateForm] = useState({
    nombre: '',
    contrasena: '',
    contrasena2: '',
  });
  const [sentStatus, setSentStatus] = useState<
    'pendiente' | 'cargando' | 'error' | 'exito'
  >('pendiente');

  const manejarCambio = (e: ChangeEvent<HTMLInputElement>) => {
    setStateForm((prevProps) => ({
      ...prevProps,
      [e.target.name]: e.target.value,
    }));
  };

  const manejarSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSentStatus('cargando');

    if (
      stateForm.nombre === '' ||
      stateForm.contrasena === '' ||
      stateForm.contrasena2 === ''
    ) {
      alert('Todos los campos son requeridos');
      setSentStatus('pendiente');
      return;
    }

    if (stateForm.contrasena !== stateForm.contrasena2) {
      alert('Las contraseñas no coinciden');
      setSentStatus('pendiente');
      return;
    }

    setTimeout(() => {
      setSentStatus('exito');
    }, 2000);
  };

  return (
    <form
      className='absolute rounded-lg left-0 right-0 mx-auto max-w-[450px] flex flex-col gap-4 px-8 bg-slate-300 text-black py-4'
      onSubmit={manejarSubmit}
    >
      <div className='flex justify-end gap-2'>
        <label htmlFor='nombre'>Nombre</label>
        <input
          value={stateForm.nombre}
          onChange={manejarCambio}
          type='text'
          name='nombre'
          id='nombre'
        />
      </div>
      <div className='flex justify-end gap-2'>
        <label htmlFor='contrasena'>Contraseña</label>
        <input
          value={stateForm.contrasena}
          onChange={manejarCambio}
          type='password'
          name='contrasena'
          id='contrasena'
        />
      </div>
      <div className='flex justify-end gap-2'>
        <label htmlFor='contrasena2'>Repetir contraseña</label>
        <input
          value={stateForm.contrasena2}
          onChange={manejarCambio}
          type='password'
          name='contrasena2'
          id='contrasena2'
        />
      </div>
      <button
        disabled={sentStatus !== 'pendiente'}
        className='bg-slate-800 py-2 text-white  '
        type='submit'
      >
        {sentStatus === 'cargando'
          ? 'Enviando...'
          : sentStatus === 'exito'
          ? 'Enviado'
          : sentStatus === 'error'
          ? 'Error'
          : 'Enviar'}
      </button>
      <button className='underline' onClick={() => setShowForm(false)}>
        Cerrar
      </button>
    </form>
  );
};
export default Formulario;
