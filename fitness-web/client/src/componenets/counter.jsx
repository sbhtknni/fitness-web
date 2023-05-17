import React, { useState } from 'react';

export default function Counter(props) {
    const [count,setCount] = useState(0) ;
    const [delta , setDelta] = useState(1);
    const [arr,setArr] = useState([10,20,30,40])
    
    //style
    const style= {
        
        color:'blue',
        fontSize:'18px',
    }

    function inc(){
        alert("ouch")
        setCount(oldValue => oldValue+ Number(delta))
    }
    function delta_inc(e){
        //new input value = e.target.value
        setDelta(Number(e.target.value))
    }

    function reset(){
        setCount(oldValue=>0)
    }
    return (
        <div >
            <h1>Increase by<input type = "number" value={delta} onChange={delta_inc} /></h1>
            <p>i was clicked {count} times</p>
            <button onClick={inc}>Click Me! </button>
            <button onClick={reset}>Click Me! </button>
        </div>
    )
}


