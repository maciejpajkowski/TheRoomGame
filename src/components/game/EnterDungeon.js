import React from "react";

export default props => (
  <div>
    <p>
      You have entered the dungeon. It is slightly dark, but you can still see
      well enough.
    </p>
    <p>
      After a few minutes of walking forward, you find a corridor to the left.
      The tunnel is well-lit, however after a few meters it turns right. Do you
      want to keep moving forward, or turn left to check out the corridor?
    </p>
    <p>What would you like to do?</p>
    <button onClick>Go forward</button>
    <button>Go left</button>
  </div>
);
