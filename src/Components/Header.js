import { Fragment } from "react";
import "./Header.css";
import HeaderImg from "./assets/HeaderImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import MealsSummary from "./MealsSummary";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <div className="cart">
        <div >
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div>Your Cart</div>
        <p id="count">0</p>
        </div>
        
      </header>
      <div className="main-image">
        <img src={HeaderImg} alt="restra_header_img" />
        <div id="card">
        <MealsSummary />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
