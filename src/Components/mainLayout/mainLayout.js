import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Heasder from '../../Pages/Layout/heasder'
// import NavHeader from '../navHeader/navHeader'

const MainLayout = ({ children, isTransparent = false }) => {
    return (
        <>
            {isTransparent ? <Heasder /> : <Header />}
            {/* <NavHeader isTransparent={isTransparent}/> */}
            {children}
            <Footer />
        </>
    )
}

export default MainLayout
