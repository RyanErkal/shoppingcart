import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import data from "../data/data.json";

export default function Shop() {
	const { id } = useParams();
	console.log(data);

	function JSONProducts(props) {
		if (props.props === "all") {
			<DisplayAll />;
		} else if (props.props === "cpu") {
			<DisplayCpus />;
		} else if (props.props === "gpu") {
			<DisplayGpus />;
		} else if (props.props === "motherboard") {
			<DisplayMotherboards />;
		}
	}

	function DisplayAll() {
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
	}

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
						<Link to="../shop/cpu">CPUs</Link>
					</h3>
					<h3>
						<Link to="../shop/gpu">GPUs</Link>
					</h3>
					<h3>
						<Link to="../shop/motherboard">Motherboards</Link>
					</h3>
				</div>
				<div className="Products">
					<JSONProducts props={id} />
				</div>
			</div>
		</>
	);
}
