import { getElementError } from '@testing-library/react';
import React, {useState} from 'react'



export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Upppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" ,"success");
    }

    const handleLoClick = ()=>{
        // console.log("Upppercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase" ,"success");
    }

    const handleClearClick = ()=>{
        // console.log("Upppercase was clicked" +text);
        let newText = " ";
        setText(newText)
        props.showAlert("Text cleared" ,"success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy =(event)=>{
        var text =document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard" ,"success");
    }

    const handleExtraSpaces =(event)=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces" ,"success");
    }
    const [text, setText] = useState('Enter text here')   //Hooks type
    // text ="new text"; //Wrong way to change the state
    // setText =(new text); //Correct way to change the state
    return (
        <>
        <div className='container' style={{color : props.mode ==='dark'?'white':'#192c5d'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'?'grey':'white',color : props.mode ==='dark'?'white':'#192c5d'}} id="myBox" rows={8}></textarea>
            </div>
            <button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 " onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 " onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2 " onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color : props.mode ==='dark'?'white':'#192c5d'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 *text.split(" ").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to show preview"}</p>
            </div>
        </>
    
  )
}