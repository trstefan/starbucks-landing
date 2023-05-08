import React from "react";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";

export const Content = () => {
  return (
    <main className="content">
      <section className="hero__1">
        <div>
          <h2>For all they do</h2>
          <p>
            Show your gratitude for the teachers and nurses in your life with a
            thoughtful Starbucks Card.
          </p>
          <button>Send an eGift</button>
        </div>
        <img src={image1} alt="" />
      </section>
      <section className="hero__2">
        <img src={image2} alt="" />
        <div>
          <h2>Spring in your step, Rewards in your cup</h2>
          <p>Shake up your usual and start earning Rewards —join today!*</p>
          <button>Join now</button>
        </div>
      </section>
      <section className="hero__3">
        <div>
          <h2>Nitro your way</h2>
          <p>
            Try the new Cinnamon Caramel Cream Nitro Cold Brew or go for the
            Vanilla Sweet Cream Nitro Cold Brew.
          </p>
          <button>Order Now</button>
        </div>
        <img src={image3} alt="" />
      </section>
      <section className="hero__4">
        <img src={image4} alt="" />
        <div>
          <h2>Carefree and cool</h2>
          <p>
            Our Pink Drink Starbucks Refreshers® beverage with real strawberry
            pieces and coconutmilk is a spring-inspired delight.
          </p>
          <button>Order Now</button>
        </div>
      </section>
      <section className="hero__5">
        <div>
          <h2>Protein perfection</h2>
          <p>
            Pick up a hearty Double-Smoked Bacon, Cheddar & Egg Sandwich for
            breakfast or lunch.
          </p>
          <button>Order Now</button>
        </div>
        <img src={image5} alt="" />
      </section>
      <section className="hero__6">
        <img src={image6} alt="" />
        <div>
          <h2>May is Military Appreciation Month</h2>
          <p>
            For each Military eGift sold in May, we’ll donate $5 to support our
            military community.**
          </p>
          <button>Send an eGift</button>
        </div>
      </section>
    </main>
  );
};
