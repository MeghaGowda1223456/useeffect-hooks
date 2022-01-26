
import { useState } from 'react';
import './App.css';
import RightUseEffect from './components/RightUseEffect';
import UseEffect4 from './components/UseEffect4';
import UseEffectWithTwoDipendencyes from './components/UseEffectWithTwoDipendencyes';
// import WrongUseEffect from './components/WrongUseEffect';

function App() {
  const [showComponent,setShowComponet]=useState(true)
  return (
    <div className="App">
      {/* <WrongUseEffect/> */}
      {/* <RightUseEffect/> */}
      <button onClick={()=>{
        setShowComponet(!showComponent)
      }}>{showComponent?'Hide':'show'} component</button>
      <hr/>
      {showComponent?<RightUseEffect/>:null}

      <UseEffectWithTwoDipendencyes/>
      <UseEffect4 showComponent={showComponent} />
    </div>
  );
}

export default App;
