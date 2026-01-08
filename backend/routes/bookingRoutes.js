router.post("/create", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const savedBooking = await booking.save();

    res.status(201).json(savedBooking); // ✅ RETURN JSON WITH _id
  } catch (err) {
    res.status(500).json({ error: "Booking failed" });
  }
});
