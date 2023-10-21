import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://attire-hive-server.vercel.app/cart")
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://attire-hive-server.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setCartItems((cartItems) =>
                cartItems.filter((item) => item._id !== _id)
              );
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const calculateTotal = (items) => {
    const total = items.reduce(
      (accumulator, item) => accumulator + parseFloat(item.price),
      0
    );
    return total.toFixed(2);
  };

  return (
    <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item._id}
              className="flex justify-between items-center border-b-2 py-2"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-10 w-10 mr-4"
                />
                <div>
                  <span className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </span>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
      {cartItems.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Checkout
          </button>
          <span className="text-2xl font-semibold text-gray-800">
            Total: ${calculateTotal(cartItems)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
