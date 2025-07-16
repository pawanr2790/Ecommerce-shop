import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { assets } from "../assets/frontend_assets/assets";
import ProductItems from "../components/product-items/ProductItems";

const Collections = () => {
  const products = useSelector((state) => state.product.products);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const { showSearch, search } = useSelector((store) => store.product);

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      const newCategory = category.filter((item) => item !== value);
      console.log("Removing:", value);
      console.log("New category list:", newCategory);
      setCategory(newCategory);
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      const newCategory = subCategory.filter((item) => item !== value);
      console.log("Removing:", value);
      console.log("New category list:", newCategory);
      setSubCategory(newCategory);
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  const applyFilter = () => {
    let copyProducts = products.slice();
    if (search && showSearch) {
      copyProducts = copyProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      copyProducts = copyProducts.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      copyProducts = copyProducts.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(copyProducts);
  };

  const priceSort = (e) => {
    let priceCopy = products.slice();
    const { value } = e.target;
    if (value == "low-high") {
      priceCopy.sort((a, b) => a.price - b.price);
    }
    if (value == "high-low") {
      priceCopy.sort((a, b) => b.price - a.price);
    }
    setFilterProducts(priceCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
      {/* FILTERS */}
      <div className="min-w-60 ">
        <p
          className="my-2 text-xl cursor-pointer flex items-center "
          onClick={() => {
            setShowFilter((prev) => !prev);
          }}
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt="drop-down"
            className={`h-3 ml-2 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        {/* CATEOGORY FILTER */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium uppercase">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              <p>Men</p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              <p>Women</p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              <p>Kids</p>
            </div>
          </div>
        </div>

        {/* clothes */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottamwear"}
                onChange={toggleSubCategory}
              />
              <p>Bottamwear</p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              <p>Topwear</p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              <p>Winterwear</p>
            </div>
          </div>
        </div>
      </div>
      {/* ALL PRODUCTS LISTING */}
      <div className="flex-1">
        <div className="flex justify-between text-sm mb-4 sm:text-xl">
          <p className="text-2xl text-gray-600 text-semibold">
            ALL
            <span className="text-2xl text-gray-800 text-semibold px-2">
              COLLECTIONS
            </span>
          </p>

          <select
            name=""
            id=""
            className="border-2 border-gray-300 text-sm px-2"
            onChange={priceSort}
          >
            <option value="relavent">Relavent</option>
            <option value="low-high">Low</option>
            <option value="high-low">High</option>
          </select>
        </div>
        <ProductItems latestProduct={filterProducts} />
      </div>
    </div>
  );
};

export default Collections;
