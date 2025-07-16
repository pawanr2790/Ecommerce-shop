import { useEffect, useState } from "react";
import Title from "../title/Title";
import { useSelector } from "react-redux";
import ProductItems from "../product-items/ProductItems";

const BestSeller = () => {
  const products = useSelector((state) => state.product.products);
  const [bestSeller, setBestSeller] = useState([]);
  const textForBestSeller =
    "Discover our top-trending products loved by thousands. These customer favorites are selling fast — grab yours before they're gone!";
  console.log(bestSeller);
  useEffect(() => {
    const best = products?.filter((product) => product.bestseller) || [];
    setBestSeller(best.slice(0, 5));
  }, [products]);

  return (
    <div>
      <Title text1={"BEST"} text2={"SELLER"} text3={textForBestSeller} />
      <ProductItems latestProduct={bestSeller} />
    </div>
  );
};

export default BestSeller;
