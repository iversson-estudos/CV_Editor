import React from "react";

export function TextInputLabeled({name,type,size,label,handleChange,divClass,placeHolder='...'}) {
    
  const divStyle = {
    display:'flex', 
    flexDirection:'column'
  }
  
  const inputStyle = {
    height:`${size}px` 
  };

 
  return (
    <div className={divClass} style={divStyle}> 
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} id={name} onChange={handleChange} placeholder={placeHolder} style={inputStyle}/>
      
    </div>
)}
  