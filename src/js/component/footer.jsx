import React from "react";

const texts ={
    description : "Copyright © Your Website 2019"
}

const Footers = () => {
    return (
        <div className="container">
            <div className="text-center p-3 fixed-bottom bg-dark">
                <p className="text-white">{texts.description}</p>
            </div>    
        </div>    
    );
}

export default Footers;