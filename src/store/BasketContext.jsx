import { createContext, useEffect, useState } from "react";
import { fetchApi } from "../lib/fetchApi";

export const BasketContext = createContext({
  items: [],
});

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const updateBasketItem = async ({ id, amount }) => {
    try {
      const { data } = await fetchApi(`basketitem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBasketItem = async (id) => {
    try {
      const { data } = await fetchApi(`basketitem/${id}/delete`, {
        method: "DELETE",
      });
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const getBasket = async () => {
    try {
      const { data } = await fetchApi("basket");
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBasket();
  }, []);

  const addToBasket = async (newItem) => {
    try {
      const responce = await fetchApi(`foods/${newItem.id}/addToBasket`, {
        method: "POST",
        body: { amount: newItem.amount },
      });

      setItems(responce.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const state = {
    items,
    addToBasket,
    updateBasketItem,
    deleteBasketItem,
  };

  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};
