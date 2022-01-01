import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FeaturedBlog from '../FeaturedBlog/FeaturedBlog';
import './FeaturedBlogs.css';
const FeaturedBlogs = () => {
    return (
        <Container>
            <h2 className="text-center mt-5">Featured Post</h2>
            <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <FeaturedBlog></FeaturedBlog>
            ))}
            </Row>
        </Container>
    );
};

export default FeaturedBlogs;