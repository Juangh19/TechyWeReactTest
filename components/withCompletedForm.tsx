import React, { ChangeEvent, SetStateAction, useState } from 'react';

interface FormularioProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const withFormulario = <P extends FormularioProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithFormulario = (props: P) => {
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
        <WrappedComponent
          {...props}
          stateForm={stateForm}
          manejarCambio={manejarCambio}
          sentStatus={sentStatus}
        />
      </form>
    );
  };

  return ComponentWithFormulario;
};

export default withFormulario;
