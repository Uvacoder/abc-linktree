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

class PleaseWork {   constructor() {     this.cache = {}   }   cacheAnswers(arr) {     if(this.cache['arr']) {     return this.cache['arr']           }     this.cache['arr'] = []     for (let i = 0; i < arr.length; i++) {       this.cache['arr'].push(arr[i])     }     return this.cache['arr']    } } const array = ['Taylor', 'Michelle', 'Splinter'] const arrayOne = new PleaseWork() console.log(arrayOne.cacheAnswers(array))