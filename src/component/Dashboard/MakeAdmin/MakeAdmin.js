import React, { useState } from "react";
import { Button } from "react-bootstrap";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://mighty-reef-87460.herokuapp.com/users/admin", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="mt-5 text-center">
        <h2 className="mt-5 pt-5">Make an admin</h2>
        <form onSubmit={handleAdminSubmit}>
          <input
            type="email"
            onBlur={handleOnBlur}
            placeholder="email"
            style={{ height: "50px" }}
          />
          <Button className="btn btn-dark ms-3 mb-2" type="submit">
            Make Admin
          </Button>
        </form>
      </div>
      {success && <p>Make Admin Successfullty</p>}
    </div>
  );
};

export default MakeAdmin;
