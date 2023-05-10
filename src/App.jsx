import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./app.css";
import { Cover } from "./components/cover";
import { Rooms } from "./components/rooms";

function App() {
	return (
		<>
			<Cover />
			<Rooms />
		</>
	);
}

export default App;
