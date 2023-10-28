const DiscountBanner = () => {
  return (
    <div
      className="hero md:max-w-7xl mx-auto md:min-h-[600px] my-12 md:my-24 relative"
      style={{
        backgroundImage: "url(bgimage.jpg)",
        // paddingInline:"20px"
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold custom-color tracking-wider">
            FIRST TIME HERE?
          </h1>
          <p className="mb-5 text-xl font-semibold">
            We are pleased to offer you a{' '}
            <span className="custom-color">10% DISCOUNT</span>.
          </p>
          <div className="flex items-center justify-center mb-5">
            <input
              type="email"
              placeholder="Your Email"
              className="w-64 px-3 py-2 border rounded-l-md focus:outline-none"
            />
            <button className="btn custom-color rounded-r-md hover:bg-secondary transform transition-transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        <div
          className="absolute w-64 h-64 custom-color opacity-20 rounded-full -left-32 -top-16 animate-float"
        ></div>
        <div
          className="absolute w-64 h-64 custom-color opacity-20 rounded-full -right-32 -bottom-16 animate-float"
        ></div>
        <div
          className="absolute w-64 h-64 custom-color opacity-20 rounded-full -left-16 -bottom-32 animate-float"
        ></div>
      </div>
    </div>
  );
};

export default DiscountBanner;

