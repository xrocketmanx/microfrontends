import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, shouldUseDefaultHistory, initialPath }) => {
  const history = shouldUseDefaultHistory ? createBrowserHistory() : createMemoryHistory({
    initialEntries: [initialPath]
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <App history={history}/>,
    el
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      if (history.pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  };
};

export { mount };