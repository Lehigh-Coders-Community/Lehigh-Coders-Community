import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import styles from "./Layout.module.scss";

/** This wraps every page globally so that it does not re-render for internal navigation */
export default function Layout({ children }) {
	return (
		<>
			<header className={styles.header}>
				<h1>ACM LCC</h1>
				<nav>
					<Link to="/about">About</Link>
					<Link to="/activities">Activities</Link>
				</nav>
			</header>
			<main>{children}</main>
			<footer>
				<small>&copy; {new Date().getFullYear()} Lehigh Coders Community</small>
			</footer>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.element.isRequired
};