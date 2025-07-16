import React from "react";
import { useSelector } from "react-redux";
import ProductItems from "../product-items/ProductItems";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useSelector((state) => state.product);

  const relatedProducts = products
    .filter(
      (product) =>
        product.category === category && product.subCategory === subCategory
    )
    .slice(0, 5);

  return (
    <div className="my-24">
      <p className="text-xl font-semibold mb-4 text-gray-500">
        Related Products
      </p>
      {relatedProducts.length > 0 ? (
        <ProductItems latestProduct={relatedProducts} />
      ) : (
        <p>No related products found.</p>
      )}
    </div>
  );
};

export default RelatedProducts;
