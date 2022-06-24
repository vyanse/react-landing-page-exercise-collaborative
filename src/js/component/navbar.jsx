import React from "react";

//create your first component
const Nabvar = () => {
	return (
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <a class="navbar-brand" href="#">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
	);
};

export default Nabvar;