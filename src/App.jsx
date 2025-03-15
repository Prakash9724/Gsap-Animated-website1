import React from 'react'
import Navbar from './components/Navbar'
import FirstPage from './Pages/FirstPage'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import SecondPage from './Pages/SecondPage';
import Bendogrid from './components/Bendogrid';
import ThirdPage from './Pages/ThirdPage';
import FourtPage from './Pages/FourtPage';

const App = () => {


  return (
    <div className="w-full overflow-x-hidden">
      <Navbar/>
      <FirstPage/> 
      <SecondPage/>
      <ThirdPage/>
      <FourtPage/>

    </div>
  )
}

export default App
