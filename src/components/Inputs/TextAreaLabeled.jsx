import React from "react";

export function TextAreaLabeled({name,type,size,label,divClass,placeHolder='...'}) {
  
  const divStyle = {
    display:'flex', 
    flexDirection:'column'
  }
  const inputStyle = {
  height:`${size}px` 
  }


  return (
    <div className={divClass} style={divStyle}> 
      <label htmlFor={name}>{label}</label>
      <textarea name={name} type={type} id={name} placeholder={placeHolder} style={inputStyle}/>
    </div>
)}
  