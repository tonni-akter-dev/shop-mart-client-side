import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import Categories from '../Categories/Categories';
import RecentPost from '../RecentPost/RecentPost';
import SocialMenu from '../SocialMenu/SocialMenu';
import Subscribe from '../Subscribe/Subscribe';
import Tags from '../Tags/Tags';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside>
            <div className="search-box">
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>   
            </div>
            <div className="sidebar-banner mt-5">
                <img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/08/azamat-zhanisov.jpg" alt="Sidebar Banner"/>
                <div className="p-3">
                    <h4>MARIGOLD ROSE</h4>
                    <small>Photographer & Blogger</small>
                    <p>It is a long established fact that a reader will be distracted</p>
                    <div className="sidebar-banner-sign">
                        <img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/09/logo-sidebar.png"/>
                    </div>
                </div>
            </div>
            <div className="follow-us mt-5">
                <div className="sidebar-box-title">
                    <hr/>
                    <h5>FOLLOW US</h5>
                    <hr/>
                </div>
               <SocialMenu></SocialMenu>
            </div>
            <div className="recent-post mt-5">
            <div className="sidebar-box-title">
                    <hr/>
                    <h5>RECENT POST</h5>
                    <hr/>
                </div>
                <RecentPost></RecentPost>
            </div>
            <div className="sidebar-subscribe mt-5">
                <Subscribe></Subscribe>
            </div>
            <div className='sidebar-category mt-5'>
                <div className="sidebar-box-title">
                    <hr/>
                    <h5>CATEGORIES</h5>
                    <hr/>
                    
                </div>
                <Categories></Categories>
            </div>
            <div className='sidebar-tags mt-5'>
                <div className="sidebar-box-title">
                    <hr/>
                    <h5>TAGS</h5>
                    <hr/>
                    
                </div>
                <Tags></Tags>
            </div>
        </aside>
    );
};

export default Sidebar;