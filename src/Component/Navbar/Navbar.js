import React from "react";
import "./Navbar.css";
import { search } from "../SVG/svg.js";
import {Logo} from '../Logo/Logo.js';

const Navbar = () => {
  return (
    <>
      <div className="navbar"> 
        <div className="sections" id="section1">
          <Logo/>
        </div>
        <div className="sections" id="section2">
          <div className="navbarMenus" id="navbarMenu2">
            S
          </div>
          <div className="navbarMenus" id="navbarMenu3">
            P
          </div>
          <div className="navbarMenus" id="navbarMenu4">
            A
          </div>
          <div className="navbarMenus" id="navbarMenu5">
            C
          </div>
          <div className="navbarMenus" id="navbarMenu6">
            E
          </div>
          <div className="navbarMenus" id="navbarMenu7">
            0
          </div>
          <div className="navbarMenus" id="navbarMenu8">
            1
          </div>
          
        </div>
        <div className="sections" id="section3"></div> 
        <div className="sections" id="section4">
          <input type="search" name="" id="" placeholder="Search.." />
          {search}
        </div>
        <div className="sections" id="section5"></div>
      </div>
      
    </>
  );
};

export { Navbar };