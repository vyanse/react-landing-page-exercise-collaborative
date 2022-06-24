import React from "react";

const data = {
	navbarTitle: "Start Bootstrap",
	navbarHome: "Home",
	navbarAbout: "About",
    navbarServices: "Services",
    navbarContact: "Contact"
};

//create your first component
const Nabvar = () => {
	return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{data.navbarTitle}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{data.navbarHome}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{data.navbarAbout}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{data.navbarServices}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{data.navbarContact}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
	);
};

export default Nabvar;