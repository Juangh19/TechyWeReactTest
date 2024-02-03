'use client';

import Formulario from '@/components/Formulario';
import NormalFormulario from '@/components/NormalFormulario';
import NormalButton from '@/components/NormalFormulario';
import PositiveNumberInput from '@/components/PositiveNumberInput';
import ThemeButton from '@/components/ThemeButton';
import PostTitle from '@/components/PostTitle';
import withFormulario from '@/components/withCompletedForm';
import { useThemeContext } from '@/context/ThemeContext';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const RelojDinamico = dynamic(() => import('@/components/Reloj'), {
  ssr: false,
});
const RelojSCUDinamico = dynamic(() => import('@/components/RelojSCU'), {
  ssr: false,
});

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [showFormHOC, setShowFormHOC] = useState(false);
  const { theme } = useThemeContext();

  const FormularioCompleto = withFormulario(NormalFormulario);

  return (
    <main
      className={`min-h-screen   p-24 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-slate-400'
      }`}
    >
      <div className='mb-32 grid gap-3 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <div className='flex gap-4'>
          <h2 className='font-semibold '>Punto 1)</h2>
          <RelojDinamico />
        </div>
        <div className='flex gap-4'>
          <h2 className='font-semibold '>Punto 2)</h2>
          <RelojSCUDinamico />
        </div>
        <div className='flex gap-4'>
          <h2 className='font-semibold'>Punto 3)</h2>
          <button className='underline' onClick={() => setShowForm(true)}>
            Click aquí para abrir formulario
          </button>
          {showForm && <Formulario setShowForm={setShowForm} />}
        </div>
        <div className='flex gap-4'>
          <h2 className='font-semibold'>Punto 5)</h2>
          <PositiveNumberInput />
        </div>
        <div className='flex gap-4'>
          <h2 className='font-semibold'>Punto 6)</h2>
          <PostTitle />
        </div>
        <div className='flex gap-4'>
          <h2 className='font-semibold'>Punto 8)</h2>
          <ThemeButton />
        </div>
        <div className='flex gap-4'>
          <h2 className='font-semibold'>Punto 9)</h2>
          <button className='underline' onClick={() => setShowFormHOC(true)}>
            Click aquí para abrir formulario
          </button>
          {showFormHOC && (
            <FormularioCompleto
              manejarCambio={() => {}}
              sentStatus='pendiente'
              stateForm={{ nombre: '', contrasena: '', contrasena2: '' }}
              setShowForm={setShowFormHOC}
            />
          )}
        </div>
      </div>
    </main>
  );
}
