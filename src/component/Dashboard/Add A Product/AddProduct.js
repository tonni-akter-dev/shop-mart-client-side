import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';
const AddProduct = () => {
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data => {
      fetch('https://mighty-reef-87460.herokuapp.com/addToProduct', {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(result => {
            if (result.acknowledged) {
               alert("The product is successfully added!!")
               reset()

            }
         })

   };
   return (
      <div>

         <h1 className="text-success text-center">Add a new Product</h1>
         <form className="mt-5 place-order-form" onSubmit={handleSubmit(onSubmit)}>

            <input required Placeholder="Product title" {...register("title")} />

            <input required Placeholder="Product price" type="number" {...register("price",)} />
            <input required Placeholder="Image url/link" type="text" {...register("img",)} />
            <input required Placeholder="Color" type="text" {...register("color",)} />
            <input required Placeholder="Reviews" type="number" {...register("review",)} />

            <textarea
               {...register("detailS", { required: true })}
               placeholder="Details" />

            <input type="submit" className="btn my-button" value="Add new product" />
         </form>
      </div>
   );
};

export default AddProduct;