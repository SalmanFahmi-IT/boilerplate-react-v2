import React from 'react';

function Breadcrumb(props) {
	return (
		<div className="page-content_header">
			<div className="container">
				<div className="page-content_inner">
					<div className="c-breadcrumb">
						<ul className="c-breadcrumb__list">
							<li>
								<a href="">
									<span>Accueil</span>
								</a>
							</li>
							<li>
								<span>{props.location}</span>
							</li>
						</ul>
					</div>
					<div className="page-content_header__title">
						<h1>{props.route}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Breadcrumb;
