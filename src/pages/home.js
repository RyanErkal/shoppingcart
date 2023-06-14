import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header.js";
import style from "../styles/home.css";
import data from "../data/data";

export default function Home() {
	let datastring = JSON.stringify(data);
	return (
		<>
			<div className="Home">
				<Header />
				<h1>Home</h1>
			</div>
		</>
	);
}
