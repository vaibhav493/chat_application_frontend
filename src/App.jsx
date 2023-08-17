import MainBody from "./Components/MainBody";
import "./App.css";
import Login from "./Components/Login";

function App() {
	console.log("inside app");
	return (
		<div className="app">
			<MainBody />
			{/* <Login /> */}
		</div>
	);
}

export default App;
