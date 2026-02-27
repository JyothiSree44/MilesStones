const sections = ["home", "services", "request", "status"];
const requests = [];

function showSection(id) {
  sections.forEach(sec => {
    document.getElementById(sec).classList.add("hide");
  });
  document.getElementById(id).classList.remove("hide");
}

const servicesData = [
  { name: "Web", desc: "Web related service" },
  { name: "App", desc: "App related service" },
  { name: "Support", desc: "Support service" }
];

function loadServices() {
  const container = document.getElementById("serviceList");

  servicesData.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <p>${item.name}</p>
        <small>${item.desc}</small><br>
        <button onclick="showSection('request')">Apply</button>
      </div>
    `;
  });
}

loadServices();

document.getElementById("requestForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const msg = document.getElementById("message");

  if (!name || !email || !service) {
    msg.innerText = "All fields required";
    return;
  }

  if (!email.includes("@")) {
    msg.innerText = "Invalid email";
    return;
  }

  const req = { name, email, service };
  requests.push(req);

  document.getElementById("requestStatus").innerHTML +=
    `<p>${name} - ${service}</p>`;

  document.getElementById("requestForm").reset();
  msg.innerText = "Request submitted successfully";
});
