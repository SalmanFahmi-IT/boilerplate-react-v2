import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import routes from '../routes';
import nav from '../nav';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import Breadcrumb from './Breadcrumb';

export default function Layout() {

	let location = useLocation();
	const getcurrentroute = () => {
		let t = nav.find(res => {
			return res.url === location.pathname
		})
		if (t) return t.name;
		return ""
	}
	return (
		<main className="app">
			<div className="page">
				<NavBar />
				<SideMenu navigation={nav} />
				<div className="page-content">
					<div className="content">
						<Breadcrumb route={getcurrentroute()} location={location.pathname} />
						<div className="page-content_side">
							<div className="container">
								<Switch>
									{routes.map((route, index) => {
										return <Route exact={route.exact} key={index} {...route} />;
									})}
									<Redirect from="/" to="/dashboard" />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
