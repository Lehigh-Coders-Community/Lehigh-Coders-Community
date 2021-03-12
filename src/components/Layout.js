import { Link } from "gatsby";
import React, { useState } from "react";
import PropTypes from "prop-types";

/** This wraps every page globally so that it does not re-render for internal navigation */
export default function Layout({ children }) {

	const [drawerOpen, setDrawerOpen] = useState(false);

	function toggleDrawer() {
		setDrawerOpen(!drawerOpen);
	}

	const NavLink = ({ children, ...props }) => (
		<Link {...props} className="px-4 py-4 lg:mx-2 lg:py-2 lg:my-2 block hover:bg-gray-200" onClick={toggleDrawer}>{children}</Link>
	);

	const socialLinks = (
		<>
			<a>Social Link</a>
			<a>Social Link</a>
			<a>Social Link</a>
		</>
	);

	const navLinks = (
		<>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/activities">Activities</NavLink>
		</>
	);

	return (
		<>
			<header>
				<div className="bg-gradient-to-r from-blue-400 to-blue-500 h-32"></div>
				<div className="mx-auto lg:flex max-w-5xl">
					<div className="h-56 w-56 mx-auto -mt-28 bg-white rounded-full lg:mx-0"></div>
					<div className="lg:flex-grow lg:ml-4">
						<div className="lg:flex align-items-center border-b align-items-center">
							<h1 className="mt-4 lg:mt-0 text-2xl font-bold text-center lg:text-left p-4 lg:flex-grow">Lehigh Coders Community</h1>
							<div className="hidden lg:flex text-right lg:align-items-center items-center">{socialLinks}</div>
						</div>
						<nav className="hidden lg:flex">
							{navLinks}
						</nav>
					</div>
				</div>
			</header>
			<div className={`fixed w-screen bg-white transition-all transform lg:hidden ${drawerOpen ? "translate-y-0 bottom-0" : "translate-y-full bottom-24"}`}>
				<div className="px-4 h-24 flex items-center">
					<div className="flex flex-auto">
						{socialLinks}
					</div>
					<button className="px-4 py-4 rounded-md bg-gray-100" onClick={toggleDrawer}>Menu</button>
				</div>
				<div className="bg-gray-100">
					{navLinks}
				</div>
			</div>
			<main className="max-w-5xl mx-auto p-4 my-2 flex-auto">{children}</main>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.element.isRequired
};