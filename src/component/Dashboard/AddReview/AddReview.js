import StarIcon from '@mui/icons-material/Star';
import { Button, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import MuiAlert from "@mui/material/Alert";
import Rating from '@mui/material/Rating';
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
// import useAuth from '../../../../Hooks/useAuth';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';


const labels = {
   0.5: 'Useless',
   1: 'Useless+',
   1.5: 'Poor',
   2: 'Poor+',
   2.5: 'Ok',
   3: 'Ok+',
   3.5: 'Good',
   4: 'Good+',
   4.5: 'Excellent',
   5: 'Excellent+',
};

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const AddReview = () => {
   const [reviewData, setReviewData] = useState({});
   const [open, setOpen] = React.useState(false);
   const [ratingValue, setRatingValue] = React.useState(2);
   const [hover, setHover] = React.useState(-1);
   const { isLoading, user } = useAuth();


   const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newProductData = { ...reviewData }
      newProductData[field] = value;
      setReviewData(newProductData)


   }

   const handleReviewPost = (e) => {
      reviewData.name = user.displayName;
      reviewData.email = user.email;
      reviewData.img = user.photoURL;
      reviewData.rating = ratingValue;

      fetch('http://localhost:4000/review', {
         method: "POST",
         headers: {

            'content-type': 'application/json'
         },
         body: JSON.stringify(reviewData)
      })
         .then(res => res.json())
         .then(data => {

            if (data.insertedId) {
               setOpen(true);
            }
         })

      e.preventDefault();
      e.target.reset();
   }


   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return;
      }

      setOpen(false);
   };
   return (
      <div className='container'>
         <Typography color="secondary" variant='h4'>
            Review
         </Typography>

         <Box className="row">
            <Grid className="col-lg-6" >
               {
                  isLoading ? <LinearProgress /> :
                     <form onSubmit={handleReviewPost}>

                        <TextField
                           color="secondary"
                           sx={{ width: 1 }}
                           required
                           id="standard-required"
                           label="Write uer Comment"
                           variant="standard"
                           name="comment"
                           onBlur={handleOnBlur}

                        /><br />
                        <Box
                           sx={{
                              width: 200,
                              display: 'flex',
                              alignItems: 'center',
                           }}
                        >
                           <Rating
                              name="hover-feedback"
                              value={ratingValue}
                              precision={0.5}
                              onChange={(event, newValue) => {
                                 setRatingValue(newValue);
                              }}
                              onChangeActive={(event, newHover) => {
                                 setHover(newHover);
                              }}
                              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                           />
                           {ratingValue !== null && (
                              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : ratingValue]}</Box>
                           )}
                        </Box> <br />

                        <Button color="secondary" sx={{ width: 1, mt: 5 }} type="submit" className="feature-button" variant="contained">Review</Button>
                     </form>
               }

               <Stack spacing={2} sx={{ width: "100%" }}>

                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                     <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                        Add a review success!
                     </Alert>
                  </Snackbar>
               </Stack>

            </Grid>
            <Grid className="col-lg-6">
               <img className=' img-fluid' src="https://i.ibb.co/vcgtgKr/2560px-Intro-img-svg.png" alt="" />
            </Grid>
         </Box>
      </div>
   );
};

export default AddReview;