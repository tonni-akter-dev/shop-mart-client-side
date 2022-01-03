import React from 'react';
import { Row } from 'react-bootstrap';
import SingleRecentPost from '../SingleRecentPost/SingleRecentPost';
import './RecentPost.css';
const RecentPost = () => {
    return (
        <div className="recent-blogs">
             <Row xs={1} md={1} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                   <SingleRecentPost></SingleRecentPost>
                ))}
            </Row>
        </div>
    );
};

export default RecentPost;