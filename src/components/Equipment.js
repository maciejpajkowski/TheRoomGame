import React from "react";

export default props => (
  <div>
    <p className="equipment__item">
      {props.count + 1}. {props.eqName}
    </p>
  </div>
);
