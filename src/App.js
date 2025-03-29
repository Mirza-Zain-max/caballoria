import React from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Route from './Pages/Routes/Route'
// import { useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Route from './Pages/Routes/Route';
// import Footer from './Components/Footer/Footer';

const App = () => {
  // const location = useLocation()
  // const validPath=['/auth/']
  return (
    <>
    <Header/>
    {/* {!validPath.some(item=>location.pathname.startsWith(item)) && <Header/>} */}
      {/* <Route /> */}
      <Route/>
      {/* <Footer/> */}
    </>
  )
}

export default App