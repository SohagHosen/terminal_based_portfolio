import { Link } from "react-router-dom";
export const Default = (
  <div className="helpSection">
    <span>
      Hi there, Welcome! — Type <span style={{ color: "#b3546a" }}>help</span>{" "}
      and press Enter for a list of supported commands.
    </span>
  </div>
);

export const Help = (props) => {
  return (
    <div className="helpSection">
      <span style={{ color: "#8DD39E" }}>
        {`[_guest>~]`}
        <b>#</b>
      </span>
      <span style={{ fontSize: "12.8px" }}>{props.value}</span>
      <br />
      <span>supported commands: </span>
      <span className="supportedCommand">about,</span>
      <span className="supportedCommand">skills,</span>
      <span className="supportedCommand">contact,</span>
      <span className="supportedCommand">clear</span>
    </div>
  );
};

export const About = (props) =>{
  return (
    <div className="aboutSection">
      <span style={{ color: "#8DD39E" }}>
        {`[_guest>~]`}
        <b>#</b>
      </span>
      <span style={{ fontSize: "12.8px" }}>{props.value}</span>
      <br />
      <span>Hello 👋</span>
      <p style={{ margin: "0px" }}>
        I'm Sohag. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sapiente omnis nihil, delectus repudiandae non temporibus.
      </p>
    </div>
  );
};
export const Resume = (props)=>{
  return (
    <div className="aboutSection">
      <span style={{ color: "#8DD39E" }}>
        {`[_guest>~]`}
        <b>#</b>
      </span>
      <span style={{ fontSize: "12.8px" }}>{props.value}</span>
      <br />
      <span>
        Pleace follow{" "}
        <Link style={{ color: "#873147" }} to="/oops">
          this link
        </Link>
      </span>
    </div>
  );
};
export const Skills = (props)=>{
  return (
    <div className="aboutSection">
      <span style={{ color: "#8DD39E" }}>
        {`[_guest>~]`}
        <b>#</b>
      </span>
      <span style={{ fontSize: "12.8px" }}>{props.value}</span>
      <br />
      <span>
        <span>Programming:</span> <br />
        C#, Javascript, NodeJS, ReactJS, MongoDB, HTML, CSS
      </span>
    </div>
  );
};

export const Contact = (props)=>{
  return (
    <div className="aboutSection">
      <span style={{ color: "#8DD39E" }}>
        {`[_guest>~]`}
        <b>#</b>
      </span>
      <span style={{ fontSize: "12.8px" }}>{props.value}</span>
      <br />
      <span>
        You can sent me an email by clicking{" "}
        <Link style={{ color: "#873147" }} to="/oops">
          here
        </Link>
      </span>
    </div>
  );
};
export const NotFound = (props) => {
  return (
    <div className="aboutSection">
      <span style={{ color: "#8DD39E" }}>
        {`[_guest>~]`}
        <b>#</b>
      </span>
      <span style={{ fontSize: "12.8px" }}>{props.cmd}</span>
      <br />
      <span>{props.cmd}: Cummand Not Found</span> <br />
      Type <span style={{ color: "#b3546a" }}>help</span> and press Enter for a
      list of supported commands.
    </div>
  );
};
