import React from "react";


const CardButton = ({deckId, addCard}) => {
        
    let handleSubmit = () =>{
        console.log(deckId)
        addCard(deckId)
    }

    return(
        <button onClick={handleSubmit}>Add Card</button>
    )

}


export default CardButton;