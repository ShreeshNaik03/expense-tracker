let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if (!amount || !description || !date) {
        alert("Fill all fields");
        return;
    }

    const expense = {
        amount: parseFloat(amount),
        description,
        category,
        date
    };

    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}

function displayExpenses() {
    const list = document.getElementById("expense-list");
    list.innerHTML = "";

    let total = 0;
    let categoryTotals = {};

    expenses.forEach((expense, index) => {
        total += expense.amount;

        categoryTotals[expense.category] = 
            (categoryTotals[expense.category] || 0) + expense.amount;

        list.innerHTML += `
            <tr>
                <td>${expense.amount}</td>
                <td>${expense.description}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td><button onclick="deleteExpense(${index})">X</button></td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = total;

    updateChart(categoryTotals);
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

let chart;

function updateChart(categoryTotals) {
    const ctx = document.getElementById("expenseChart").getContext("2d");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: Object.keys(categoryTotals),
            datasets: [{
                data: Object.values(categoryTotals)
            }]
        }
    });
}

displayExpenses();let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if (!amount || !description || !date) {
        alert("Fill all fields");
        return;
    }

    const expense = {
        amount: parseFloat(amount),
        description,
        category,
        date
    };

    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}

function displayExpenses() {
    const list = document.getElementById("expense-list");
    list.innerHTML = "";

    let total = 0;
    let categoryTotals = {};

    expenses.forEach((expense, index) => {
        total += expense.amount;

        categoryTotals[expense.category] = 
            (categoryTotals[expense.category] || 0) + expense.amount;

        list.innerHTML += `
            <tr>
                <td>${expense.amount}</td>
                <td>${expense.description}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td><button onclick="deleteExpense(${index})">X</button></td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = total;

    updateChart(categoryTotals);
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

let chart;

function updateChart(categoryTotals) {
    const ctx = document.getElementById("expenseChart").getContext("2d");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: Object.keys(categoryTotals),
            datasets: [{
                data: Object.values(categoryTotals)
            }]
        }
    });
}

displayExpenses();
