import { React, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import BasketButton from "./BasketButton";

const Header = ({ onShowBasket }) => {
  const { items } = useContext(BasketContext);
  const [animationClass, setAnimationClass] = useState("");
  const calculateTotalAmount = () => {
    const sum = items.reduce((sum, item) => {
      return sum + item.amount;
    }, 0);
    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");
    const id = setTimeout(() => {
      setAnimationClass("");

      return () => {
        clearTimeout(id);
      };
    }, 300);
  }, [items]);

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
        onClick={onShowBasket}
        className={animationClass}
        count={calculateTotalAmount()}
      ></BasketButton>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* padding-left: 4rem;
  padding-right: 4rem;  */
  z-index: 1;
`;
const Logo = styled.p`
  font-weight: 600;
  line-height: 57px;
  color: #ffffff;
  font-size: 38px;
  margin: 0;
  margin-left: 5rem;
`;
