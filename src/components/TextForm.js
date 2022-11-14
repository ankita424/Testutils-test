import React, {useState} from 'react'


export default function TextForm(props) {

const handleUpClik = ()=>{
    // console.log("handleUpClik" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success");
}
const handleLoClik = ()=>{
    // console.log("handleUpClik" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","success");
}
const handleClearClik = ()=>{
    // console.log("handleUpClik" + text);
    let newText = " ";
    setText(newText)
    props.showAlert("Text has been clear","success");
}

const handleOnChange = (event)=>{
    // console.log(handleOnChange)
    setText(event.target.value)
}

    const [text, setText] = useState('Enter your text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
    <div>
        <h3>{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClik}>Convert to uperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClik}>Convert to uperCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClik}>Clear text</button>

    </div>
    </div>
    <div className="container my-3"  style={{color: props.mode==='light'?'black':'white'}}>
        <h3>Your text summery</h3>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.lenght>0?text:"Enter something in the texrbox above to preview it here"}</p>
        
    </div>
    </>
  )
}
