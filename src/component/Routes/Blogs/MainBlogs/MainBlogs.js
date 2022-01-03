import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import Blog from '../Blog/Blog';
import './MainBlogs.css';
const MainBlogs = () => {
    return (
        <Container>
        <div className="blogs-sidebar">
            <div className="blogs">
            <Row xs={1} md={1} className="g-4">
                {Array.from({ length: 10 }).map((_, idx) => (
                   <Blog></Blog>
                ))}
                </Row>
            </div>
            <div className="sidebar">
                <Sidebar></Sidebar>
            </div>
        </div>
        </Container>
    );
};

export default MainBlogs;