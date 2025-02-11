
import { useState } from 'react';
import MainLayout from "./layouts/MainLayout";
import './App.css'
import Navbar from './scenes/navbar';
import {SelectedPage} from "../src/shared/types";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <>
      <div className='app'>
        <MainLayout>
          <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        </MainLayout>

      </div>


    </>
  )
}

export default App
