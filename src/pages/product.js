import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../components/header.js";

export default function Product() {
	const { id } = useParams();
	return (
		<>
			<Header />
			<div className="Product">
				<h1>Product {id}</h1>
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
