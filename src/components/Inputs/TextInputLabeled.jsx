import {React} from "react";

export function TextInputLabeled({name,size,label,placeHolder='...'}) {
  
  const inputStyle = {
    height:`${size}px` 
  };
  
  
  return (
    <> 
      <label htmlFor={name}>{label}</label>
      <input name={name} type='text' id={name}  placeholder={placeHolder} style={inputStyle}/>
    </>
)}

 
  