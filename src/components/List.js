import React from 'react';

function List() {
    const items = ['Item 1', 'Item 2', 'Item 3'];
   const list = items.map((item)=>(<li>{item}</li>));
  return (
    <ul>
       {
        list
      //items.map((item, index) => (
        //<li key={index}>{item}</li>
     // ))
    }
    </ul>
  );
}

export default List;