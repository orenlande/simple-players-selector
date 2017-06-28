import React, { Component } from 'react';
import Button from 'react-mdl/lib/Button';

const NumPicker = (props) =>{
    return ( 
        <ul className="buttons" style={{textAlign:'left', width:'400px'}}>
            { props.options.map( (number, i) =>                     
                <li key={i}>
                    <Button className={'num-picker-btn' + (props.value === number ? ' active': '')} onClick={() => props.onNumChange(number)}>{number}</Button>
                </li>
            ) }
            <Button className="num-picker-btn" onClick={() => props.revealAddNumber()}>...</Button>
        </ul>
    );
}

export default NumPicker;