import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/media/images/logo-marocleasing.svg';
import logo1 from '../assets/media/images/logos/logonewbcp.png';


function NavBar({ toggle, hideMenu, history }, ...props) {
	return (
		<div className="page-header">
			<header>
				<div className="header-nav">
					<div className="header-nav_content">
						<div className="header-nav_brand">
							<div className="nav-header_inner">
								<div className="logo logo_theme_ml">
									<a href="/dashboard.html">
										<img
											className="hide-for-small-only"
											src={logo}
											alt="Maroc Leasing"
										/>
										<img
											className="show-for-small-only"
											src={logo}
											alt="Maroc Leasing"
										/>
									</a>
								</div>
								<div className="c-nav__humbergermenu">
									<div>
										<span>Menu</span>
										<div className="c-nav__icon">
											<div>
												<span></span>
												<span></span>
												<span></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="cta-primary_fixed">
							<Link className="button hasicon_left secondary" to="/newproposition">
								<i className="c-fmlnet__add-proposal"></i>
								<span>Nouvelle proposition</span>
							</Link>
						</div>
						<div className="header-nav_navbar float-right">
							<div className="c-nav-widgets_menu">
								<ul className="c-nav-widgets_content">
									<li className="c-nav-widgets_dropdown __user-nav float-right">
										<div>
											<div className="c-nav-widgets_toggle js_to-toggled">
												<div className="user-pic">
													<img src={logo1} />
												</div>
												<div className="user-nav_infos">
													<span className="user-name">testAS testAS</span>
													<span className="user-office">AUTOHALL</span>
												</div>
												<i className="c-fmlnet__chevron--down"></i>
											</div>
											<div className="c-nav-widgets_dropdown_content">
												<div className="c-nav-widgets_dropdown_inner">
													<ul>
														<li>
															<a>Se déconnecter</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li className="c-nav-widgets_dropdown float-right">
										<div>
											<div className="c-nav-widgets_toggle js_to-toggled">
												<div className="nav-icon_notification">
													<span className="nav-icon_content">
														<i className="c-fmlnet__header--notification"></i>
														<span className="nav-badge">0</span>
													</span>
												</div>
											</div>
											<div className="c-nav-widgets_dropdown_content">
												<div className="c-nav-widgets_dropdown_inner">
													<div className="c-notifications_widget">
														<div className="c-notifications_content">
															<div className="state-card_empty">
																<span className="state-card_ico"></span>
																<h3 className="state-card_ttr sm-p-0 sm-m-0">Notifications</h3>
																<p className="sm-p-0 sm-m-0">La fonctionnalité demandée sera bientôt disponible.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="c-nav-widgets_dropdown float-right">
										<div>
											<div className="c-nav-widgets_toggle js_to-toggled">
												<div className="nav-icon_message">
													<span className="nav-icon_content">
														<i className="c-fmlnet__chat"></i>
														<span className="nav-badge">0</span>
													</span>
												</div>
											</div>
											<div className="c-nav-widgets_dropdown_content">
												<div className="c-nav-widgets_dropdown_inner">
													<div className="c-notifications_widget">
														<div className="c-notifications_content">
															<div className="state-card_empty">
																<span className="state-card_ico"></span>
																<h3 className="state-card_ttr sm-p-0 sm-m-0">Messages</h3>
																<p className="sm-p-0 sm-m-0">La fonctionnalité demandée sera bientôt disponible.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="c-nav-widgets_dropdown hotline-notification float-right">
										<div>
											<div className="c-nav-widgets_toggle js_to-toggled">
												<div className="nav-icon_message">
													<span className="nav-icon_content">
														<i className="c-fmlnet__hotline"></i>
													</span>
												</div>
											</div>
											<div className="c-nav-widgets_dropdown_content">
												<div className="c-nav-widgets_dropdown_inner">
													<div className="c-notifications_widget">
														<div className="c-notifications_content">
															<div className="state-card_empty">
																<span className="state-card_ico"></span>
																<h3 className="state-card_ttr sm-p-0 sm-m-0">Besoin d'aides ?</h3>
																<ul>
																	<li>
																		<a className="mail c-fmlnet__email" href="mailto:wajiha-hotline@marocleasing.ma">
																			wajiha-hotline@marocleasing.ma
																		</a>
																	</li>
																	<li>
																		<a className="tel" href="tel:0522422000">
																			05 22 42 20 00
																		</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default NavBar;
