import React, { useReducer, createContext } from "react";
import {
  Help,
  About,
  Resume,
  Contact,
  Skills,
  Default,
  NotFound,
} from "./Tarminalcontent";
import "../App.css";
import BioData from "./BioData";
import WebTerminal from "./WebTerminal";

const initialState = [Default];
const reduce = (state = [], action) => {
  const HelpComponents = <Help value={action.inputRef.current.value} />;
  const AboutComponents = <About value={action.inputRef.current.value} />;
  const ResumeComponents = <Resume value={action.inputRef.current.value} />;
  const ContactComponents = <Contact value={action.inputRef.current.value} />;
  const SkillsComponents = <Skills value={action.inputRef.current.value} />;
  switch (action.type) {
    case "inputValue":
      if (action.inputRef.current.value.toLowerCase() === "help") {
        state = [...state, HelpComponents];
      } else if (action.inputRef.current.value.toLowerCase() === "about") {
        state = [...state, AboutComponents];
      } else if (action.inputRef.current.value.toLowerCase() === "resume") {
        state = [...state, ResumeComponents];
      } else if (action.inputRef.current.value.toLowerCase() === "contact") {
        state = [...state, ContactComponents];
      } else if (action.inputRef.current.value.toLowerCase() === "skills") {
        state = [...state, SkillsComponents];
      } else if (action.inputRef.current.value.toLowerCase() === "clear") {
        state = [];
      } else {
        state = [
          ...state,
          <NotFound cmd={action.inputRef.current.value.toLowerCase()} />,
        ];
      }
    default:
      return state;
  }
};

const myContext = createContext();

function Index() {
  const [data, dispatch] = useReducer(reduce, initialState);
  return (
    <myContext.Provider value={{ type: data, dispatch }}>
      <div className="App">
        <div className="container">
          <div className="leftContent">
            <BioData />
          </div>
          <div className="rightContent">
            <WebTerminal />
          </div>
        </div>
      </div>
    </myContext.Provider>
  );
}

export default Index;
export { myContext };
