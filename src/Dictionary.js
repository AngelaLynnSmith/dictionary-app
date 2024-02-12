import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    
    function handleResponse(response) {
        console.log(response.data[0]);

    }

	function search(event) {
		event.preventDefault();

		let apiKey = `cc8ad09bc07492ceeb391dfbot84812f`;
		let apiUrl =
            `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
	}   

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input
					tpe="search"
					onChange={handleKeywordChange}
				/>
			</form>
		</div>
	);
}
