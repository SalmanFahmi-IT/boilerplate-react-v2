/**
 * Account Getters & Helpers
 */

import { store } from '../redux';

export function checkAuthorization() {
	const url = window.location;
	const urlObject = new URL(url);
	const sid = urlObject.searchParams.get('sid');
	console.log('SID', sid);
}

export function getSID() {
	const { SID } = store.getState().userInfo;
	return SID;
}

export function isLogged() {
	if (getSID()) {
		return true;
	}
	return false;
}

export function getLocalStorageValue(key) {
	try {
		return localStorage.getItem(key) || null;
	} catch (e) {
		console.warn('getLocVal: exception', e, key);
	}
}

export function setLocalStorageValue(key, value) {
	try {
		localStorage.setItem(key, value);
	} catch (e) {
		console.warn('setLocVal: exception', e, key);
	}
}

export function removeLocalStorageValue(key) {
	try {
		localStorage.removeItem(key);
	} catch (e) {
		console.warn('removeLocVal: exception', e, key);
	}
}
