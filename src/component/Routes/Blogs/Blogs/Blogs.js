import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import NavBar from '../../../Shared/NavBar/NavBar';
import BlogsSlider from '../BlogsSlider/BlogsSlider';
import FeaturedBlogs from '../FeaturedBlogs/FeaturedBlogs';
import MainBlogs from '../MainBlogs/MainBlogs';

const Blogs = () => {
    return (
        <div>
            <NavBar></NavBar>
            <BlogsSlider></BlogsSlider>
            <FeaturedBlogs></FeaturedBlogs>
            <MainBlogs></MainBlogs>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;