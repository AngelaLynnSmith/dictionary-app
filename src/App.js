import logo from "./ALS-logo-short.JPG";
import './App.css';
import Dictionary from "./Dictionary.js";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<img
						src={logo}
						className="App-logo img-fluid"
						alt="logo"
					/>
				</header>
				<main>
					<Dictionary />
				</main>

				<footer className="App-footer">
					<small>
						This project was coded by{" "}
						<a
							href="https://github.com/AngelaLynnSmith"
							target="blank"
							rel="noopener noreferrer">
							Angela Lynn Smith,
						</a>{" "}
						is open-sourced on{" "}
						<a
							href="https://github.com/AngelaLynnSmith/dictionary-app"
							target="blank"
							rel="noopener noreferrer">
							GitHub,
						</a>{" "}
						and is hosted on{" "}
						<a
							href="https://dictionary-app-2024.netlify.app/"
							target="blank"
							rel="noopener noreferrer">
							Netlify.
						</a>
					</small>
				</footer>
			</div>
		</div>
	);
}

