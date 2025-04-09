import React, { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = { weekday: "long", day: "2-digit", month: "long", year: "numeric" };
    setCurrentDate(today.toLocaleDateString("en-GB", options));
  }, []);

  return (
    <div className="header">
      <span className="channel">News</span>
      <span className="date">{currentDate}</span>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>
    </div>
  );
}

export default Header;
