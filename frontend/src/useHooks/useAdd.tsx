import React from 'react';

function useAdd(iniitialCount:number) {

  const [count, setCount] = React.useState(iniitialCount);
  const increase = () =>{
    setCount(count+1);
  }
  const decrease = () =>{
    setCount(count-1);
  }
  return {count, setCount, increase, decrease};
}

export default useAdd;