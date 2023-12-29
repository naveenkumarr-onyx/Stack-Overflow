import React, { useEffect } from "react";
import "../components/Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { SetCurrentUser } from "../actions/CurrentUser";
import search from "../assets/magnifying-glass-solid.svg";
import Avatar from "./Avatar/Avatar";
import { jwtDecode } from "jwt-decode";
const Navbar = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogOut();
        alert("Logged Out due to time expired!!! ");
      }
    }

    dispatch(SetCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);
  var User = useSelector((state) => state.currentUserReducer);
  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
    Navigate("/");
    dispatch(SetCurrentUser(null));
  };
  return (
    <nav className=" main-nav">
      <div className="navbar">
        <Link to="/" className=" nav-item nav-logo ">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className=" nav-item nav-btn">
          About
        </Link>
        <Link to="/" className=" nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className=" nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search......" />
          <img
            src={search}
            alt="search-logo"
            width={15}
            className=" search-icon"
          />
        </form>
        {User === null ? (
          <Link to="/Auth" className=" nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>{" "}
            </Avatar>
            <button className="nav-item nav-links" onClick={handleLogOut}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
