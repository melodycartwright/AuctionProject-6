// Middleware
app.use(express.json());

app.use("/api/auctions", auctionRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
