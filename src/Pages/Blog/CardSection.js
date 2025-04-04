import React, { useState } from 'react';
import { Card, Col, Container, Image, InputGroup, Row, Badge, Form, Button } from 'react-bootstrap';
import BlogCard from "../Assets/Image/blogcard.png";
import BlogCard2 from "../Assets/Image/blodCard2.png";
import BlogDe from "../Assets/Image/blogDetile.png";
import BlogDet from "../Assets/Image/blogdetile2.png";
import BlogDete from "../Assets/Image/Blockquote.png";
import BlogCard3 from "../Assets/Image/blogCard3.png";
import BlogCard4 from "../Assets/Image/blogCard4.png";
import Avatar from "../Assets/Image/avatar.png";
import { FaRegComment, FaSearch, FaUser } from 'react-icons/fa';
import { LuClock9 } from 'react-icons/lu';

const BlogCardComponent = ({ image, author, date, comments, title, description, linkText }) => {
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => setShowDetails(!showDetails);

    return (
        <Card className="bg-light">
            <Image src={image} alt={`${title} Thumbnail`} className="img-fluid w-100" />
            <div className="mt-3 px-3 g-2 text-muted">
                <span><FaUser /> {author}</span>
                <span className='mx-3'><LuClock9 /> {date}</span>
                <span><FaRegComment /> {comments}</span>
            </div>
            <Card.Body>
                <Card.Title className='fs_15 inter-medium'>{title}</Card.Title>
                <Card.Text>
                    {showDetails
                        ? description + ' More detailed content can be added here if needed.'
                        : description.slice(0, 100) + '...'}
                </Card.Text>
                {showDetails && (
                    <Row className='g-4'>
                        <Col sm={12} md={6} lg={6}>
                            <Image
                                src={BlogDe} // You can use a different image here if you want
                                alt="Detailed View"
                                fluid
                                className=" rounded-0 shadow"
                            />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Image
                                src={BlogDet} // You can use a different image here if you want
                                alt="Detailed View"
                                fluid
                                className=" rounded-0 shadow"
                            />
                        </Col>
                        <Col xs={12}>
                            <Image
                                src={BlogCard} // You can use a different image here if you want
                                alt="Detailed View"
                                className="img-fluid  rounded-0 shadow"
                            />
                        </Col>
                        <Col xs={12} className='px-3'>
                            <span className=' fs_09' style={{ textAlign: "justify" }}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                                layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                                using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and
                                web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover
                                many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the like).
                            </span>
                        </Col>
                        <Col xs={12} className='px-3'>
                            <Image
                                src={BlogDete} // You can use a different image here if you want
                                alt="Detailed View"
                                className="img-fluid  rounded-0 "
                            />
                        </Col>
                        <Col xs={12} className='px-3'>
                            <span className=' fs_09' style={{ textAlign: "justify" }}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                                some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going
                                to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of
                                text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
                                the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of
                                model sentence structures, to generate Lorem Ipsum which looks reasonable.
                            </span>
                        </Col>
                        <Col xs={12} className='px-3'>
                            <span className=' fs_09' style={{ textAlign: "justify" }}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                                qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </span>
                        </Col>
                        <Col xs={12} className='px-3'>
                            <h2 className='fs_10 inter-medium'>
                                Tags
                            </h2>
                            <hr />
                            <div className="d-flex flex-wrap gap-2">
                                {['Business', 'Cattle Farm', 'Design', 'Farming', 'Stud Farm', 'Tips'].map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-decoration-none"
                                        aria-label={`View posts tagged with ${tag}`}
                                    >
                                        <Badge className="border bg-white text-muted p-3 rounded-5  fw-normal" >
                                            {tag}
                                        </Badge>
                                    </span>
                                ))}
                            </div>
                        </Col>
                        <Col xs={12} className='px-3'>
                            <h2 className='fs_12 inter-bold'>
                                Comments
                            </h2>
                            <hr />
                            <Image
                                src={Avatar} // You can use a different image here if you want
                                alt="Detailed View"
                                className="img-fluid  rounded-0 "
                            />
                            <hr />
                        </Col>
                        <Col xs={12} className='px-3'>
                            <h2 className='fs_12 inter-bold'>
                                Leave a Reply
                            </h2>
                            <hr />
                            <Form className='mb-3'>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className='fs_09'>Comment</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter your comment" className='rounded-3 mt-2' />
                                </Form.Group>
                                <Row className='g-3'>
                                    <Col xs={12} md={8} lg={6}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label className='fs_09 mt-2'>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name" className='rounded-3 ' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={8} lg={6}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label className='fs_09 mt-2 '>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email" className='rounded-3 ' />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="my-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Save my name, email, and website in this browser for the next time I comment." className='fs_09' />
                                </Form.Group>
                                <Button type="submit" className="btn btn-primary rounded-3" style={{ backgroundColor: "#4FB84F", border: "none" }}>
                                    Post Comment
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                )}
                <Card.Link
                    as="button"
                    className="nav-link border-0 bg-transparent p-0"
                    style={{ color: "#4fb84f" }}
                    onClick={toggleDetails}
                    aria-label={`Read more about ${title}`}
                >
                    {showDetails ? "Show Less" : linkText}
                </Card.Link>
            </Card.Body>
        </Card>
    );
};

// ✅ Recent Comments Component
const RecentComments = ({ comments }) => (
    <Card className='p-4 rounded-0 my-4 bg-light'>
        <div style={{ borderColor: "#4FB84F", borderLeftStyle: "solid" }} className='ps-2'>
            <h2 className="fs-4 fw-bold">Recent Comments</h2>
        </div>
        <hr className="mb-3" />
        {comments.map((comment, index) => (
            <Row key={index} className="mb-2 ">
                <Col xs="auto" className="pe-0" style={{ color: "#4fb84f" }}>■</Col>
                <Col>
                    <span className="fw-medium">{comment.author}</span> on{' '}
                    <span className="text-secondary text-decoration-none">
                        {comment.article}
                    </span>
                </Col>
            </Row>
        ))}
    </Card>
);

// ✅ Categories Component
const Categories = ({ categories }) => (
    <Card className='p-4 rounded-0 bg-light'>
        <div style={{ borderColor: "#4FB84F", borderLeftStyle: "solid" }} className='ps-2'>
            <h2 className="fs-4 fw-bold">Categories</h2>
        </div>
        <hr className="mb-3" />
        {categories.map((category, index) => (
            <Row key={index} className="mb-2">
                <Col xs="auto" className=" pe-0" style={{ color: "#4fb84f" }}>■</Col>
                <Col>
                    <span href="#" className="text-secondary text-decoration-none">
                        {category.article}
                    </span>
                </Col>
            </Row>
        ))}
    </Card>
);

// ✅ Main CardSection Component
const CardSection = () => {
    const blogCards = [
        {
            image: BlogCard,
            author: "Jasy",
            date: "12 Dec 2023",
            comments: "1 Comment",
            title: "The World’s 10 Most Stallions",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            linkText: "Read More",
        },
        {
            image: BlogCard2,
            author: "Nick Leaver",
            date: "15 Jan 2024",
            comments: "3 Comments",
            title: "10 Ways Horse Can Save Money",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            linkText: "Read More",
        },
        {
            image: BlogCard3,
            author: "Nick Leaver",
            date: "20 Feb 2024",
            comments: "5 Comments",
            title: "My Top 5 Favourite Equestrian",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            linkText: "Read More",
        },
        {
            image: BlogCard4,
            author: "Nick Leaver",
            date: "10 Mar 2024",
            comments: "2 Comments",
            title: "The Importance of Horse Training",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            linkText: "Read More",
        },
    ];

    const comments = [
        { author: 'Jasy', article: 'Apple and Straw' },
        { author: 'Nick Leaver', article: 'Kastel Sun Shirts Stand the Test of Time' },
        { author: 'Nick Leaver', article: 'Love Pasture Board for Horses' },
        { author: 'Nick Leaver', article: 'The Importance of Horse Training' },
        { author: 'Nick Leaver', article: 'My Top 5 Favourite Equestrian' }
    ];

    const categories = [
        { article: 'All Post' },
        { article: 'Horse Breeds' },
        { article: 'Buying a Horse' },
        { article: 'Herbs for Horses' },
        { article: 'Horse Feeding' },
        { article: 'Recipes' },
        { article: 'Horse Training' }
    ];

    const tags = [
        'Business',
        'Cattle Farm',
        'Design',
        'Farming',
        'Stud Farm',
        'Tips'
    ];

    return (
        <main className='my-5'>
            <Container>
                <Row className='g-4'>
                    {/* Blog Cards Section */}
                    <Col lg={8} xs={12}>
                        <Row className='g-4'>
                            {blogCards.map((card, index) => (
                                <Col sm={12} key={index}>
                                    <BlogCardComponent {...card} />
                                </Col>
                            ))}
                        </Row>

                        {/* ✅ Pagination Buttons */}
                        <div className="d-flex justify-content-center mt-4">
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item ">
                                        <button className="page-link rounded-2 text-white" style={{ backgroundColor: "#4FB84F", borderColor: "#4FB84F" }}>1</button>
                                    </li>
                                    <li className="page-item">
                                        <button className="page-link mx-2 rounded-2 text-dark" style={{}}>2</button>
                                    </li>
                                    <li className="page-item">
                                        <button className="page-link rounded-2 text-dark" style={{ backgroundColor: "#fff", borderColor: "#4FB84F" }}>&gt;&gt;</button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                    <Col lg={4} xs={12}>
                        {/* Search Input */}
                        <Card className='p-4 rounded-0 bg-light mb-4'>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Search here..."
                                    aria-label="Search"
                                    className='rounded-0'
                                />
                                <InputGroup.Text className='rounded-0 text-white' style={{ backgroundColor: "#4FB84F" }}>
                                    <FaSearch />
                                </InputGroup.Text>
                            </InputGroup>
                        </Card>

                        {/* Recent Comments */}
                        <RecentComments comments={comments} />

                        {/* Categories */}
                        <Categories categories={categories} />

                        {/* Tags */}
                        <Card className='p-4 rounded-0 bg-light mt-4'>
                            <div style={{ borderColor: "#4FB84F", borderLeftStyle: "solid" }} className='ps-2'>
                                <h2 className="fs-4 fw-bold">Tags</h2>
                            </div>
                            <hr className="mb-3" />
                            <div className="d-flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-decoration-none"
                                        aria-label={`View posts tagged with ${tag}`}
                                    >
                                        <Badge bg="light" text="dark" className="border p-2 rounded fw-normal" >
                                            {tag}
                                        </Badge>
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main >
    );
};

export default CardSection; 