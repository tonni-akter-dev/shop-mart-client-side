import React from 'react';
import Img from '../ContactImg/contact-us-v4-1000x704.jpg.webp'
const ContactInfo = () => {
    return (
        <div className='row d-flex align-items-center'>
            <div className='col-lg-5'>
                <h3 className='my-5'>Contact Info</h3>
                <div className='row'>
                    <div style={{ display: 'flex', borderTop: "1px solid black", paddingTop: '15px' }}>

                        <div style={{ width: '60px', fontSize: '50px', paddingRight: '15px' }} >
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className=''>
                            <h4>Phone</h4>
                            <p>+8801765459224||+8801877533727</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', borderTop: "1px solid black", paddingTop: '15px' }}>

                        <div style={{ width: '60px', fontSize: '50px', paddingRight: '15px' }}>
                            <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <div className=''>
                            <h4>Email:</h4>
                            <p>Info@arrowhitech.com / Fax@arrowhitech.com</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', borderTop: "1px solid black", paddingTop: '15px' }}>

                        <div style={{ width: '60px', fontSize: '50px', paddingRight: '15px' }}>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className=''>
                            <h4>Address:</h4>
                            <p>Box 565, Charlestown, Nevis, West Indies, Caribbean</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-7'>
                <img className=' img-fluid' src={Img} alt="" />
            </div>
        </div>
    );
};

export default ContactInfo;