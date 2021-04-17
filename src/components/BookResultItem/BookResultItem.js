import React from "react";
import "./BookResultItem.css";

export default function BookResultItem(props) {
  return (
    <div className="bookResultItem">
      <h2>{props.title}e</h2>
      <div className="bookResults_image">
        <img src={props.image} />
      </div>
      <p>Author: {props.author} </p>
      <p>Price: {props.price} </p>
      <p>Description: {props.description} </p>
    </div>
  );
}
