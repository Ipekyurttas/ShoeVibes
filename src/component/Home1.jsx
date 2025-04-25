import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Home1.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import court from "../images/courtadonus.webp";
import futbol from "../images/futbol.png";


function Home1() {
  const scrollRef = useRef(null);

  const categories = [
    "SANA ÖZEL",
    "EN YENİLER",
    "JOGGER",
    "CREW SWEATER",
    "BROOKLYN",
    "CHICAGO SADECE",
    "V-LOGUY",
    "CAPRI",
    "Kadın Spor Ayakkabı",
    "Çocuk Spor Ayakkabı",
    "Erkek Spor Ayakkabı",
  ];

  const images = [
    '/image/slider.png',
    '/image/indirim.png',
    '/image/erkek.png',
    '/image/kosu.png',
    '/image/cocuk.png',
    '/image/tarz.png',
    '/image/adidas.png',
    '/image/nike.png',
    '/image/reebok.png',
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div>
      <div className="slider-container">
        <div className="photos">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="d-block mx-auto img-fluid"
            style={{ maxWidth: '100%', height: 'auto' }}
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="btn btn-light position-absolute top-50  translate-middle-y rounded-circle shadow d-flex align-items-center justify-content-center"
            style={{
              width: "50px",
              height: "50px",
              left: "50px"
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="btn btn-light position-absolute top-50 translate-middle-y rounded-circle shadow d-flex align-items-center justify-content-center"
            style={{
              width: "50px",
              height: "50px",
              right: "50px"
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="d-flex justify-content-center mt-2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`btn btn-sm rounded-circle ${index === current ? "btn-dark" : "btn-secondary"}`}
              style={{ width: "10px", height: "10px" }}
            ></button>
          ))}
        </div>
      </div>

      <div className="category-scroll mt-5 position-relative">
        <div
          className="d-flex overflow-auto gap-4 py-3 px-2 scroll-area"
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}

        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="category-circle"

            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="text-center fw-bold banner">
          <p className="banner-title">Courta Dönüş</p>
        </div>
        <div className="banner-image text-center ">
          <img src={court} alt="court" className="image mt-5" />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="text-center fw-bold banner">
          <p className="banner-title">Futbol</p>
        </div>
        <div className="banner-image text-center ">
          <img src={futbol} alt="court" className="image mt-5" />
        </div>
      </div>
    </div>
  );
}

export default Home1;