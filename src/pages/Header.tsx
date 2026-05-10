import React from "react";
//import "./Header.css";
import signInIcon from "../assets/sign-in-alt.svg";
import { Link } from "react-router-dom";
import logo from "../assets/letter-f.png";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
      <div style={styles.logoWrap}>
        <img src={logo} style={styles.logoImg} />
        <span>Fatlas</span>
  </div>
    </Link>
      </div>

      <nav>
        <ul style={styles.navList}>
          <li>
            <Link
            to="/library"
            style={styles.link}
          >
          Library
        </Link>
      </li>

          <li>
            <Link to="/signin">
              <img
                src={signInIcon}
                style={{ width: 22, height: 22 }}
                alt="sign in"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#3b4252",
    color: "white",
    borderRadius: "12px",
    margin: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  navList: {
  display: "flex",
  listStyle: "none",
  gap: "15px",
  margin: 0,
  padding: 0,
  alignItems: "center",
},
  
   logoLink: {
    textDecoration: "none",
    color: "white",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    transition: "0.2s",
  },
  logoImg: {
    width: 28,
    height: 28,
    objectFit: "contain",
  },
  link: {
  textDecoration: "none",
  color: "white",
  fontWeight: 500,
},
};