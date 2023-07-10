import Modal from './components/modal/Modal';

import { useToggle } from './hooks/useToggle';

import { TvProgrammingProvider } from './context/tvPrograming/';

function App() {

  const [openModal, toggleModal] = useToggle(false);

  return (
    <TvProgrammingProvider>
      <main className="flex items-center justify-center w-full min-h-screen">
        <button
          onClick={toggleModal}
          className="rounded-md bg-black text-white px-4 py-2">
          Mostrar EPG
        </button>
        {
          openModal && (<Modal toggleModal={toggleModal} />)
        }
      </main>
    </TvProgrammingProvider >
  )
}

export default App
