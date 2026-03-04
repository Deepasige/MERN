import React, { useState, useEffect } from 'react';

const State = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);

  useEffect(() => {
    document.title=`Clicked count ${count}times`
    console.log('from useEffect');
  }, [like]);

  return (
    <div>
      <h1>useState Example</h1>

      <h3>Count: {count}</h3>
      <button
        className="bg-blue-400 rounded-xl text-black p-2"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <h3>Like Count: {like}</h3>
      <button onClick={() => setLike(like + 1)}>👍</button>
      <button onClick={() => setLike(like - 1)}>👎</button>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default State;