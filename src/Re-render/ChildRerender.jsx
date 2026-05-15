import React from "react";

function ChildRerender({name}) {
    console.log(" child render");
    
  return (
    <div>
     <h1>child-{name}</h1>
    
    </div>
  );
}

export default ChildRerender;