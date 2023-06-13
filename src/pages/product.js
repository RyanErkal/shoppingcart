import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../components/header.js";

export default function Product() {
	const { id } = useParams();
	return (
		<>
			<Header />
			<div className="Product">
				<h1>Product {id}</h1>
			</div>
		</>
	);
}
