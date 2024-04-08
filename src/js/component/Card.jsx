import React from 'react';
import '../../styles/card.css';

const Card = () => {
  return (
    <div className="card text-center">
      <div className="card-placeholder">
        <p className="card-placeholder-text">500 x 325</p>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  );
};

export default Card;