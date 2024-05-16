import React from "react";
import Card from "../components/Card";

const CardList = ({ robot }) => {
  return (
    <>
      {robot.map((robots, i) => {
        return (
          <Card
            key={i}
            id={robot[i].id}
            name={robot[i].name}
            email={robot[i].email}
          />
        );
      })}
    </>
  );
};

export default CardList;
