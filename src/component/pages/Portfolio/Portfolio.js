import React from 'react';
import './Portfolio.css'
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import PreviewIcon from '@mui/icons-material/Preview';
import NavBer from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer'
import { Link } from 'react-router-dom';
const Portfolio = () => {
    const portfolioData = [
        {
            title: 'Studio collection',
            subtitle: 'Lookbook',
            img: 'https://lusion.arrowtheme.com/wp-content/uploads/2020/08/man-sitting-on-monobloc-chair-3145775-545x545.jpg'
        },
        {
            title: 'Maxi dress collection',
            subtitle: 'Lookbook',
            img: 'https://lusion.arrowtheme.com/wp-content/uploads/2020/08/sahin-yesilyaprak-W1JLRmj57DQ-unsplash-545x545.jpg'
        },
        {

            title: 'Sports suit',
            subtitle: 'Lookbook',
            img: 'https://lusion.arrowtheme.com/wp-content/uploads/2020/08/woman-wearing-sunglasses-sits-on-sofa-inside-the-room-965918-545x545.jpg'
        },
        {
            title: 'Maxi dress collection',
            subtitle: 'Lookbook',
            img: 'https://lusion.arrowtheme.com/wp-content/uploads/2020/08/tracey-hocking-HxyWQ6YPM80-unsplash-545x545.jpg'
        },
        {
            title: 'Numero berlin kulisek',
            subtitle: 'Lookbook',
            img: 'https://lusion.arrowtheme.com/wp-content/uploads/2020/08/NUMERO-BERLIN_KULISEK_0348-545x545.jpg'
        },
        {
            title: 'Maxi dress collection',
            subtitle: 'Design',
            img: 'https://lusion.arrowtheme.com/wp-content/uploads/2020/06/cate-furniture-2-545x545.jpg'
        },
    ]
    return (

        <div>
            <NavBer />
            <div className="portfolio-container container">
                <h1>Portfolio</h1>
                <div className='portfolioLinkContainer'>
                    <Link className='portfolioLink' to="/">All</Link>
                    <Link className='portfolioLink' to="/">Lookbook</Link>
                    <Link className='portfolioLink' to="/">Design</Link>
                </div>
                <div className='row g-3'>
                    {
                        portfolioData.map((portfolio, index) =>
                            <div key={index} className="box col-lg-4 col-md-6 col-sm-12">
                                <img src={portfolio.img} alt='' />
                                <div className="portfolio-content">
                                    <div className="wrap">
                                        <h1 style={{ textAlign: 'center', fontSize: '16px' }}>{portfolio.subtitle}</h1>
                                        <h1>{portfolio.title}</h1>
                                        <p style={{ textAlign: 'center' }}>
                                            <IconButton style={{ color: 'white' }} aria-label="share">
                                                <PreviewIcon />
                                            </IconButton>
                                            <IconButton style={{ color: 'white' }} aria-label="share">
                                                <ShareIcon />
                                            </IconButton>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>

            </div>
            <Footer />
        </div>

    );
};

export default Portfolio;