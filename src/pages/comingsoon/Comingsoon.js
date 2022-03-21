import React, { useEffect } from "react";
import "./Comingsoon.scss";
import { Link } from "react-router-dom";

function Comingsoon() {
  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | Coming Soon`;
  });

  return (
    <div id="comingsoon">
      <div className="comingsoon">
        
        <h2>Coming Soon</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link
          className={`btn btn-app`}
          style={{ boxShadow: "0px 4px 15px -5px #77BA33" }}
          to="/dashboard"
        >
          Back To dashboard
        </Link>
      </div>
    </div>
  );
}

export default Comingsoon;
