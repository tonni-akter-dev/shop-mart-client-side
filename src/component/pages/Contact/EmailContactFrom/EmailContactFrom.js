import React, { useRef } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import emailjs from 'emailjs-com';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EmailContactFrom = () => {

    const [open, setOpen] = React.useState(false);

    const form = useRef();


    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_zdrtp9b', 'template_n1ub0zc', form.current, 'user_sMNanZ38ggdHIXPN6PNqZ')
            .then((result) => {
                console.log(result.text);
                setOpen(true);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();

    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className='row d-flex align-items-center'>
            <div className='col-lg-5'>
                <section className="mb-4 ">
                    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>

                    <div className="row">

                        <div className="mb-md-0 mb-5">
                            <form ref={form} onSubmit={sendEmail} id="contact-form" name="contact-form" action="mail.php" method="POST">

                                {/* <!--Grid row--> */}
                                <div className="row">

                                    {/* <!--Grid column--> */}
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input required type="text" id="name" name="name" className="form-control" />
                                            <label for="name" className="">Your name</label>
                                        </div>
                                    </div>
                                    {/* <!--Grid column--> */}

                                    {/* <!--Grid column--> */}
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input required type="text" id="email" name="email" className="form-control" />
                                            <label for="email" className="">Your email</label>
                                        </div>
                                    </div>
                                    {/* <!--Grid column--> */}

                                </div>
                                {/* <!--Grid row--> */}

                                {/* <!--Grid row--> */}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input required type="text" id="subject" name="subject" className="form-control" />
                                            <label for="subject" className="">Subject</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}

                                {/* <!--Grid row--> */}
                                <div className="row">
                                    {/* <!--Grid column--> */}
                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <textarea required type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                            <label for="message">Your message</label>
                                        </div>

                                    </div>
                                </div>
                                {/* <!--Grid row--> */}
                                <div className="text-md-left">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </div>
                            </form>


                            <div className="status"></div>
                        </div>
                        {/* <!--Grid column--> */}
                    </div>

                </section>
                {/* <!--Section: Contact v.2--> */}

            </div>
            <div className='col-lg-7'>
                <iFrame src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3736489.7218514383!2d90.21589792292741!3d23.857125486636733!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1506502314230" width="100%" height="315" frameborder="0" style={{ border: '0' }} allowfullscreen></iFrame>
            </div>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    );
};

export default EmailContactFrom;