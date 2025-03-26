import { useState, createContext } from "react";
import { getAuctions } from "../services/AuctionService";

export const AuctionContext = createContext();

export const AuctionProvider = (props) => {
    const [auctions, setAuctions] = useState([])

    const searchAuction = (title) => {
        getAuctions(title)
        .then(result => {
            setAuctions(result)
        })
    }

    return (
        <AuctionContext.Provider value={{ auctions, searchAuction }}>
            {props.children}
        </AuctionContext.Provider>
    )
}