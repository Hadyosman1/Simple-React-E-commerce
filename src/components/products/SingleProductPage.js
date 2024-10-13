import { useEffect, useContext, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

import { productsContext } from "../../state-mangment/ProductsContext";

export default function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const { products } = useContext(productsContext);

  useEffect(() => {
    let pro = products.find((pro) => pro._id === productId);
    setProduct({ ...pro });
  }, [products, productId]);

  let productDetails = Object.keys(product).length !== 0 && (
    <Card media="single" {...product} />
  );

  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center ">
        <div className="row text-center w-100">
          <span style={{ maxWidth: "700px" }} className="my-heading">
            {product?.title?.slice(0, 40)}...
          </span>
        </div>
        <div className="row w-100 justify-content-center">{productDetails}</div>
      </div>
    </>
  );
}
