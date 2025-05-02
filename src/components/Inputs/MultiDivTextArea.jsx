import {React,useState} from "react";

export function MultiDivTextArea({name,count=1,type,size,label,divClass,handleChange,placeHolder='...'}) {
/*STYLES*/  
  const divStyle = {
    display:'flex', 
    flexDirection:'column'
  }
  const inputStyle = {
  height:`${size}px` 
  }
   
   /*USE STATE FOR DIV COUNTER*/
   const [divCount,setDivCount]= useState(count);
   /*USE STATE FOR DIV VALUES, EMPTY ARRAY SIZE OF DIV COUNT*/
   const [values,setValues]= useState(Array(count).fill(''));


  /*HANDLE TEXT CHANGES*/ 
  const handleTextChanges = (index,value)=>{
    const newValues = [...values];
    newValues[index]=value;
    setValues(newValues);
  }

  /*CLICK HANDLER*/
  const handleClick=()=>{
    setDivCount = (prevCount=>prevCount+1);
    setValues(prevValues=>[...prevValues,'']);
  }




   /*CREATES DIVS*/
   const Component = [];

   for(let i = 0 ; i<divCount;i++){
    Component.push(
    <div style={divStyle} className={divClass} key={`div-${i}`}>
      <label htmlFor={`${name}-${i}`}>{label}</label>
      <textarea name={`${name}-${i}`} key={`textarea-${i}`} type={type} id={`${name}-${i}`} placeholder={placeHolder} onChange={handleChange} style={inputStyle}/>
    </div>
    );


   }
   



  return (
    <>
      {Component}
    </>
)}
  