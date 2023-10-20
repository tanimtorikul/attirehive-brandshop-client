import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our All Products
        </h2>
        <div className="border-b-2 w-16 border-gray-800 mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="relative h-[350px] overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mt-3">{product.name}</h3>
            <p className="text-gray-500 font-medium mt-1">${product.price}</p>
            <p className="text-gray-600 mt-2">{product.desc}</p>
            <div className="flex items-center mt-2">
              <p className="text-gray-600 mr-2">Rating:</p>
              <span className="text-yellow-500">
                {product.rating} <i className="fas fa-star"></i>
              </span>
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
