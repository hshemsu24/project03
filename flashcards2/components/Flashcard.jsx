import React, {useState} from "react";

const Flashcard = ({cardFacts}) => {

    const [CurInd, setCurInd] = useState(0);
    const [ShowQ, setShowQ] = useState(true);

    const flipCard = () => {
        setShowQ(!ShowQ);
    }

    const nextCard = () => {
        const newInd = Math.floor(Math.random() * cardFacts.length);
        setCurInd(newInd);
        setShowQ(true);
    }

    let card;

    if (ShowQ) {
        card = cardFacts[CurInd].question;
        //buttonText = 'Show Answer';
      } else {
        card = cardFacts[CurInd].answer;
        //buttonText = 'Show Question';
      }

    return(
        <div className="card">
            
            
                <button className="flashcard" onClick = {flipCard}>{card}</button> 
           




            <div>
                <button onClick={flipCard}>Flip</button>
                <button onClick={nextCard}>Next</button>
            </div>
        </div>
    )
}


export default Flashcard;