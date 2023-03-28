const mailItems = document.querySelectorAll(
  ".mail-item input[type='checkbox']"
);

let firstChecked;

mailItems.forEach((mail) => {
  mail.addEventListener("click", handleClick);
});

function handleClick(e) {
  if (e.shiftKey && this.checked) {
    if (firstChecked) {
      const lastChecked = this;
      let inBetween = false;

      mailItems.forEach((mail) => {
        if (mail === firstChecked || mail == lastChecked) {
          inBetween = !inBetween;
        }
        if (inBetween) {
          mail.checked = true;
        }
      });
    }
  }
  firstChecked = this;
}
