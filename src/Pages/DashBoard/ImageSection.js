import React from 'react'
import Frame11 from "../Assets/Image/Frame 11.png"
import Frame12 from "../Assets/Image/Frame 12.png"
import Frame13 from "../Assets/Image/Frame 13.png"
import Frame14 from "../Assets/Image/Frame 14.png"
import Frame15 from "../Assets/Image/Frame 15.png"
import {  Container, Image } from 'react-bootstrap'
const ImageSection = () => {
    return (
        <main style={{backgroundColor:"#fff"}}>
            <Container fluid className='my-5'>
                        <div className="d-flex justify-content-center flex-wrap">
                            <Image src={Frame11} alt="Frame11" className="img-fluid " style={{ width: 290 }} />
                            <Image src={Frame12} alt="Frame12" className="img-fluid " style={{ width: 290 }} />
                            <Image src={Frame13} alt="Frame13" className="img-fluid " style={{ width: 290 }} />
                            <Image src={Frame14} alt="Frame14" className="img-fluid " style={{ width: 290 }} />
                            <Image src={Frame15} alt="Frame15" className="img-fluid " style={{ width: 290 }} />
                        </div>
            </Container>
        </main>
    )
}

export default ImageSection
