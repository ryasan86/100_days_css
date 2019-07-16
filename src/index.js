import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App';

AOS.init({ duration: 800, easing: 'ease' });
ReactDOM.render(<App />, document.getElementById('root'));
