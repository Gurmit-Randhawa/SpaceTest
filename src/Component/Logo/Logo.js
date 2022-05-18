import React from "react";
import {home,people} from "../SVG/svg.js";
import './Logo.css';

const Logo = () => {
  return (
    <>
      <div className="logo">
          <div className="inner">
       <span>{home}</span>
       <span>{people}</span>
       </div>
        </div>
    </>
  );
};

export { Logo };