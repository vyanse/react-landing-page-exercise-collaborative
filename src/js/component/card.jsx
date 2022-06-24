import React from "react";

//create your first component

const Cards = () => {
	return (
        <div className="py-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100 text-center shadow-sm">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" 
                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#B5B2B2"/><text x="40%" y="50%" fill="#eceeef" dy=".3em">500 x 325</text></svg>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Card Title</strong></h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitabus neque.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center shadow-sm">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" 
                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#B5B2B2"/><text x="40%" y="50%" fill="#eceeef" dy=".3em">500 x 325</text></svg>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Card Title</strong></h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente,
                            tempore debitis beatea culpa natus architecto.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center shadow-sm">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" 
                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#B5B2B2"/><text x="40%" y="50%" fill="#eceeef" dy=".3em">500 x 325</text></svg>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Card Title</strong></h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitabus neque.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center shadow-sm">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" 
                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#B5B2B2"/><text x="40%" y="50%" fill="#eceeef" dy=".3em">500 x 325</text></svg>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Card Title</strong></h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente,
                            tempore debitis beatea culpa natus architecto.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
	);
};


export default Cards;