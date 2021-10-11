// import { useState } from 'react';
import { Link } from 'react-router-dom'

const HomePage = (props) => {
	//set state for all inputs and selects so that we can control our inputs
	const { setUserName, setUserQuestion, setUserKeyword, setMazeDifficulty } = props
	const { userName, userQuestion, userKeyWord, mazeDifficulty } = props

	const handleTopicChange = (event) => {
		setUserKeyword(event.target.value)
	}

	const handleDifficultyChange = (event) => {
		setMazeDifficulty(event.target.value)
	}

	const handleUserName = (event) => {
		setUserName(event.target.value)
	}

	const handleQuestion = (event) => {
		setUserQuestion(event.target.value)
	}

	return (
		<>
			<div className="homePage">
				<div className="wrapper">
					<p className="description">Are you esurient for enlightnment? Have an insatiable appetite for information? Craving knowledge? The <span>nygma</span> Machine can provide all the answers. But first, you must prove yourself worthy...</p>
					<form onSubmit={props.submitPrompts}>
						<fieldset>
							<label htmlFor="userName">What is your name?</label>
							<input type="text" name="userName" id="userName" value={userName} onChange={handleUserName} />
						</fieldset>
						<fieldset>
							<label htmlFor="userKeyword">What do you wish to learn about?</label>
							<select name="userKeyword" id="userKeyword" onChange={handleTopicChange} value={userKeyWord}>
								<option value="etc" disabled>Select One</option>
								<option value="life">Life</option>
								<option value="love">Love</option>
								<option value="parent">Family</option>
								<option value="time">Time</option>
								<option value="money">Finances</option>
								<option value="etc">Something Else</option>
							</select>
						</fieldset>
						{/* <fieldset>
							<label htmlFor="mazeDifficulty">What difficulty do you want?</label>
							<select name="mazeDifficulty" id="mazeDifficulty" onChange={handleDifficultyChange} value={mazeDifficulty}>
								<option value="default" disabled>Select One</option>
								<option value="easy">Easy</option>
								<option value="medium">Medium</option>
								<option value="hard">Hard</option>
							</select>
						</fieldset> */}
						<fieldset>
							<label htmlFor="userQuestion">What do you want to ask <span>The Nygma Machine</span>? </label>
							<input type="text" name="userQuestion" id="userQuestion" onChange={handleQuestion} value={userQuestion} />
						</fieldset>
						<fieldset>
							<label 
								htmlFor="easy"
							>Easy </label>
							<input 
								name="mazeDifficulty"
								type="radio" 
								value="easy"
								id="easy"
								onChange={handleDifficultyChange}
								checked={mazeDifficulty === "easy"}
							/>
							<label 
								htmlFor="medium"
							>Medium </label>
							<input 
								name="mazeDifficulty"
								type="radio" 
								value="medium"
								id="medium"
								onChange={handleDifficultyChange}
								checked={mazeDifficulty === "medium"}
							/>

							<label 
								htmlFor="hard"
							>Hard </label>
							<input 
								name="mazeDifficulty"
								type="radio" 
								value="hard"
								id="hard"
								onChange={handleDifficultyChange}
								checked={mazeDifficulty === "hard"}
							/>
							
						</fieldset>
						<Link to="/Maze">
							<button type="Submit">Submit</button>
						</Link>
					</form>
				</div>
			</div>
		</>
	)
}
export default HomePage;