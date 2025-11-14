import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { shaps } from "./data";

const ShapPage = () => {
  const { id } = useParams();
  const data = shaps.find(s => s.id === parseInt(id));
  console.log("Shap ID:", id);  

  if (!data) return <p>الشقة غير موجودة</p>;

  return (
    <div>
      <Helmet>
        <title>{data.title}</title>
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.image} />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img src={data.image} alt={data.title} style={{ width: "400px" }} />
    </div>
  );
};

export default ShapPage;
