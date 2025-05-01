import {React} from "react";

export function TextInputLabeled({name,size,label,divClass,placeHolder='...'}) {
  /*STYLES*/
  const divStyle = {
    display:'flex', 
    flexDirection:'column'
  }
  
  const inputStyle = {
    height:`${size}px` 
  };
  /*THE COMPONENT*/
  return (
    <div className={divClass} style={divStyle}> 
      <label htmlFor={name}>{label}</label>
      <input name={name} type='text' id={name}  placeholder={placeHolder} style={inputStyle}/>
    </div>
)}

 
  