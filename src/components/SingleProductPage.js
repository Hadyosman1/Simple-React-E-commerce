import { useEffect, useContext, useState } from "react";
import Card from "./home/Card";
import { useParams } from "react-router-dom";
// import Loader from "../layout/Loader";
import useScrollToTop from "../hooks/useScrollToTop";
import { productsContext } from "../state-mangment/ProductsContext";

export default function SingleProductPage() {
  useScrollToTop();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  // const [loaderIsVisible, setLoaderIsVisible] = useState(true);
  const { products } = useContext(productsContext);

  useEffect(() => {
    let pro = products.find((pro) => pro._id === productId);
    console.log(pro);
    setProduct({...pro});
  }, [products, productId]);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       let res = await fetch(
  //         `https://node-server-32yn.onrender.com/api/products/${params.productId}`
  //       );
  //       let data = await res.json();

  //       if (res.ok) {
  //         setProduct([data]);
  //       }
  //     } catch (error) {
  //       alert(error);
  //     } finally {
  //       setLoaderIsVisible(false);
  //     }
  //   };
  //   if (product.length === 0) {
  //     fetchProduct();
  //   }
  // }, [product, params]);

  let productDetails = Object.keys(product).length !== 0 && (
    <Card
      media="single"
      key={product._id}
      title={product.title}
      price={product.price}
      description={product.description}
      category={product.category}
      image={product.image}
      rate={product.rating.rate}
      count={product.rating.count}
      id={product._id}
    />
  );

  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center ">
        {/* {loaderIsVisible && (
          <div className="loader-container row justify-content-center my-5">
            <Loader />
          </div>
        )} */}
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
