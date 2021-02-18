import React from "react";
import { Helmet } from "react-helmet";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <h1>ACM LCC</h1>
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}