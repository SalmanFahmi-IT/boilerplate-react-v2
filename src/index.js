import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './core/redux';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { getSID, isLogged, setLocalStorageValue, removeLocalStorageValue } from './core/utils/auth';

store.subscribe(() => {
	if (isLogged()) {
		setLocalStorageValue('SID', getSID());
	} else {
		removeLocalStorageValue('SID');
	}
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
