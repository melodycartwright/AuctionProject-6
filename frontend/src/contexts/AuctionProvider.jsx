import { useState, createContext, useEffect, useContext } from "react";
import { getAllCarAuctions } from "../services/NewAuctionService";


const AuctionContext = createContext();

export const AuctionProvider = (props) => {
    
    const [auctions, setAuctions] = useState([])
    const [search, setSearch] = useState('')


    
    useEffect(() => {
            
            getAllCarAuctions().then(result => setAuctions(result))
            
        
    }, [])

    const resetAuctions = async () => {
        const allAuctions = await getAllCarAuctions()
        setAuctions(allAuctions)
    }

    const searchAuction = async () => {
        const data = await getAllCarAuctions(search)
        setAuctions(data)
    }

    return (
        <AuctionContext.Provider value={{ auctions, searchAuction, search, setSearch, resetAuctions }}>
            {props.children}
        </AuctionContext.Provider>
    )
}

export const useAuctionContext = () => useContext(AuctionContext)

