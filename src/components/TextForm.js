import React, { useState } from 'react'

// const [count, setCount] = useState(0); //Hooks concept from react course

export default function TextForm(props) {
    const handleUpclick = ()=>{
        //console.log("uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');

    }

    const handleLoclick = ()=>{
        //console.log("uppercase clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase','success');

    }

    const handleClearclick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert('Textbox is cleared','success');

    }

    const handleCopy = ()=>{
        //console.log(text);
        let textdata = document.getElementById('myBox');
        textdata.select();
        navigator.clipboard.writeText(textdata.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Text is copied','success');

    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed','success');

    }
    
    const handleOnChange = (event)=>{
        //console.log("onchange");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    //const [text, setText] = useState('hello');
    //text = "hhhhh"; //wrong way to change state
    //setText('New Hello'); // Right way to change state
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#313e4c':'white',color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearclick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove ExtraSpace</button>

    </div>
    <div className='container my-3'  style={{color: props.mode === 'dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something to preview it here'}</p>
    </div>
    </>
  )
}
