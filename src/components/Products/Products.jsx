import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our All Products
        </h2>
        <div className="border-b-2 w-16 border-gray-800 mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 max-w-7xl mx-auto gap-4 mb-24">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-500 font-medium">${product.price}</p>
              <p className="text-gray-600 mt-2 flex-grow"></p>
              <div className="flex items-center mt-4">
                <p className="text-gray-600 mr-2">Rating:</p>
                <span className="text-yellow-500">
                  {product.rating} <i className="fas fa-star"></i>
                </span>
              </div>
              <div className="mt-4 flex justify-center">
                <Link to={`/productdetail/${product._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
