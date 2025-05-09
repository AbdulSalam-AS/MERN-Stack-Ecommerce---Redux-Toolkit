import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import ProductCard from "./ProductCard.jsx";
import { useAlert } from "react-alert";
import "./Home.css";
import MetaData from "../layout/MetaData.jsx";
import { getProduct, clearErrors } from "../../store/actions/productAction";
import Loader from "../layout/Loader/Loader.jsx";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? 
        <Loader />
      :
        <>
          <MetaData title="EOMMERCE" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
          </div>
        </>
      }
    </>
  );
}

export default Home;
