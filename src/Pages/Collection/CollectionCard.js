import React from 'react'
import { Image } from 'react-bootstrap'
import top from '../Assets/Image/BlogImage.png'

const CollectionCard = () => {
    return (
        <div className="blog-image-container">
            <Image src={top} className="img-fluid blog-image" />
            <div className=" text-center blog-text">
                <div>
                    <h1 className="text-light fs_39  inter-medium">Foal</h1>
                    <span className="fs_09 text-light ">With us you will find foals between 6 months and 1.5 years in different sizes and colors. <br />
                        We also offer you the opportunity to raise foals with us so that they can develop before they are castrated, for example. </span>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
