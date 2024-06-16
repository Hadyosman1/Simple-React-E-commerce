import { useContext, useEffect, useState } from "react";
import Card from "../products/Card";
import Loader from "../../layout/Loader";
import { productsContext } from "../../state-mangment/ProductsContext";
import { loaderContext } from "../../state-mangment/LoaderContext";
import { toastContext } from "../../state-mangment/ToastContext";

export default function CardsContainer() {
  const { products } = useContext(productsContext);
  const { loaderIsVisible } = useContext(loaderContext);
  const [categories, setCategories] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const [filterName, setFilterName] = useState("");
  const { setToasts } = useContext(toastContext);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/categories`
        );
        const data = await response.json();
        if (response.ok) {
          setCategories(data);
        } else {
          throw data.msg;
        }
      } catch (error) {
        setToasts((prev) => [
          ...prev,
          {
            title: "oops !",
            message: `Error categories ${error.msg || error.message} 🤷‍♀️`,
            type: "danger",
            id: Date.now(),
          },
        ]);
      }
    }

    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories, setToasts]);

  const filterByCategory = (cat) => {
    if (cat === "all") {
      setFilterArr([]);
      setFilterName("");
      return;
    }

    setFilterName(cat);

    setFilterArr(
      products.filter((pro) => {
        return pro.category === cat;
      })
    );
  };

  let filterOrAll = filterArr.length > 0 ? filterArr : products;

  let productsList = filterOrAll.map(
    (
      {
        _id,
        title,
        price,
        description,
        category,
        image,
        rating: { rate, count },
      },
      i
    ) => {
      return (
        <Card
          key={_id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          rate={rate}
          count={count}
          id={_id}
          animationType={i % 2 === 0 ? "fade-right" : "fade-left"}
        />
      );
    }
  );

  let cats = categories.map(({ name }) => {
    return (
      <button
        onClick={() => filterByCategory(name)}
        key={name}
        type="button"
        className={` text-capitalize btn btn-primary rounded-2 ${
          filterName === name && "active-cat"
        } `}
      >
        {name}
      </button>
    );
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="my-heading">Our Products</h2>
        </div>
        <div
          className="btn-group mt-5 d-flex gap-2 flex-wrap  justify-content-center "
          role="group"
          aria-label="Basic example"
        >
          {cats.length !== 0 && (
            <button
              onClick={() => filterByCategory("all")}
              type="button"
              style={{ minWidth: "150px" }}
              className={`btn btn-primary rounded-2 ${
                !filterName && "active-cat"
              }`}
            >
              All
            </button>
          )}
          {cats}
        </div>
        <div className="row mt-4">{productsList}</div>
        {loaderIsVisible && (
          <div className="loader-container row justify-content-center my-5">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}
