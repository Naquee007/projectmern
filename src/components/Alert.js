import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase( ) + lower.slice(1);
  };

  return (
    <div>
      {props.alert && ( // Add curly braces to evaluate the condition
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {capitalize(props.alert.type)} : {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
