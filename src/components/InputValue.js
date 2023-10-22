import React, { useState } from 'react';

function FormInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default FormInput;
