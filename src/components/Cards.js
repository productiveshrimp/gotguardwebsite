import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these security example security locations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Guards for parking spaces and lots"
              label="Parking"
              path="#"
            />
            <CardItem
              src="images/img-2.png"
              text="Retail Locations"
              label="Retail"
              path="#"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.png"
              text="Security for religious & educational sites"
              label="Sites"
              path="#"
            />
            <CardItem
              src="images/img-4.png"
              text="Special security for special events"
              label="Special"
              path="#"
            />
            <CardItem
              src="images/img-5.png"
              text="Secure Inventory"
              label="Warehouse"
              path="#"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
