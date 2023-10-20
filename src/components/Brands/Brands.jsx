import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="py-8 md:py-16 lg:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Top Brands
        </h2>
        <div className="border-b-2 w-16 border-gray-800 mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-screen-2xl mx-auto mt-8 px-4 md:px-0">
        {brands.map((brand, index) => (
          <Link to={`/brands/${brand.id}`} key={index}>
            <div className="bg-white p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-110 hover:shadow-lg hover:bg-gray-100 hover:border border-transparent hover:border-gray-500">
              <img
                src={brand.image_url}
                alt={brand.name}
                className="w-32 h-32 mx-auto rounded-full transition-transform transform hover:scale-105 hover:shadow-lg"
              />
              <p className="mt-4 text-lg font-medium text-gray-800 transition-all hover:text-blue-600 hover:font-semibold">
                {brand.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
