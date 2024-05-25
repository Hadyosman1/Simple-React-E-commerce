import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "../../layout/Loader";

export default function CardsContainer() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://node-server-32yn.onrender.com/api/products"
        );
        const data = await response.json();

        if (response.ok) {
          setProducts(data);
        }
      } catch (error) {
        console.log(error);
        alert("failed to fetch data");
      } finally {
        setLoaderIsVisible(false);
      }
    };

    if (products.length === 0) {
      fetchData();
    }
  }, [products]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://node-server-32yn.onrender.com/api/categories"
        );
        const data = await response.json();
        if (response.ok) {
          setCategories(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories]);

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

  let cats = categories.map(({ name }) => {
    return (
      <button
        onClick={() => filterByCategory(name)}
        key={name}
        type="button"
        className={`btn btn-primary rounded-2 ${
          filterName === name && "active-cat"
        } `}
      >
        {name}
      </button>
    );
  });

  return (
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
  );
}
