import React, {useState} from "react";

const Flashcard = ({cardFacts}) => {

    const [CurInd, setCurInd] = useState(0);
    const [ShowQ, setShowQ] = useState(true);
    const [userInput, setUserInput] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);

    const flipCard = () => {
        setShowQ(!ShowQ);
        setIsCorrect(null);
    }

    const nextCard = () => {
        const newInd = (CurInd+1) % cardFacts.length;
        setCurInd(newInd);
        setShowQ(true);
        setIsCorrect(null);
    }

    const checkAnswer = () => {
        const correctAnswer = cardFacts[CurInd].answer;
        if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
          setIsCorrect(true);
          setCurrentStreak(currentStreak + 1);
      
          // Update the longest streak if the current streak is longer
          if (currentStreak + 1 > longestStreak) {
            setLongestStreak(currentStreak + 1);
          }
        } else {
          setIsCorrect(false);
          setCurrentStreak(0); // Reset the current streak on an incorrect answer
        }
    };

    const prevCard = () => {
        const newInd = (CurInd - 1 + cardFacts.length) % cardFacts.length;
        setCurInd(newInd);
        setShowQ(true);
        setIsCorrect(null); // Reset correctness feedback when moving to the previous card
      };

    let card;

    if (ShowQ) {
        card = cardFacts[CurInd].question;
        //buttonText = 'Show Answer';
      } else {
        card = cardFacts[CurInd].answer;
        //buttonText = 'Show Question';
      }

    return(
        // <div className="card">            
        //         <button className="flashcard" onClick = {flipCard}>{card}</button> 
           
        //     <div>
        //         <button onClick={flipCard}>Flip</button>
        //         <button onClick={nextCard}>Next</button>
        //     </div>
        // </div>
        
        <div >

            <div className="streak">
                <p>Current Streak: {currentStreak}</p>
                <p>Longest Streak: {longestStreak}</p>
            </div>

            <div className={`inner-card ${isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : ""}`}>
                <div className="flip-card-inner">
                    {/* <div className="flip-card-front">
                        <h2>Question</h2>
                        <div className="card-content">{ShowQ ? cardFacts[CurInd].question : ""}</div>
                    </div>
                    <div className="flip-card-back">
                        <h2>Answer</h2>
                        <div className="card-content">{ShowQ ? "" : cardFacts[CurInd].answer}</div>
                    </div> */}
                     <div className="flashcard-label">
                        {ShowQ ? "Question" : "Answer"}
                        </div>
                        <div className="card-content">
                        {ShowQ ? cardFacts[CurInd].question : cardFacts[CurInd].answer}
                    </div>
                </div>
            </div>
        
        <input
          type="text"
          placeholder="Your guess"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="show-answer" onClick={flipCard}>Show {ShowQ ? "Answer" : "Question"}</button>
        <button onClick={checkAnswer}>Submit</button>
        <button className="back-button" onClick={prevCard}>Back</button>
        <button className="next-button" onClick={nextCard}>Next</button>
      </div>
    )
}


export default Flashcard;