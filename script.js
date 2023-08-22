// Students Array
const students = [
    {
        ID: 1,
        name: "Alice",
        email: "alice@example.com",
        age: 21,
        gpa: "A",
        degree: "Btech",
    },
    {
        ID: 2,
        name: "Bob",
        email: "bob@example.com",
        age: 22,
        gpa: "B",
        degree: "MBA",
    },
    {
        ID: 3,
        name: "Charlie",
        email: "charlie@example.com",
        age: 20,
        gpa: "C",
        degree: "Arts",
    },
];

// Create Students Table(Create)
function renderStudent(displayData = students) {
    const tbody = document.getElementById("body");
    tbody.innerText = "";
    displayData.forEach((student) => {
        const row = document.createElement("tr");
        const columns = ["ID", "name", "email", "age", "gpa", "degree"];
        columns.forEach((column) => {
            const td = document.createElement("td");
            td.innerText = student[column];
            row.appendChild(td);
        });

        const actionTd = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editStudent(student.ID);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteStudent(student.ID);

        actionTd.append(editButton, deleteButton);

        row.appendChild(actionTd);
        tbody.appendChild(row);
    });
}
renderStudent();

// Get Data From User(Read)
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form["name"].value;
    const email = form["email"].value;
    const gpa = form["gpa"].value;
    const age = form["age"].value;
    const degree = form["degree"].value;
    const StudentID = document.getElementById("id").value;
    if (StudentID) {
        const student = students.find((s) => s.ID == StudentID);
        student.name = name;
        student.age = age;
        student.gpa = gpa;
        student.degree = degree;
        student.email = email;
    }
    else {
        const newStudent = {
            ID: students[students.length - 1].ID + 1,
            name,
            age,
            gpa,
            degree,
            email,
        };
        students.push(newStudent);
    }
    document.getElementById("form").reset();
    document.getElementById("submit").textContent = "Add Student";
    renderStudent();
});

//Edit The table(Update)
function editStudent(StudentID) {
    const student = students.find((s) => s.ID == StudentID);
    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("gpa").value = student.gpa;
    document.getElementById("age").value = student.age;
    document.getElementById("degree").value = student.degree;
    document.getElementById("id").value = student.ID;
    document.getElementById("submit").textContent = "Edit Student";
}

//Delete the table(Delete)
function deleteStudent(StudentID) {
    const confirmation = prompt("If you are sure write 'Yes'");
    if (confirmation.toLowerCase() === "yes") {
        const index = students.findIndex((s) => s.ID == StudentID);
        students.splice(index, 1);
        renderStudent();
        alert("Deleted successfulyy");
    }
    else {
        alert("Wrong Entered");
    }
}

//Search in Table
const search = document.getElementById("container");
search.addEventListener("keyup", (event) => {
    const searchvalue = document.getElementById("search-input").value.toLowerCase();
    const filteredStudents = students.filter((student) => {
        return (
            student.name.toLowerCase().includes(searchvalue) ||
            student.email.toLowerCase().includes(searchvalue) ||
            student.degree.toLowerCase().includes(searchvalue)
        );
    });
    renderStudent(filteredStudents);
})