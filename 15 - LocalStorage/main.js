const form = document.querySelector(".item-form");
const input = document.querySelector(".add-item-input");
const itemsEle = document.querySelector(".items");
const items = JSON.parse(localStorage.getItem("items")) || [
    { text: "hello", check: true },
    { text: "world", check: false },
];

setItems();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() !== "" && input.value !== undefined) {
        items.push({ text: input.value.trim(), check: false });
        setItems();
    }
    form.reset();
});

form.addEventListener("change", (e) => {
    const currId = e.target.id;
    items[currId].check = !items[currId].check;
    updateLocalStorage();
});

function setItems() {
    if (items.length > itemsEle.childElementCount) {
        let newItems = "";
        for (let i = itemsEle.childElementCount; i < items.length; ++i) {
            const curr = items[i];
            newItems += `<div class="item">
                            <input type="checkbox" id="${i}" ${curr.check ? "checked" : ""}>
                            <label for="${i}" title="${curr.text}">${curr.text}</label>
                        </div>`;
        }
        itemsEle.innerHTML += newItems;
        updateLocalStorage();
    }
}

function updateLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items));
}
