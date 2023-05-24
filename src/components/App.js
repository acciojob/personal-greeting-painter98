
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [text,useText] = useState("");

  function textInput(e){
    useText("Hello "+e.target.value);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input onChange={textInput} type='text'/>
        <p>{text}</p>
    </div>
  )
}

export default App
