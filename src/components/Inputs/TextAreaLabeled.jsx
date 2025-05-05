import {React} from "react";

export function TextAreaLabeled({name,value,handleChange,type,size,label,placeHolder='...'}) {

  const inputStyle = {
  height:`${size}px`
  }


return (
    <> 
      <label htmlFor={name}>{label}</label>
      <textarea name={name}  type={type} id={name} placeholder={placeHolder} onChange={handleChange} value={value} style={inputStyle}/>
    </>
)}
  