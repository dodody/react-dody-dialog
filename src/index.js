import React from 'react';
import ReactDOM from 'react-dom';
import '../src/dialog.css';

import Dody from './Dody';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Dody />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
