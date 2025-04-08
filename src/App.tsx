
import { useState, useEffect } from 'react';
import MainLayout from "./layouts/MainLayout";

import Navbar from './scenes/navbar';
import { SelectedPage } from "../src/shared/types";
import Home from './scenes/home';
import AboutUs from './scenes/aboutUs';
import SecondLayout from './layouts/SecondLayout';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (

    <div className='app'>
      <MainLayout>
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Home setSelectedPage={setSelectedPage} />

      </MainLayout>
      <SecondLayout>
        <AboutUs  setSelectedPage={setSelectedPage} />
      </SecondLayout>

    </div>

  )
}

export default App
