import React from "react";
import Nabvar from "./navbar";
import Jumbotrom from "./main";
import Cards from "./card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<header>
				<Nabvar/>
			</header>
			<main className="container">
				<Jumbotrom/>
				<Cards/>
			</main>
			<footer class="container">
				<Footer/>
			</footer>
		</div>
	);
};

export default Home;
