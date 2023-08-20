import {React,useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
function NavBar() {
  const [country,setCountry]= useState('in')
  const navigate = useNavigate();
  function openMenu(){
    let mobNav = document.getElementById('mob-nav');
    mobNav.style.visibility="visible";
    mobNav.style.width="55%";
    mobNav.style.height="100%";
    mobNav.style.right="0%";
    mobNav.style.top="0%";
  }
  function closeMenu(){
    let mobNav = document.getElementById('mob-nav');
    mobNav.style.width="0%";
    mobNav.style.height="0%";
    mobNav.style.right="-100%";
    mobNav.style.top="-100%";
    mobNav.style.Visibility="hidden";
  }
  function countryHandler(e){
    setCountry(e.target.value);
    navigate(e.target.value);
  }
  
  return (
    <div id="nav" className="flex bg-gray-900 z-10  drop-shadow-xl">
      <NavLink to="/" id="title" className="items">
        <h2>NewsApp</h2>
      </NavLink>
      <select name="country" id="dropdown" onChange={countryHandler}>
        <option value="/in">
        India
      </option>
        <option value="/us">
        United State
      </option>
        <option value="/ch">
        China
      </option>
        <option value="/ca">
        Canada
      </option>
        <option value="/au">
        Australia
      </option>
        <option value="/br">
        Brazil
      </option>
      </select>
      <NavLink to={`${country}`} className="items">
        Home
      </NavLink>
      <NavLink to={`${country}/business`} className="items">
        Business
      </NavLink>
      <NavLink to={`${country}/health`} className="items">
        Health
      </NavLink>
      <NavLink to={`${country}/science`} className="items">
        Science
      </NavLink>
      <NavLink to={`${country}/sports`} className="items">
        Sports
      </NavLink>
      <NavLink to={`${country}/technology`} className="items">
        Technology
      </NavLink>
      <NavLink to="/About" className="items">
        About
      </NavLink>


    {/* Mobile NavBar  */}
      <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} className="icons" id="menu" onClick={openMenu}/>
      <div id="mob-nav">
      <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} className="icons" id="close" onClick={closeMenu}/>
      <NavLink to={`${country}`} className="mob-items">
        Home
      </NavLink>
      <NavLink to={`${country}/business`} className="mob-items">
        Business
      </NavLink>
      <NavLink to={`${country}/health`} className="mob-items">
        Health
      </NavLink>
      <NavLink to={`${country}/science`} className="mob-items">
        Science
      </NavLink>
      <NavLink to={`${country}/sports`} className="mob-items">
        Sports
      </NavLink>
      <NavLink to={`${country}/technology`} className="mob-items">
        technology
      </NavLink>
      <NavLink to="/About" className="mob-items">
        About
      </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
