import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Title from "../title/Title";
import ProductItems from "../product-items/ProductItems";
const LatestCollections = () => {
  const products = useSelector((state) => state.product.products);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, []);
  const textForBestCollections =
    "A curated collection of our most stylish, timeless, and high-quality pieces — designed to elevate your everyday.";

  return (
    <div className="my-10">
      <Title
        text1={"BEST"}
        text2={"COLLECTIONS"}
        text3={textForBestCollections}
      />
      <ProductItems latestProduct={latestProduct} />
    </div>
  );
};

export default LatestCollections;
