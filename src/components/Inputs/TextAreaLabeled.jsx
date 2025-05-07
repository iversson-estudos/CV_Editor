import {React} from "react";

export function TextAreaLabeled({name,value,onChange,type,size,label,placeHolder='...'}) {

  const inputStyle = {
  height:`${size}px`
  }


return (
    <> 
      <label htmlFor={name}>{label}</label>
      <textarea name={name}  type={type} onChange={onChange}  id={name} placeholder={placeHolder}  value={value} style={inputStyle}/>
    </>
)}
  