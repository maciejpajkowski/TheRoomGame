import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">YOU PICKED MANY THINGS</h4>
    <p className="game__text">
      You grabbed everything there was. I mean, why wouldn't you? It's not like
      it would not prove useful later on. Or maybe it actually will stay in your
      inventory until the very end of this silly game and you will feel bad,
      because it could be more useful for another poor soul that would get
      trapped in this room. Perhaps it would be his only way to get out, but now
      that you selfishly took it, he (or she) is completely doomed to fail. Are
      you happy now? It'll all be your fault. Did you even think about that for
      a second? I mean, what are you going to do with this stuff if something
      gets left unused? Sell it on eBay? Bad news for you, this game does not
      support eBay auctioning yet. Perhaps in the future. Or maybe not. What
      would be the purpose of it? And, in fact, what is the purpose of life
      itself? Are we created to become something more? Or are we just wandering
      aimlessly in the sea of hopelessness trying to understand our destiny,
      while there really is none?
    </p>
    <span className="game__question">Makes you think, eh?</span>
    <br />
    <button className="btn">It kinda does, actually</button>
    <button className="btn" onClick={() => props.handleAddEvent("shelf")}>
      Meh, I'll just take this stuff anyway
    </button>
  </div>
);
