import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";
const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/reviews">Reviews</Link>
        <span style={{ marginRight: "15px" }}>
          {user?.displayName && user.displayName}
        </span>
        {user?.uid ? (
          <button style={{ marginRight: "15px" }} onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/registered">Registered</Link>
      </nav>
    </div>
  );
};

export default Header;
