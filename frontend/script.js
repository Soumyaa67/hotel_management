document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const roomRate = document.getElementById("roomType").value;
  const days = document.getElementById("days").value;

  if (days <= 0) {
    alert("Invalid days");
    return;
  }

  const totalCost = roomRate * days;
  document.getElementById("cost").innerText =
    "Total Cost: ₹" + totalCost;

  const response = await fetch("http://localhost:3000/booking/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, roomType: roomRate, days, totalCost })
  });

  if (response.ok) {
    document.getElementById("message").innerText =
      "✅ Booking successful!";
  }
});
