import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleRecentPost.css';

const SingleRecentPost = () => {
    return (
        <Col>
        <Card>
            <div className="recent-blog">
                <div className="recent-blog-img">
                    <Card.Img variant="top" src="https://lusion.arrowtheme.com/wp-content/uploads/2021/12/Rectangle-11-1300x650.png" />
                </div>
                <div className="recent-blog-content">

                    <Card.Body>
                    
                    <Card.Title>Lorem Ipsum is simply dummy</Card.Title>
                    <p>DECEMBER 8, 2021</p>
                    
                    </Card.Body>
                </div>
            </div>
        </Card>
        </Col>
    );
};

export default SingleRecentPost;