import React from "react";
import "./Nav.css";

function Home() {
  return (
    <div className="container-fluid" id="HomeContainer">
      <div id="content">
        <h1>Leading MEP & Facility management company in Dubai</h1>
        <h5>
          Urban Science is always ready to accept your challenges Meeting your
          goals is our main objective. Professional services for facility
          management & MEP works.
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "30px",
          }}
        >
          <a href="https://www.urbancompany.com/pune" style={{marginLeft:"-90px"}}>
            <button
              className="btn btn-primary p-2 "
              style={{ backgroundColor: "#596AFF" }}
            >
              Componey Profile
            </button>
          </a>
          <a href="https://youtu.be/ZNA9rmDsYVE"
            style={{
              color: "black",
              fontSize: "18px",
              marginTop: "4px",
              marginLeft: "40px",
              textDecoration:"none"
            }}
          >
            <i class="bi bi-play-circle-fill"></i> <span>Watch Video</span>
          </a>
        </div>
      </div>
      <div id="image">
        <img
          src="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png"
          alt="brand containt"
        />
      </div>
    </div>
  );
}

export default Home;
