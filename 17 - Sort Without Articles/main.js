const itemsEle = document.querySelector(".items");
const listEle = document.querySelector("#list");

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticle(str) {
    return str.replace(/^(a |an |the )/i, '')
}

listEle.innerHTML = JSON.stringify(bands, null, 2);
bands.sort((a, b) => removeArticle(a).localeCompare(removeArticle(b)));
itemsEle.innerHTML = bands.map(band => `<li class="item">${band}</li>`).join('')