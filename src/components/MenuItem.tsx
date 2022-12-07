import React from "react";
type propMenu = { key: number; image: string; name: string; price: number };

function MenuItem(prop: propMenu) {
  const { image, name, price } = prop;
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default MenuItem;
