import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import data from "../data/data.json";

export default function Shop() {
	const { id } = useParams();
	/* console.log(data); */

	function JSONProducts(props) {
		if (props.props === "all") {
			return <div className="all">ALL</div>;
		} else if (props.props === "cpu") {
			return <div className="cpu">CPUS</div>;
		} else if (props.props === "gpu") {
			return <div className="gpu">GPUS</div>;
		} else if (props.props === "motherboard") {
			return <div className="motherboard">MOTHERBOARDS</div>;
		}
	}

	/* 	function DisplayAll() {
		console.log(JSON.stringify(data));
	}

	function DisplayCpus() {
		console.log(JSON.stringify(data.cpus));
	}

	function DisplayGpus() {
		return <div className="gpu">GPUS</div>;
	}

	function DisplayMotherboards() {
		console.log(JSON.stringify(data.motherboards));
	} */

	return (
		<>
			<div className="Shop">
				<Header />
				<h1>Shop {id}</h1>
				<div className="Shop-Products">
					<h3>
						<Link to="../shop/all">Shop All</Link>
					</h3>
					<h3>
						<Link to="../shop/cpu">Shop CPUs</Link>
					</h3>
					<h3>
						<Link to="../shop/gpu">Shop GPUs</Link>
					</h3>
					<h3>
						<Link to="../shop/motherboard">Shop Motherboards</Link>
					</h3>
				</div>
				<div className="Products">
					<JSONProducts props={id} />
				</div>
			</div>
		</>
	);
}
