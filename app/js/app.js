import React from 'react';
import ReactDom from 'react-dom';
import Menu from './components/Global/Menu.jsx';
import Clock from './components/Global/Clock.jsx'
import ImportButton from './components/Global/ImportButton.jsx'

const element = <h1>Hello, world</h1>;

ReactDom.render(
    <ImportButton />,
	document.getElementById('app1')
);
