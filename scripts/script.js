const root = document.getElementById('root');
const btnLogin = document.getElementById('btn-login');
const text = document.querySelectorAll('.txt');
const txtID = document.getElementById('txt-ID');
const txtPW1 = document.getElementById('txt-PW1');
const txtPW2 = document.getElementById('txt-PW2');
const txtEmail = document.getElementById('txt-Email');

// 비활성화 활성화 보류
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
    (txtEmail.value.indexOf("@") !== -1 || txtEmail.value.indexOf(".") !== -1)
    &&
    
  ) {

  }
}, 0);
