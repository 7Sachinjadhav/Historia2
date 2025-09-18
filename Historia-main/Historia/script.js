function scrollToAge() {
  document.getElementById("ageSection").scrollIntoView({ behavior: "smooth" });
}

function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  if (isNaN(age)) {
    alert("Please enter a valid age.");
    return;
  }

  document.getElementById("ageSection").style.display = "none";

  if (age < 11) {
    document.getElementById("kidsPortal").classList.remove("hidden");
  } else {
    document.getElementById("eldersPortal").classList.remove("hidden");
  }
}

function startRegion(region) {
  alert(`Starting your journey through ${region} India!`);
  // Placeholder for 3D model + video + quiz logic
}

function searchSite() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("searchResults");

  if (!query) {
    results.innerHTML = "<p>Please enter a site name.</p>";
    return;
  }

  results.innerHTML = `<p>Showing 3D model and video for <strong>${query}</strong> (Coming soon!)</p>`;
}
function scrollToAge() {
  document.getElementById("ageSection").scrollIntoView({ behavior: "smooth" });
}

function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  if (isNaN(age)) {
    alert("Please enter a valid age.");
    return;
  }

  if (age < 11) {
    window.location.href = "kids.html";
  } else {
    window.location.href = "elders.html";
  }
}
// Smooth scroll to Age section
function scrollToAge() {
  document.getElementById("ageSection").scrollIntoView({ behavior: "smooth" });
}

// Age Check
function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  if (isNaN(age)) {
    alert("Please enter a valid age.");
    return;
  }

  if (age < 11) {
    window.location.href = "kids.html";
  } else {
    window.location.href = "elders.html";
  }
}

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
function scrollToAge() {
  document.getElementById("ageSection").scrollIntoView({ behavior: "smooth" });
}

function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  if (isNaN(age)) {
    alert("Please enter a valid age.");
    return;
  }

  if (age < 11) {
    window.location.href = "kids.html";
  } else {
    window.location.href = "elders.html";
  }
}
