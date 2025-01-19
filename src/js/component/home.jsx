import React from "react";
import { Card } from "./Card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<Card />
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<Footer />
		</div>
	);
};

export default Home;
