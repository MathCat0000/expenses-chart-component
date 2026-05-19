const chartList = document.querySelector(".chart-list");

if (!chartList) {
  throw new Error("Missing .chart-list element");

}

async function loadChart() {
  const response = await fetch("./data.json");

  if (!response.ok) {
    throw new Error(`Failed to fetch data.json: ${response.status}"`);

  }
  const data = await response.json();

  const maxAmount = Math.max(...data.map(item => item.amount));

  chartList.innerHTML = data.map((item) => {
    const height = (item.amount / maxAmount) * 100;
    const isHighest = item.amount === maxAmount;

    return `
    <li class="chart-item ${isHighest ? "chart-item--current" : ""}">
      <div class="chart-item__bar-slot">
      <div class="chart-item__bar-wrapper" style="--bar-height: ${height.toFixed(1)}%;">
        <span class="chart-item__tooltip">$${item.amount.toFixed(2)}</span>
        <div class="chart-item__bar" aria-hidden="true"></div>
        
      </div>
      </div>

      <span class="chart-item__day">${item.day}</span>
      </li>
    `;
  }).join("");
}


chartList.addEventListener("click", (event) => {

  const chartItem = event.target.closest(".chart-item");

  if (!chartItem) return;

  const isAlreadySelected = chartItem.classList.contains("is-selected");

  chartList.querySelectorAll(".chart-item.is-selected").forEach((item) => {

    item.classList.remove("is-selected");

  });

  if (!isAlreadySelected) {

    chartItem.classList.add("is-selected");

  }

});

loadChart().catch((error) => {
  console.error(error);
});
