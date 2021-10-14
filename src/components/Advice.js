// Page that renders if the user does not select one of the suggested keywords

import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";
import HallOfFame from "./HallOfFame";

const Advice = (props) => {
	// create a state that will display the advice generated by the API
	const [advice, setAdvice] = useState([])
	// Deconstruct props sent from App.js
	const { question, name, difficulty, hallOfFame, score, newGame, setNewGame, resetForm } = props
	// create a variable for the useHistory Hook
	let history = useHistory()

// Calls Advice API endpoint without search query
	useEffect(() => {
		axios({
			url: `https://api.adviceslip.com/advice`,
			method: 'GET',
			dataResponse: 'json'
		}).then((res) => {
			const adviceResult = res.data.slip
			setAdvice(adviceResult.advice)
		})
	}, [])
	
	// When user clicks 'play again' button, return to homepage, change 'newGame' state, and reset all inputs in the HomePage form
	const playAgain = () => {
		history.push('/')
		setNewGame(!newGame)
		resetForm()
	}

	return (
		<>
			<div className="wrapper">
				<div className="resultsFlex">
					<div className="results">
						{/* depending on whether the user inputs their name, asks a question, etc., render the appropriate greeting */}
						{name !== "" ? (
							<div className="congrats">
								<h2>Congratulations {name}! You Have Conquered the Maze</h2>
								{/* if the difficulty was set to 'easy', make sure the next text  content is grammatically  correct*/}
								{difficulty === "easy" ? (
									<h2>That was an {difficulty} maze.  You received a score of {score} based on your efficiency.</h2>
								) : (
									<h2>That was a {difficulty} maze.  You received a score of {score} based on your efficiency.</h2>
								)}
							</div>
						) : (
							<div className="congrats">
								<h2>Congratulations! You have Conquered the Maze</h2>
								{difficulty === "easy" ? (
									<h2>That was an {difficulty} maze.  You received a score of {score} based on your efficiency.</h2>
								) : (
									<h2>That was a {difficulty} maze.  You received a score of {score} based on your efficiency.</h2>
								)}
							</div>
						)}
						{question !== "" ? (
							<p className="repeatQuestion">You asked <span>{`"${question}"`}</span></p>
						) : (
							<p className="repeatQuestion">You chose to not ask a Quesion...</p>
						)}
						<h3 className="adviceHead">The NYGMA Machine Advises You:</h3>
						<p className="advice">{advice}</p>
						<button className="repeatGame" onClick={playAgain}>Play Again?</button>
					</div>
					{/* display HallofFame component with the leaderboard, user's name, and user's score passed in as props */}
					<HallOfFame 
						hallOfFame={hallOfFame} 
						name={name} 
						score={score} 
					/>
				</div>
			</div>
		</>
	)
}

export default Advice;



// use Keyword as query param in API Call
// Math.floor(Math.random()) function to randomly select 'advice' object
// 'Advice' state to display results on page
// Button with option to play again?