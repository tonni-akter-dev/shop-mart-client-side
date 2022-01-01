import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import NavBar from '../../../Shared/NavBar/NavBar';
import BlogsSlider from '../BlogsSlider/BlogsSlider';

const Blogs = () => {
    return (
        <div>
            <NavBar></NavBar>
            <BlogsSlider></BlogsSlider>
            <h2>This is our blogs page</h2>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;