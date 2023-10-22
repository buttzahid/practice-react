import React from 'react';
function ButtonLabel(props) {
  return (
    <button className={props.className} onMouseEnter={props.changeHandler} onClick={props.clickHandler}>{props.children}</button>
  );
}
export default ButtonLabel;
