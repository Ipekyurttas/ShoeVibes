import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Resimleri import edelim
import a1 from "../images/a1.jpg";
import a2 from "../images/a2.jpg";
import a3 from "../images/a1.jpg";
import a4 from "../images/a6.jpg";
import a5 from "../images/a2.jpg";

const products = [
  { id: 1, img: a1, name: "Jordan 1 Retro High OG", price: 133 },
  { id: 2, img: a2, name: "Nike Jordan Hoodie", price: 96 },
  { id: 3, img: a3, name: "Jordan 1 Low OG", price: 133 },
  { id: 4, img: a4, name: "Jordan 12 Flu Game", price: 247 },
  { id: 5, img: a5, name: "Jordan x Nigel Tee", price: 70 },
  { id: 6, img: a4, name: "Adidas Taekwondo", price: 83 },
  { id: 7, img: a1, name: "Adidas Taekwondo", price: 83 },
  { id: 8, img: a5, name: "Adidas Taekwondo", price: 83 },
];

function Home1() {
  return (
    <div className="text-white py-5" style={{ backgroundColor: "rgb(241, 239, 239)" }}>
      <div className="container bg-white text-dark rounded p-4">
        <h2 className="mb-4">ShoeVibes</h2>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-6 text-dark">
            <h4>Recommended For You</h4>
          </div>
          <div className="col-6 text-end">
            <button className="btn fw-bold" style={{color:"black"}}>
              See All <i className="fi ms-1 mt-2 fi-rs-arrow-small-right fi-success"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 col-6 mb-3">
              <div className="card text-white border-0" style={{ backgroundColor: "#605140",fontSize:"20px"}}>
                <img src={product.img} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <p className="card-title">{product.name}</p>
                  <p className="" style={{color:"black"}}>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home1;
