import React from "react";
import Product from "../Product/Product";
import "./Home.css";
import { Link } from "react-router-dom";
import nike from "./nike.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Link
          to={{ pathname: "https://netflix-clone-akib.firebaseapp.com/" }}
          target="_blank"
        >
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
        </Link>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Jabra Elite 75t  Engineered to fit. Great calls and music, designed for compact comfort."
            price={2999.95}
            rating={4}
            image="https://www.jabra.in/-/media/Images/Products/Jabra-Elite-75t/Layout/1_Topbanner/e75_top_product_black.png?la=en-IN&hash=59CEF77D1FA898EB1FD7EBDD5793A7063F5A3780"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={5680.99}
            rating={4}
            image={nike}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={135000.99}
            rating={3}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-202002-gallery4?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1580947854554"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={116000.99}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-compare-models-202010_GEO_EMEA?wid=318&hei=380&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1601610971000"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={80000.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
