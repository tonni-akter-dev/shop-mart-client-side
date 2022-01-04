import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Blog.css';
const Blog = () => {
    return (
        <Col>
            <Card>
                <div data-aos="flip-left" className="blog">
                    <div className="blog-img">
                        <Card.Img variant="top" src="https://lusion.arrowtheme.com/wp-content/uploads/2021/12/Rectangle-11-1300x650.png" />
                    </div>
                    <div className="blog-content">

                        <Card.Body>
                            <div className="blog-category">Category</div>
                            <Card.Title>Lorem Ipsum is simply dummy</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <a href="#"> Read More...</a>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default Blog;