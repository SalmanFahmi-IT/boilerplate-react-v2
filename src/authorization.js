import React from 'react';
import uuid from 'uuid';
import { Spinner } from './scenes/kit';
import { Base64 } from 'js-base64';
import { useDispatch } from 'react-redux';
import { isLogged } from './core/utils/auth';

export const tokenInjector = (Component) => (props) => {
	if (!isLogged()) {
		const local_url = process.env.REACT_APP_FRONT_API_LOCATION;
		const login_url = process.env.REACT_APP_LOGIN_URL;
		const iid = process.env.REACT_APP_FRONT_API_IID;
		const aid = uuid.v4();
		const hostUrl = `l=${local_url}|iid=${iid}|aid=${aid}`;
		const codedUrl = Base64.encode(hostUrl);
		window.location.href = `${login_url}?hh=${codedUrl}`;
		return <Spinner />;
	}
	return <Component {...props} />;
};

export const isToken = (Component) => (props) => {
	const dispatch = useDispatch();
	const url = window.location;
	const urlObject = new URL(url);
	const sid = urlObject.searchParams.get('sid');

	if (sid && sid.length > 0) {
		dispatch({ type: 'CHECK_AUTHORIZATION', sid: sid });
	}
	return <Component {...props} />;
};
