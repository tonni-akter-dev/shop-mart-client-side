import React, { useEffect, useState } from "react";
import "./Order.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import NavBar from "../../Shared/NavBar/NavBar";
const Order = () => {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/homeProducts/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, [id]);
  const { user } = useAuth();
  const { register, handleSubmit, reset, setValue } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:4000/addToCartProduct", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.data.insertedId) {
          reset();
        } else {
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  setValue("name", user.displayName);
  setValue("email", user.email);
  setValue("title", productDetail.title);
  setValue("desc", productDetail.ProductDetails);
  setValue("img", productDetail.img);
  setValue("status", "pending");
  return (
    <div>
      <NavBar />
      <div className="pt-5 form-design">
        <h3 className="text-light pt-5">ORDER NOW</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="name"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            {...register("name", { required: true, maxLength: 30 })}
          />
          <br />
          {/* email */}
          <input
            placeholder="email"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            {...register("email", { required: true })}
          />
          <br />
          {/* title */}
          <input
            placeholder="title"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            type="text"
            {...register("title", { required: true })}
          />{" "}
          <br />
          {/* description */}
          <input
            placeholder="Description"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            type="text"
            {...register("desc", { required: true })}
          />{" "}
          <br />
          {/* address */}
          <input
            placeholder="Address"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            type="text"
            {...register("address", { required: true })}
          />{" "}
          <br />
          {/* phone number */}
          <input
            placeholder="Mobile Number"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            type="number"
            {...register("mobile", { required: true })}
          />{" "}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Order;
