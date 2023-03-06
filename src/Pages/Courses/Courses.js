import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cards from "../Shared/Cards/Cards";

const Courses = () => {
  const allCards = useLoaderData();

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("https://onlinelearningplatform.vercel.app/topic-list")
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" relative">
            <div className="flex flex-col lg:fixed top-14 bottom-0">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  className="btn btn-wide btn-outline btn-success my-2"
                >
                  <Link to={`/course-detail/${topic.id}`}>{topic.name}</Link>
                </button>
              ))}
            </div>
          </div>

          <div class="flex flex-col lg:grid grid-cols-3 gap-3">
            {allCards.map((card) => (
              <Cards key={card.id} card={card}></Cards>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
