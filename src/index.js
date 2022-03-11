const exchangeRate = [
  { currency: "USD", toUSD: 1 },
  { currency: "BYN", toUSD: 3.31 },
  { currency: "EUR", toUSD: 0.9 },
  { currency: "CNY", toUSD: 6.32 },
  { currency: "RUB", toUSD: 120.35 },
];

let selectedCurrency = "";

function convert(amount, start, end) {
  let startRate = exchangeRate.find((element) => element.currency === start);
  let endRate = exchangeRate.find((element) => element.currency === end);

  let mid = amount / startRate.toUSD;
  let result = mid * endRate.toUSD;
  return result.toFixed(2);
}

function selectCurrency() {
  selectedCurrency = [...document.querySelectorAll(".currency-option")].find(
    (currency) => currency.selected
  ).value;
  document
    .querySelectorAll(`.currency-item`)
    .forEach((item) => item.classList.remove("disabled"));
  document.querySelector(`#${selectedCurrency}`).classList.add("disabled");
}
selectCurrency();

function calculate() {
  let inputValue = document.querySelector(".user-amount").value;

  document.querySelectorAll(".currency-item").forEach((item) => {
    item.querySelector(".currency-result").innerHTML = convert(
      inputValue,
      selectedCurrency,
      item.id
    );
  });
}

calculate()

document.querySelector(".user-currency").addEventListener("input", () => {
  selectCurrency();
  calculate();
});
document.querySelector(".user-amount").addEventListener("input", calculate);
