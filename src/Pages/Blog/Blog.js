import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import top from "../Assets/Image/BlogImage.png";

const Blog = () => {
    return (
        <div className="blog-image-container d-block mb-5">
            <Image src={top} className="img-fluid blog-image" style={{ width: "1700px", Height: "500px" }} />
            <Row className="m-0 position-absolute top-50 start-50 translate-middle text-center">
                <Col className="">
                    <span className="text-light fs_39  inter-medium">Blog</span>
                    <br />
                </Col>
                <span className="fs_09 text-light ">Jasy &gt; Blog</span>
            </Row>
        </div>
    );
};

export default Blog;

