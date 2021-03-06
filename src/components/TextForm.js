import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was Click"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = () => {
    console.log("lowercase was Click"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success")
  }


  //this is for counting total number of
  // const handleUpClick1 = (event)=>
  // {
  //   let counting = text.length;
  //   setCount(counting);
  //   console.log("Counting..."+ counting);
  // }
  const handleCopyClick = () => {
    console.log("Copied to clipboard");
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }

const handleClearclick = ()=> {
  console.log("Text has been cleared!");
  let newText = "";
  setText(newText);
  props.showAlert("Texts has been cleared!", "success");

}

  const handleOnchange = (event) =>{
    console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  // const [count, setCount] = useState(0);
  return (
    <>
    <div className='container' style={{color: props.mode==="dark"? "white" : "black"}}>
      <h1 className='mb-2'>{props.heading} </h1>
        <div className="mb-3">
             <textarea className="form-control" value={text} /*</div>value1={count}</div>*/ style={{background: props.mode==='light'? '#89e4ba': 'white', color: props.mode==="dark"? "black" : "black"}} onChange={handleOnchange} id="MyBox"  rows="8"></textarea>
        </div>
        <span><button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button> &nbsp;&nbsp;&nbsp;
        {/* <button className='btn btn-primary' onClick={handleUpClick1}>Count Characters</button>
        &nbsp;&nbsp;&nbsp;  */}
        <button disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert To lowercase</button> &nbsp;&nbsp;&nbsp;
        <button disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={handleClearclick}>Clear</button> &nbsp;&nbsp;&nbsp;
        <button disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy</button></span>
    </div>
    <div className='container my-2' style={{color: props.mode==="dark"? 'white': "black"}}>
      <h2>Your text summary</h2>
      <p style={{color: props.mode==="dark"? '#00FF33': "#7122FA"}}><strong>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</strong></p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Enter Something!"}</p>
    </div>
    </>
  )
}
