const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", async () => {
    const value = amount.value;

    if (value === "") {
        alert("Please enter an amount.");
        return;
    }

    const from = fromCurrency.value;
    const to = toCurrency.value;

    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
        const data = await response.json();

        const rate = data.rates[to];
        const converted = (value * rate).toFixed(2);

        result.innerHTML = `${value} ${from} = ${converted} ${to}`;
    } catch (error) {
        result.innerHTML = "Unable to fetch exchange rates.";
    }
});