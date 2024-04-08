import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import '../../styles/home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="jumbotron">
        <h1>A Warm Welcome!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <button className="btn btn-primary">Call to action!</button>
      </header>
      <div className="container my-5">
        <div className="row">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="col-lg-3 col-md-6 mb-3" key={index}>
              <Card />
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center mt-5">
        <p>Copyright © Your Website 2019</p>
      </footer>
    </>
  );
};

export default Home;