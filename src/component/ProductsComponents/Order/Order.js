import React, { useEffect, useState } from "react";
import "./Order.css";
import axios from "axios";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import NavBar from "../../Shared/NavBar/NavBar";
import { Spinner } from "react-bootstrap";
const Order = () => {
  let { id } = useParams();
  const { user } = useAuth();
  const [productDetail, setProductDetail] = useState({});
  const [isupdated, setIsUpdated] = useState(false);
  const location = useNavigate();
  const redirect_uri = location?.state?.from || "/";
  useEffect(() => {
    fetch(`https://mighty-reef-87460.herokuapp.com/homeProducts/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, [id]);

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    setIsUpdated(true);
    data.userId = user.uid;
    axios
      .post("https://mighty-reef-87460.herokuapp.com/addToCartProduct", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal(
            "Booking Successful",
            "Your Entered Information has been Successfully save on our Database",
            "success"
          );
          location(redirect_uri);
        } else {
          swal(
            "Booked failed",
            "Your Entered Information has been Successfully save on our Database",
            "error"
          );
        }
        setIsUpdated(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  setValue("name", user.displayName);
  setValue("email", user.email);
  setValue("title", productDetail.title);
  setValue("detailS", productDetail.detailS);
  setValue("img", productDetail.img);
  setValue("price", productDetail.price);
  setValue("status", "pending");
  setValue("statusColor", "yellow");
  setValue("date", new Date().toLocaleDateString);
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
            disabled
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
            {...register("detailS", { required: true })}
          />{" "}
          <input
            placeholder="Price"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.01)",
            }}
            type="text"
            {...register("price", { required: true })}
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
          <br />
          <button className="btn btn-light h-100" type="submit">
            {isupdated ? (
              <Spinner
                animation="border"
                variant="light"
                style={{ height: "25px", width: "25px" }}
              />
            ) : (
              "Order Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
