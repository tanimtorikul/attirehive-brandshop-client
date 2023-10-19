const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="px-4 md:px-0 ">
        <div className="card container mx-auto shadow-2xl">
          <form
            onSubmit={handleAddProduct}
            className="card-body container mx-auto"
          >
            <h2 className="text-4xl text-center font-semibold mb-10 md:mb-[50px]">
              Add a Product
            </h2>
            <p className="border border-[#E7E7E7] mb-[50px]"></p>
            <div className="flex gap-4 md:gap-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="text-xl font-semibold mb-2">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  className="input bg-[#F3F3F3] mb-2"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="text-xl font-semibold mb-2">Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Enter image URL"
                  className="input bg-[#F3F3F3] mb-2"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4 md:gap-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="text-xl font-semibold mb-2">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brand_name"
                  placeholder="Enter brand name"
                  className="input bg-[#F3F3F3] mb-2"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="text-xl font-semibold mb-2">Type</span>
                </label>
                <input
                  type="text"
                  name="type"
                  placeholder="Enter product type"
                  className="input bg-[#F3F3F3] mb-2"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4 md:gap-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="text-xl font-semibold mb-2">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter product price"
                  className="input bg-[#F3F3F3] mb-2"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="text-xl font-semibold mb-2">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Enter product rating"
                  className="input bg-[#F3F3F3] mb-2"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Description</span>
              </label>
              <textarea
                name="short_description"
                placeholder="Enter a short product description"
                className="input bg-[#F3F3F3] mb-2 h-32"
                required
              />
            </div>
            <div className="form-control w-1/2 mx-auto mt-6">
              <button className="btn bg-[#11C0B4] hover:bg-green-600 text-white">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
