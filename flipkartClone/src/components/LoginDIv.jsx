import React, { useState } from 'react'
import user from "../assets/user.png"
function LoginDIv({text}) {

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
      {text} {showDropdown ? '˄' : '˅'}
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
  )
}

export default LoginDIv