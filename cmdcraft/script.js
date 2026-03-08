function scrollTopPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function fakeLogin() {
  setTimeout(function () {
    window.location.href = "dashboard.html";
  }, 600);
}

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function generateCode() {
  let text = document.getElementById("commandText").value;
  let code = `<form class="form">
<label>Name</label>
<input type="text" placeholder="Enter name">
<label>Email</label>
<input type="email" placeholder="Enter email">
<label>Password</label>
<input type="password" placeholder="Enter password">
<button class="btn">Submit</button>
</form>`;
  document.getElementById("generated").textContent = code;
}

function clearCommand() {
  document.getElementById("commandText").value = "";
  document.getElementById("generated").textContent = "";
}

function convertCommand() {
  let text = document.getElementById("commandInput").value;
  document.getElementById("ni").innerText = "document.getElementById('ni').innerText='groupwork'";
}