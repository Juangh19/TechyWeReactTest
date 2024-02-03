import withFormulario from './withCompletedForm';

const NormalFormulario = ({
  stateForm,
  manejarCambio,
  sentStatus,
  setShowForm,
}: {
  stateForm: {
    nombre: string;
    contrasena: string;
    contrasena2: string;
  };
  manejarCambio: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sentStatus: 'pendiente' | 'cargando' | 'error' | 'exito';
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
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
    </>
  );
};
export default NormalFormulario;
