import { useState } from "react";


function FirstCourse() {
     const [count , setCount] = useState(15)
    // let count = 15;
     const addValut = () => {
      // count = count + 1 ;
      setCount(count + 1 )
          console.log(count);
     }
     const deletValut = () => {
          // count = count + 1 ;
          setCount(count - 1 )
              console.log(count);
         }
  return (
     <>
    <div>React premiere cours{count}</div>
    <button onClick={addValut}>ajouter</button> 
    <button onClick={deletValut}>supprimer</button>
    <p>footer   {count}</p>
    </>
  )
}

export default FirstCourse