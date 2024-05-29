import { useEffect, useState } from "react";
import Card from "./home/Card";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader";
import useScrollToTop from "../hooks/useScrollToTop";

export default function SingleProductPage() {
  useScrollToTop();
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await fetch(
          `https://node-server-32yn.onrender.com/api/products/${params.productId}`
        );
        let data = await res.json();

        if (res.ok) {
          setProduct([data]);
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoaderIsVisible(false);
      }
    };

    if (product.length === 0) {
      fetchProduct();
    }
  }, [product, params]);

  let productDetails = product.map(
    ({
      _id,
      title,
      price,
      description,
      category,
      image,
      rating: { rate, count },
    }) => {
      return (
        <Card
          media="single"
          key={_id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          rate={rate}
          count={count}
          id={_id}
        />
      );
    }
  );

  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center ">
        {loaderIsVisible && (
          <div className="loader-container row justify-content-center my-5">
            <Loader />
          </div>
        )}
        <div className="row text-center w-100">
          <span style={{ maxWidth: "700px" }} className="my-heading">
            {product[0]?.title.slice(0, 40)}...
          </span>
        </div>
        <div className="row w-100 justify-content-center">{productDetails}</div>
      </div>
    </>
  );
}
