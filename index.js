// 1. Remove <main id="main"> if it exists
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// 2. Create a new <h1> element and assign it to the global variable newHeader
var newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Beatrice is the champion"; // Replace with your name
document.body.appendChild(newHeader);

// 3. Create a <div> and append a <ul> with 3 <li> items
const divElement = document.createElement("div");
const ulElement = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ulElement.append(li);
}

divElement.append(ulElement);
document.body.appendChild(divElement); // append the div to body

// 4. Remove the second <li> child from the <ul>
const secondLi = ulElement.querySelector("li:nth-child(2)");
ulElement.removeChild(secondLi);

// 5. Remove the entire <ul> from the DOM
ulElement.remove();
