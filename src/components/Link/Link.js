import React, { useRef } from "react";

export default function Link({ name, url, icon, color }) {
  // --- REF --- //
  const iconRef = useRef(null);
  const nameRef = useRef(null);

  // --- FUNCTIONS --- //
  function handleMouseOver() {
    iconRef.current.style = `transition: .3s; color: ${color}`;
    nameRef.current.style = `transition: .3s; color: ${color}`;
  }
  function handleMouseLeave() {
    iconRef.current.style = `transition: .3s; color: white`;
    nameRef.current.style = `transition: .3s; color: white`;
  }

  return (
    <a
      href={url}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="link"
      target="_blank"
      rel="noreferrer"
    >
      <div className="info">
        <h1 ref={nameRef}>{name}</h1>
      </div>
      <i ref={iconRef} className={icon} />
    </a>
  );
}
