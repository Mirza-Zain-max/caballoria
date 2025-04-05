import React from 'react'
import ShopSection from './ShopSection'
import ShopCard from './ShopCard'
import MainLayout from '../../Components/mainLayout/mainLayout'

const ShopIndex = () => {
  return (
    <MainLayout isTransparent={true}>
      <ShopSection />
      <ShopCard />
    </MainLayout>
  )
}

export default ShopIndex
