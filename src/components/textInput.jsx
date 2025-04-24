import React from "react";

export function TextInput({name,type,inputClass,label}) {
    return (
    <> 
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} id={name} className={inputClass} />
    </>
)}
  