import { useEffect, useState } from "react";
import Card from "./home/Card";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

export default function SingleProductPage() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await fetch(
          `https://fakestoreapi.com/products/${params.productId}`
        );
        let data = await res.json();

        if (res.ok) {
          setProduct([data]);
          setLoaderIsVisible(false);
        }
      } catch (error) {
        console.warn(error);
      }
    };

    if (product.length === 0) {
      fetchProduct();
    }
  }, [product, params]);

  let productDetails = product.map(
    ({
      id,
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
          key={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          rate={rate}
          count={count}
          id={id}
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
          <span style={{ maxWidth: "700px" }} className="my-heading ">
            {product[0]?.title}
          </span>
        </div>
        <div className="row w-100 justify-content-center">
          {productDetails}
        </div>
      </div>
    </>
  );
}
