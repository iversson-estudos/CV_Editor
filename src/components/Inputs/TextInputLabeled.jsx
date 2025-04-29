import {React,useState} from "react";

export function TextInputLabeled({name,type,size,label,handleChange,divClass,placeHolder='...'}) {
 /*STYLES*/   
  const divStyle = {
    display:'flex', 
    flexDirection:'column'
  }
  
  const inputStyle = {
    height:`${size}px` 
  };
  
  /*DINAMIC SIZE*/
  const [numberOfDivs,setNumberOfDivs] = useState(1);

  const incrementDivs = ()=>{
    setNumberOfDivs(numberOfDivs+1);
  }

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
    
    for(let i = 0;i<numberOfDivs;i++){
      components.push(<CompleteComponent key={`child-${i}`}/>);
      console.log('created button number:' + `${i}`);
    }
    return components;
  };


  return (
    <>
      {renderDiv()}
      <button onClick={incrementDivs}>+</button>
    </>
  )
  
}
  