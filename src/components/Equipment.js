import React from 'react';

export default (props) => (
  <div className="eq-item">
    <p>{props.count + 1}. {props.eqName}</p>
  </div>
);