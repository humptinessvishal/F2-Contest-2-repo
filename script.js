const table = document.getElementById("table");
const form1 = document.getElementById("form1");
let id = 0;

form1.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form1["name"].value;
    const email = form1["email"].value;
    const gpa = form1["gpa"].value;
    const age = form1["age"].value;
    const degree = form1["degree"].value;
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    idCell.innerText = id++;
    const nameCell = document.createElement("td");
    nameCell.innerText = name;
    const emailCell = document.createElement("td");
    emailCell.innerText = email;
    const gpaCell = document.createElement("td");
    gpaCell.innerText = gpa;
    const ageCell = document.createElement("td");
    ageCell.innerText = age;
    const degreCell = document.createElement("td");
    degreCell.innerText = degree;
    row.append(id, nameCell, emailCell, ageCell, gpaCell, degreCell);
    table.appendChild(row);
});

