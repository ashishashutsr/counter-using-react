import React, {useState} from 'react'
import Counter from './Counter'

function App() {
  const title = 'Counter One';

  // Array destucturing using arrow function
  const [count, setCount] = useState(0);
    const addCount=()=> {
        setCount(count+1);
    }
    const subCount=()=> {
        setCount(count-1);
    }

    // object containing title and count
    let obj = {
      title: 'Counter Two',
      count
    }

  return (
    <div align='center'>
      <div style={{float:'left'}}>
        <button onClick={subCount}> - </button>
          <Counter title={title} count={count} />
        <button onClick={addCount}> + </button>
      </div>

      <div style={{float:'right'}}>
        <button onClick={subCount}> - </button>
          {/* Spread Function {...obj} */}
          <Counter {...obj} /> 
        <button onClick={addCount}> + </button>
      </div>
    </div>
  );
}

export default App;


