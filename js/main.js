var selectedRow = null;

// Show alerts

function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout (() => document.querySelector(".alert").remove(), 3000)
}

//  Clear All Fields

function clearFriends () {
    document.querySelector("#firstName").value = "";
    document.querySelector("lastName").value = "";
    document.querySelector("rollNo").value = "";
}

// Add Data

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    //  Get form values

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNo = document.querySelector("#rollNo").value;
})

// Delete data

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
    }
    showAlert("Student Data Deleted", "danger");

});