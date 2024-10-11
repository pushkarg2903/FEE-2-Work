const heading = document.createElement("h1");

heading.innerHTML = "Resume";

document.body.appendChild(heading);

heading.className = "heading";
heading.style.display = "flex";
heading.style.justifyContent = "center";

const naam = document.createElement("h3");
document.body.appendChild(naam);


const node = document.createTextNode("Name: Pushkar Garg");

document.body.appendChild(node);


// const summary = document.createTextNode("Summary");

// document.body.appendChild(summary);