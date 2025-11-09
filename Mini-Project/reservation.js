document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservationForm");
  const confirmation = document.getElementById("confirmation");
  const confirmText = document.getElementById("confirmText");
  const newReservation = document.getElementById("newReservation");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    if (!name || !email || !date || !time || !guests) {
      alert("Please fill in all fields!");
      return;
    }

    confirmText.innerHTML = `
      Thank you <strong>${name}</strong>!<br>
      Your reservation for <strong>${guests}</strong> guest(s)
      on <strong>${date}</strong> at <strong>${time}</strong> 
      has been confirmed.<br>
      A confirmation email will be sent to <strong>${email}</strong>.
    `;

    form.classList.add("hidden");
    confirmation.classList.remove("hidden");
  });

  newReservation.addEventListener("click", () => {
    confirmation.classList.add("hidden");
    form.classList.remove("hidden");
    form.reset();
  });
});
