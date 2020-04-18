import React from 'react';
import ReactDOM from 'react-dom';
import { Entry } from './entry';

export async function registerEntryModule() {
  ReactDOM.render(React.createElement(Entry), document.getElementById('root'));
}
