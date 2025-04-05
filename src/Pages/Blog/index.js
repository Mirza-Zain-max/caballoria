import React from 'react'
import Blog from './Blog'
import CardSection from './CardSection'
import Footer from '../../Components/Footer/Footer'
import MainLayout from '../../Components/mainLayout/mainLayout'

const BlogIndex = () => {
  return (
    <MainLayout isTransparent={true}>
      <>
        <Blog />
        <CardSection />
      </>
    </MainLayout>
  )
}

export default BlogIndex
