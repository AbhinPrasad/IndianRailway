import React from "react";

function Form(props) {
	const { service } = props;

	return (
		<form>
			{service == "trainStatus" && (
				<>
					<input
						placeholder="Train No"
						className="input"
						name="trainNo"
						style={{ marginLeft: "40px" }}
					/>
					<input
						style={{ marginLeft: "30px" }}
						placeholder="Date"
						type="date"
						className="input"
						name="trainNo"
					/>
				</>
			)}
			{service == "stationStatus" && (
				<>
					<input
						placeholder="Station Code"
						className="input"
						name="stationCode"
						style={{ marginLeft: "40px" }}
					/>
				</>
			)}
			{service == "trainFare" && (
				<>
					<input
						placeholder="Train No"
						className="input"
						name="trainNo"
						style={{ marginLeft: "40px" }}
					/>
					<select
						placeholder="Train No"
						className="input"
						name="trainNo"
						style={{
							marginLeft: "40px",
							height: "50px",
							width: "220px"
						}}>
						<option value="GN">GN</option>
						<option value="CK">CK</option>
					</select>
					<input
						placeholder="Station To"
						className="input"
						name="stationTo"
						style={{ marginLeft: "40px", marginTop: "20px" }}
					/>
					<input
						placeholder="Station From"
						className="input"
						name="stationFrom"
						style={{ marginLeft: "40px" }}
					/>
				</>
			)}

			<button className="cta" style={{ marginLeft: "20px" }}>
				<span>Submit</span>
				<svg viewBox="0 0 13 10" height="10px" width="15px">
					<path d="M1,5 L11,5"></path>
					<polyline points="8 1 12 5 8 9"></polyline>
				</svg>
			</button>
		</form>
	);
}

export default Form;
