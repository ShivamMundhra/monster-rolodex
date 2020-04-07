import React from "react";
import { Card } from "../card/Card.component";

import "./CardList.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster, i) => (
        <Card key={i} monster={monster} />
      ))}
    </div>
  );
};
