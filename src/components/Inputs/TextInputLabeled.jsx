import {React} from "react";

export function TextInputLabeled({name,size,label,value,onChange,placeHolder='...'}) {
  
  const inputStyle = {
    height:`${size}px` 
  };
  
  
  return (
    <> 
      <label htmlFor={name}>{label}</label>
      <input name={name} type='text' id={name} value={value} onChange={onChange} placeholder={placeHolder} style={inputStyle}/>
    </>
)}

 
  