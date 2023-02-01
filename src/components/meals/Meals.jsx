import React, { useEffect, useState } from "react";
import MealItems from "./MealItems";
import styled from "styled-components";
import { fetchApi } from "../../lib/fetchApi";

// let meals = [
//   {
//     id: new Date().toISOString(),
//     title: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: new Date().toISOString(),
//     title: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.0,
//   },
//   {
//     id: new Date().toISOString(),
//     title: "Schnitzel",
//     description: "A german specialty!",
//     price: 12.99,
//   },
//   {
//     id: new Date().toISOString(),
//     title: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 19.99,
//   },
// ];

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const getMeals = async () => {
    try {
      const response = await fetchApi("foods");
      setMeals(response.data);
      setLoading(false);
    } catch (error) {
      setError("Faild  to load meals");
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    // {isLoading && !error}
    <Card>
      {" "}
      {isLoading &&<p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {meals.map((meal,index) => {
        return (
          <MealItems
            key={index}
            id={meal._id}
            title={meal.title}
            description={meal.description}
            price={meal.price}
            
          />
        );
      })}
    </Card>
  );
};

export default Meals;

const Card = styled.ul`
  display: flex;
  flex-direction: column;
  width: 64rem;
  background: #ffffff;
  border-radius: 16px;
  margin: 80px auto;
  display: flex;
  padding: 40px 40px 36px 40px;
`;
