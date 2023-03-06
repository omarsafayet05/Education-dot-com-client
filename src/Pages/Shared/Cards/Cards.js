import React from "react";
import { FaStar, FaIdBadge } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ card }) => {
  const { course_id, title, details, rating, image_url } = card;

  return (
    <div>
      <div className="card card-compact w-64 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="car!" className="h-52" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <FaStar className="text-yellow-500"></FaStar>
              <span> {rating?.number}</span>
            </div>

            <div className="flex text-muted gap-1">
              <FaIdBadge></FaIdBadge>
              <span> {rating?.badge}</span>
            </div>
          </div>

          <p className="text-justify">{details.slice(0, 138) + "..."}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary hover:animate-pulse">
              <Link to={`/course-detail/${course_id}`}>Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

//<Link to={`/courses-card/${id}`}>Read More</Link>
