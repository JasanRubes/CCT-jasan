// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

// define variables that reference elements on our page
const dreamsList = document.getElementById("dreams");
const dreamsForm = document.querySelector("form");

// a helper function that creates a list item for a given dream
function appendNewDream(dream) {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
}

// fetch the initial list of dreams
fetch("/dreams")
  .then(response => response.json()) // parse the JSON from the server
  .then(dreams => {
    // remove the loading text
    dreamsList.firstElementChild.remove();
  
    // iterate through every dream and add it to our page
    dreams.forEach(appendNewDream);
  
    // listen for the form to be submitted and add a new dream when it is
    dreamsForm.addEventListener("submit", event => {
      // stop our form submission from refreshing the page
      event.preventDefault();

      // get dream value and add it to the list
      let newDream = dreamsForm.elements.dream.value;
      dreams.push(newDream);
      appendNewDream(newDream);

      // reset form
      dreamsForm.reset();
      dreamsForm.elements.dream.focus();
    });
  });
var clicks = 0;
function onClick() {
  if (clicks < 1) {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}
else if (clicks > 0 && clicks < 3)
{
  alert("You already liked the page");
  clicks += 1;
}
else 
{
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}
};


var clicks1 = 0;
function onClick11() {
    clicks1 += 1;
    document.getElementById("clicks1").innerHTML = clicks1;
};

function onClick12() {
    clicks1 += 10;
    document.getElementById("clicks1").innerHTML = clicks1;
};

function onClick13() {
    clicks1 += 25;
    document.getElementById("clicks1").innerHTML = clicks1;
};

function onClick14() {
    clicks1 += 100;
    document.getElementById("clicks1").innerHTML = clicks1;
};

function onClick1r() {
    clicks1 = 0;
    clicks21 = 0;
    document.getElementById("clicks1").innerHTML = clicks1;
    document.getElementById("clicks21").innerHTML = clicks21;
};





var clicks21 = 0;
function onClick21() {
    clicks21 += 1;
    document.getElementById("clicks21").innerHTML = clicks21;
};

function onClick22() {
    clicks21 += 10;
    document.getElementById("clicks21").innerHTML = clicks21;
};

function onClick23() {
    clicks21 += 25;
    document.getElementById("clicks21").innerHTML = clicks21;
};

function onClick24() {
    clicks21 += 100;
    document.getElementById("clicks21").innerHTML = clicks21;
};

function onClick2r() {
    clicks21 = 0;
   clicks1 = 0;
    document.getElementById("clicks21").innerHTML = clicks21;
    document.getElementById("clicks1").innerHTML = clicks1;
};





function fun() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}