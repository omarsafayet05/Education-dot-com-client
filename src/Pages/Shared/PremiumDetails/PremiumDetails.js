import React from "react";
import { useLoaderData } from "react-router-dom";

const PremiumDetails = () => {
  const premiumDetailBtn = useLoaderData();
  const {
    title_a,
    intro_detail,
    title_b,
    instructor,
    course_no,
    departments,
    topics,
    level,
  } = premiumDetailBtn;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="w-64 flex flex-col justify-center  lg:w-96 ">
            <h1 className="text-4xl text-yellow-500 font-bold">{title_a}</h1>
            <p className="py-6 text-justify">{intro_detail}</p>
          </div>
          <div>
            <div className="card w-64 lg:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{title_b}</h2>
                <p>
                  <span className="text-base font-semibold">Instructor:</span>
                  {instructor}
                </p>
                <p>
                  <span className="text-base font-semibold">Course No:</span>
                  {course_no}
                </p>
                <p>
                  <span className="text-base font-semibold">Departments: </span>
                  {departments}
                </p>
                <p>
                  <span className="text-base font-semibold">Topics:</span>
                  {topics}
                </p>
                <p>
                  <span className="text-base font-semibold"> Level:</span>
                  {level}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumDetails;
