import React, { useRef } from "react";
import Card from "./Card";
import axios from "axios";
import CardButton from "./CardButton"
import { useEffect, useState } from "react";

const CardList = () => {

    const [deckId, newDeckId] = useState([])
    const [deck, newDeck] = useState([])


        useEffect(function fetchDeckId(){
            async function fetchDeck() {
                const deck = await axios.get(
                    "https://deckofcardsapi.com/api/deck/new/"
                )
                .then(data => { 
                     newDeckId(data.data.deck_id) 
                }
                    )
                    fetchDeck()
            }
            
        }, [deckId])

        
    useEffect(function drawCard (deckId) {
        console.log(deckId)
        async function fetchCard(){
            const card = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            newDeck(card.data.cards[0].image)
        }
        fetchCard()
    })
    
    let cardStack = deck.map(card => <Card src={card}/>)

    return (
        <div>
        <button>Add</button>
        {cardStack}
        </div>
    )
}



export default CardList;