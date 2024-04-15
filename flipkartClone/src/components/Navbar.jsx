import React, { useState } from 'react';
import flip from "../assets/flip.png"
import user from "../assets/user.png"
import cart from "../assets/cart.png"
import store from "../assets/store.png"
import menuIcon from "../assets/more.png"

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleMenuEnter = () => {
    setShowMenu(true);
  };

  const handleMenuLeave = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <div style={{  height: "50px", width: "80%", margin: "auto", marginTop: "10px", display: "flex", justifyContent: "space-between", position: "relative" }}>
        <img src={flip} alt="" style={{ height: "100%" }} />
        <input style={{ width: "20%", color: "f0f5ff", backgroundColor: "#eee", borderRadius: "5px", padding: "5px" }} type="text" placeholder=" 🔍 Search for products, brands, and more" />
        <div 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
          style={{ position: "relative", display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <button 
            style={{ 
              background: showDropdown ? "#2196f3" : "transparent", 
              color: showDropdown ? "#fff" : "inherit", 
              border: "none", 
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              padding: "5px 10px",
              borderRadius: "5px"
            }}
          >
            <img src={user} alt="" style={{ width: "25px", height: "25px", marginRight: "5px" }} />
            Login {showDropdown ? '˄' : '˅'}
          </button>
          {showDropdown && (
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", zIndex: "1000", minWidth: "200px" }}>
              <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
                <span style={{ color: "#2196f3", marginRight: "5px" }}>New Customer?</span>
                <span style={{ color: "#2196f3" }}>Sign Up</span>
              </div>
              <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
                <img src={user} alt="" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
                <span>My Profile</span>
              </div>
              <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
                <img src={user} alt="" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
                <span>Flipkart Plus Zone</span>
              </div>
              <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
                <img src={user} alt="" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
                <span>Orders</span>
              </div>
              <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
                <img src={user} alt="" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
                <span>Wishlist</span>
              </div>
              <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
                <img src={user} alt="" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
                <span>Rewards</span>
              </div>
              <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
                <img src={user} alt="" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
                <span>Gift Cards</span>
              </div>
            </div>
          )}
        </div>
        <div style={{ display: "flex", width: "5%", justifyContent: "space-between" }}>
          <img src={cart} alt="" style={{ width: "25px", height: "25px", marginTop: "5px" }} /> <div style={{ fontSize: "20px" }}>Cart</div>
        </div>
        <div style={{ display: "flex", width: "19%", justifyContent: "space-between" }}>
          <img src={store} alt="" style={{ width: "25px", height: "25px", marginTop: "5px" }} /> <div style={{ fontSize: "20px" }}>Become a Seller</div>
        <div 
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
          style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "0 10px", position: "relative" }}
        >
          <img src={menuIcon} alt="" style={{ width: "25px", height: "25px" }} />
          {showMenu && (
            <div onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave} style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", zIndex: "1000", minWidth: "200px" }}>
              <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Notification Preferences</div>
              <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>24*7 Customer Care</div>
              <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Advertise</div>
              <div style={{ padding: "10px" }}>Download App</div>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
