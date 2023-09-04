import React from "react";

function Hero() {
  return (
    <>
      <main className="Hero container">

        <div className="heroContent">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>


          <div className="heroBtn">
            <button>Shop Now</button>
            <button>Category</button>
          </div>

          <div className="shopIcon">
            <p>Also Available On</p>
            <div className="brandIcon">
              <img src="/images/flipkart.png" alt="FlipKart" />
              <img src="/images/amazon.png" alt="Amazon" />
            </div>
          </div>

        </div>


        <div className="heroImage">
          <img src="/images/shoe_image.png" alt="Shoe" />
        </div>
      </main>
    </>
  );
}

export default Hero;
