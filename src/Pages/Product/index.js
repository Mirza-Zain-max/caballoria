import React from 'react'
import MainLayout from '../../Components/mainLayout/mainLayout'
import CheckOut from './CheckOut'
import CardSection from './CardSection'
import ProductDetail from './CPage'

const ProdutIndex = () => {
  return (
   <MainLayout isTransparent={true}>
    <CheckOut/>
    <CardSection/>
    <ProductDetail/>
   </MainLayout>
  )
}

export default ProdutIndex
