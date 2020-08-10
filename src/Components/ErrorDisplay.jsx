import React from "react";

function ErrorDisplay(props) {
  const { err } = props;
  const { status, msg } = err;
  return (
    <div style={{ margin: "40px" }}>
      <section>
        <center>
          <p>
            Error: {status}, {msg}
          </p>
        </center>
      </section>
    </div>
  );
}

export default ErrorDisplay;
