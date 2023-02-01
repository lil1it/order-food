import { React, useContext, useState } from "react";
import Button from "../UI/Button";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { BasketContext } from "../../store/BasketContext";
import styled from "styled-components";

const MealItemForm = ({ title, id, price }) => {
  const { addToBasket } = useContext(BasketContext);

  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const basketItem = {
      id,
      price,
      title,
      amount,
    };
    addToBasket(basketItem);
  };
  return (
    <AddAmount onSubmit={submitHandler}>
      <div>
        <AmountLabel htmlFor={id}>Amount</AmountLabel>
        <AmountsInput
          value={amount}
          onChange={amountChangeHandler}
          type="number"
          min={"1"}
          max={"5"}
          id={id}
          defaultValue={1}
        />
      </div>

      <Button>
        <StyledIcon /> ADD
      </Button>
    </AddAmount>
  );
};

export default MealItemForm;

const AddAmount = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`;
const AmountLabel = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin-right: 20px;
`;
const AmountsInput = styled.input`
  width: 60px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #d6d6d6d6;
  outline: none;
  padding: 4px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin-bottom: 12px;
`;
