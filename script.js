const HOTLINES = [
  { name: "National Emergency Number", desc: "National Emergency", phone: "999", category: "All", img: "assets/emergency.png" },
  { name: "Police Helpline Number", desc: "Police", phone: "999", category: "Police", img: "assets/police.png" },
  { name: "Fire Service Number", desc: "Fire Service", phone: "999", category: "Fire", img: "assets/fire-service.png" },
  { name: "Ambulance Service", desc: "Ambulance", phone: "1994-999999", category: "Health", img: "assets/ambulance.png" },
  { name: "Woman & Child Helpline", desc: "Woman & Child Helpline", phone: "109", category: "Help", img: "assets/emergency.png" },
  { name: "Anti-Corruption Helpline", desc: "Anti-Corruption", phone: "106", category: "Govt.", img: "assets/police.png" },
  { name: "Electricity Helpline", desc: "Electricity Outage", phone: "16216", category: "Electricity", img: "assets/emergency.png" },
  { name: "Brac Helpline", desc: "Brac", phone: "16445", category: "NGO", img: "assets/emergency.png" },
  { name: "Bangladesh Railway Helpline", desc: "Bangladesh Railway", phone: "163", category: "Travel", img: "assets/emergency.png" }
];

let coins = 100, hearts = 0, copies = 0;

const cards = document.getElementById("cards");
const historyList = document.getElementById("history-list");

function updateCounters() {
  document.getElementById("heart-count").innerText = hearts;
  document.getElementById("coin-count").innerText = coins;
  document.getElementById("copy-count").innerText = copies;
}

function addHistory(name, phone) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${name}</strong> - ${phone} <br><small>${new Date().toLocaleString()}</small>`;
  historyList.prepend(li);
}

function renderCards() {
  cards.innerHTML = "";
  HOTLINES.forEach(h => {
    const card = document.createElement("div");
    card.className = "card";

    
    card.innerHTML = `
  <div class="card-header">
    <div class="icon-wrapper">
      <img class="card-icon" src="${h.img}" alt="">
    </div>
    <button class="heart-btn">🤍</button>
  </div>
  <h3 class="card-title">${h.name}</h3>
  <p class="desc">${h.desc}</p>
  <h2 class="phone">${h.phone}</h2>
  <span class="badge">${h.category}</span>
  <div class="card-actions">
    <button class="btn-copy">📋 Copy</button>
    <button class="btn-call">📞 Call</button>
  </div>
    `;

    // Copy button
    card.querySelector(".btn-copy").addEventListener("click", async () => {
      await navigator.clipboard.writeText(h.phone);
      alert(`Copied ${h.phone}`);
      copies++;
      updateCounters();
    });

    // Call button
    card.querySelector(".btn-call").addEventListener("click", () => {
      if (coins < 20) { 
        alert("Not enough coins"); 
        return; 
      }
      coins -= 20;
      alert(`Calling ${h.name}: ${h.phone}`);
      addHistory(h.name, h.phone);
      updateCounters();
    });

    // Heart button
    card.querySelector(".heart-btn").addEventListener("click", () => {
      hearts++;
      updateCounters();
    });

    cards.appendChild(card);
  });
}

// Clear history
document.getElementById("clear-history").addEventListener("click", () => {
  historyList.innerHTML = "";
});

renderCards();
updateCounters();
