import React from "react";


export default function ButtonWithSpan({btnClass="", text,onClick}) 
{

  const handleClick = (e) => {
    e.preventDefault(); 
    if (onClick) {  
      onClick();   
    }      
  };

    return <button className={btnClass} onClick={handleClick}>
            <span>{text}</span>
         </button>;
  
}
  