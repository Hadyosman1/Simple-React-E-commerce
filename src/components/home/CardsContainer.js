import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "../Loader";

export default function CardsContainer() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        if (response.ok) {
          setProducts(data);
          setLoaderIsVisible(false);
        }
      } catch (error) {
        console.log(error);
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
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        console.log(response.ok);
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

  let cats = categories.map((cat) => {
    return (
      <button
        onClick={() => filterByCategory(cat)}
        key={cat}
        type="button"
        className={`btn btn-primary rounded-2 ${
          filterName === cat && "active-cat"
        } `}
      >
        {cat}
      </button>
    );
  });

  return (
    <div className="container">
      {loaderIsVisible && (
        <div className="loader-container row justify-content-center my-5">
          <Loader />
        </div>
      )}
      <div className="row">
        <h2 className="my-heading">Our Products</h2>
      </div>
      <div
        className="btn-group mt-5 d-flex gap-2 flex-wrap "
        role="group"
        aria-label="Basic example"
      >
        <button
          onClick={() => filterByCategory("all")}
          type="button"
          className={`btn btn-primary rounded-2 ${!filterName && "active-cat"}`}
        >
          All
        </button>
        {cats}
      </div>
      <div className="row mt-4">{productsList}</div>
    </div>
  );
}
