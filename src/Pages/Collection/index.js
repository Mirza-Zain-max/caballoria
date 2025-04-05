import React from 'react'
import CollectionCard from './CollectionCard'
import MainLayout from '../../Components/mainLayout/mainLayout'
import Section2 from './Section2'
import CollectionHouse from './CollectionHores'

const ColectionIndex = () => {
    return (
        <MainLayout isTransparent={true}>
            <>
                <CollectionCard />
                <Section2 />
                <CollectionHouse />
            </>
        </MainLayout>
    )
}

export default ColectionIndex
