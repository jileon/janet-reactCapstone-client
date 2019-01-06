import React from 'react';

export default function BurgerButtonX(props) {
  return (
    <div className="burger-container-x" onClick={props.onClick}>
      <div className="bar4" />
      <div className="bar5" />
      <div className="bar6" />
    </div>
  );
}
