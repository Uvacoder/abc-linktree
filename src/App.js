import React from "react";
import "./styles/style.css";
// components
import Header from "./components/Header";
import Link from "./components/Link/Link";
// data
import { links } from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="links-container">
        {links.map((link) => (
          <Link
            key={link.name}
            name={link.name}
            url={link.url}
            icon={link.icon}
            color={link.color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
