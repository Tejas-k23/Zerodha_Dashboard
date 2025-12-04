import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedmenu, setSelectedmenu] = useState(0);
  const [isProfileDown, setIsProfileDown] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedmenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDown(!isProfileDown);
  };
const menuclass="menu";
const menuActClass="menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />

      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration:"none"  }} onClick={() => handleMenuClick(0)}>
            <p className={selectedmenu===0 ? menuActClass:menuclass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link to="/orders" style={{ textDecoration:"none" }} onClick={() => handleMenuClick(1)}>
             <p className={selectedmenu===1 ? menuActClass:menuclass}>Orders</p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" style={{ textDecoration:"none" }} onClick={() => handleMenuClick(2)}>
              <p  className={selectedmenu===2 ? menuActClass:menuclass}>Holdings</p>
            </Link>
          </li>

          <li>
            <Link to="/positions" style={{ textDecoration:"none" }} onClick={() => handleMenuClick(3)}>
              <p  className={selectedmenu===3 ? menuActClass:menuclass}>Positions</p>
            </Link>
          </li>

          <li>
            <Link to="/funds" style={{ textDecoration:"none" }} onClick={() => handleMenuClick(4)}>
              <p   className={selectedmenu===4 ? menuActClass:menuclass}>Funds</p>
            </Link>
          </li>

          <li>
            <Link to="/apps" style={{ textDecoration:"none" }} onClick={() => handleMenuClick(5)}>
              <p   className={selectedmenu===5 ? menuActClass:menuclass}>Apps</p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
