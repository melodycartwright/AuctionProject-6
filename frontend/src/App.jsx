import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import AuctionList from "./pages/AuctionList"
import AuctionDetails from "./pages/AuctionDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AuctionForm from "./pages/AuctionForm"
import { AuctionProvider } from "./contexts/AuctionProvider"


function App() {
  return (
    <AuctionProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AuctionList />} />
        <Route path="/create" element={<AuctionForm />} />
        <Route path="/auctions/:id" element={<AuctionDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </AuctionProvider>
  )
}

export default App
