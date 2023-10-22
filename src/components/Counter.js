import React, { useState } from 'react';
function IncrementCount(){
    const [count, setCount] = useState(0);
   // const count =0;

 //function increment(){
      // setCount(count + 1);      
       //     console.log(count);
  // }
   function decrement(){
    setCount(count - 1);      
    //     console.log(count);
   }
   const increment = ()=>{
    setCount(count+1);
   }
   //const decrement= ()=>setCount(count-1);
    return(
        <div>
        <p>{count}</p>
        <button onClick={increment} disabled={count>=10}>increment</button>
        <button onClick={decrement} disabled={count<=0}>Decrement</button>
        </div>

    );
}
export default IncrementCount;