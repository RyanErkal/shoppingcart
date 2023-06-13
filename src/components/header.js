import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Header() {
	return (
		<>
			<div className="Header">
				<nav>
					<Link to="/">Home</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/cart">Cart</Link>
				</nav>
			</div>
		</>
	);
}
