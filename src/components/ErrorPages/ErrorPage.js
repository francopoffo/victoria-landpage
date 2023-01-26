import React from "react";
import classes from "./ErrorPage.module.css";

function ErrorPage(props) {
  return (
    <div className={classes.error}>
      <h1>{props.error}</h1>
    </div>
  );
}

export default ErrorPage;
