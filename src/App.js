import React from 'react';
// import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Layout from './layouts/DefaultLayout';
import { tokenInjector, isToken } from './authorization';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/" component={isToken(tokenInjector(Layout))} />
			</Switch>
		</Router>
	);
}
