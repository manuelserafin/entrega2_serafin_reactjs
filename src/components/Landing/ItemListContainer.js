import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import DB from "../../dataBase.json";

const style = {
  greeting: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
    marginBottom: 30,
  },
  container: {
    marginTop: 50,
  },
};

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { categoryId } = useParams();
  const dataFiltered = categoryId
    ? products.filter((e) => e.category === categoryId)
    : products;

  useEffect(() => {
    const getProducts = async () => {
      try {
        setProducts(DB);
      } catch {
        setError(true);
        console.log(error);
      }
    };
    getProducts();
  }, [categoryId]);

  return (
    <>
      <div style={style.greeting}>{greeting}</div>
      <div style={style.container}>
        {dataFiltered.length ? (
          <ItemList products={dataFiltered} />
        ) : (
          <h1>Cargando..</h1>
        )}
      </div>
    </>
  );
};
