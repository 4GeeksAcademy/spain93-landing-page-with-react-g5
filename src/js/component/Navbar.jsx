import React from "react";

export const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#343a40" }}>
            <div className="container">
                <h1 className="navbar-brand text-white mb-0">Landing Page de Jennifer Santiago y Javier Fuentes</h1>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-opacity-75" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-opacity-75" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-opacity-75" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}