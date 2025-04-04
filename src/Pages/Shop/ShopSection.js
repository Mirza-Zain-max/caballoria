import React from 'react'
import { Image } from 'react-bootstrap'
import top2 from "../Assets/Image/BlogImage.png";
const ShopSection = () => {
  return (
    <div className="blog-image-container">
            <Image src={top2} className="img-fluid blog-image" />
            <div className=" text-center blog-text">
                <div>
                    <h1 className="text-light fs_39  inter-medium">Shop</h1>
                    <h2 className="fs_09 text-light ">Home / Shop / Herbs</h2>
                </div>
            </div>
        </div>
  )
}

export default ShopSection
