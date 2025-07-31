const traits = {
  Dog: ["Loyal", "Energetic", "Protective", "Friendly", "Obedient"],
  Cat: ["Curious", "Independent", "Graceful", "Playful", "Clever"]
};

document.getElementById("pet-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("pet-name").value;
  const type = document.getElementById("pet-type").value;
  const gender = document.getElementById("pet-gender").value;

  const selectedTraits = traits[type].sort(() => 0.5 - Math.random()).slice(0, 3);

  document.getElementById("result-card").innerHTML = `
    <div id="card">
      <h2>${name} (${gender})</h2>
      <p>Type: ${type}</p>
      <ul>
        ${selectedTraits.map(t => `<li>${t}</li>`).join("")}
      </ul>
      <button onclick="downloadCard()">Download Card</button>
    </div>
  `;
});

function downloadCard() {
  html2canvas(document.getElementById("card")).then(canvas => {
    const link = document.createElement("a");
    link.download = "pet_card.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
