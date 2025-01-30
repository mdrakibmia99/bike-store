import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RiDeleteBin2Fill } from "react-icons/ri";
import cycle1 from "@/assets/images/bike-image-red.jpg"; // Assuming the image path

const CartPage = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Mountain Bike", price: 200, quantity: 1 },
    { id: 2, name: "Road Bike", price: 300, quantity: 1 },
    { id: 3, name: "Hybrid Bike", price: 150, quantity: 1 },
  ]);

  // Increase quantity
  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Delete item
  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="container mx-auto min-h-[70vh] grid grid-cols-1 lg:grid-cols-12 gap-12 py-6">
      {/* Left Side: Product List */}
      <div className="lg:col-span-9 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">MY CART</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex md:flex-row flex-col items-center justify-between gap-4 border-b border-gray-200 py-4"
            >
              <img
                src={cycle1}
                alt="Product"
                className="w-32 object-cover border rounded"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">Model: Kono MOdel Nai</p>
              </div>
              <div className="flex items-center border rounded-md">
                <button
                  className="px-3 py-1 border-r text-gray-600"
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  className="px-3 py-1 border-l text-gray-600"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>
              </div>
              <div>
                <span className="font-semibold text-lg">
                  $ {item.price.toFixed(2)}
                </span>
              </div>
              <div>
                <Button
                  onClick={() => handleDelete(item.id)}
                  variant="link"
                  className="text-primary-red flex items-center gap-2"
                >
                  <RiDeleteBin2Fill className="w-5 h-5 mr-1" /> Remove
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full grid place-items-center text-semibold text-center text-xl">
            <p className="text-gray-500">Your cart is empty.</p>
          </div>
        )}
      </div>

      {/* Right Side: Price Summary (Fixed Sidebar) */}
      <div className="lg:col-span-3 relative">
        <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax (10%):</span>
            <span>${(totalPrice * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total:</span>
            <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
          </div>
          <Button className="w-full text-white bg-primary-red">Checkout</Button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
