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
		<Link {...props} className="px-4 py-4 block hover:bg-gray-200" onClick={toggleDrawer}>{children}</Link>
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
			<NavLink to="/about">About</NavLink>
			<NavLink to="/activities">Activities</NavLink>
		</>
	);

	return (
		<>
			<header>
				<div className="bg-blue-400 h-32">
					<div className="hidden">{socialLinks}</div>
				</div>
				<div className="container mx-auto px-2 mb-4 border-b py-4">
					<div className="h-56 w-56 mx-auto -mt-28 bg-white rounded-full shadow-md px-1 py-1"></div>
					<h1 className="mt-8 text-2xl font-bold text-center">Lehigh Coders Community</h1>
				</div>
			</header>
			<p className="text-center">(breadcrumbs)</p>
			<div className={`fixed w-screen bg-white transition-all transform ${drawerOpen ? "translate-y-0 bottom-0" : "translate-y-full bottom-24"}`}>
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
			{/* <div className={`bg-black bg-opacity-50 fixed top-0 w-full h-full z-0 ${drawerOpen ? "block": "hidden"}`} onClick={toggleDrawer}></div> */}
			<main className="container mx-auto px-2 py-2 my-8 flex-auto">{children}</main>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.element.isRequired
};