import {React} from "react";

export function TextInputLabeled({name,size,label,value,placeHolder='...'}) {
  
  const inputStyle = {
    height:`${size}px` 
  };
  
  
  return (
    <> 
      <label htmlFor={name}>{label}</label>
      <input name={name} type='text' id={name} value={value} placeholder={placeHolder} style={inputStyle}/>
    </>
)}

 
  