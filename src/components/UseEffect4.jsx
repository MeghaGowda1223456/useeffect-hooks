import React,{useEffect,useState } from 'react'



function UseEffect4(props) {
    console.log(props.showComponent);
    const [isAdmin,setisAdmin]=useState(true)

    useEffect(()=>{
        setisAdmin(props.showComponent)
    },[props.showComponent])
    return (
        <div>
            <p>use Effect4</p>
            {isAdmin?'Admin':'user'}
        </div>
    )
}

export default UseEffect4
