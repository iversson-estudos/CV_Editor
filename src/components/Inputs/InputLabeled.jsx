import {React} from "react";

export function InputLabeled({name, size,type,label,value,onChange,placeHolder='...'}) {
  
  const inputStyle = {
    height:`${size}px` 
  };
  
  
  return (
    <> 
      <label htmlFor={name}>{label}</label>
      <input name={name}  type={type} id={name} value={value} onChange={onChange} placeholder={placeHolder} style={inputStyle}/>
    </>
)}

 
  