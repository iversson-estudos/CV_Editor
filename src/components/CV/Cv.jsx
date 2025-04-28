import React from "react";



export function Cv({ value }) {
    return (
      <div>
        <h2>Name:{value.name}</h2>
        <p>Experience: {value.experience}</p>
        <p>Company:{value.company}</p>
      </div>
    );
  }