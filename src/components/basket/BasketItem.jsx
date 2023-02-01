import React from "react";
import styled from "styled-components";

import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import Button from "../UI/Button";
const BasketItem = ({ title, price, amount , incrementAmount ,decrementAmount}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmountContainer>
          <Price>${price}</Price>
          <Amount>x{amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          <Button borderStyle="squared" variant="outlined" onClick={decrementAmount}>
            <StyledMinusIcon />
          </Button>
          <Button borderStyle="squared" variant="outlined" onClick={incrementAmount}>
            <StyledPlusIcon />
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  );
};

export default BasketItem;

const StyledMinusIcon = styled(MinusIcon)`
  color: #8a2b06;
`;
const StyledPlusIcon = styled(PlusIcon)`
  color: #8a2b06;
`;
const Container = styled.div`
  padding: 24px 0;
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
  box-shadow: 0px 6px 12px rgba(36, 36, 36, 0.08);
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0 0 12px 0;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
  margin: 0;
`;
const Amount = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  padding: 6px 14px;
  display: block;
`;

const PriceAndAmountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 153px;
  justify-content: space-between;
`;
const CounterContainer = styled.div`
  display: flex;
  gap: 14px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
