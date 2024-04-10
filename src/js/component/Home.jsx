import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import '../../styles/home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="central-content container my-5">
        <header className="jumbotron text-center">
          <h1>A Warm Welcome!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          <button className="btn btn-primary">Call to action!</button>
        </header>
        <div className="row justify-content-center">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="col-md-5 col-lg-3 mb-4" key={index}>
              <Card />
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center mt-5 footer">
        <p>Copyright © Your Website 2019</p>
      </footer>
    </>
  );
};

export default Home;
