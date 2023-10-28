import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productLength, setProductLength] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://attire-hive-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const loadMoreProducts = () => {
    setLoading(true);

    setTimeout(() => {
      setProductLength(productLength + 5);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-400">
          Our Featured Products
        </h2>

        <div className="border-b-2 w-16 border-gray-400 mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 max-w-7xl mx-auto gap-4 mb-24">
        {products.slice(0, productLength).map((product) => (
          <div
            key={product._id}
            className="relative mx-auto flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <a
              className="relative mx-3 mt-3 flex justify-center h-60 overflow-hidden rounded-xl"
              href="#"
            >
              <img
                className="object-cover"
                src={product.image}
                alt={product.name}
              />
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {product.name}
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    ${product.price}
                  </span>
                </p>
                <div className="flex items-center">
                  <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    {product.rating}
                  </span>
                </div>
              </div>
              <Link
                to={`/productdetail/${product._id}`}
                href="#"
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="8" />
                </svg>
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[-60px]">
        <button
          onClick={loadMoreProducts}
          className="text-[#FFFFFF] text-lg py-4 px-8 font-semibold rounded-lg bg-[#02B290]"
          disabled={loading}
        >
          {loading ? (
            <div className="spinner-border text-light">
              <span className="visually-hidden flex items-center">
                Loading...{" "}
                <span className="loading loading-spinner loading-sm"></span>
              </span>
            </div>
          ) : (
            "Load More"
          )}
        </button>
      </div>
    </div>
  );
};

export default Products;
