import React from 'react';

const Button = (props) => {
  const handleClick = () => {
    props.setCount(prevCount => props.direction ? prevCount + 1 : prevCount - 1)
  }

  return (
    <button onClick={handleClick}>{props.direction ? 'Increase' : 'Decrease'}</button>
  )
}

export default Button;
