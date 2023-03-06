import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useRef } from "react";
import ReactToPdf from "react-to-pdf";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CourseDetailBtn = () => {
  const courseDetailBtn = useLoaderData();

  const { title, details, image_url, id } = courseDetailBtn;

  const ref = useRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [4, 2],
  };

  return (
    <div ref={ref}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image_url}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="topic_img"
          />
          <div>
            <h1 className="text-4xl text-yellow-500 font-bold py-3">{title}</h1>
            <ReactToPdf targetRef={ref} scale={0.5} filename={`${title}.pdf`}>
              {({ toPdf }) => (
                <button className="btn btn-secondary" onClick={toPdf}>
                  Download pdf
                </button>
              )}
            </ReactToPdf>

            <p className="py-6 text-justify">{details}</p>
            <div>
              <button className="btn btn-wide btn-outline btn-info hover:animate-pulse">
                <Link to={`/premium-detail/${id}`}>Get Premium Access</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailBtn;
// const privateRoute = (
//   <>
//     {user?.email ? (
//       <>
//         <Link to={`/premium-detail/${id}`}>Get Premium Access</Link>
//         <li>
//           <Link onClick={handleSignOut}></Link>
//         </li>
//       </>
//     ) : (
//       <>
//         <Link to="/login">Get Premium Access</Link>
//       </>
//     )}
//   </>
// );
