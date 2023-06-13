import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import data from "../data/data.json";

export default function Shop() {
	const { id } = useParams();
	const datastring = JSON.stringify(data);
	console.log(datastring);
	return (
		<>
			<div className="Shop">
				<Header />
				<h1>Shop {id}</h1>
				{id === "all" ? <p>Shop All</p> : null}
				{id === "cpu" ? <p>Shop CPUs</p> : null}
				{id === "gpu" ? <p>Shop GPUs</p> : null}
				{id === "motherboard" ? <p>Shop Motherboards</p> : null}

				<h3>
					<Link to="../shop/all">Shop All</Link>
				</h3>
				<h3>
					<Link to="../shop/cpu">CPUs</Link>
				</h3>
				<h3>
					<Link to="../shop/gpu">GPUs</Link>
				</h3>
				<h3>
					<Link to="../shop/motherboard">Motherboards</Link>
				</h3>
				<h3>
					<Link to="../product/1">Product 1</Link>
				</h3>
				<h3>
					<Link to="../product/2">Product 2</Link>
				</h3>
				<h3>
					<Link to="../product/3">Product 3</Link>
				</h3>
			</div>
		</>
	);
}
