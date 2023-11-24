import React from "react";
import SummerOne from "../assets/SummerOne.jpg";
import SummerTwo from "../assets/SummerTwo.jpg";
import SummerThree from "../assets/SummerThree.jpg";
import SummerFour from "../assets/SummerFour.jpg";

export const Summer = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "5px", textAlign: "center" }}>
          <img
            src={SummerFour}
            alt="Summer Image 1"
            style={{
              width: "75%",
              height: "50%",
              borderRadius: "100%",
              marginBottom: "5px",
              border: "7px solid #f3b058",
            }}
          />
        </div>
        <div style={{ margin: "5px", textAlign: "center" }}>
          <img
            src={SummerOne}
            alt="SummerOne.jpg"
            style={{
              width: "100%",
              height: "50%",
              borderRadius: "100%",
              marginBottom: "5px",
              border: "7px solid #f3b058",
            }}
          />
        </div>
        <div style={{ margin: "5px", textAlign: "center" }}>
          <img
            src={SummerThree}
            alt="Summer Image 3"
            style={{
              width: "75%",
              height: "50%",
              borderRadius: "100%",
              marginBottom: "5px",
              border: "5px solid #f3b058",
            }}
          />
        </div>
        <div style={{ margin: "5px", textAlign: "left" }}>
          <h2 style={{ fontSize: "40px", fontWeight: "bold", color: "yellow" }}>
            ☀️ IT'S SUMMER TIME! ☀️
          </h2>
        </div>
      </div>
    </div>
  );
};
