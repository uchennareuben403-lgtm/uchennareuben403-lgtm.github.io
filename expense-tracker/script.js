const form = document.getElementById("expense-form");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const list = document.getElementById("transaction-list");
const balance = document.getElementById("balance");

let total = 0;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const desc = description.value;
    const amt = Number(amount.value);

    if(type.value === "income"){
        total += amt;
    }else{
        total -= amt;
    }

    balance.textContent = "₦" + total;

    const li = document.createElement("li");

    if(type.value === "expense"){
        li.classList.add("expense");
    }

    li.innerHTML = `
        ${desc} - ₦${amt}
        <button class="delete">X</button>
    `;

    li.querySelector(".delete").addEventListener("click", function(){
        if(type.value === "income"){
            total -= amt;
        }else{
            total += amt;
        }

        balance.textContent = "₦" + total;
        li.remove();
    });

    list.appendChild(li);

    form.reset();
});