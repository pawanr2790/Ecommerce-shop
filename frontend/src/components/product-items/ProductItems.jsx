import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductItems = ({ latestProduct }) => {
  const currency = useSelector((store) => store.product.currency);

  return (
    <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {latestProduct?.map((product) => (
        <Link
          className="text-gray-700 cursor-pointer"
          key={product._id}
          to={`/product/${product._id}`}
        >
          <div>
            {/* Only wrap the image in overflow-hidden */}
            <div className="overflow-hidden">
              <img
                src={product.image[0]}
                alt={product.name}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="pt-3 pb-1 text-sm">{product.name}</p>
            <p className="text-sm font-medium">
              {currency}
              {product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductItems;
