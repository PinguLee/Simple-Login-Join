function validation(id, pw1, pw2, email) {
  if (
    (pw1 === pw2)
    &&
    (id !== "")
    &&
    (pw1 !== "")
    &&
    (pw2 !== "")
    &&
    (email !== "")
    &&
    (email.indexOf("@") !== -1 && email.indexOf(".") !== -1) 
  ) {
    return 1;
  }
}

module.exports = validation;