import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0); //Scroll til toppen af siden
    });
    return () => {
      unlisten();
    }
  }, [history, children]);

  return <Fragment>{children}</Fragment>; //Fragment for at groupe children uden brug af flere notes til Children
}

export default withRouter(ScrollToTop);