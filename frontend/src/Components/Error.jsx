import React from "react";
import { Link } from "react-router-dom";

// import Navbar from "./Navbar";

export const Error = () => {
    return (
        <section id="error-page">
            <div className="content">
            <h2 className="header">404</h2>
            <h4>Sorry! Page not found</h4>
            <p>
                Oops! It seems like the page you're trying to access doesn't exist.
                if you believe there's a issue, feel free to report it, and we'll
                look into it.
            </p>
            <div className="btns">
                <Link to="/">return Home</Link> <br /><br />
                <Link to="/contact-us">Report Problem</Link>
            </div>
            </div>
        </section>
    )
}