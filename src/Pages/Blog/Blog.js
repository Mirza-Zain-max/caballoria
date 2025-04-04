import React from "react";
import { Image } from "react-bootstrap";
import top from "../Assets/Image/BlogImage.png";

const Blog = () => {
    return (
        <div className="blog-image-container">
            <Image src={top} className="img-fluid blog-image" />
            <div className=" text-center blog-text">
                <div>
                    <h1 className="text-light fs_39  inter-medium">Blog</h1>
                    <h2 className="fs_09 text-light ">Jasy &gt; Blog</h2>
                </div>
            </div>
        </div>
    );
};

export default Blog;

