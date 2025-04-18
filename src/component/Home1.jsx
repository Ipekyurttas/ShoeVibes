import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Home1.css";

function Home1() {
  const scrollRef = useRef(null);

  const categories = [
    "SANA ÖZEL",
    "EN YENİLER",
    "KAPÜŞONLU ÜSTLER",
    "JOGGER",
    "T-SHIRT",
    "CREW SWEATER",
    "BROOKLYN",
    "CHICAGO SADECE",
    "V-LOGUY",
    "CAPRI",
    "Kadın Spor Ayakkabı",
    "Çocuk Spor Ayakkabı",
    "Erkek Spor Ayakkabı",
    "Erkek Spor Ayakkabı",
    "Erkek Spor Ayakkabı",
    "Erkek Spor Ayakkabı",

  ];

  const scrollCategories = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 200; // Kaydırma miktarı

    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="div1">
      <div className="div2">
        <div className="div3-1">
          1.500 TL ve üzeri alışverişe
        </div>
        <br /><br />

        <h1 className="div3">500 TL İNDİRİM</h1>
        <p className="text">
          Seçili ürünlerde geçerlidir. Stoklarla sınırlıdır. Diğer kampanya ve kuponlarla birleştirilemez.
        </p>
        <button className="bg text-white py-2 px-6 rounded hover:bg-gray-800 transition">
          ALIŞVERİŞE BAŞLA
        </button>
      </div>

      {/* Kategori scroll */}
      <div className="category-scroll mt-4 position-relative">
        {/* Sol scroll butonu */}
        <button
          className="position-absolute start-0 top-50 translate-middle-y btn btn-light rounded-circle shadow z-1"
          style={{ width: "40px", height: "40px", color: "orange" }}
          onClick={() => scrollCategories('left')}
        >
          &lt;
        </button>
        <br />
        {/* Scroll alanı */}
        <div
          className="d-flex overflow-auto gap-3 py-3 px-2 scroll-area"
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

        {/* Sağ scroll butonu */}
        <button
          className="position-absolute end-0 top-50 translate-middle-y btn btn-light rounded-circle shadow z-1"
          style={{ width: "40px", height: "40px", color: "orange" }}
          onClick={() => scrollCategories('right')}
        >
          &gt;
        </button>
      </div>
      <br /><br />

      {/* Ana Kartların olduğu alan: */}


      <div className="card" ></div><br />
      <div className="card1"></div> <br />
      <div className="card2"></div><br />
      <div className="card3"></div><br />
      <div className="card4"></div><br />
      <div className="card5"></div><br />
      <div className="card6"></div>




    </div>
  );
}

export default Home1;