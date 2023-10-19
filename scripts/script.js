const root = document.getElementById('root');
const btnLogin = document.getElementById('btn-login');
const text = document.querySelector('.txt');
const txtID = document.getElementById('txt-ID');
const txtPW1 = document.getElementById('txt-PW1');
const txtPW2 = document.getElementById('txt-PW2');
const txtEmail = document.getElementById('txt-Email');

let temp = false;
const compare = setInterval(() => {
  if (
    (txtPW1.value === txtPW2.value)
    &&
    (txtID.value !== "")
    &&
    (txtPW1.value !== "")
    &&
    (txtPW2.value !== "")
    &&
    (txtEmail.value !== "")
    &&
    (txtEmail.value !== "")
    ) {
    console.log("a")
  }
}, 0);
