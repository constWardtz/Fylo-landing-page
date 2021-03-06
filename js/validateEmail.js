const email = document.querySelector(`#email`);
const message = document.querySelector(`#message`);

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validate = () => {
  const userEmail = email.value;
  if (validateEmail(userEmail)) {
    message.textContent = `Invitation sent!`;
    message.style = `
        color: var(--cyan);
    `;
  } else {
    message.textContent = `Please enter a valid email address`;
    message.style = `
        color: var(--red);
    `;
  }
  setTimeout(() => {
    message.textContent = "";
  }, 5000);
};
