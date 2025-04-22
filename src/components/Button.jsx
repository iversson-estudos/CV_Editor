import React from "react";


export default function Button({btnClass, text}) 
{
  return <button className={btnClass}>
            <span>{text}</span>
         </button>;
  
}
  