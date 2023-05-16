import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//create your first component
const Home = () => {
	const card = [
		{
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit nec turpis vitae commodo. Nulla vitae gravida nibh. Proin eget placerat libero.",
			button: <a className="btn btn-primary" href="#">Call to action</a>,
			image: "https://placehold.jp/500x325.png",
			title: "Hello world"
		},
		{
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit nec turpis vitae commodo. Nulla vitae gravida nibh. Proin eget placerat libero.",
			button: <a className="btn btn-primary" href="#">Call to action</a>,
			image: "https://placehold.jp/500x325.png",
			title: "Hello world"
		},
		{
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit nec turpis vitae commodo. Nulla vitae gravida nibh. Proin eget placerat libero.",
			button: <a className="btn btn-primary" href="#">Call to action</a>,
			image: "https://placehold.jp/500x325.png",
			title: "Hello world"
		},
		{
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit nec turpis vitae commodo. Nulla vitae gravida nibh. Proin eget placerat libero.",
			button: <a className="btn btn-primary" href="#">Call to action</a>,
			image: "https://placehold.jp/500x325.png",
			title: "Hello world"
		}
	]
	return <>
		<Navbar/>
		<div className="container" style={{ marginTop: "6em" }}>
			<Jumbotron/>
			<div className="row mt-3">
				{card.map((c, key) => <div key={key} className={`col-md-${12/card.length}`}>
					<Card image={c.image} title={`${c.title} ${key+1}`} text={c.text} button={c.button}/>
					</div>)}
			</div>
		</div>
		<Footer/>
	</>
};

export default Home;
