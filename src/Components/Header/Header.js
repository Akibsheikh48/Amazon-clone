import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
  
    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
  
    return (
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
  
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
  
        <div className="header__nav">
          <Link to={!user && '/login'}>
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
              <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>
  
          <Link to='/orders'>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          
          <Link to={{ pathname: "https://netflix-clone-akib.firebaseapp.com/" }} target="_blank" >
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          </Link>
  
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartTwoToneIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Header;