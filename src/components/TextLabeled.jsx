import React from "react";

export function TextLabeled({name,type,textClass,label,divClass,placeHolder='...'}) {
    return (
    <div className={divClass}> 
      <label htmlFor={name}>{label}</label>
      <textarea name={name} type={type} id={name} placeholder={placeHolder} className={textClass}/>
    </div>
)}
  