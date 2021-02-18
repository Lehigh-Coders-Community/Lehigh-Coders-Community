import React from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import PropTypes from "prop-types";

// Available to all MDX pages wrapped by one of the MDX layouts
const shortcodes = {
	Link
};

export default function ShortcodeProvider({ children, additionalShortcodes = {} }) {
	return (
		<MDXProvider components={{ ...shortcodes, ...additionalShortcodes }}>
			{children}
		</MDXProvider>
	);
}

ShortcodeProvider.propTypes = {
	children: PropTypes.element.isRequired,
	additionalShortcodes: PropTypes.object
};