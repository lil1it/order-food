import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Basket-icon.svg";

const BasketButton = ({count,onShowBasket, ...restProps}) => {
  return (
    <ButtonStyle onClick={onShowBasket}{...restProps}>
      {" "}
      <BasketIcon />
       <Text>Your Cart</Text>
      <Amount id="counter">{count || 0}</Amount>
    </ButtonStyle>
  );
};

export default BasketButton;

const ButtonStyle = styled.button`
  background: #5a1f08;
  border-radius: 30px;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 4rem;
  `
 
   
 
const Text = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const Amount = styled.span`
  margin: 0;
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  
`;
