import "./App.css";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dice from "../images/icon-dice.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	// State
	const [advice, setAdvice] = useState("");

	// API Request
	const getAdvice = async () => {
		const response = await axios.get("https://api.adviceslip.com/advice");
		const advice2 = await response.data.slip;
		setAdvice(() => advice2);
	};

	useEffect(() => {
		getAdvice();
	}, []);

	return (
		<div className="card">
			<h1>Advice #{advice.id}</h1>
			<p>"{advice.advice}"</p>
			<img src={dividerDesktop} alt="divider" />
			<div className="dice" onClick={getAdvice}>
				<img src={dice} alt="dice" />
			</div>
		</div>
	);
}

export default App;
