const prizes = ["💰0.1元", "💰0.2元", "💰0.5元", "💰1元", "🎁谢谢", "💰2元", "💰5元", "🎁谢谢", "🎉大奖100元"];
const shuffledPrizes = [...prizes].sort(() => Math.random() - 0.5);

const grid = document.getElementById("grid");
const resultDisplay = document.getElementById("result");

// 生成3x3宫格
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = "拆";
    cell.addEventListener("click", () => openCell(i, cell));
    grid.appendChild(cell);
}

function openCell(index, cell) {
    if (cell.classList.contains("opened")) return;
    
    cell.textContent = shuffledPrizes[index];
    cell.classList.add("opened");
    
    if (shuffledPrizes[index].includes("大奖")) {
        resultDisplay.textContent = "🎊 恭喜你中了大奖！";
    } else {
        resultDisplay.textContent = `你获得了：${shuffledPrizes[index]}`;
    }
}