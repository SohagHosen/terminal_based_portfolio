import React from 'react'
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div>
      <span>
        Sorry, something went wrong. <br/>
        <Link to="/" style={{ color: "#55E32C" }}>
          go back
        </Link>
        ?
      </span>
    </div>
  );
}

export default ErrorPage
