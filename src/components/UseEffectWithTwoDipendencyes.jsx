import React, { useState,useEffect } from 'react'

// import { useEffect } from 'react/cjs/react.development'

function UseEffectWithTwoDipendencyes() {
    const [count,setcount]=useState(0)
    const [age,setage]=useState(0)

    useEffect(()=>{
        console.log("component did mount use effect exicuted");
    },[])
    useEffect(()=>{
        if(count!==0){
            console.log("component did update is exicuted for count");
        }
    },[count])
    useEffect(()=>{
        if(age!==0){
            console.log("component did update is exicuted for age");
        }
    },[age])

    useEffect(()=>{
        console.log("count or age componentDidMount is exicuted");
    },[count,age]);


    const increseCount = () => {
        setcount(count + 1);
      };

      const increseAge=()=>{
          setage(age+10)
      }

    return (
        <div>
            <p>use effect</p>
            <p>count - {count}</p>
            <button onClick={increseCount}>click count</button>
            <p>count Age={age}</p>
            <button onClick={increseAge}>age</button>
        </div>
    )
}

export default UseEffectWithTwoDipendencyes
