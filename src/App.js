import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Product from "./pages/product";
import Header from "./components/header";
import Cart from "./components/cart";

export default function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/shop" element={<Shop />}>
							<Route path=":id" element={<Shop />} />
						</Route>
						<Route path="/cart" element={<Cart />} />
						<Route path="/product" element={<Product />}>
							<Route path=":id" element={<Product />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}
