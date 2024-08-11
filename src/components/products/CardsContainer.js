import { memo, useContext, useEffect, useState } from "react";
import Card from "../products/Card";
import Loader from "../../layout/Loader";
import { productsContext } from "../../state-mangment/ProductsContext";
import { loaderContext } from "../../state-mangment/LoaderContext";
import { toastContext } from "../../state-mangment/ToastContext";

const CardsContainer = () => {
  const { products } = useContext(productsContext);
  const { loaderIsVisible } = useContext(loaderContext);
  const { setToasts } = useContext(toastContext);
  const [categories, setCategories] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const [filterName, setFilterName] = useState("");

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
  }, [categories.length, setToasts]);

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

  let productsList = filterOrAll.toReversed().map((el, i) => {
    return (
      <Card
        key={el._id}
        {...el}
        animationType={i % 2 === 0 ? "fade-top" : "fade-bottom"}
      />
    );
  });

  let cats = categories.map(({ name }) => {
    return (
      <button
        key={name}
        onClick={() => filterByCategory(name)}
        type="button"
        className={` flex-shrink-0 flex-grow-1 text-capitalize   btn btn-primary rounded-2 ${
          filterName === name && "active-cat"
        } `}
        style={{
          maxWidth: "220px",
          minWidth: "130px",
        }}
      >
        {name}
      </button>
    );
  });

  return (
    <>
      <div className="container pt-3 pb-5 ">
        <div className="row">
          <h2 className="my-heading">Our Products</h2>
        </div>
        <div className=" mt-5 d-flex gap-2 flex-wrap  justify-content-center ">
          {cats.length !== 0 && (
            <button
              onClick={() => filterByCategory("all")}
              type="button"
              style={{ minWidth: "100px" }}
              className={`btn btn-primary rounded-2 ${
                !filterName && "active-cat"
              }`}
            >
              All
            </button>
          )}
          {cats}
        </div>
        <div className="row row-gap-4 mt-4">{productsList}</div>
        {loaderIsVisible && (
          <div className="loader-container row justify-content-center my-5">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default memo(CardsContainer);
