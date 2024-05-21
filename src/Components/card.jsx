import React from "react";
import { useState } from "react";
import Button from "./button";


export function Card({ food, addItem, removeItem }) {
  const [count, setCount] = useState(0);
  const { title, Image, price, id } = food;
  const handleIncreament = () => {
    setCount((prev) => prev + 1);
    addItem(food)
  };
  const handleDecreament = () => {
    setCount((prev) => prev - 1);
    removeItem(food)
  };

  return (
    <div className="border-2 border-[#f3e11acc] rounded-xl w-52 h-60 p-4 relative flex flex-col justify-between items-center ">
      <span
        className={
          count === 0
            ? " hidden "
            : "w-10 h-10 rounded-full bg-[#938812cc] text-white absolute top-0 right-0 z-50  text-xl flex justify-center items-center align-middle"
        }
      >
        {count}
      </span>

      <div className="  flex ">
        <img src={Image} alt="title"  className="w-20 h-20"/>
      </div>
      <h4>
        {title} <span>$ {price}</span>
      </h4>
      <div className="flex gap-4 items-center">
        <Button
          type="add"
          title="+"
          disable={false}
          onClick={handleIncreament}
        />
        {count >= 1 ? (
          <Button
            type={"remove"}
            title={"-"}
            disable={false}
            onClick={handleDecreament}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
