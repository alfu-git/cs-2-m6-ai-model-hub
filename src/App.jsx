import { Suspense } from 'react'
  import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import Banner from './Components/Banner/Banner'
import ModelsContainer from './Components/ModelsContainer/ModelsContainer'
import Navbar from './Components/Navbar/Navbar'

const getModelData = async () => {
  const fetchModelData = await fetch("../public/models.json");
  return fetchModelData.json();
}

function App() {
const modelDataPromise = getModelData();


  return (
    <>
      
      <Navbar />
      <Banner />
      
      <Suspense fallback={(
        <div className='mt-40 flex justify-center'>
          <span className="loading loading-spinner text-neutral"></span>
        </div>
      )}>
        <ModelsContainer modelDataPromise={modelDataPromise} />
      </Suspense>


      <ToastContainer />
    </>
  )
}

export default App
