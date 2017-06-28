import React, { Component } from 'react';
import Textfield from 'react-mdl/lib/Textfield';
import Button from 'react-mdl/lib/Button';
import IconButton from 'react-mdl/lib/IconButton';

//const numAdder = (props) =>{
export default class numAdder extends Component {
    constructor(props){
        super(props);

        this.regex = "^(0|[1-9][0-9]*)$";
    }
    
    processNumberAdd = (e) =>{
        if(e.keyCode === 13){
            const value = e.target.value;

            const patt = new RegExp(this.regex);
            const res = patt.test(value);

            if(res)
                this.props.addNumber(e.target.value);
        }
        
        if(e.keyCode === 27){
            this.props.hideAddNumber()
        }
       
    }

    render(){
        return ( 
            <div style={{textAlign:'left', width:'400px', height: '64px'}}>
                <Textfield
                    onKeyDown={(e) => this.processNumberAdd(e)}
                    pattern={this.regex}
                    error="Input is not a number!"
                    label=""
                    autoFocus
                    //style={{width: '200px'}}
                />
                <IconButton onClick={() => this.props.hideAddNumber()} name="close" />
            </div>
        );
    }
}