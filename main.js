const blue = document.getElementById("blue");
const red = document.getElementById("red");
const black = document.getElementById("black");

const xs = document.getElementById("xs");
const sm = document.getElementById("sm");
const md = document.getElementById("md");

blue.addEventListener("click", function () {
  document.getElementById("image").src = "blue.webp";
});

red.addEventListener("click", function () {
  document.getElementById("image").src = "red.webp";
});

black.addEventListener("click", function () {
  document.getElementById("image").src = "black.webp";
});

xs.addEventListener("click", function () {
  document.getElementById("price").innerHTML = "$500";
});

sm.addEventListener("click", function () {
  document.getElementById("price").innerHTML = "$700";
});

md.addEventListener("click", function () {
    document.getElementById("price").innerHTML = "$990";
  });
  
