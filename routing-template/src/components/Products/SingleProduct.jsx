import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // to go one page back
    // navigate(<Home />) to go to particular page
  };
  //   console.log(params);
  return (
    <div>
      <h2>SingleProduct - {id}</h2>
      <button onClick={handleBack}>back</button>
    </div>
  );
};

export default SingleProduct;
