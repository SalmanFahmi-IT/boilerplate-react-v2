import React from 'react';
import { Link } from 'react-router-dom';

function SideBar({ navigation = [] }) {
	return (
		<div className="page-sidebar page-sidebar_wide">
			<div className="sidebar">
				<div className="nav nav_ready nav__theme_ml">
					<div className="nav__global">
						<div className="nav__inner">
							<div className="nav-primary">
								<nav>
									<ul>
										{navigation.map(({ name, url, icon }, idx) => (
											<li>
												<Link to={url}>
													<i className={`c-fmlnet__${icon}`} />
													<span>{name}</span>
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
