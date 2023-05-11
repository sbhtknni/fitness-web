import React from 'react';




export default function Person(props) {
    const { name } = props;
    const style= {
        
        color:'blue',
        fontSize:'18px',
    }
    if (name.length >3) {
        style.color='red'
    }

    return (
        <div >
            <h1>Hi!</h1>
            <p style={style} >My name is {name}</p>
            <p>1+1={1+1}</p>
        </div>
    )
}


