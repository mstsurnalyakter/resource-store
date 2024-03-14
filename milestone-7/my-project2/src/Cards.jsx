// import React from 'react'
import PropTypes from 'prop-types'

import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";


const Cards = ({ handleAddToCart }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const loadFakeData = async () => {
      try {
        const res = await fetch("fakeData.json");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadFakeData();
  }, []);
  return (
    <div className="lg:col-span-3  grid grid-cols-1 lg:grid-cols-3 gap-5">
      {cards.map((card) => (
        <Card handleAddToCart={handleAddToCart} key={card.id} card={card} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleAddToCart:PropTypes.func.isRequired
};

export default Cards