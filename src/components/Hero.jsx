import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className=" max-w-2xl text-4xl font-bold tracking-tight text-center">
          We're changing the way people shop.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-justify">
          {" "}
          Join the thousands of satisfied customers who have made ComfyStore
          their go-to destination for all their furniture needs. Experience the
          convenience of shopping online for high-quality, stylish, and
          comfortable furniture, and transform your house into a home you'll
          love coming back to day after day. Visit us online today and discover
          the endless possibilities of comfortable living with ComfyStore. Your
          dream home awaits!
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
