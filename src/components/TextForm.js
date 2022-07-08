import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was Click"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    console.log("lowercase was Click"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  }


  //this is for counting total number of
  // const handleUpClick1 = (event)=>
  // {
  //   let counting = text.length;
  //   setCount(counting);
  //   console.log("Counting..."+ counting);
  // }

const handleClearclick = ()=> {
  console.log("Text has been cleared!");
  let newText = "";
  setText(newText);
}

  const handleOnchange = (event) =>{
    console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  // const [count, setCount] = useState(0);
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3">
             <textarea className="form-control" value={text} /*</div>value1={count}</div>*/ onChange={handleOnchange} id="MyBox" rows="8"></textarea>
        </div>
        <span><button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button> &nbsp;&nbsp;&nbsp;
        {/* <button className='btn btn-primary' onClick={handleUpClick1}>Count Characters</button>
        &nbsp;&nbsp;&nbsp;  */}
        <button className='btn btn-primary' onClick={handleLoClick}>Convert To lowercase</button> &nbsp;&nbsp;&nbsp;
        <button className='btn btn-primary' onClick={handleClearclick}>Clear</button></span>
    </div>
    <div className='container my-2'>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
