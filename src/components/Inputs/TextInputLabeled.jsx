import {React} from "react";

export function TextInputLabeled({name,setCount,count,type,size,label,handleChange,divClass,placeHolder='...'}) {
 /*STYLES*/   
  const divStyle = {
    display:'flex', 
    flexDirection:'column'
  }
  
  const inputStyle = {
    height:`${size}px` 
  };
  
 function CompleteComponent(){
    return (
      <div className={divClass} style={divStyle}> 
        <label htmlFor={name}>{label}</label>
        <input name={name} type={type} id={name} onChange={handleChange} placeholder={placeHolder} style={inputStyle}/>
      </div>
  )
  }

  const  renderDiv = () => {
    const components = [];
    
    for(let i = 0;i<count;i++){
      components.push(<CompleteComponent key={`child-${i}`}/>);
      console.log('created component number:' + `${i}`);
    }
    return components;
  };


  return (
    <>
      {renderDiv()}
      <button onClick={setCount}>+</button>
    </>
  )
  
}
  