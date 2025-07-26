import { useSelector, useDispatch } from "react-redux";
import { assets } from "../assets/frontend_assets/assets";
import { removeItemFromCart } from "../features/ProductSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, currency } = useSelector((store) => store.product);

  const handleRemove = (itemId, size) => {
    dispatch(removeItemFromCart({ itemId, size }));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingCharge = totalPrice * 0.05;
  const finalTotal = totalPrice + shippingCharge;

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 prata-regular">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div
              key={`${item._id}-${item.size}`}
              className="flex flex-col md:flex-row gap-4 border border-gray-200 rounded-xl p-4 shadow-sm"
            >
              <div className="w-full md:w-40 h-40 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg md:text-xl font-medium">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Size: <span className="font-semibold">{item.size}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Quantity:{" "}
                    <span className="font-semibold">{item.quantity}</span>
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <p className="text-base md:text-lg font-semibold">
                      Price: {currency} {item.price}
                    </p>
                    <p className="text-base md:text-lg font-semibold text-green-600">
                      Total: {currency} {item.price * item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => handleRemove(item._id, item.size)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                    title="Remove Item"
                  >
                    <img
                      src={assets.bin_icon}
                      alt="Delete"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-10 max-w-md ml-auto border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2 prata-regular">
            CART <span className="text-black prata-regular">TOTALS</span>
          </h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span>Subtotal</span>
              <span>
                {currency} {totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Shipping Fee</span>
              <span>
                {currency} {shippingCharge.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between font-semibold text-black text-base">
              <span>Total</span>
              <span>
                {currency} {finalTotal.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/placeOrder");
            }}
            className="mt-6 w-full bg-black text-white text-sm font-medium py-3 tracking-wide hover:bg-gray-500 hover:text-black"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
