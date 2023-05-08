import React from "react";
import { BsSpotify } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__list">
        <ul>
          <li>
            <h2>About us</h2>
          </li>
          <li>Our Company</li>
          <li>Our Coffee</li>
          <li>Stories and News</li>
          <li>Starbucks Archive</li>
          <li>Investor Relations</li>
          <li>Customer Service</li>
        </ul>
        <ul>
          <li>
            <h2>Carrers</h2>
          </li>
          <li>Culture and Values</li>
          <li>Inlucsion, Diversity and Equity</li>
          <li>College Achievement Plan</li>
          <li>Alumni community</li>
          <li>US Careers</li>
          <li>Inernational Careers</li>
        </ul>
        <ul>
          <li>
            <h2>Social Impact</h2>
          </li>
          <li>People</li>
          <li>Planet</li>
          <li>Environmental and Social Impact Reporting</li>
        </ul>
        <ul>
          <li>
            <h2>For Business Partners</h2>
          </li>
          <li>Landlord SUpport Center</li>
          <li>Suppliers</li>
          <li>Corporate Gift Card Sales</li>
          <li>Office and Foodservice Coffee</li>
        </ul>
        <ul>
          <li>
            <h2>Order and Pickup</h2>
          </li>
          <li>Order on the App</li>
          <li>Order on the Web</li>
          <li>Delivery</li>
          <li>Order and Pickup Options</li>
          <li>Explore and Find Coffee for Home</li>
        </ul>
      </section>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 0.5,
          borderColor: "#000000",
        }}
      />
      <section className="footer__icons__list">
        <BsSpotify />
        <BsFacebook />
        <BsPinterest />
        <BsYoutube />
        <BsInstagram />
        <BsTwitter />
      </section>
      <section className="footer__toe__list">
        <div>
          <ul>
            <li>
              <a href="">Privacy Notice</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Do not Share My Personal Information</a>
            </li>
            <li>
              <a href="">CA Supply Chain Act</a>
            </li>
            <li>
              <a href="">Cookie Preferances</a>
            </li>
          </ul>
        </div>
        <div>
          <p>© 2023 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};
