import { React, useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = ({ onClose }) => {
  // const items = [
  //   {
  //     id: "1",
  //     title: "Sushi",
  //     price: 22.99,
  //     amount: 3,
  //   },
  //   {
  //     id: "2",
  //     title: "Schnitzel",
  //     price: 16.0,
  //     amount: 3,
  //   },
  //   {
  //     id: "3",
  //     title: "Barbecue Burger",
  //     price: 12.99,
  //     amount: 3,
  //   },
  //   {
  //     id: "4",
  //     title: "Green Bowl",
  //     price: 19.99,
  //     amount: 3,
  //   },
  // ];
  const { items, updateBasketItem, deleteBasketItem } = useContext(BasketContext);


  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };

  const decrementAmount = (id, amount) => {
    if (amount > 1) {
      updateBasketItem({ amount: amount - 1, id: id });
    } else {
      deleteBasketItem(id);
    }
  };
  const incrementAmount = (id, amount) => {
    updateBasketItem({ amount: amount + 1, id: id });
  };
  return (
    <Modal onClose={()=>{}}>
      <Content>
        <Container>
          {items.map((elem) => {
            return (
              <BasketItem
                decrementAmount={() => decrementAmount(elem._id, elem.amount)}
                incrementAmount={() => incrementAmount(elem._id, elem.amount)}
                title={elem.title}
                key={elem.id}
                price={elem.price}
                amount={elem.amount}
              />
            );
          })}
        </Container>
        <TotalAmount
          price={getTotalPrice()}
          onClose={onClose}
          onOrder={() => {}}
        />
      </Content>
    </Modal>
  );
};

export default Basket;

const Content = styled.div`
  width: 95%;
  height: 100%;
  padding: 1rem 1rem 1.5rem 1rem;
`;
const Container = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
