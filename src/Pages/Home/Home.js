import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/di8rfmavc/image/upload/v1666854752/Home_banner_m3akbj.webp")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg w-sm">
            <h1 className="mb-5  text-3xl lg:text-5xl  font-bold">
              Education.com
            </h1>
            <p className="mb-5 text-justify ">
              Education.com was launched on the premise that everyone deserves
              access to a world-class education. In 2019, we built the first
              collection of free online school & college courses from the
              world’s top universities. The world of open education has exploded
              since then, so today our curated lists of online courses are hand
              selected by our staff to show you the very best offerings by
              subject area. We also make sure there is something for everyone:
              whether you want to explore a new topic or advance in your current
              field, we bring the amazing world of academia to you for free.
            </p>
            <button className="btn btn-primary">
              <Link to="/courses">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
