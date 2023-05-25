const triggers = document.querySelectorAll('a');
const highlightEle = document.createElement('span');

highlightEle.classList.add('highlight');
document.body.append(highlightEle);

triggers.forEach((a) => a.addEventListener("mouseenter", () => {
    highlightEle.style.backgroundColor = 'black'
    const position = a.getBoundingClientRect();
    highlightEle.style.height = `${position.height}px`;
    highlightEle.style.width = `${position.width}px`;
    highlightEle.style.transform = `translate(${position.left - 5}px, ${position.top - 5}px)`
}))

triggers.forEach((a) => a.addEventListener("mouseleave", () => {
    highlightEle.style.backgroundColor = 'white'
}))