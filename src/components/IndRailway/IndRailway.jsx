import React, { useState } from "react";
import "./IndRailway.css";
import Logo from "../../assets";
import Form from "../Form";

function IndRailway() {
	const [service, setService] = useState("trainStatus");

	return (
		<div className="container">
			<div className="left__section">
				<h1 className="main__text">Welcome to Indian Railways</h1>
				<img className="logo" src={Logo} />
			</div>
			<div className="right__section">
				<h3 className="right__section-heading">
					For more enquiries visit the official{" "}
					<a href="http://www.indianrail.gov.in">Indian Railway Website</a>
				</h3>

				<div className="button__container">
					<button
						className="button"
						onClick={() => setService("trainStatus")}>
						Train Status
					</button>
					<button
						className="button"
						onClick={() => setService("stationStatus")}>
						Station Status
					</button>
					<button
						className="button"
						onClick={() => setService("trainFare")}>
						Train Fare
					</button>
				</div>

				<div className="form__container">
					<Form service={service} />
				</div>
			</div>
		</div>
	);
}

export default IndRailway;
