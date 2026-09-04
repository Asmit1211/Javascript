const title = document.getElementById("title");
const addExpense = document.getElementById("addExpense");
const amount = document.getElementById("amount");
const totalExpense = document.getElementById("totalExpense");
const expenseCount = document.getElementById("expenseCount");
const expenseList = document.getElementById("expenseList");

const ExpenseArray = [];

addExpense.addEventListener("click", () => {
  console.log(title.value);
  console.log(amount.value);

  //validation code 
  if (title.value === "" || amount.value === "") return;

  //created an object to store the expense details
  const expense = {
    title: title.value,
    amount: amount.value,
  };

  //Push the expense object into the ExpenseArray
  ExpenseArray.push(expense);

  //Display the expenses in the expenseList element

  expenseList.innerHTML = "";

  ExpenseArray.forEach((expense) => {
    const expenseItem = document.createElement("div");

    expenseItem.classList.add("expense-item");

    expenseItem.innerHTML = `
        <div class="expense-info">
            <span class="expense-title">${expense.title}</span>
            <span class="expense-amount">₹${expense.amount}</span>
        </div>
    `;

    expenseList.appendChild(expenseItem);
  });

  //clear the input fields after adding the expense
  title.value = "";
  amount.value = "";

  console.log(ExpenseArray);

  //calculate the total expense and update the totalExpense element
  totalExpense.innerHTML = ExpenseArray.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0,
  );

  //update the expense count and display it in the expenseCount element
  expenseCount.innerHTML = ExpenseArray.length;
});
