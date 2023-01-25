import React,{useState} from 'react';


export default function TextForm(props) {
    
    document.title=`${props.title} | Word`

    const handleUpClick = ()=>{
        // console.log('Uppercase Button Clicked '+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted into uppercase', 'success');
    }

    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted into lowercase', 'success');
    }

    const handleclearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert('Clear textbox', 'success');
    }

    const handleCopyText = ()=>{
        // var text = document.getElementById("myBox");
        // text.select(); 
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert('Copied to clipboard', 'success');
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed', 'success');
    }

    const handleOnChange = (event)=>{
        // console.log('On changed');
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    
    
    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
             
                <textarea className="form-control" value={text} placeholder="Enter Text here" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white',
                color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  data-toggle="modal" onClick={handleclearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  data-toggle="modal" onClick={handleCopyText}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  data-toggle="modal" onClick={handleExtraSpaces}>Remove Spaces</button>

        </div>
        <div className="conatiner my-3" style = {{color : props.mode==='dark'?'white':'black'}}>
            <h2>Your Text summary</h2>
            <p>{text.split(/\s+/).filter((word)=>{return word.length!==0}).length } words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").filter((word)=>{return word.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it"}</p>
        </div>
        </>
    )
}
