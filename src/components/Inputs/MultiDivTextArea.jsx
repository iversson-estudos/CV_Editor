import {React,useState} from "react";

export function MultiDivTextArea({name,handleChange,count=1,type,size,label,divClass,placeHolder='...'}) {
/*STYLES*/  
  const divStyle = {
    display:'flex', 
    flexDirection:'column'
  }
  const inputStyle = {
  height:`${size}px` 
  }
   

   /*USE STATE FOR DIV VALUES, EMPTY ARRAY SIZE OF DIV COUNT*/
   const [values,setValues]= useState(Array(count).fill(''));


  /*HANDLE TEXT CHANGES*/ 
  const handleTextChange = (index,value,name)=>{
    const newValues = [...values];
    newValues[index]=value;
    setValues(newValues);


    /*IF YOU WANNA SEND DATA TO PARENT COMPONENT*/
    handleChange(index,value,name);
  }

  /*CLICK HANDLER*/
  const handleClick = () => {
    setValues(prevValues => [...prevValues, '']); 
  };




   /*CREATES DIVS*/
   const Component = values.map((value,i)=>(
    <div style={divStyle} className={divClass} key={`div-${i}`}>
      <label htmlFor={`${name}-${i}`}>{label} {i+1}</label>
      <textarea name={`${name}-${i}`}  type={type} id={`${name}-${i}`} placeholder={placeHolder} onChange={(e)=>handleTextChange(i,e.target.value,name)} value={value} style={inputStyle}/>
    </div>
   ));

   
   


   
   



  return (
    <>
      {Component}
    </>
)}
  