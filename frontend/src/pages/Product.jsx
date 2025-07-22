import React, { useState } from "react";
import { PrefetchPageLinks, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/related-product/RelatedProducts ";
import { addToCart } from "../features/ProductSlice";
import { toast } from "react-toastify";
const Product = () => {
  const { Id } = useParams();
  const { products, currency, cartItems } = useSelector(
    (store) => store.product
  );
  const dispatch = useDispatch();
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(null);
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const productById = products.find((item) => item._id === Id);
    setProductData(productById);
    setImage(productById?.image[0]);
  };

  useEffect(() => {
    fetchProductData();
  }, [products, Id]);

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please select a size before adding to cart.");
      return;
    }

    dispatch(addToCart({ itemId: productData._id, size: size }));
    toast.success(`${productData.name} (Size ${size}) added to cart!`);
  };

  console.log(cartItems);
  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/* PRODUCT IMAGE SECTION */}
      <div className="flex  flex-col sm:flex-row gap-12 ">
        {/* product images  */}
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* IMAGE COLLECTION */}
          <div className="flex gap-3 sm:flex-col  overflow-x-auto sm:overflow-y-scroll justify-between w-full sm:w-[20%]">
            {productData?.image.map((img, i) => (
              <img
                src={img}
                key={i}
                onClick={() => {
                  setImage(img);
                }}
                alt="product image"
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:scale-90 transition ease-out"
              />
            ))}
          </div>
          {/* MAIN IMAGE */}
          <div className="w-full">
            <img className="h-auto w-full" src={image} alt="img" />
          </div>
        </div>
        {/* DETAILS */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2"> {productData?.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">122</p>
          </div>

          <p className=" mt-5 font-medium text-3xl">
            {currency} {productData?.price}
          </p>
          <p className=" mt-5 md:w-4/5 text-gray-500">
            {productData?.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select a size</p>
            <div className="flex gap-2">
              {productData?.sizes.map((item, i) => (
                <button
                  onClick={() => {
                    setSize(item);
                  }}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={i}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex gap-1 flex-col">
            <p className="text-sm">100% Original product.</p>
            <p className="text-sm">
              Cash on delivery is available on this product.
            </p>
            <p className="text-sm">
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>

      {/* Comment and review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(122)</p>
        </div>
        <div className="flex flex-col text-sm text-gray-500 gap-4 border px-6 py-6 ">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* Reatlated products */}
      <RelatedProducts
        category={productData?.category}
        subCategory={productData?.subCategory}
      />
    </div>
  );
};

export default Product;
