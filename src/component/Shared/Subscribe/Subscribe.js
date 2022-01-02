import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <div>
            <p className='text-center'>SUBSCRIBE TO MY NEWSLETTER</p>
             <Form className="d-block">
                    <FormControl
                    type="email"
                    placeholder="Type Your Email"
                    className="me-2"
                    aria-label="email"
                    />
                    <div className="d-grid gap-2 mt-2">
                        <Button variant="dark">
                            Subscribe
                        </Button>
                        </div>
                </Form>
        </div>
    );
};

export default Subscribe;