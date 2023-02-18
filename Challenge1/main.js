const keys = document.querySelectorAll(".drum-key");
const keyList = [];

keys.forEach((key) => {
  keyList.push(key.innerHTML.toLowerCase());
  key.addEventListener("click", () => {
    removeKeyClickedClass();
    addKeyClickedClass(key);
  });
});

function removeKeyClickedClass() {
  keys.forEach((eachKey) => {
    if (eachKey.classList.contains("key-clicked")) {
      eachKey.classList.remove("key-clicked");
    }
  });
}

function addKeyClickedClass(key) {
  key.classList.add("key-clicked");
}

// console.log(keyList);

document.addEventListener(
  "keypress",
  (event) => {
    const name = event.key;
    // const code = event.code;
    const clickedKey = name.toLowerCase();
    if (keyList.includes(clickedKey)) {
      keys.forEach((eachKey) => {
        if (eachKey.classList.contains("key-clicked")) {
          eachKey.classList.remove("key-clicked");
        }
        if (eachKey.innerHTML.toLowerCase() === clickedKey) {
          addKeyClickedClass(eachKey);
        }
      });
    }
  },
  false
);
