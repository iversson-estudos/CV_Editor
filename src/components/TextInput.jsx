import React from "react";

export function TextInput({name,type,inputClass,label,divClass,placeHolder='...'}) {
    return (
    <div className={divClass}> 
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} id={name} placeholder={placeHolder} className={inputClass}/>
    </div>
)}
  