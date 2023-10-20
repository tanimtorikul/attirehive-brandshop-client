// ProductDetail.js

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetail(data);
      });
  }, [productId]);

  return (
    <div className="text-center">
      {productDetail ? (
        <div>
          <h1>{productDetail.name}</h1>
          <p>Price: ${productDetail.price}</p>
          <p>Rating: {productDetail.rating} stars</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
