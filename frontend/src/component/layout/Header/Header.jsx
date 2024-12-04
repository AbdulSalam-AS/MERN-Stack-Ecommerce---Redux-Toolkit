import React from 'react';
import {ReactNavbar} from "overlay-navbar";
import logo from "../../../images/logo.png";
import {FaSearch, FaUser} from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi";
const options = {
    burgerColorHover:"#eb4034",
    logo,
    logoWidth : "20vmax",
    navColor1:"white",
    logoHoverSize:"10px",
    logoHoverColor:"#eb4034",
    link1Text:"Home",
    link2Text:"Products",
    link3Text:"Contact",
    link4Text:"About",
    link1Url:"/",
    link2Url:"/products",
    link3Url:"/contact",
    link4Url:"/about",
    link1Size:"1.2vmax",
    link1Color:"rgba(35, 35, 35, 0.8)",
    nav1justifyContent:"flex-end",
    nav2justifyContent:"flex-end",
    nav3justifyContent:"flex-start",
    nav4justifyContent:"flex-start",
    link1ColorHover:"#eb4034",
    link2ColorHover:"#eb4034",
    link3ColorHover:"#eb4034",
    link4ColorHover:"#eb4034",
    link1Margin:"1vmax",
    link3Margin:"0",
    link4Margin:"1vmax",
    profileIconColor:"rgba(35, 35, 35,0.8)",
    profileIconUrl: "/login",
    searchIconColor:"rgba(35, 35, 35, 0.8)",
    cartIconColor:"rgba(35, 35, 35, 0.8)",
    profileIconColorHover:"#eb4034",
    searchIConColorHover:"#eb4034",
    cartIconColorHover:"#eb4034",
    cartIconMargin:"1vmax",
    SearchIconElement:FaSearch,
    CartIconElement:FiShoppingCart,
    ProfileIconElement:FaUser,
}
const Header = () => {
  return(
    <ReactNavbar  {...options} searchIcon={true} profileIcon={true} cartIcon={true}/>
  )
}
export default Header;
