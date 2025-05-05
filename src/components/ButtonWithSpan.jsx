import React from "react";


export default function ButtonWithSpan({btnClass, text,onClick}) 
{
  return <button className={btnClass} onClick={onClick}>
            <span>{text}</span>
         </button>;
  
}
  