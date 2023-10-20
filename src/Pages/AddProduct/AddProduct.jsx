import toast from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    if (
      !name ||
      !image ||
      !brand ||
      !type ||
      !price ||
      !rating ||
      !description
    ) {
      toast.error("Please fill in all fields.", {
        style: {
          background: "#FF0000",
          color: "white",
          border: "none",
        },
      });
      return;
    }

    const newProduct = { name, image, brand, type, price, rating, description };

    console.log(newProduct);
    form.reset();

    // sending data to server
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product added successfully!", {
            style: {
              background: "#0074E4",
              color: "white",
              border: "none",
            },
          });
        }
      });
  };

  return (
    <>
      <div className="px-4 md:px-0 ">
        <div className="max-w-4xl mx-auto shadow-2xl">
          <form
            onSubmit={handleAddProduct}
            className="card-body container mx-auto"
          >
            <h2 className="text-4xl text-center font-semibold mb-10 md:mb-[12px]">
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
                  name="brand"
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
                  type="text"
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
                name="description"
                placeholder="Enter a short product description"
                className="input bg-[#F3F3F3] mb-2 h-32"
                required
              />
            </div>
            <div className="form-control md:w-1/6 mx-auto mt-6">
              <button className="btn bg-black text-white">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
