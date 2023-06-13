import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";

export default function Cart() {
	return (
		<>
			<div className="Cart">
				<Header />
				<h1>Cart</h1>
				<p>Cart is empty</p>
			</div>
		</>
	);
}
