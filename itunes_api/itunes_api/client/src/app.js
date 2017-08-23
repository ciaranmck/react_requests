import React from 'react';
import ReactDOM from 'react-dom';
import ITunesContainer from './containers/iTunesContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <iTunesContainer />,
    document.getElementById('app')
  );
};
