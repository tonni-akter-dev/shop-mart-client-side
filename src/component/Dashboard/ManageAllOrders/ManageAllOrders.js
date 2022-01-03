import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TableRow, TableCell, TableBody } from '@mui/material';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ManageALlOrder from './ManageAllOrder';

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


// fetch all order =========================


const ManageAllOrders = () => {
   const [products, setProducts] = useState([]);
   const [open, setOpen] = React.useState(false);
   useEffect(() => {
      fetch('http://localhost:4000/allOrder')
         .then(res => res.json())
         .then(data => setProducts(data))
   }, [])


   // delete order Products ==================================


   const handleDelete = (id) => {
      window.confirm("Are you sure you wish to delete this item?") &&
         axios.delete(`http://localhost:4000/manageAllOrderDelete/${id}`)

            .then(res => res.data.deletedCount &&
               fetch('http://localhost:4000/allOrder')
                  .then(res => res.json())
                  .then(data => setProducts(data))
            )
      setOpen(true);
   }

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }

      setOpen(false);
   };



   // handle set status ==========================

   const handleSetStatus = (status, statusId) => {

      const newData = { status }
      newData.statusColor = 'rgb(34, 253, 0)'
      fetch(`http://localhost:4000/statusUpdate/${statusId}`, {
         method: "PUT",
         headers: {

            'content-type': 'application/json'
         },
         body: JSON.stringify(newData)
      })
         .then(res => res.json())
         .then(data => {

            if (data.modifiedCount) {

               fetch('http://localhost:4000/allOrder')
                  .then(res => res.json())
                  .then(data => setProducts(data))
            }
         })


   };

   return (
      <div>
         <h1>Manage all Order {products?.length}</h1>

         <TableContainer component={Paper}>
            <Table aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell>Name</TableCell>
                     <TableCell align="center">Email</TableCell>
                     <TableCell align="center">Date</TableCell>
                     <TableCell align="center">Product</TableCell>
                     <TableCell align="center">Price</TableCell>
                     <TableCell align="center">Action</TableCell>
                     <TableCell align="center">Delete</TableCell>

                  </TableRow>
               </TableHead>
               <TableBody>

                  {products.map((product) =>

                     <ManageALlOrder
                        key={product._id}
                        product={product}
                        handleSetStatus={handleSetStatus}
                        handleDelete={handleDelete}

                     ></ManageALlOrder>

                  )}

               </TableBody>
            </Table>
         </TableContainer>

         <Stack spacing={2} sx={{ width: '100%' }}>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
               <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Delete success!
               </Alert>
            </Snackbar>

         </Stack>
      </div>
   );
};

export default ManageAllOrders;