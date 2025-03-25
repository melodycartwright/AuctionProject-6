import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import AuctionList from "./pages/AuctionList"
import AuctionDetails from "./pages/AuctionDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AuctionList />} />
        <Route path="/auctions/:id" element={<AuctionDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
