import React from 'react';

function PersonList() {
    const people = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Alice', age: 25 },
        { id: 3, name: 'Bob', age: 35 },
      ];
      
  return (
    <ul>
      {people.map((p) => (
        <li key={p.id}>
          <div>Name: {p.name}</div>
          <div>Age: {p.age}</div>
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
