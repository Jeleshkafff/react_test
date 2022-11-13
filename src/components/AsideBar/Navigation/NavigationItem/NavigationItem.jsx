// Link to={href},
import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.css";

function NavigationItem({ href, label, icon }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? styles.activClassName : styles.item
      }
      to={href}
    >
      <img src={icon} alt=""/> {label}
    </NavLink>
  );
}

export default NavigationItem;
