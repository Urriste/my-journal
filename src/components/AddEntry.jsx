import React from "react";
import ReactDOM from "react-dom";

const AddEntry = (props) => {
  if (!props.open) return null;

  return ReactDOM.createPortal(
    <div>{props.children}</div>,
    document.getElementById("portal-root")
  );
};

export default AddEntry;
