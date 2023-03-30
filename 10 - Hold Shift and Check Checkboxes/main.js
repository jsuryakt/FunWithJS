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
      let toggle = 0;
      const lastChecked = this;
      let inBetween = false;

      for (let index = 0; index < mailItems.length; index++) {
        const mail = mailItems[index];
        if (mail === firstChecked || mail == lastChecked) {
          inBetween = !inBetween;
          toggle++;
        }
        if (inBetween) {
          mail.checked = true;
        }
        // to break after we check all inbetween values,
        // don't check the elements after the second check(first/last)
        // e.g. 10,000 elements but we only select 1-5,
        // so break after the 5th element since we toggled 2 times, one for firstCheck and second for lastCheck
        if (toggle == 2) {
          break;
        }
      }
    }
  }
  firstChecked = this;
}
