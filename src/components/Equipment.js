import React from "react";

export default props => (
  <span className="equipment__item">
    {props.count === 0 ? props.eqName : ", " + props.eqName}
    {/* {props.count + 1}. {props.eqName} */}
  </span>
);
