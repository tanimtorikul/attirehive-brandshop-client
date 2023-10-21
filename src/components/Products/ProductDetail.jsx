import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const loadedProduct = useLoaderData();
  console.log(loadedProduct);
  const { brand, image, name, description, price, rating, type } =
    loadedProduct;

  return (
    <section className="overflow-hidden bg-white py-11">
      <div className="max-w-4xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <div className="sticky top-0 z-50 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full lg:h-full "
                />
              </div>
              <div className="flex justify-center items-center ">
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    href="#"
                    className="block border border-blue-300 border-transparent hover:border-blue-300 hover:border-blue-300"
                  >
                    <img
                      src={image}
                      alt=""
                      className="object-cover w-1/2 lg:h-20 "
                    />
                  </a>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    href="#"
                    className="block border border-transparent border-transparent hover:border-blue-300 hover:border-blue-300"
                  >
                    <img
                      src={image}
                      alt=""
                      className="object-cover w-1/2 lg:h-20"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 ">
            <div className="lg:pl-20">
              <div className="mb-8 ">
                <span className="text-lg font-medium text-rose-500 ">
                  New
                </span>
                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold text-gray-400 md:text-4xl">
                  {type}
                </h2>
                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-extrabold text-black text-gray-400 md:text-4xl">
                  {name}
                </h2>
                <div className="flex items-center mb-6">
                  <ul className="flex mr-2">
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-400 ">{rating}</p>
                </div>
                <p className="max-w-md mb-8 text-gray-700">
                  {description}
                </p>
                <p className="inline-block mb-8 text-4xl font-bold text-gray-700 text-gray-400 ">
                  <span>${price}</span>
                  <span className="text-base font-normal  line-through text-gray-400">
                    $1500.99
                  </span>
                </p>
                <p className="text-green-600 ">
                  7 in stock
                </p>
              </div>
              <div className="flex items-center mb-8">
                <h2 className="w-16 mr-6 text-xl font-bold text-gray-400">
                  Colors:
                </h2>
                <div className="flex flex-wrap -mx-2 -mb-2">
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 border-gray-800 hover:border-gray-400 ">
                    <div className="w-6 h-6 bg-cyan-300"></div>
                  </button>
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 border-gray-800 hover:border-gray-400">
                    <div className="w-6 h-6 bg-green-300 "></div>
                  </button>
                  <button className="p-1 mb-2 border border-transparent hover:border-blue-400 border-gray-800 hover:border-gray-400">
                    <div className="w-6 h-6 bg-red-200 "></div>
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <h2 className="w-16 text-xl font-bold text-gray-400">
                  Size:
                </h2>
                <div className="flex flex-wrap -mx-2 -mb-2">
                  <button className="py-1 mb-2 mr-1 border w-11  border-gray-400 hover:text-blue-600 hover:border-gray-300 text-gray-400">
                    XL
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11  hover:text-blue-600 border-gray-400 hover:border-gray-300 text-gray-400">
                    S
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11  hover:text-blue-600 border-gray-400 hover:border-gray-300 text-gray-400">
                    M
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11  hover:text-blue-600 border-gray-400 hover:border-gray-300 text-gray-400">
                    XS
                  </button>
                </div>
              </div>
              <div className="w-32 mb-8 ">
                <label
                  className="w-full text-xl font-semibold text-gray-700"
                >
                  Quantity
                </label>
                <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                  <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:bg-gray-700  hover:text-gray-700 ">
                    <span className="m-auto text-2xl font-thin">-</span>
                  </button>
                  <input
                    type="number"
                    className="flex items-center w-full font-semibold text-center placeholder-gray-700  outline-none text-gray-400  bg-gray-900 focus:outline-none text-md hover:text-black"
                    placeholder="1"
                  />
                  <button className="w-20 h-full text-gray-600  rounded-r outline-none cursor-pointer hover:bg-gray-700 bg-gray-900 hover:text-gray-70">
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center -mx-4 ">
                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                  <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md text-gray-200 border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:text-gray-300">
                    Add to Cart
                  </button>
                </div>
                <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                  <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md text-gray-200 border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:text-gray-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
