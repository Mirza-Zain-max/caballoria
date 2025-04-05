import React from 'react'
import Dashboard from './Dashboard'
import ImageSection from './ImageSection'
import Aboutus from './Aboutus'
import Searchbar from './Searchbar'
import HorseListings from './HourseSection'
import Section6 from './Section6'
import Harbel from './Harbel'
import Services from './Services'
import FAQ from './FAQ'
import Testimonials from './Testimonials'
import Latest from './Latest'
import Seactiion10 from './Seactiion10'
import MainLayout from '../../Components/mainLayout/mainLayout'
const Index = () => {
    return (

        <MainLayout isTransparent={false}>
            <>
                <Dashboard />
                <ImageSection />
                <Aboutus />
                <Searchbar />
                <HorseListings />
                <Section6 />
                <Harbel />
                <Services />
                <FAQ />
                <Testimonials />
                <Latest />
                <Seactiion10 />
            </>
        </MainLayout>
    )
}

export default Index
