import React, { useRef, useContext, useEffect } from "react";
import { myContext } from "./Index";

const WebTerminal = () => {
  const inputRef = useRef(null);
  const context = useContext(myContext);
  const outputs = context.type;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    context.dispatch({ type: "inputValue", inputRef });
  };
  useEffect(() => {
    inputRef.current.focus();
    if(outputs){
       inputRef.current.value = "";
    }
  });  
  return (
    <div className="webTarminal" onClick={() => inputRef.current.focus()}>
      <header className="tarminalHeader">
        <span className="tarmianlControler">
          <span className="controlerItem color_FA615C"></span>
          <span className="controlerItem color_FFBD48"></span>
          <span className="controlerItem color_3FC950"></span>
        </span>
        <span>guest@sohag.net:~ (root)</span>
        <span></span>
      </header>
      <div className="tarmianlSection">
        <div className="output">
          {outputs.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="form_design">
          <span className="tarminalTittle" style={{ color: "#8DD39E" }}>
            {`[_guest>~]`}
            <b>#</b>
          </span>
          <input
            ref={inputRef}
            type="text"
            maxLength="28"
            className="inputField"
          />
        </form>
      </div>
    </div>
  );
};
export default WebTerminal;
