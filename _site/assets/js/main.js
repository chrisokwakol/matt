// MOBILE NAV
const openNav = () => {
  document.getElementById("mobile-nav-overlay").style.width = "100%";
};

const closeNav = () => {
  document.getElementById("mobile-nav-overlay").style.width = "0";
};

// SEGMENTED CONTROL SKILLS SECTION

// Open theoretical tab
const openTheoretical = () => {
  document.getElementById("content-1").style.transform = "translateX(0)";
  document.getElementById("content-2").style.transform = "translateX(900%)";
  document.getElementById("content-3").style.transform = "translateX(900%)";

  document.getElementById("btn-1").style.color = "#F0EBCC";
  document.getElementById("btn-2").style.color = "#000000";
  document.getElementById("btn-3").style.color = "#000000";
};

// Open laboratory tab
const openLaboratory = () => {
  document.getElementById("content-1").style.transform = "translateX(900%)";
  document.getElementById("content-2").style.transform = "translateX(0)";
  document.getElementById("content-3").style.transform = "translateX(900%)";

  document.getElementById("btn-1").style.color = "#000000";
  document.getElementById("btn-2").style.color = "#F0EBCC";
  document.getElementById("btn-3").style.color = "#000000";
};

// Open coding tab
const openCoding = () => {
  document.getElementById("content-1").style.transform = "translateX(900%)";
  document.getElementById("content-2").style.transform = "translateX(900%)";
  document.getElementById("content-3").style.transform = "translateX(0)";

  document.getElementById("btn-1").style.color = "#000000";
  document.getElementById("btn-2").style.color = "#000000";
  document.getElementById("btn-3").style.color = "#F0EBCC";
};

// AJAX CONTACT FORM SUBMIT
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data, 
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
    
    form.addEventListener("submit", handleSubmit);
}
